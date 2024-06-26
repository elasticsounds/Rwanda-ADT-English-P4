pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 35498;
pubcoder.page.title = pubcoder.page.title || "121";
pubcoder.page.number = pubcoder.page.number || 121;
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
var obj35657_onTap_activeActionGroupIndex = -1;
var obj35657_onTap_runningActionsCount = 0;
var obj35657_onTap_loopCount = 0;
var obj35654_onTap_activeActionGroupIndex = -1;
var obj35654_onTap_runningActionsCount = 0;
var obj35654_onTap_loopCount = 0;
var obj35650_onTap_activeActionGroupIndex = -1;
var obj35650_onTap_runningActionsCount = 0;
var obj35650_onTap_loopCount = 0;
var obj35581_onDrag_activeActionGroupIndex = -1;
var obj35581_onDrag_runningActionsCount = 0;
var obj35581_onDrag_loopCount = 0;
var obj35581_onTouchDown_activeActionGroupIndex = -1;
var obj35581_onTouchDown_runningActionsCount = 0;
var obj35581_onTouchDown_loopCount = 0;
var obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_loopCount = 0;
var obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35581_droppedInsideTargetActions_3_loopCount = 0;
var obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35581_droppedInsideTargetActions_2_loopCount = 0;
var obj35581_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj35581_droppedInsideTargetActions_runningActionsCount = 0;
var obj35581_droppedInsideTargetActions_loopCount = 0;
var obj35538_onDrag_activeActionGroupIndex = -1;
var obj35538_onDrag_runningActionsCount = 0;
var obj35538_onDrag_loopCount = 0;
var obj35538_onTouchDown_activeActionGroupIndex = -1;
var obj35538_onTouchDown_runningActionsCount = 0;
var obj35538_onTouchDown_loopCount = 0;
var obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_loopCount = 0;
var obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35538_droppedInsideTargetActions_3_loopCount = 0;
var obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35538_droppedInsideTargetActions_2_loopCount = 0;
var obj35538_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj35538_droppedInsideTargetActions_runningActionsCount = 0;
var obj35538_droppedInsideTargetActions_loopCount = 0;
var obj35499_onDrag_activeActionGroupIndex = -1;
var obj35499_onDrag_runningActionsCount = 0;
var obj35499_onDrag_loopCount = 0;
var obj35499_onTouchDown_activeActionGroupIndex = -1;
var obj35499_onTouchDown_runningActionsCount = 0;
var obj35499_onTouchDown_loopCount = 0;
var obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_loopCount = 0;
var obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35499_droppedInsideTargetActions_3_loopCount = 0;
var obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35499_droppedInsideTargetActions_2_loopCount = 0;
var obj35499_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj35499_droppedInsideTargetActions_runningActionsCount = 0;
var obj35499_droppedInsideTargetActions_loopCount = 0;
var obj66942_onTap_activeActionGroupIndex = -1;
var obj66942_onTap_runningActionsCount = 0;
var obj66942_onTap_loopCount = 0;
var obj66934_onTap_activeActionGroupIndex = -1;
var obj66934_onTap_runningActionsCount = 0;
var obj66934_onTap_loopCount = 0;
var obj88321_onTap_activeActionGroupIndex = -1;
var obj88321_onTap_runningActionsCount = 0;
var obj88321_onTap_loopCount = 0;
var obj88316_onTap_activeActionGroupIndex = -1;
var obj88316_onTap_runningActionsCount = 0;
var obj88316_onTap_loopCount = 0;
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
		
