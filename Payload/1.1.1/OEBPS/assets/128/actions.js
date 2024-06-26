pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 37911;
pubcoder.page.title = pubcoder.page.title || "128";
pubcoder.page.number = pubcoder.page.number || 128;
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
var obj38249_onTap_activeActionGroupIndex = -1;
var obj38249_onTap_runningActionsCount = 0;
var obj38249_onTap_loopCount = 0;
var obj38246_onTap_activeActionGroupIndex = -1;
var obj38246_onTap_runningActionsCount = 0;
var obj38246_onTap_loopCount = 0;
var obj38242_onTap_activeActionGroupIndex = -1;
var obj38242_onTap_runningActionsCount = 0;
var obj38242_onTap_loopCount = 0;
var obj38169_onDrag_activeActionGroupIndex = -1;
var obj38169_onDrag_runningActionsCount = 0;
var obj38169_onDrag_loopCount = 0;
var obj38169_onTouchDown_activeActionGroupIndex = -1;
var obj38169_onTouchDown_runningActionsCount = 0;
var obj38169_onTouchDown_loopCount = 0;
var obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_loopCount = 0;
var obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38169_droppedInsideTargetActions_3_loopCount = 0;
var obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38169_droppedInsideTargetActions_2_loopCount = 0;
var obj38169_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj38169_droppedInsideTargetActions_runningActionsCount = 0;
var obj38169_droppedInsideTargetActions_loopCount = 0;
var obj38130_onDrag_activeActionGroupIndex = -1;
var obj38130_onDrag_runningActionsCount = 0;
var obj38130_onDrag_loopCount = 0;
var obj38130_onTouchDown_activeActionGroupIndex = -1;
var obj38130_onTouchDown_runningActionsCount = 0;
var obj38130_onTouchDown_loopCount = 0;
var obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_loopCount = 0;
var obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38130_droppedInsideTargetActions_3_loopCount = 0;
var obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38130_droppedInsideTargetActions_2_loopCount = 0;
var obj38130_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj38130_droppedInsideTargetActions_runningActionsCount = 0;
var obj38130_droppedInsideTargetActions_loopCount = 0;
var obj38091_onDrag_activeActionGroupIndex = -1;
var obj38091_onDrag_runningActionsCount = 0;
var obj38091_onDrag_loopCount = 0;
var obj38091_onTouchDown_activeActionGroupIndex = -1;
var obj38091_onTouchDown_runningActionsCount = 0;
var obj38091_onTouchDown_loopCount = 0;
var obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_loopCount = 0;
var obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38091_droppedInsideTargetActions_3_loopCount = 0;
var obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38091_droppedInsideTargetActions_2_loopCount = 0;
var obj38091_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj38091_droppedInsideTargetActions_runningActionsCount = 0;
var obj38091_droppedInsideTargetActions_loopCount = 0;
var obj67054_onTap_activeActionGroupIndex = -1;
var obj67054_onTap_runningActionsCount = 0;
var obj67054_onTap_loopCount = 0;
var obj67046_onTap_activeActionGroupIndex = -1;
var obj67046_onTap_runningActionsCount = 0;
var obj67046_onTap_loopCount = 0;
var obj88405_onTap_activeActionGroupIndex = -1;
var obj88405_onTap_runningActionsCount = 0;
var obj88405_onTap_loopCount = 0;
var obj88400_onTap_activeActionGroupIndex = -1;
var obj88400_onTap_runningActionsCount = 0;
var obj88400_onTap_loopCount = 0;
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
		
obj38249_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38249_onTap_activeActionGroupIndex = -1;
		$("#obj38249").trigger("obj38249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38249) {
				console.warn("de-queueing event obj38249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38249_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_38251();
function goToPage_38251() {
	window.obj38249_onTap_runningActionsCount = obj38249_onTap_runningActionsCount + 1;
	$("#anchor765")[0].click();
	window.obj38249_onTap_runningActionsCount = window.obj38249_onTap_runningActionsCount - 1;
if (window.obj38249_onTap_runningActionsCount < 0) {
	window.obj38249_onTap_runningActionsCount = 0;
} else if (window.obj38249_onTap_runningActionsCount == 0) {
	obj38249_onTap_actionGroup1();
}
}





















};
obj38249_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38249_onTap_activeActionGroupIndex = -1;
		$("#obj38249").trigger("obj38249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38249) {
				console.warn("de-queueing event obj38249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38249_onTap_activeActionGroupIndex = 1;
	





















};
obj38246_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38246_onTap_activeActionGroupIndex = -1;
		$("#obj38246").trigger("obj38246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38246) {
				console.warn("de-queueing event obj38246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38246_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_38248();
function goToPage_38248() {
	window.obj38246_onTap_runningActionsCount = obj38246_onTap_runningActionsCount + 1;
	$("#anchor766")[0].click();
	window.obj38246_onTap_runningActionsCount = window.obj38246_onTap_runningActionsCount - 1;
if (window.obj38246_onTap_runningActionsCount < 0) {
	window.obj38246_onTap_runningActionsCount = 0;
} else if (window.obj38246_onTap_runningActionsCount == 0) {
	obj38246_onTap_actionGroup1();
}
}





















};
obj38246_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38246_onTap_activeActionGroupIndex = -1;
		$("#obj38246").trigger("obj38246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38246) {
				console.warn("de-queueing event obj38246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38246_onTap_activeActionGroupIndex = 1;
	





















};
obj38242_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38242_onTap_activeActionGroupIndex = -1;
		$("#obj38242").trigger("obj38242_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38242) {
				console.warn("de-queueing event obj38242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38242_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_38244();
function goToPage_38244() {
	window.obj38242_onTap_runningActionsCount = obj38242_onTap_runningActionsCount + 1;
	$("#anchor767")[0].click();
	window.obj38242_onTap_runningActionsCount = window.obj38242_onTap_runningActionsCount - 1;
if (window.obj38242_onTap_runningActionsCount < 0) {
	window.obj38242_onTap_runningActionsCount = 0;
} else if (window.obj38242_onTap_runningActionsCount == 0) {
	obj38242_onTap_actionGroup1();
}
}





















};
obj38242_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38242_onTap_activeActionGroupIndex = -1;
		$("#obj38242").trigger("obj38242_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38242) {
				console.warn("de-queueing event obj38242." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38242").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38242_onTap_activeActionGroupIndex = 1;
	





















};
obj38169_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj38169");
//	action: dragDrop
//	target: obj38169 
dragDrop_38172();
function dragDrop_38172() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj38169_onTouchDown_runningActionsCount = obj38169_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj38169');
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
	  	containerNode = $('#obj38232');
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
    	window.obj38169_onTouchDown_runningActionsCount = window.obj38169_onTouchDown_runningActionsCount - 1;
if (window.obj38169_onTouchDown_runningActionsCount < 0) {
	window.obj38169_onTouchDown_runningActionsCount = 0;
} else if (window.obj38169_onTouchDown_runningActionsCount == 0) {
	obj38169_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj38222","#obj38224","#obj38220");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_38172 = false;
    	var dropped_id_38172;
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
					dropped_38172 = true;
					dropped_id_38172 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_38172) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj38169").trigger('SCActionDragDrop38172_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj38169_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38169_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38169 
move_92569();
function move_92569() {
	window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_runningActionsCount = obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38169");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 386;
	var moveY = 577;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_runningActionsCount = window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj38169_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38195();
function runjs_38195() {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38220").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_38196();
function runjs_38196() {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38220").css("border-color", "#C00000"); $("#obj38220").css("border-width", "2px"); $("#obj38220").css("border-style", "solid"); $("#obj38220").css("border-radius", "10px"); $("#obj38220").css("-webkit-border-radius", "10px"); $("#obj38220").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38214 
hide_38197();
function hide_38197() {
	var selector = "#obj38214";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38197(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38169_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_38198();
function runjs_38198() {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38169").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_38199();
function switchText_38199() {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj38169_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj38169 
move_38200();
function move_38200() {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj38169");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 386;
	var moveY = 577;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj38169_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38201();
function runjs_38201() {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38220").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38202();
function runjs_38202() {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38220").css("border-color", "#000000"); $("#obj38220").css("border-width", "1px"); $("#obj38220").css("border-style", "solid"); $("#obj38220").css("border-radius", "10px"); $("#obj38220").css("-webkit-border-radius", "10px"); $("#obj38220").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj38214
(function(){
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj38214";
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
					window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38169_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_38204();
function runjs_38204() {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38169").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_38205();
function runjs_38205() {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38169").css("border-color", "rgba(0,0,0,0)"); $("#obj38169").css("border-width", "0px"); $("#obj38169").css("border-style", "solid"); $("#obj38169").css("border-radius", "10px"); $("#obj38169").css("-webkit-border-radius", "10px"); $("#obj38169").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj38209 
playAudio_38206();
function playAudio_38206() {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj38209")[0];
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
		    window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj38169_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_38207();
function switchText_38207() {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = obj38169_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38169_droppedInsideTargetActions_3_runningActionsCount = window.obj38169_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj38169_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj38169_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38181();
function runjs_38181() {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38224").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_38182();
function runjs_38182() {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38224").css("border-color", "#C00000"); $("#obj38224").css("border-width", "2px"); $("#obj38224").css("border-style", "solid"); $("#obj38224").css("border-radius", "10px"); $("#obj38224").css("-webkit-border-radius", "10px"); $("#obj38224").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38218 
hide_38183();
function hide_38183() {
	var selector = "#obj38218";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38183(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38169_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_38184();
function runjs_38184() {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38169").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_38185();
function switchText_38185() {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj38169_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj38169 
move_38186();
function move_38186() {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj38169");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 386;
	var moveY = 577;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj38169_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38187();
function runjs_38187() {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38224").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38188();
function runjs_38188() {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38224").css("border-color", "#000000"); $("#obj38224").css("border-width", "1px"); $("#obj38224").css("border-style", "solid"); $("#obj38224").css("border-radius", "10px"); $("#obj38224").css("-webkit-border-radius", "10px"); $("#obj38224").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj38218
(function(){
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj38218";
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
					window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38169_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_38190();
function runjs_38190() {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38169").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_38191();
function runjs_38191() {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38169").css("border-color", "rgba(0,0,0,0)"); $("#obj38169").css("border-width", "0px"); $("#obj38169").css("border-style", "solid"); $("#obj38169").css("border-radius", "10px"); $("#obj38169").css("-webkit-border-radius", "10px"); $("#obj38169").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj38209 
playAudio_38192();
function playAudio_38192() {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj38209")[0];
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
		    window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj38169_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_38193();
function switchText_38193() {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = obj38169_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38169_droppedInsideTargetActions_2_runningActionsCount = window.obj38169_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj38169_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj38169_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38174();
function runjs_38174() {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = obj38169_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38222").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_runningActionsCount = window.obj38169_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38178();
function switchText_38178() {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = obj38169_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38169_droppedInsideTargetActions_runningActionsCount = window.obj38169_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38169_droppedInsideTargetActions_runningActionsCount = window.obj38169_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj38169_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_38175();
function runjs_38175() {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = obj38169_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38222").css("border-color", "#058E3F"); $("#obj38222").css("border-width", "2px"); $("#obj38222").css("border-style", "solid"); $("#obj38222").css("border-radius", "10px"); $("#obj38222").css("-webkit-border-radius", "10px"); $("#obj38222").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_runningActionsCount = window.obj38169_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj38216 
hide_38176();
function hide_38176() {
	var selector = "#obj38216";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38169_droppedInsideTargetActions_runningActionsCount = obj38169_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38169_droppedInsideTargetActions_runningActionsCount = window.obj38169_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38176(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38169_droppedInsideTargetActions_runningActionsCount = window.obj38169_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38169_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38177();
function runjs_38177() {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = obj38169_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38169").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj38169_droppedInsideTargetActions_runningActionsCount = window.obj38169_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj38169_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj38208 
playAudio_38179();
function playAudio_38179() {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = obj38169_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj38208")[0];
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
		    window.obj38169_droppedInsideTargetActions_runningActionsCount = window.obj38169_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38169_droppedInsideTargetActions_runningActionsCount = window.obj38169_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj38169_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90456();
function switchText_90456() {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = obj38169_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38169_droppedInsideTargetActions_runningActionsCount = window.obj38169_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38169_droppedInsideTargetActions_runningActionsCount = window.obj38169_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38169_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38169_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38169_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38169_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj38169_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38169").trigger("obj38169_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38169) {
				console.warn("de-queueing event obj38169." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38169").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38169_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj38130_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj38130");
//	action: dragDrop
//	target: obj38130 
dragDrop_38133();
function dragDrop_38133() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj38130_onTouchDown_runningActionsCount = obj38130_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj38130');
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
	  	containerNode = $('#obj38232');
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
    	window.obj38130_onTouchDown_runningActionsCount = window.obj38130_onTouchDown_runningActionsCount - 1;
if (window.obj38130_onTouchDown_runningActionsCount < 0) {
	window.obj38130_onTouchDown_runningActionsCount = 0;
} else if (window.obj38130_onTouchDown_runningActionsCount == 0) {
	obj38130_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj38220","#obj38224","#obj38222");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_38133 = false;
    	var dropped_id_38133;
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
					dropped_38133 = true;
					dropped_id_38133 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_38133) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj38130").trigger('SCActionDragDrop38133_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj38130_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38130_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38130 
move_92567();
function move_92567() {
	window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_runningActionsCount = obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38130");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 577;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_runningActionsCount = window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj38130_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38156();
function runjs_38156() {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38222").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_38157();
function runjs_38157() {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38222").css("border-color", "#C00000"); $("#obj38222").css("border-width", "2px"); $("#obj38222").css("border-style", "solid"); $("#obj38222").css("border-radius", "10px"); $("#obj38222").css("-webkit-border-radius", "10px"); $("#obj38222").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38216 
hide_38158();
function hide_38158() {
	var selector = "#obj38216";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38158(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38130_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_38159();
function runjs_38159() {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38130").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_38160();
function switchText_38160() {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj38130_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj38130 
move_38161();
function move_38161() {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj38130");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 577;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj38130_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38162();
function runjs_38162() {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38222").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38163();
function runjs_38163() {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38222").css("border-color", "#000000"); $("#obj38222").css("border-width", "1px"); $("#obj38222").css("border-style", "solid"); $("#obj38222").css("border-radius", "10px"); $("#obj38222").css("-webkit-border-radius", "10px"); $("#obj38222").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj38216
(function(){
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj38216";
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
					window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38130_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_38165();
function runjs_38165() {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38130").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_38166();
function runjs_38166() {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38130").css("border-color", "rgba(0,0,0,0)"); $("#obj38130").css("border-width", "0px"); $("#obj38130").css("border-style", "solid"); $("#obj38130").css("border-radius", "10px"); $("#obj38130").css("-webkit-border-radius", "10px"); $("#obj38130").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj38209 
playAudio_38167();
function playAudio_38167() {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj38209")[0];
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
		    window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj38130_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_38168();
function switchText_38168() {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = obj38130_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38130_droppedInsideTargetActions_3_runningActionsCount = window.obj38130_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj38130_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj38130_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38142();
function runjs_38142() {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38224").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_38143();
function runjs_38143() {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38224").css("border-color", "#C00000"); $("#obj38224").css("border-width", "2px"); $("#obj38224").css("border-style", "solid"); $("#obj38224").css("border-radius", "10px"); $("#obj38224").css("-webkit-border-radius", "10px"); $("#obj38224").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38218 
hide_38144();
function hide_38144() {
	var selector = "#obj38218";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38144(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38130_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_38145();
function runjs_38145() {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38130").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_38146();
function switchText_38146() {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj38130_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj38130 
move_38147();
function move_38147() {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj38130");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 231;
	var moveY = 577;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj38130_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38148();
function runjs_38148() {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38224").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38149();
function runjs_38149() {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38224").css("border-color", "#000000"); $("#obj38224").css("border-width", "1px"); $("#obj38224").css("border-style", "solid"); $("#obj38224").css("border-radius", "10px"); $("#obj38224").css("-webkit-border-radius", "10px"); $("#obj38224").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj38218
(function(){
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj38218";
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
					window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38130_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_38151();
function runjs_38151() {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38130").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_38152();
function runjs_38152() {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38130").css("border-color", "rgba(0,0,0,0)"); $("#obj38130").css("border-width", "0px"); $("#obj38130").css("border-style", "solid"); $("#obj38130").css("border-radius", "10px"); $("#obj38130").css("-webkit-border-radius", "10px"); $("#obj38130").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj38209 
playAudio_38153();
function playAudio_38153() {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj38209")[0];
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
		    window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj38130_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_38154();
function switchText_38154() {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = obj38130_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38130_droppedInsideTargetActions_2_runningActionsCount = window.obj38130_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj38130_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj38130_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38135();
function runjs_38135() {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = obj38130_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38220").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_runningActionsCount = window.obj38130_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38139();
function switchText_38139() {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = obj38130_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38130_droppedInsideTargetActions_runningActionsCount = window.obj38130_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38130_droppedInsideTargetActions_runningActionsCount = window.obj38130_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj38130_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_38136();
function runjs_38136() {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = obj38130_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38220").css("border-color", "#058E3F"); $("#obj38220").css("border-width", "2px"); $("#obj38220").css("border-style", "solid"); $("#obj38220").css("border-radius", "10px"); $("#obj38220").css("-webkit-border-radius", "10px"); $("#obj38220").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_runningActionsCount = window.obj38130_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj38214 
hide_38137();
function hide_38137() {
	var selector = "#obj38214";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38130_droppedInsideTargetActions_runningActionsCount = obj38130_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38130_droppedInsideTargetActions_runningActionsCount = window.obj38130_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38137(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38130_droppedInsideTargetActions_runningActionsCount = window.obj38130_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38130_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38138();
function runjs_38138() {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = obj38130_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38130").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj38130_droppedInsideTargetActions_runningActionsCount = window.obj38130_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj38130_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj38208 
playAudio_38140();
function playAudio_38140() {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = obj38130_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj38208")[0];
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
		    window.obj38130_droppedInsideTargetActions_runningActionsCount = window.obj38130_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38130_droppedInsideTargetActions_runningActionsCount = window.obj38130_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj38130_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90455();
function switchText_90455() {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = obj38130_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38130_droppedInsideTargetActions_runningActionsCount = window.obj38130_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38130_droppedInsideTargetActions_runningActionsCount = window.obj38130_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38130_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38130_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38130_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38130_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj38130_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38130").trigger("obj38130_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38130) {
				console.warn("de-queueing event obj38130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38130_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj38091_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj38091");
//	action: dragDrop
//	target: obj38091 
dragDrop_38094();
function dragDrop_38094() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj38091_onTouchDown_runningActionsCount = obj38091_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj38091');
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
	  	containerNode = $('#obj38232');
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
    	window.obj38091_onTouchDown_runningActionsCount = window.obj38091_onTouchDown_runningActionsCount - 1;
if (window.obj38091_onTouchDown_runningActionsCount < 0) {
	window.obj38091_onTouchDown_runningActionsCount = 0;
} else if (window.obj38091_onTouchDown_runningActionsCount == 0) {
	obj38091_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj38224","#obj38222","#obj38220");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_38094 = false;
    	var dropped_id_38094;
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
					dropped_38094 = true;
					dropped_id_38094 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_38094) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj38091").trigger('SCActionDragDrop38094_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj38091_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38091_onTouchDown_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38091 
move_92565();
function move_92565() {
	window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_runningActionsCount = obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj38091");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 77;
	var moveY = 577;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_runningActionsCount = window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj38091_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38117();
function runjs_38117() {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38220").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_38118();
function runjs_38118() {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38220").css("border-color", "#C00000"); $("#obj38220").css("border-width", "2px"); $("#obj38220").css("border-style", "solid"); $("#obj38220").css("border-radius", "10px"); $("#obj38220").css("-webkit-border-radius", "10px"); $("#obj38220").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38214 
hide_38119();
function hide_38119() {
	var selector = "#obj38214";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38119(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38091_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_38120();
function runjs_38120() {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38091").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_38121();
function switchText_38121() {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj38091_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj38091 
move_38122();
function move_38122() {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj38091");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 77;
	var moveY = 577;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj38091_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38123();
function runjs_38123() {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38220").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38124();
function runjs_38124() {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38220").css("border-color", "#000000"); $("#obj38220").css("border-width", "1px"); $("#obj38220").css("border-style", "solid"); $("#obj38220").css("border-radius", "10px"); $("#obj38220").css("-webkit-border-radius", "10px"); $("#obj38220").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj38214
(function(){
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj38214";
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
					window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38091_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_38126();
function runjs_38126() {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38091").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_38127();
function runjs_38127() {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj38091").css("border-color", "rgba(0,0,0,0)"); $("#obj38091").css("border-width", "0px"); $("#obj38091").css("border-style", "solid"); $("#obj38091").css("border-radius", "10px"); $("#obj38091").css("-webkit-border-radius", "10px"); $("#obj38091").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj38209 
playAudio_38128();
function playAudio_38128() {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj38209")[0];
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
		    window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj38091_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_38129();
function switchText_38129() {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = obj38091_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38091_droppedInsideTargetActions_3_runningActionsCount = window.obj38091_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj38091_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj38091_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38103();
function runjs_38103() {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38222").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_38104();
function runjs_38104() {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38222").css("border-color", "#C00000"); $("#obj38222").css("border-width", "2px"); $("#obj38222").css("border-style", "solid"); $("#obj38222").css("border-radius", "10px"); $("#obj38222").css("-webkit-border-radius", "10px"); $("#obj38222").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj38216 
hide_38105();
function hide_38105() {
	var selector = "#obj38216";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38105(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38091_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_38106();
function runjs_38106() {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38091").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_38107();
function switchText_38107() {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj38091_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj38091 
move_38108();
function move_38108() {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj38091");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 77;
	var moveY = 577;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj38091_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_38109();
function runjs_38109() {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38222").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_38110();
function runjs_38110() {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38222").css("border-color", "#000000"); $("#obj38222").css("border-width", "1px"); $("#obj38222").css("border-style", "solid"); $("#obj38222").css("border-radius", "10px"); $("#obj38222").css("-webkit-border-radius", "10px"); $("#obj38222").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj38216
(function(){
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj38216";
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
					window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj38091_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_38112();
function runjs_38112() {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38091").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_38113();
function runjs_38113() {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj38091").css("border-color", "rgba(0,0,0,0)"); $("#obj38091").css("border-width", "0px"); $("#obj38091").css("border-style", "solid"); $("#obj38091").css("border-radius", "10px"); $("#obj38091").css("-webkit-border-radius", "10px"); $("#obj38091").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj38209 
playAudio_38114();
function playAudio_38114() {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj38209")[0];
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
		    window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj38091_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_38115();
function switchText_38115() {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = obj38091_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38091_droppedInsideTargetActions_2_runningActionsCount = window.obj38091_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj38091_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj38091_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_38096();
function runjs_38096() {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = obj38091_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38224").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_runningActionsCount = window.obj38091_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_38100();
function switchText_38100() {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = obj38091_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38091_droppedInsideTargetActions_runningActionsCount = window.obj38091_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38091_droppedInsideTargetActions_runningActionsCount = window.obj38091_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj38091_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_38097();
function runjs_38097() {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = obj38091_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38224").css("border-color", "#058E3F"); $("#obj38224").css("border-width", "2px"); $("#obj38224").css("border-style", "solid"); $("#obj38224").css("border-radius", "10px"); $("#obj38224").css("-webkit-border-radius", "10px"); $("#obj38224").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_runningActionsCount = window.obj38091_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj38218 
hide_38098();
function hide_38098() {
	var selector = "#obj38218";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj38091_droppedInsideTargetActions_runningActionsCount = obj38091_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj38091_droppedInsideTargetActions_runningActionsCount = window.obj38091_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_38098(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj38091_droppedInsideTargetActions_runningActionsCount = window.obj38091_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj38091_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_38099();
function runjs_38099() {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = obj38091_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj38091").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj38091_droppedInsideTargetActions_runningActionsCount = window.obj38091_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj38091_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj38208 
playAudio_38101();
function playAudio_38101() {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = obj38091_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj38208")[0];
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
		    window.obj38091_droppedInsideTargetActions_runningActionsCount = window.obj38091_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj38091_droppedInsideTargetActions_runningActionsCount = window.obj38091_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj38091_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90454();
function switchText_90454() {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = obj38091_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj38210_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj38210_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj38210").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj38210_content");
			setTimeout(function () {
				window.obj38091_droppedInsideTargetActions_runningActionsCount = window.obj38091_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj38210 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj38091_droppedInsideTargetActions_runningActionsCount = window.obj38091_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj38091_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj38091_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj38091_droppedInsideTargetActions_runningActionsCount == 0) {
	obj38091_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj38091_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj38091").trigger("obj38091_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38091) {
				console.warn("de-queueing event obj38091." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38091").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38091_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67054_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67054_onTap_activeActionGroupIndex = -1;
		$("#obj67054").trigger("obj67054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67054) {
				console.warn("de-queueing event obj67054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67054_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67054 
hide_67057();
function hide_67057() {
	var selector = "#obj67054";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67054_onTap_runningActionsCount = obj67054_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67054_onTap_runningActionsCount = window.obj67054_onTap_runningActionsCount - 1;
if (window.obj67054_onTap_runningActionsCount < 0) {
	window.obj67054_onTap_runningActionsCount = 0;
} else if (window.obj67054_onTap_runningActionsCount == 0) {
	obj67054_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67057(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67054_onTap_runningActionsCount = window.obj67054_onTap_runningActionsCount - 1;
if (window.obj67054_onTap_runningActionsCount < 0) {
	window.obj67054_onTap_runningActionsCount = 0;
} else if (window.obj67054_onTap_runningActionsCount == 0) {
	obj67054_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67060 
stopMovie_67056();
function stopMovie_67056() {
	window.obj67054_onTap_runningActionsCount = obj67054_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67060")[0];
	myVideo.pause();
	window.obj67054_onTap_runningActionsCount = window.obj67054_onTap_runningActionsCount - 1;
if (window.obj67054_onTap_runningActionsCount < 0) {
	window.obj67054_onTap_runningActionsCount = 0;
} else if (window.obj67054_onTap_runningActionsCount == 0) {
	obj67054_onTap_actionGroup1();
}
}
















};
obj67054_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67054_onTap_activeActionGroupIndex = -1;
		$("#obj67054").trigger("obj67054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67054) {
				console.warn("de-queueing event obj67054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67054_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67046
(function(){
	window.obj67054_onTap_runningActionsCount = obj67054_onTap_runningActionsCount + 1;

	var selector = "#obj67046";
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
					window.obj67054_onTap_runningActionsCount = window.obj67054_onTap_runningActionsCount - 1;
if (window.obj67054_onTap_runningActionsCount < 0) {
	window.obj67054_onTap_runningActionsCount = 0;
} else if (window.obj67054_onTap_runningActionsCount == 0) {
	obj67054_onTap_actionGroup2();
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
				window.obj67054_onTap_runningActionsCount = window.obj67054_onTap_runningActionsCount - 1;
if (window.obj67054_onTap_runningActionsCount < 0) {
	window.obj67054_onTap_runningActionsCount = 0;
} else if (window.obj67054_onTap_runningActionsCount == 0) {
	obj67054_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67054_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67054_onTap_activeActionGroupIndex = -1;
		$("#obj67054").trigger("obj67054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67054) {
				console.warn("de-queueing event obj67054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67054_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67060 
move_67059();
function move_67059() {
	window.obj67054_onTap_runningActionsCount = obj67054_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67060");
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
			window.obj67054_onTap_runningActionsCount = window.obj67054_onTap_runningActionsCount - 1;
if (window.obj67054_onTap_runningActionsCount < 0) {
	window.obj67054_onTap_runningActionsCount = 0;
} else if (window.obj67054_onTap_runningActionsCount == 0) {
	obj67054_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67054_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67054_onTap_activeActionGroupIndex = -1;
		$("#obj67054").trigger("obj67054_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67054) {
				console.warn("de-queueing event obj67054." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67054").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67054_onTap_activeActionGroupIndex = 3;
	





















};
obj67046_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67046_onTap_activeActionGroupIndex = -1;
		$("#obj67046").trigger("obj67046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67046) {
				console.warn("de-queueing event obj67046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67046_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67046 
hide_67049();
function hide_67049() {
	var selector = "#obj67046";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67046_onTap_runningActionsCount = obj67046_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67046_onTap_runningActionsCount = window.obj67046_onTap_runningActionsCount - 1;
if (window.obj67046_onTap_runningActionsCount < 0) {
	window.obj67046_onTap_runningActionsCount = 0;
} else if (window.obj67046_onTap_runningActionsCount == 0) {
	obj67046_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67049(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67046_onTap_runningActionsCount = window.obj67046_onTap_runningActionsCount - 1;
if (window.obj67046_onTap_runningActionsCount < 0) {
	window.obj67046_onTap_runningActionsCount = 0;
} else if (window.obj67046_onTap_runningActionsCount == 0) {
	obj67046_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67060 
playPauseMovie_67048();
function playPauseMovie_67048() {
	window.obj67046_onTap_runningActionsCount = obj67046_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67060")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67046_onTap_runningActionsCount = window.obj67046_onTap_runningActionsCount - 1;
if (window.obj67046_onTap_runningActionsCount < 0) {
	window.obj67046_onTap_runningActionsCount = 0;
} else if (window.obj67046_onTap_runningActionsCount == 0) {
	obj67046_onTap_actionGroup1();
}
}

















};
obj67046_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67046_onTap_activeActionGroupIndex = -1;
		$("#obj67046").trigger("obj67046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67046) {
				console.warn("de-queueing event obj67046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67046_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67054
(function(){
	window.obj67046_onTap_runningActionsCount = obj67046_onTap_runningActionsCount + 1;

	var selector = "#obj67054";
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
					window.obj67046_onTap_runningActionsCount = window.obj67046_onTap_runningActionsCount - 1;
if (window.obj67046_onTap_runningActionsCount < 0) {
	window.obj67046_onTap_runningActionsCount = 0;
} else if (window.obj67046_onTap_runningActionsCount == 0) {
	obj67046_onTap_actionGroup2();
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
				window.obj67046_onTap_runningActionsCount = window.obj67046_onTap_runningActionsCount - 1;
if (window.obj67046_onTap_runningActionsCount < 0) {
	window.obj67046_onTap_runningActionsCount = 0;
} else if (window.obj67046_onTap_runningActionsCount == 0) {
	obj67046_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67046_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67046_onTap_activeActionGroupIndex = -1;
		$("#obj67046").trigger("obj67046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67046) {
				console.warn("de-queueing event obj67046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67046_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67060 
move_67051();
function move_67051() {
	window.obj67046_onTap_runningActionsCount = obj67046_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67060");
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
			window.obj67046_onTap_runningActionsCount = window.obj67046_onTap_runningActionsCount - 1;
if (window.obj67046_onTap_runningActionsCount < 0) {
	window.obj67046_onTap_runningActionsCount = 0;
} else if (window.obj67046_onTap_runningActionsCount == 0) {
	obj67046_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67046_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67046_onTap_activeActionGroupIndex = -1;
		$("#obj67046").trigger("obj67046_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67046) {
				console.warn("de-queueing event obj67046." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67046").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67046_onTap_activeActionGroupIndex = 3;
	





















};
obj88405_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88405_onTap_activeActionGroupIndex = -1;
		$("#obj88405").trigger("obj88405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88405) {
				console.warn("de-queueing event obj88405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88405_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88410 
stopAudio_88407();
function stopAudio_88407() {
	window.obj88405_onTap_runningActionsCount = obj88405_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88410")[0];
	myAudio.pause();
	window.obj88405_onTap_runningActionsCount = window.obj88405_onTap_runningActionsCount - 1;
if (window.obj88405_onTap_runningActionsCount < 0) {
	window.obj88405_onTap_runningActionsCount = 0;
} else if (window.obj88405_onTap_runningActionsCount == 0) {
	obj88405_onTap_actionGroup1();
}
}








};
obj88405_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88405_onTap_activeActionGroupIndex = -1;
		$("#obj88405").trigger("obj88405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88405) {
				console.warn("de-queueing event obj88405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88405_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88405 
hide_88408();
function hide_88408() {
	var selector = "#obj88405";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88405_onTap_runningActionsCount = obj88405_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88405_onTap_runningActionsCount = window.obj88405_onTap_runningActionsCount - 1;
if (window.obj88405_onTap_runningActionsCount < 0) {
	window.obj88405_onTap_runningActionsCount = 0;
} else if (window.obj88405_onTap_runningActionsCount == 0) {
	obj88405_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88408(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88405_onTap_runningActionsCount = window.obj88405_onTap_runningActionsCount - 1;
if (window.obj88405_onTap_runningActionsCount < 0) {
	window.obj88405_onTap_runningActionsCount = 0;
} else if (window.obj88405_onTap_runningActionsCount == 0) {
	obj88405_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88405_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88405_onTap_activeActionGroupIndex = -1;
		$("#obj88405").trigger("obj88405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88405) {
				console.warn("de-queueing event obj88405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88405_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88400
(function(){
	window.obj88405_onTap_runningActionsCount = obj88405_onTap_runningActionsCount + 1;

	var selector = "#obj88400";
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
					window.obj88405_onTap_runningActionsCount = window.obj88405_onTap_runningActionsCount - 1;
if (window.obj88405_onTap_runningActionsCount < 0) {
	window.obj88405_onTap_runningActionsCount = 0;
} else if (window.obj88405_onTap_runningActionsCount == 0) {
	obj88405_onTap_actionGroup3();
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
				window.obj88405_onTap_runningActionsCount = window.obj88405_onTap_runningActionsCount - 1;
if (window.obj88405_onTap_runningActionsCount < 0) {
	window.obj88405_onTap_runningActionsCount = 0;
} else if (window.obj88405_onTap_runningActionsCount == 0) {
	obj88405_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88405_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88405_onTap_activeActionGroupIndex = -1;
		$("#obj88405").trigger("obj88405_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88405) {
				console.warn("de-queueing event obj88405." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88405").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88405_onTap_activeActionGroupIndex = 3;
	





















};
obj88400_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88400_onTap_activeActionGroupIndex = -1;
		$("#obj88400").trigger("obj88400_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88400) {
				console.warn("de-queueing event obj88400." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88400").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88400_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88400 
hide_88402();
function hide_88402() {
	var selector = "#obj88400";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88400_onTap_runningActionsCount = obj88400_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88400_onTap_runningActionsCount = window.obj88400_onTap_runningActionsCount - 1;
if (window.obj88400_onTap_runningActionsCount < 0) {
	window.obj88400_onTap_runningActionsCount = 0;
} else if (window.obj88400_onTap_runningActionsCount == 0) {
	obj88400_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88402(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88400_onTap_runningActionsCount = window.obj88400_onTap_runningActionsCount - 1;
if (window.obj88400_onTap_runningActionsCount < 0) {
	window.obj88400_onTap_runningActionsCount = 0;
} else if (window.obj88400_onTap_runningActionsCount == 0) {
	obj88400_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88400_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88400_onTap_activeActionGroupIndex = -1;
		$("#obj88400").trigger("obj88400_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88400) {
				console.warn("de-queueing event obj88400." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88400").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88400_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88405
(function(){
	window.obj88400_onTap_runningActionsCount = obj88400_onTap_runningActionsCount + 1;

	var selector = "#obj88405";
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
					window.obj88400_onTap_runningActionsCount = window.obj88400_onTap_runningActionsCount - 1;
if (window.obj88400_onTap_runningActionsCount < 0) {
	window.obj88400_onTap_runningActionsCount = 0;
} else if (window.obj88400_onTap_runningActionsCount == 0) {
	obj88400_onTap_actionGroup2();
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
				window.obj88400_onTap_runningActionsCount = window.obj88400_onTap_runningActionsCount - 1;
if (window.obj88400_onTap_runningActionsCount < 0) {
	window.obj88400_onTap_runningActionsCount = 0;
} else if (window.obj88400_onTap_runningActionsCount == 0) {
	obj88400_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88400_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88400_onTap_activeActionGroupIndex = -1;
		$("#obj88400").trigger("obj88400_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88400) {
				console.warn("de-queueing event obj88400." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88400").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88400_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88410 
playAudio_88404();
function playAudio_88404() {
	window.obj88400_onTap_runningActionsCount = obj88400_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88410")[0];
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
		    window.obj88400_onTap_runningActionsCount = window.obj88400_onTap_runningActionsCount - 1;
if (window.obj88400_onTap_runningActionsCount < 0) {
	window.obj88400_onTap_runningActionsCount = 0;
} else if (window.obj88400_onTap_runningActionsCount == 0) {
	obj88400_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88400_onTap_runningActionsCount = window.obj88400_onTap_runningActionsCount - 1;
if (window.obj88400_onTap_runningActionsCount < 0) {
	window.obj88400_onTap_runningActionsCount = 0;
} else if (window.obj88400_onTap_runningActionsCount == 0) {
	obj88400_onTap_actionGroup3();
}
	}
}









};
obj88400_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88400_onTap_activeActionGroupIndex = -1;
		$("#obj88400").trigger("obj88400_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88400) {
				console.warn("de-queueing event obj88400." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88400").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88400_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj38249: Event Touch Down
 *
 */
$("#obj38249").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj38249_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38249_onTap is still running");
	return;
}
var obj38249_onTap_runningActionsCount = 0;
var obj38249_onTap_loopCount = 0;
obj38249_onTap_actionGroup0();
});










/*
 *
 *   obj38246: Event Touch Down
 *
 */
$("#obj38246").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj38246_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38246_onTap is still running");
	return;
}
var obj38246_onTap_runningActionsCount = 0;
var obj38246_onTap_loopCount = 0;
obj38246_onTap_actionGroup0();
});










/*
 *
 *   obj38242: Event Touch Down
 *
 */
$("#obj38242").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj38242_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38242_onTap is still running");
	return;
}
var obj38242_onTap_runningActionsCount = 0;
var obj38242_onTap_loopCount = 0;
obj38242_onTap_actionGroup0();
});

































































































































































/*
 *
 *   obj38169: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj38169");
	var winTarget = document.getElementById("obj38169");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj38169").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj38169_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj38169_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj38169_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38169_onTouchDown is still running");
	return;
}
var obj38169_onTouchDown_runningActionsCount = 0;
var obj38169_onTouchDown_loopCount = 0;
obj38169_onTouchDown_actionGroup0();
});



/*
 *
 *   obj38169: Event SCActionDragDrop38172_droppedOutsideTargetActions
 *
 */
$("#obj38169").bind("SCActionDragDrop38172_droppedOutsideTargetActions", function(event) {
	if (window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38169_SCActionDragDrop38172_droppedOutsideTargetActions is still running");
	return;
}
var obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_loopCount = 0;
obj38169_SCActionDragDrop38172_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj38169: Event droppedInsideTargetActions_3
 *
 */
$("#obj38169").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj38169_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38169_droppedInsideTargetActions_3 is still running");
	return;
}
var obj38169_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38169_droppedInsideTargetActions_3_loopCount = 0;
obj38169_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj38169: Event droppedInsideTargetActions_2
 *
 */
$("#obj38169").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj38169_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38169_droppedInsideTargetActions_2 is still running");
	return;
}
var obj38169_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38169_droppedInsideTargetActions_2_loopCount = 0;
obj38169_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj38169: Event droppedInsideTargetActions
 *
 */
$("#obj38169").bind("droppedInsideTargetActions", function(event) {
	if (window.obj38169_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38169_droppedInsideTargetActions is still running");
	return;
}
var obj38169_droppedInsideTargetActions_runningActionsCount = 0;
var obj38169_droppedInsideTargetActions_loopCount = 0;
obj38169_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj38130: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj38130");
	var winTarget = document.getElementById("obj38130");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj38130").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj38130_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj38130_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj38130_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38130_onTouchDown is still running");
	return;
}
var obj38130_onTouchDown_runningActionsCount = 0;
var obj38130_onTouchDown_loopCount = 0;
obj38130_onTouchDown_actionGroup0();
});



/*
 *
 *   obj38130: Event SCActionDragDrop38133_droppedOutsideTargetActions
 *
 */
$("#obj38130").bind("SCActionDragDrop38133_droppedOutsideTargetActions", function(event) {
	if (window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38130_SCActionDragDrop38133_droppedOutsideTargetActions is still running");
	return;
}
var obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_loopCount = 0;
obj38130_SCActionDragDrop38133_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj38130: Event droppedInsideTargetActions_3
 *
 */
$("#obj38130").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj38130_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38130_droppedInsideTargetActions_3 is still running");
	return;
}
var obj38130_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38130_droppedInsideTargetActions_3_loopCount = 0;
obj38130_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj38130: Event droppedInsideTargetActions_2
 *
 */
$("#obj38130").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj38130_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38130_droppedInsideTargetActions_2 is still running");
	return;
}
var obj38130_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38130_droppedInsideTargetActions_2_loopCount = 0;
obj38130_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj38130: Event droppedInsideTargetActions
 *
 */
$("#obj38130").bind("droppedInsideTargetActions", function(event) {
	if (window.obj38130_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38130_droppedInsideTargetActions is still running");
	return;
}
var obj38130_droppedInsideTargetActions_runningActionsCount = 0;
var obj38130_droppedInsideTargetActions_loopCount = 0;
obj38130_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj38091: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj38091");
	var winTarget = document.getElementById("obj38091");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj38091").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj38091_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj38091_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj38091_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38091_onTouchDown is still running");
	return;
}
var obj38091_onTouchDown_runningActionsCount = 0;
var obj38091_onTouchDown_loopCount = 0;
obj38091_onTouchDown_actionGroup0();
});



/*
 *
 *   obj38091: Event SCActionDragDrop38094_droppedOutsideTargetActions
 *
 */
$("#obj38091").bind("SCActionDragDrop38094_droppedOutsideTargetActions", function(event) {
	if (window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38091_SCActionDragDrop38094_droppedOutsideTargetActions is still running");
	return;
}
var obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_runningActionsCount = 0;
var obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_loopCount = 0;
obj38091_SCActionDragDrop38094_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj38091: Event droppedInsideTargetActions_3
 *
 */
$("#obj38091").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj38091_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38091_droppedInsideTargetActions_3 is still running");
	return;
}
var obj38091_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj38091_droppedInsideTargetActions_3_loopCount = 0;
obj38091_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj38091: Event droppedInsideTargetActions_2
 *
 */
$("#obj38091").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj38091_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38091_droppedInsideTargetActions_2 is still running");
	return;
}
var obj38091_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj38091_droppedInsideTargetActions_2_loopCount = 0;
obj38091_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj38091: Event droppedInsideTargetActions
 *
 */
$("#obj38091").bind("droppedInsideTargetActions", function(event) {
	if (window.obj38091_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38091_droppedInsideTargetActions is still running");
	return;
}
var obj38091_droppedInsideTargetActions_runningActionsCount = 0;
var obj38091_droppedInsideTargetActions_loopCount = 0;
obj38091_droppedInsideTargetActions_actionGroup0();
});



































/*
 *
 *   obj67054: Event Touch Down
 *
 */
$("#obj67054").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67054_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67054_onTap is still running");
	return;
}
var obj67054_onTap_runningActionsCount = 0;
var obj67054_onTap_loopCount = 0;
obj67054_onTap_actionGroup0();
});










/*
 *
 *   obj67046: Event Touch Down
 *
 */
$("#obj67046").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67046_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67046_onTap is still running");
	return;
}
var obj67046_onTap_runningActionsCount = 0;
var obj67046_onTap_loopCount = 0;
obj67046_onTap_actionGroup0();
});










/*
 *
 *   obj88405: Event Touch Down
 *
 */
$("#obj88405").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88405_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88405_onTap is still running");
	return;
}
var obj88405_onTap_runningActionsCount = 0;
var obj88405_onTap_loopCount = 0;
obj88405_onTap_actionGroup0();
});










/*
 *
 *   obj88400: Event Touch Down
 *
 */
$("#obj88400").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88400_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88400_onTap is still running");
	return;
}
var obj88400_onTap_runningActionsCount = 0;
var obj88400_onTap_loopCount = 0;
obj88400_onTap_actionGroup0();
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
	
$("#obj38265").trigger('SCEventShow');
$("#obj38249").trigger('SCEventShow');
$("#obj38246").trigger('SCEventShow');
$("#obj38242").trigger('SCEventShow');
$("#obj38240").trigger('SCEventShow');
$("#obj38238").trigger('SCEventShow');
$("#obj38236").trigger('SCEventShow');
$("#obj38234").trigger('SCEventShow');
$("#obj38232").trigger('SCEventShow');
$("#obj38224").trigger('SCEventShow');
$("#obj38222").trigger('SCEventShow');
$("#obj38220").trigger('SCEventShow');
$("#obj38218").trigger('SCEventShow');
$("#obj38216").trigger('SCEventShow');
$("#obj38214").trigger('SCEventShow');
$("#obj38212").trigger('SCEventShow');
$("#obj38210").trigger('SCEventShow');
$("#obj38209").trigger('SCEventShow');
$("#obj38208").trigger('SCEventShow');
$("#obj38169").trigger('SCEventShow');
$("#obj38130").trigger('SCEventShow');
$("#obj38091").trigger('SCEventShow');
$("#obj38267").trigger('SCEventShow');
$("#obj38269").trigger('SCEventShow');
$("#obj38271").trigger('SCEventShow');
$("#obj67054").trigger('SCEventShow');
$("#obj67046").trigger('SCEventShow');
$("#obj88405").trigger('SCEventShow');
$("#obj88400").trigger('SCEventShow');
$("#obj88410").trigger('SCEventShow');
$("#obj94885").trigger('SCEventShow');
$("#obj67060").trigger('SCEventShow');
	
});