obj35657_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35657_onTap_activeActionGroupIndex = -1;
		$("#obj35657").trigger("obj35657_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35657) {
				console.warn("de-queueing event obj35657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35657_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_35659();
function goToPage_35659() {
	window.obj35657_onTap_runningActionsCount = obj35657_onTap_runningActionsCount + 1;
	$("#anchor725")[0].click();
	window.obj35657_onTap_runningActionsCount = window.obj35657_onTap_runningActionsCount - 1;
if (window.obj35657_onTap_runningActionsCount < 0) {
	window.obj35657_onTap_runningActionsCount = 0;
} else if (window.obj35657_onTap_runningActionsCount == 0) {
	obj35657_onTap_actionGroup1();
}
}





















};
obj35657_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35657_onTap_activeActionGroupIndex = -1;
		$("#obj35657").trigger("obj35657_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35657) {
				console.warn("de-queueing event obj35657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35657_onTap_activeActionGroupIndex = 1;
	





















};
obj35654_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35654_onTap_activeActionGroupIndex = -1;
		$("#obj35654").trigger("obj35654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35654) {
				console.warn("de-queueing event obj35654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35654_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_35656();
function goToPage_35656() {
	window.obj35654_onTap_runningActionsCount = obj35654_onTap_runningActionsCount + 1;
	$("#anchor726")[0].click();
	window.obj35654_onTap_runningActionsCount = window.obj35654_onTap_runningActionsCount - 1;
if (window.obj35654_onTap_runningActionsCount < 0) {
	window.obj35654_onTap_runningActionsCount = 0;
} else if (window.obj35654_onTap_runningActionsCount == 0) {
	obj35654_onTap_actionGroup1();
}
}





















};
obj35654_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35654_onTap_activeActionGroupIndex = -1;
		$("#obj35654").trigger("obj35654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35654) {
				console.warn("de-queueing event obj35654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35654_onTap_activeActionGroupIndex = 1;
	





















};
obj35650_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35650_onTap_activeActionGroupIndex = -1;
		$("#obj35650").trigger("obj35650_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35650) {
				console.warn("de-queueing event obj35650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35650_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_35652();
function goToPage_35652() {
	window.obj35650_onTap_runningActionsCount = obj35650_onTap_runningActionsCount + 1;
	$("#anchor727")[0].click();
	window.obj35650_onTap_runningActionsCount = window.obj35650_onTap_runningActionsCount - 1;
if (window.obj35650_onTap_runningActionsCount < 0) {
	window.obj35650_onTap_runningActionsCount = 0;
} else if (window.obj35650_onTap_runningActionsCount == 0) {
	obj35650_onTap_actionGroup1();
}
}





















};
obj35650_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35650_onTap_activeActionGroupIndex = -1;
		$("#obj35650").trigger("obj35650_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35650) {
				console.warn("de-queueing event obj35650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35650_onTap_activeActionGroupIndex = 1;
	





















};
obj35581_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj35581");
//	action: dragDrop
//	target: obj35581 
dragDrop_35584();
function dragDrop_35584() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj35581_onTouchDown_runningActionsCount = obj35581_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj35581');
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
	  	containerNode = $('#obj35640');
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
    	window.obj35581_onTouchDown_runningActionsCount = window.obj35581_onTouchDown_runningActionsCount - 1;
if (window.obj35581_onTouchDown_runningActionsCount < 0) {
	window.obj35581_onTouchDown_runningActionsCount = 0;
} else if (window.obj35581_onTouchDown_runningActionsCount == 0) {
	obj35581_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj35628","#obj35632","#obj35630");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_35584 = false;
    	var dropped_id_35584;
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
					dropped_35584 = true;
					dropped_id_35584 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_35584) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj35581").trigger('SCActionDragDrop35584_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj35581_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35581_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj35581 
move_92541();
function move_92541() {
	window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_runningActionsCount = obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj35581");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 58;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_runningActionsCount = window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj35581_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35607();
function runjs_35607() {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35630").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35608();
function runjs_35608() {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35630").css("border-color", "#C00000"); $("#obj35630").css("border-width", "2px"); $("#obj35630").css("border-style", "solid"); $("#obj35630").css("border-radius", "10px"); $("#obj35630").css("-webkit-border-radius", "10px"); $("#obj35630").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj35624 
hide_35609();
function hide_35609() {
	var selector = "#obj35624";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35609(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35581_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_35610();
function runjs_35610() {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35581").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_35611();
function switchText_35611() {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj35581_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj35581 
move_35612();
function move_35612() {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj35581");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 58;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj35581_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35613();
function runjs_35613() {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35630").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_35614();
function runjs_35614() {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35630").css("border-color", "#000000"); $("#obj35630").css("border-width", "1px"); $("#obj35630").css("border-style", "solid"); $("#obj35630").css("border-radius", "10px"); $("#obj35630").css("-webkit-border-radius", "10px"); $("#obj35630").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj35624
(function(){
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj35624";
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
					window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj35581_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_35616();
function runjs_35616() {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35581").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_35617();
function runjs_35617() {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35581").css("border-color", "rgba(0,0,0,0)"); $("#obj35581").css("border-width", "0px"); $("#obj35581").css("border-style", "solid"); $("#obj35581").css("border-radius", "10px"); $("#obj35581").css("-webkit-border-radius", "10px"); $("#obj35581").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj35578 
playAudio_35618();
function playAudio_35618() {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj35578")[0];
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
		    window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj35581_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_35619();
function switchText_35619() {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = obj35581_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35581_droppedInsideTargetActions_3_runningActionsCount = window.obj35581_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj35581_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj35581_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35593();
function runjs_35593() {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35632").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35594();
function runjs_35594() {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35632").css("border-color", "#C00000"); $("#obj35632").css("border-width", "2px"); $("#obj35632").css("border-style", "solid"); $("#obj35632").css("border-radius", "10px"); $("#obj35632").css("-webkit-border-radius", "10px"); $("#obj35632").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj35626 
hide_35595();
function hide_35595() {
	var selector = "#obj35626";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35595(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35581_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_35596();
function runjs_35596() {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35581").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_35597();
function switchText_35597() {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj35581_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj35581 
move_35598();
function move_35598() {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj35581");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 58;
	var moveY = 610;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj35581_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35599();
function runjs_35599() {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35632").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_35600();
function runjs_35600() {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35632").css("border-color", "#000000"); $("#obj35632").css("border-width", "1px"); $("#obj35632").css("border-style", "solid"); $("#obj35632").css("border-radius", "10px"); $("#obj35632").css("-webkit-border-radius", "10px"); $("#obj35632").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj35626
(function(){
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj35626";
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
					window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj35581_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_35602();
function runjs_35602() {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35581").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_35603();
function runjs_35603() {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35581").css("border-color", "rgba(0,0,0,0)"); $("#obj35581").css("border-width", "0px"); $("#obj35581").css("border-style", "solid"); $("#obj35581").css("border-radius", "10px"); $("#obj35581").css("-webkit-border-radius", "10px"); $("#obj35581").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj35578 
playAudio_35604();
function playAudio_35604() {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj35578")[0];
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
		    window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj35581_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_35605();
function switchText_35605() {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = obj35581_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35581_droppedInsideTargetActions_2_runningActionsCount = window.obj35581_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj35581_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj35581_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35586();
function runjs_35586() {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = obj35581_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35628").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_runningActionsCount = window.obj35581_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_35590();
function switchText_35590() {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = obj35581_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35581_droppedInsideTargetActions_runningActionsCount = window.obj35581_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35581_droppedInsideTargetActions_runningActionsCount = window.obj35581_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj35581_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_35587();
function runjs_35587() {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = obj35581_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35628").css("border-color", "#058E3F"); $("#obj35628").css("border-width", "2px"); $("#obj35628").css("border-style", "solid"); $("#obj35628").css("border-radius", "10px"); $("#obj35628").css("-webkit-border-radius", "10px"); $("#obj35628").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_runningActionsCount = window.obj35581_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj35622 
hide_35588();
function hide_35588() {
	var selector = "#obj35622";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35581_droppedInsideTargetActions_runningActionsCount = obj35581_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35581_droppedInsideTargetActions_runningActionsCount = window.obj35581_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35588(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35581_droppedInsideTargetActions_runningActionsCount = window.obj35581_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35581_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_35589();
function runjs_35589() {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = obj35581_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35581").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35581_droppedInsideTargetActions_runningActionsCount = window.obj35581_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj35581_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj35577 
playAudio_35591();
function playAudio_35591() {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = obj35581_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj35577")[0];
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
		    window.obj35581_droppedInsideTargetActions_runningActionsCount = window.obj35581_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35581_droppedInsideTargetActions_runningActionsCount = window.obj35581_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj35581_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90428();
function switchText_90428() {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = obj35581_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35581_droppedInsideTargetActions_runningActionsCount = window.obj35581_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35581_droppedInsideTargetActions_runningActionsCount = window.obj35581_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35581_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35581_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35581_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35581_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj35581_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35581").trigger("obj35581_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35581) {
				console.warn("de-queueing event obj35581." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35581").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35581_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj35538_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj35538");
//	action: dragDrop
//	target: obj35538 
dragDrop_35541();
function dragDrop_35541() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj35538_onTouchDown_runningActionsCount = obj35538_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj35538');
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
	  	containerNode = $('#obj35640');
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
    	window.obj35538_onTouchDown_runningActionsCount = window.obj35538_onTouchDown_runningActionsCount - 1;
if (window.obj35538_onTouchDown_runningActionsCount < 0) {
	window.obj35538_onTouchDown_runningActionsCount = 0;
} else if (window.obj35538_onTouchDown_runningActionsCount == 0) {
	obj35538_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj35630","#obj35632","#obj35628");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_35541 = false;
    	var dropped_id_35541;
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
					dropped_35541 = true;
					dropped_id_35541 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_35541) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj35538").trigger('SCActionDragDrop35541_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj35538_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35538_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj35538 
move_92545();
function move_92545() {
	window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_runningActionsCount = obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj35538");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_runningActionsCount = window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj35538_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35564();
function runjs_35564() {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35628").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35565();
function runjs_35565() {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35628").css("border-color", "#C00000"); $("#obj35628").css("border-width", "2px"); $("#obj35628").css("border-style", "solid"); $("#obj35628").css("border-radius", "10px"); $("#obj35628").css("-webkit-border-radius", "10px"); $("#obj35628").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj35622 
hide_35566();
function hide_35566() {
	var selector = "#obj35622";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35566(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35538_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_35567();
function runjs_35567() {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35538").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_35568();
function switchText_35568() {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj35538_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj35538 
move_35569();
function move_35569() {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj35538");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj35538_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35570();
function runjs_35570() {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35628").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_35571();
function runjs_35571() {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35628").css("border-color", "#000000"); $("#obj35628").css("border-width", "1px"); $("#obj35628").css("border-style", "solid"); $("#obj35628").css("border-radius", "10px"); $("#obj35628").css("-webkit-border-radius", "10px"); $("#obj35628").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj35622
(function(){
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj35622";
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
					window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj35538_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_35573();
function runjs_35573() {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35538").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_35574();
function runjs_35574() {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35538").css("border-color", "rgba(0,0,0,0)"); $("#obj35538").css("border-width", "0px"); $("#obj35538").css("border-style", "solid"); $("#obj35538").css("border-radius", "10px"); $("#obj35538").css("-webkit-border-radius", "10px"); $("#obj35538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj35578 
playAudio_35575();
function playAudio_35575() {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj35578")[0];
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
		    window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj35538_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_35576();
function switchText_35576() {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = obj35538_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35538_droppedInsideTargetActions_3_runningActionsCount = window.obj35538_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj35538_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj35538_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35550();
function runjs_35550() {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35632").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35551();
function runjs_35551() {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35632").css("border-color", "#C00000"); $("#obj35632").css("border-width", "2px"); $("#obj35632").css("border-style", "solid"); $("#obj35632").css("border-radius", "10px"); $("#obj35632").css("-webkit-border-radius", "10px"); $("#obj35632").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj35626 
hide_35552();
function hide_35552() {
	var selector = "#obj35626";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35552(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35538_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_35553();
function runjs_35553() {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35538").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_35554();
function switchText_35554() {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj35538_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj35538 
move_35555();
function move_35555() {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj35538");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj35538_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35556();
function runjs_35556() {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35632").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_35557();
function runjs_35557() {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35632").css("border-color", "#000000"); $("#obj35632").css("border-width", "1px"); $("#obj35632").css("border-style", "solid"); $("#obj35632").css("border-radius", "10px"); $("#obj35632").css("-webkit-border-radius", "10px"); $("#obj35632").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj35626
(function(){
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj35626";
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
					window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj35538_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_35559();
function runjs_35559() {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35538").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_35560();
function runjs_35560() {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35538").css("border-color", "rgba(0,0,0,0)"); $("#obj35538").css("border-width", "0px"); $("#obj35538").css("border-style", "solid"); $("#obj35538").css("border-radius", "10px"); $("#obj35538").css("-webkit-border-radius", "10px"); $("#obj35538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj35578 
playAudio_35561();
function playAudio_35561() {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj35578")[0];
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
		    window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj35538_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_35562();
function switchText_35562() {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = obj35538_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35538_droppedInsideTargetActions_2_runningActionsCount = window.obj35538_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj35538_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj35538_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35543();
function runjs_35543() {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = obj35538_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35630").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_runningActionsCount = window.obj35538_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_35547();
function switchText_35547() {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = obj35538_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35538_droppedInsideTargetActions_runningActionsCount = window.obj35538_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35538_droppedInsideTargetActions_runningActionsCount = window.obj35538_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj35538_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_35544();
function runjs_35544() {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = obj35538_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35630").css("border-color", "#058E3F"); $("#obj35630").css("border-width", "2px"); $("#obj35630").css("border-style", "solid"); $("#obj35630").css("border-radius", "10px"); $("#obj35630").css("-webkit-border-radius", "10px"); $("#obj35630").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_runningActionsCount = window.obj35538_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj35624 
hide_35545();
function hide_35545() {
	var selector = "#obj35624";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35538_droppedInsideTargetActions_runningActionsCount = obj35538_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35538_droppedInsideTargetActions_runningActionsCount = window.obj35538_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35545(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35538_droppedInsideTargetActions_runningActionsCount = window.obj35538_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35538_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_35546();
function runjs_35546() {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = obj35538_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35538").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35538_droppedInsideTargetActions_runningActionsCount = window.obj35538_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj35538_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj35577 
playAudio_35548();
function playAudio_35548() {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = obj35538_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj35577")[0];
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
		    window.obj35538_droppedInsideTargetActions_runningActionsCount = window.obj35538_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35538_droppedInsideTargetActions_runningActionsCount = window.obj35538_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj35538_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90430();
function switchText_90430() {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = obj35538_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35538_droppedInsideTargetActions_runningActionsCount = window.obj35538_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35538_droppedInsideTargetActions_runningActionsCount = window.obj35538_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35538_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35538_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35538_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35538_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj35538_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35538").trigger("obj35538_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35538) {
				console.warn("de-queueing event obj35538." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35538").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35538_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj35499_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj35499");
//	action: dragDrop
//	target: obj35499 
dragDrop_35502();
function dragDrop_35502() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj35499_onTouchDown_runningActionsCount = obj35499_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj35499');
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
	  	containerNode = $('#obj35640');
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
    	window.obj35499_onTouchDown_runningActionsCount = window.obj35499_onTouchDown_runningActionsCount - 1;
if (window.obj35499_onTouchDown_runningActionsCount < 0) {
	window.obj35499_onTouchDown_runningActionsCount = 0;
} else if (window.obj35499_onTouchDown_runningActionsCount == 0) {
	obj35499_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj35632","#obj35630","#obj35628");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_35502 = false;
    	var dropped_id_35502;
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
					dropped_35502 = true;
					dropped_id_35502 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_35502) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj35499").trigger('SCActionDragDrop35502_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj35499_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35499_onTouchDown_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj35499 
move_92543();
function move_92543() {
	window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_runningActionsCount = obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj35499");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 224;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_runningActionsCount = window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj35499_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35525();
function runjs_35525() {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35628").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35526();
function runjs_35526() {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35628").css("border-color", "#C00000"); $("#obj35628").css("border-width", "2px"); $("#obj35628").css("border-style", "solid"); $("#obj35628").css("border-radius", "10px"); $("#obj35628").css("-webkit-border-radius", "10px"); $("#obj35628").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj35622 
hide_35527();
function hide_35527() {
	var selector = "#obj35622";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35527(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35499_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_35528();
function runjs_35528() {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35499").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_35529();
function switchText_35529() {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj35499_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj35499 
move_35530();
function move_35530() {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj35499");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 224;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj35499_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35531();
function runjs_35531() {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35628").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_35532();
function runjs_35532() {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35628").css("border-color", "#000000"); $("#obj35628").css("border-width", "1px"); $("#obj35628").css("border-style", "solid"); $("#obj35628").css("border-radius", "10px"); $("#obj35628").css("-webkit-border-radius", "10px"); $("#obj35628").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj35622
(function(){
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj35622";
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
					window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj35499_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_35534();
function runjs_35534() {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35499").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_35535();
function runjs_35535() {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj35499").css("border-color", "rgba(0,0,0,0)"); $("#obj35499").css("border-width", "0px"); $("#obj35499").css("border-style", "solid"); $("#obj35499").css("border-radius", "10px"); $("#obj35499").css("-webkit-border-radius", "10px"); $("#obj35499").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj35578 
playAudio_35536();
function playAudio_35536() {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj35578")[0];
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
		    window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj35499_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_35537();
function switchText_35537() {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = obj35499_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35499_droppedInsideTargetActions_3_runningActionsCount = window.obj35499_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj35499_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj35499_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35511();
function runjs_35511() {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35630").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_35512();
function runjs_35512() {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35630").css("border-color", "#C00000"); $("#obj35630").css("border-width", "2px"); $("#obj35630").css("border-style", "solid"); $("#obj35630").css("border-radius", "10px"); $("#obj35630").css("-webkit-border-radius", "10px"); $("#obj35630").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj35624 
hide_35513();
function hide_35513() {
	var selector = "#obj35624";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35513(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35499_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_35514();
function runjs_35514() {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35499").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_35515();
function switchText_35515() {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj35499_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj35499 
move_35516();
function move_35516() {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj35499");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 224;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj35499_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_35517();
function runjs_35517() {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35630").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_35518();
function runjs_35518() {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35630").css("border-color", "#000000"); $("#obj35630").css("border-width", "1px"); $("#obj35630").css("border-style", "solid"); $("#obj35630").css("border-radius", "10px"); $("#obj35630").css("-webkit-border-radius", "10px"); $("#obj35630").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj35624
(function(){
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj35624";
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
					window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj35499_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_35520();
function runjs_35520() {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35499").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_35521();
function runjs_35521() {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj35499").css("border-color", "rgba(0,0,0,0)"); $("#obj35499").css("border-width", "0px"); $("#obj35499").css("border-style", "solid"); $("#obj35499").css("border-radius", "10px"); $("#obj35499").css("-webkit-border-radius", "10px"); $("#obj35499").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj35578 
playAudio_35522();
function playAudio_35522() {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj35578")[0];
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
		    window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj35499_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_35523();
function switchText_35523() {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = obj35499_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35499_droppedInsideTargetActions_2_runningActionsCount = window.obj35499_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj35499_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj35499_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_35504();
function runjs_35504() {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = obj35499_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35632").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_runningActionsCount = window.obj35499_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_35508();
function switchText_35508() {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = obj35499_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35499_droppedInsideTargetActions_runningActionsCount = window.obj35499_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35499_droppedInsideTargetActions_runningActionsCount = window.obj35499_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj35499_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_35505();
function runjs_35505() {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = obj35499_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35632").css("border-color", "#058E3F"); $("#obj35632").css("border-width", "2px"); $("#obj35632").css("border-style", "solid"); $("#obj35632").css("border-radius", "10px"); $("#obj35632").css("-webkit-border-radius", "10px"); $("#obj35632").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_runningActionsCount = window.obj35499_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj35626 
hide_35506();
function hide_35506() {
	var selector = "#obj35626";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj35499_droppedInsideTargetActions_runningActionsCount = obj35499_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj35499_droppedInsideTargetActions_runningActionsCount = window.obj35499_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_35506(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj35499_droppedInsideTargetActions_runningActionsCount = window.obj35499_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj35499_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_35507();
function runjs_35507() {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = obj35499_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj35499").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj35499_droppedInsideTargetActions_runningActionsCount = window.obj35499_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj35499_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj35577 
playAudio_35509();
function playAudio_35509() {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = obj35499_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj35577")[0];
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
		    window.obj35499_droppedInsideTargetActions_runningActionsCount = window.obj35499_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj35499_droppedInsideTargetActions_runningActionsCount = window.obj35499_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj35499_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90429();
function switchText_90429() {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = obj35499_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj35579_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj35579_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj35579").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj35579_content");
			setTimeout(function () {
				window.obj35499_droppedInsideTargetActions_runningActionsCount = window.obj35499_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj35579 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj35499_droppedInsideTargetActions_runningActionsCount = window.obj35499_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj35499_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj35499_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj35499_droppedInsideTargetActions_runningActionsCount == 0) {
	obj35499_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj35499_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj35499").trigger("obj35499_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 35499) {
				console.warn("de-queueing event obj35499." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj35499").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj35499_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj66942_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66942_onTap_activeActionGroupIndex = -1;
		$("#obj66942").trigger("obj66942_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66942) {
				console.warn("de-queueing event obj66942." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66942").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66942_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj66942 
hide_66945();
function hide_66945() {
	var selector = "#obj66942";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj66942_onTap_runningActionsCount = obj66942_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj66942_onTap_runningActionsCount = window.obj66942_onTap_runningActionsCount - 1;
if (window.obj66942_onTap_runningActionsCount < 0) {
	window.obj66942_onTap_runningActionsCount = 0;
} else if (window.obj66942_onTap_runningActionsCount == 0) {
	obj66942_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_66945(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj66942_onTap_runningActionsCount = window.obj66942_onTap_runningActionsCount - 1;
if (window.obj66942_onTap_runningActionsCount < 0) {
	window.obj66942_onTap_runningActionsCount = 0;
} else if (window.obj66942_onTap_runningActionsCount == 0) {
	obj66942_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj66948 
stopMovie_66944();
function stopMovie_66944() {
	window.obj66942_onTap_runningActionsCount = obj66942_onTap_runningActionsCount + 1;
	var myVideo = $("#obj66948")[0];
	myVideo.pause();
	window.obj66942_onTap_runningActionsCount = window.obj66942_onTap_runningActionsCount - 1;
if (window.obj66942_onTap_runningActionsCount < 0) {
	window.obj66942_onTap_runningActionsCount = 0;
} else if (window.obj66942_onTap_runningActionsCount == 0) {
	obj66942_onTap_actionGroup1();
}
}
















};
obj66942_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66942_onTap_activeActionGroupIndex = -1;
		$("#obj66942").trigger("obj66942_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66942) {
				console.warn("de-queueing event obj66942." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66942").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66942_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj66934
(function(){
	window.obj66942_onTap_runningActionsCount = obj66942_onTap_runningActionsCount + 1;

	var selector = "#obj66934";
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
					window.obj66942_onTap_runningActionsCount = window.obj66942_onTap_runningActionsCount - 1;
if (window.obj66942_onTap_runningActionsCount < 0) {
	window.obj66942_onTap_runningActionsCount = 0;
} else if (window.obj66942_onTap_runningActionsCount == 0) {
	obj66942_onTap_actionGroup2();
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
				window.obj66942_onTap_runningActionsCount = window.obj66942_onTap_runningActionsCount - 1;
if (window.obj66942_onTap_runningActionsCount < 0) {
	window.obj66942_onTap_runningActionsCount = 0;
} else if (window.obj66942_onTap_runningActionsCount == 0) {
	obj66942_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj66942_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66942_onTap_activeActionGroupIndex = -1;
		$("#obj66942").trigger("obj66942_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66942) {
				console.warn("de-queueing event obj66942." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66942").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66942_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj66948 
move_66947();
function move_66947() {
	window.obj66942_onTap_runningActionsCount = obj66942_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj66948");
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
			window.obj66942_onTap_runningActionsCount = window.obj66942_onTap_runningActionsCount - 1;
if (window.obj66942_onTap_runningActionsCount < 0) {
	window.obj66942_onTap_runningActionsCount = 0;
} else if (window.obj66942_onTap_runningActionsCount == 0) {
	obj66942_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj66942_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj66942_onTap_activeActionGroupIndex = -1;
		$("#obj66942").trigger("obj66942_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66942) {
				console.warn("de-queueing event obj66942." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66942").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66942_onTap_activeActionGroupIndex = 3;
	





















};
obj66934_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66934_onTap_activeActionGroupIndex = -1;
		$("#obj66934").trigger("obj66934_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66934) {
				console.warn("de-queueing event obj66934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66934_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj66934 
hide_66937();
function hide_66937() {
	var selector = "#obj66934";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj66934_onTap_runningActionsCount = obj66934_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj66934_onTap_runningActionsCount = window.obj66934_onTap_runningActionsCount - 1;
if (window.obj66934_onTap_runningActionsCount < 0) {
	window.obj66934_onTap_runningActionsCount = 0;
} else if (window.obj66934_onTap_runningActionsCount == 0) {
	obj66934_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_66937(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj66934_onTap_runningActionsCount = window.obj66934_onTap_runningActionsCount - 1;
if (window.obj66934_onTap_runningActionsCount < 0) {
	window.obj66934_onTap_runningActionsCount = 0;
} else if (window.obj66934_onTap_runningActionsCount == 0) {
	obj66934_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj66948 
playPauseMovie_66936();
function playPauseMovie_66936() {
	window.obj66934_onTap_runningActionsCount = obj66934_onTap_runningActionsCount + 1;
	var myVideo = $("#obj66948")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj66934_onTap_runningActionsCount = window.obj66934_onTap_runningActionsCount - 1;
if (window.obj66934_onTap_runningActionsCount < 0) {
	window.obj66934_onTap_runningActionsCount = 0;
} else if (window.obj66934_onTap_runningActionsCount == 0) {
	obj66934_onTap_actionGroup1();
}
}

















};
obj66934_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66934_onTap_activeActionGroupIndex = -1;
		$("#obj66934").trigger("obj66934_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66934) {
				console.warn("de-queueing event obj66934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66934_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj66942
(function(){
	window.obj66934_onTap_runningActionsCount = obj66934_onTap_runningActionsCount + 1;

	var selector = "#obj66942";
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
					window.obj66934_onTap_runningActionsCount = window.obj66934_onTap_runningActionsCount - 1;
if (window.obj66934_onTap_runningActionsCount < 0) {
	window.obj66934_onTap_runningActionsCount = 0;
} else if (window.obj66934_onTap_runningActionsCount == 0) {
	obj66934_onTap_actionGroup2();
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
				window.obj66934_onTap_runningActionsCount = window.obj66934_onTap_runningActionsCount - 1;
if (window.obj66934_onTap_runningActionsCount < 0) {
	window.obj66934_onTap_runningActionsCount = 0;
} else if (window.obj66934_onTap_runningActionsCount == 0) {
	obj66934_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj66934_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj66934_onTap_activeActionGroupIndex = -1;
		$("#obj66934").trigger("obj66934_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66934) {
				console.warn("de-queueing event obj66934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66934_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj66948 
move_66939();
function move_66939() {
	window.obj66934_onTap_runningActionsCount = obj66934_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj66948");
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
			window.obj66934_onTap_runningActionsCount = window.obj66934_onTap_runningActionsCount - 1;
if (window.obj66934_onTap_runningActionsCount < 0) {
	window.obj66934_onTap_runningActionsCount = 0;
} else if (window.obj66934_onTap_runningActionsCount == 0) {
	obj66934_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj66934_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj66934_onTap_activeActionGroupIndex = -1;
		$("#obj66934").trigger("obj66934_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 66934) {
				console.warn("de-queueing event obj66934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj66934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj66934_onTap_activeActionGroupIndex = 3;
	





















};
obj88321_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88321_onTap_activeActionGroupIndex = -1;
		$("#obj88321").trigger("obj88321_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88321) {
				console.warn("de-queueing event obj88321." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88321").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88321_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88326 
stopAudio_88323();
function stopAudio_88323() {
	window.obj88321_onTap_runningActionsCount = obj88321_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88326")[0];
	myAudio.pause();
	window.obj88321_onTap_runningActionsCount = window.obj88321_onTap_runningActionsCount - 1;
if (window.obj88321_onTap_runningActionsCount < 0) {
	window.obj88321_onTap_runningActionsCount = 0;
} else if (window.obj88321_onTap_runningActionsCount == 0) {
	obj88321_onTap_actionGroup1();
}
}








};
obj88321_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88321_onTap_activeActionGroupIndex = -1;
		$("#obj88321").trigger("obj88321_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88321) {
				console.warn("de-queueing event obj88321." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88321").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88321_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88321 
hide_88324();
function hide_88324() {
	var selector = "#obj88321";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88321_onTap_runningActionsCount = obj88321_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88321_onTap_runningActionsCount = window.obj88321_onTap_runningActionsCount - 1;
if (window.obj88321_onTap_runningActionsCount < 0) {
	window.obj88321_onTap_runningActionsCount = 0;
} else if (window.obj88321_onTap_runningActionsCount == 0) {
	obj88321_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88324(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88321_onTap_runningActionsCount = window.obj88321_onTap_runningActionsCount - 1;
if (window.obj88321_onTap_runningActionsCount < 0) {
	window.obj88321_onTap_runningActionsCount = 0;
} else if (window.obj88321_onTap_runningActionsCount == 0) {
	obj88321_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88321_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88321_onTap_activeActionGroupIndex = -1;
		$("#obj88321").trigger("obj88321_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88321) {
				console.warn("de-queueing event obj88321." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88321").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88321_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88316
(function(){
	window.obj88321_onTap_runningActionsCount = obj88321_onTap_runningActionsCount + 1;

	var selector = "#obj88316";
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
					window.obj88321_onTap_runningActionsCount = window.obj88321_onTap_runningActionsCount - 1;
if (window.obj88321_onTap_runningActionsCount < 0) {
	window.obj88321_onTap_runningActionsCount = 0;
} else if (window.obj88321_onTap_runningActionsCount == 0) {
	obj88321_onTap_actionGroup3();
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
				window.obj88321_onTap_runningActionsCount = window.obj88321_onTap_runningActionsCount - 1;
if (window.obj88321_onTap_runningActionsCount < 0) {
	window.obj88321_onTap_runningActionsCount = 0;
} else if (window.obj88321_onTap_runningActionsCount == 0) {
	obj88321_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88321_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88321_onTap_activeActionGroupIndex = -1;
		$("#obj88321").trigger("obj88321_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88321) {
				console.warn("de-queueing event obj88321." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88321").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88321_onTap_activeActionGroupIndex = 3;
	





















};
obj88316_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88316_onTap_activeActionGroupIndex = -1;
		$("#obj88316").trigger("obj88316_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88316) {
				console.warn("de-queueing event obj88316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88316_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88316 
hide_88318();
function hide_88318() {
	var selector = "#obj88316";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88316_onTap_runningActionsCount = obj88316_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88316_onTap_runningActionsCount = window.obj88316_onTap_runningActionsCount - 1;
if (window.obj88316_onTap_runningActionsCount < 0) {
	window.obj88316_onTap_runningActionsCount = 0;
} else if (window.obj88316_onTap_runningActionsCount == 0) {
	obj88316_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88318(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88316_onTap_runningActionsCount = window.obj88316_onTap_runningActionsCount - 1;
if (window.obj88316_onTap_runningActionsCount < 0) {
	window.obj88316_onTap_runningActionsCount = 0;
} else if (window.obj88316_onTap_runningActionsCount == 0) {
	obj88316_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88316_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88316_onTap_activeActionGroupIndex = -1;
		$("#obj88316").trigger("obj88316_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88316) {
				console.warn("de-queueing event obj88316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88316_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88321
(function(){
	window.obj88316_onTap_runningActionsCount = obj88316_onTap_runningActionsCount + 1;

	var selector = "#obj88321";
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
					window.obj88316_onTap_runningActionsCount = window.obj88316_onTap_runningActionsCount - 1;
if (window.obj88316_onTap_runningActionsCount < 0) {
	window.obj88316_onTap_runningActionsCount = 0;
} else if (window.obj88316_onTap_runningActionsCount == 0) {
	obj88316_onTap_actionGroup2();
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
				window.obj88316_onTap_runningActionsCount = window.obj88316_onTap_runningActionsCount - 1;
if (window.obj88316_onTap_runningActionsCount < 0) {
	window.obj88316_onTap_runningActionsCount = 0;
} else if (window.obj88316_onTap_runningActionsCount == 0) {
	obj88316_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88316_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88316_onTap_activeActionGroupIndex = -1;
		$("#obj88316").trigger("obj88316_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88316) {
				console.warn("de-queueing event obj88316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88316_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88326 
playAudio_88320();
function playAudio_88320() {
	window.obj88316_onTap_runningActionsCount = obj88316_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88326")[0];
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
		    window.obj88316_onTap_runningActionsCount = window.obj88316_onTap_runningActionsCount - 1;
if (window.obj88316_onTap_runningActionsCount < 0) {
	window.obj88316_onTap_runningActionsCount = 0;
} else if (window.obj88316_onTap_runningActionsCount == 0) {
	obj88316_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88316_onTap_runningActionsCount = window.obj88316_onTap_runningActionsCount - 1;
if (window.obj88316_onTap_runningActionsCount < 0) {
	window.obj88316_onTap_runningActionsCount = 0;
} else if (window.obj88316_onTap_runningActionsCount == 0) {
	obj88316_onTap_actionGroup3();
}
	}
}









};
obj88316_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88316_onTap_activeActionGroupIndex = -1;
		$("#obj88316").trigger("obj88316_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88316) {
				console.warn("de-queueing event obj88316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88316_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj35657: Event Touch Down
 *
 */
$("#obj35657").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj35657_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35657_onTap is still running");
	return;
}
var obj35657_onTap_runningActionsCount = 0;
var obj35657_onTap_loopCount = 0;
obj35657_onTap_actionGroup0();
});










/*
 *
 *   obj35654: Event Touch Down
 *
 */
$("#obj35654").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj35654_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35654_onTap is still running");
	return;
}
var obj35654_onTap_runningActionsCount = 0;
var obj35654_onTap_loopCount = 0;
obj35654_onTap_actionGroup0();
});










/*
 *
 *   obj35650: Event Touch Down
 *
 */
$("#obj35650").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj35650_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35650_onTap is still running");
	return;
}
var obj35650_onTap_runningActionsCount = 0;
var obj35650_onTap_loopCount = 0;
obj35650_onTap_actionGroup0();
});























































































































































/*
 *
 *   obj35581: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj35581");
	var winTarget = document.getElementById("obj35581");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj35581").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj35581_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj35581_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj35581_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35581_onTouchDown is still running");
	return;
}
var obj35581_onTouchDown_runningActionsCount = 0;
var obj35581_onTouchDown_loopCount = 0;
obj35581_onTouchDown_actionGroup0();
});



/*
 *
 *   obj35581: Event SCActionDragDrop35584_droppedOutsideTargetActions
 *
 */
$("#obj35581").bind("SCActionDragDrop35584_droppedOutsideTargetActions", function(event) {
	if (window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35581_SCActionDragDrop35584_droppedOutsideTargetActions is still running");
	return;
}
var obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_loopCount = 0;
obj35581_SCActionDragDrop35584_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj35581: Event droppedInsideTargetActions_3
 *
 */
$("#obj35581").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj35581_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35581_droppedInsideTargetActions_3 is still running");
	return;
}
var obj35581_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35581_droppedInsideTargetActions_3_loopCount = 0;
obj35581_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj35581: Event droppedInsideTargetActions_2
 *
 */
$("#obj35581").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj35581_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35581_droppedInsideTargetActions_2 is still running");
	return;
}
var obj35581_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35581_droppedInsideTargetActions_2_loopCount = 0;
obj35581_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj35581: Event droppedInsideTargetActions
 *
 */
$("#obj35581").bind("droppedInsideTargetActions", function(event) {
	if (window.obj35581_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35581_droppedInsideTargetActions is still running");
	return;
}
var obj35581_droppedInsideTargetActions_runningActionsCount = 0;
var obj35581_droppedInsideTargetActions_loopCount = 0;
obj35581_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj35538: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj35538");
	var winTarget = document.getElementById("obj35538");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj35538").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj35538_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj35538_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj35538_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35538_onTouchDown is still running");
	return;
}
var obj35538_onTouchDown_runningActionsCount = 0;
var obj35538_onTouchDown_loopCount = 0;
obj35538_onTouchDown_actionGroup0();
});



/*
 *
 *   obj35538: Event SCActionDragDrop35541_droppedOutsideTargetActions
 *
 */
$("#obj35538").bind("SCActionDragDrop35541_droppedOutsideTargetActions", function(event) {
	if (window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35538_SCActionDragDrop35541_droppedOutsideTargetActions is still running");
	return;
}
var obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_loopCount = 0;
obj35538_SCActionDragDrop35541_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj35538: Event droppedInsideTargetActions_3
 *
 */
$("#obj35538").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj35538_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35538_droppedInsideTargetActions_3 is still running");
	return;
}
var obj35538_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35538_droppedInsideTargetActions_3_loopCount = 0;
obj35538_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj35538: Event droppedInsideTargetActions_2
 *
 */
$("#obj35538").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj35538_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35538_droppedInsideTargetActions_2 is still running");
	return;
}
var obj35538_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35538_droppedInsideTargetActions_2_loopCount = 0;
obj35538_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj35538: Event droppedInsideTargetActions
 *
 */
$("#obj35538").bind("droppedInsideTargetActions", function(event) {
	if (window.obj35538_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35538_droppedInsideTargetActions is still running");
	return;
}
var obj35538_droppedInsideTargetActions_runningActionsCount = 0;
var obj35538_droppedInsideTargetActions_loopCount = 0;
obj35538_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj35499: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj35499");
	var winTarget = document.getElementById("obj35499");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj35499").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj35499_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj35499_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj35499_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35499_onTouchDown is still running");
	return;
}
var obj35499_onTouchDown_runningActionsCount = 0;
var obj35499_onTouchDown_loopCount = 0;
obj35499_onTouchDown_actionGroup0();
});



/*
 *
 *   obj35499: Event SCActionDragDrop35502_droppedOutsideTargetActions
 *
 */
$("#obj35499").bind("SCActionDragDrop35502_droppedOutsideTargetActions", function(event) {
	if (window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35499_SCActionDragDrop35502_droppedOutsideTargetActions is still running");
	return;
}
var obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_runningActionsCount = 0;
var obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_loopCount = 0;
obj35499_SCActionDragDrop35502_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj35499: Event droppedInsideTargetActions_3
 *
 */
$("#obj35499").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj35499_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35499_droppedInsideTargetActions_3 is still running");
	return;
}
var obj35499_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj35499_droppedInsideTargetActions_3_loopCount = 0;
obj35499_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj35499: Event droppedInsideTargetActions_2
 *
 */
$("#obj35499").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj35499_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35499_droppedInsideTargetActions_2 is still running");
	return;
}
var obj35499_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj35499_droppedInsideTargetActions_2_loopCount = 0;
obj35499_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj35499: Event droppedInsideTargetActions
 *
 */
$("#obj35499").bind("droppedInsideTargetActions", function(event) {
	if (window.obj35499_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj35499_droppedInsideTargetActions is still running");
	return;
}
var obj35499_droppedInsideTargetActions_runningActionsCount = 0;
var obj35499_droppedInsideTargetActions_loopCount = 0;
obj35499_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj66942: Event Touch Down
 *
 */
$("#obj66942").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj66942_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj66942_onTap is still running");
	return;
}
var obj66942_onTap_runningActionsCount = 0;
var obj66942_onTap_loopCount = 0;
obj66942_onTap_actionGroup0();
});










/*
 *
 *   obj66934: Event Touch Down
 *
 */
$("#obj66934").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj66934_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj66934_onTap is still running");
	return;
}
var obj66934_onTap_runningActionsCount = 0;
var obj66934_onTap_loopCount = 0;
obj66934_onTap_actionGroup0();
});










/*
 *
 *   obj88321: Event Touch Down
 *
 */
$("#obj88321").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88321_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88321_onTap is still running");
	return;
}
var obj88321_onTap_runningActionsCount = 0;
var obj88321_onTap_loopCount = 0;
obj88321_onTap_actionGroup0();
});










/*
 *
 *   obj88316: Event Touch Down
 *
 */
$("#obj88316").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88316_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88316_onTap is still running");
	return;
}
var obj88316_onTap_runningActionsCount = 0;
var obj88316_onTap_loopCount = 0;
obj88316_onTap_actionGroup0();
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
	
$("#obj35673").trigger('SCEventShow');
$("#obj35657").trigger('SCEventShow');
$("#obj35654").trigger('SCEventShow');
$("#obj35650").trigger('SCEventShow');
$("#obj35646").trigger('SCEventShow');
$("#obj35644").trigger('SCEventShow');
$("#obj35642").trigger('SCEventShow');
$("#obj35640").trigger('SCEventShow');
$("#obj35638").trigger('SCEventShow');
$("#obj35636").trigger('SCEventShow');
$("#obj35634").trigger('SCEventShow');
$("#obj35632").trigger('SCEventShow');
$("#obj35630").trigger('SCEventShow');
$("#obj35628").trigger('SCEventShow');
$("#obj35626").trigger('SCEventShow');
$("#obj35624").trigger('SCEventShow');
$("#obj35622").trigger('SCEventShow');
$("#obj35620").trigger('SCEventShow');
$("#obj35581").trigger('SCEventShow');
$("#obj35579").trigger('SCEventShow');
$("#obj35578").trigger('SCEventShow');
$("#obj35577").trigger('SCEventShow');
$("#obj35538").trigger('SCEventShow');
$("#obj35499").trigger('SCEventShow');
$("#obj35677").trigger('SCEventShow');
$("#obj35675").trigger('SCEventShow');
$("#obj66942").trigger('SCEventShow');
$("#obj66934").trigger('SCEventShow');
$("#obj88321").trigger('SCEventShow');
$("#obj88316").trigger('SCEventShow');
$("#obj88326").trigger('SCEventShow');
$("#obj94871").trigger('SCEventShow');
$("#obj66948").trigger('SCEventShow');
	
});