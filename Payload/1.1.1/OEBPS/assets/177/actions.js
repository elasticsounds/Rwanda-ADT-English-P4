pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 49151;
pubcoder.page.title = pubcoder.page.title || "177";
pubcoder.page.number = pubcoder.page.number || 177;
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
var obj49315_onTap_activeActionGroupIndex = -1;
var obj49315_onTap_runningActionsCount = 0;
var obj49315_onTap_loopCount = 0;
var obj49312_onTap_activeActionGroupIndex = -1;
var obj49312_onTap_runningActionsCount = 0;
var obj49312_onTap_loopCount = 0;
var obj49308_onTap_activeActionGroupIndex = -1;
var obj49308_onTap_runningActionsCount = 0;
var obj49308_onTap_loopCount = 0;
var obj49248_onDrag_activeActionGroupIndex = -1;
var obj49248_onDrag_runningActionsCount = 0;
var obj49248_onDrag_loopCount = 0;
var obj49248_onTouchDown_activeActionGroupIndex = -1;
var obj49248_onTouchDown_runningActionsCount = 0;
var obj49248_onTouchDown_loopCount = 0;
var obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_runningActionsCount = 0;
var obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_loopCount = 0;
var obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj49248_droppedInsideTargetActions_3_loopCount = 0;
var obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj49248_droppedInsideTargetActions_2_loopCount = 0;
var obj49248_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj49248_droppedInsideTargetActions_runningActionsCount = 0;
var obj49248_droppedInsideTargetActions_loopCount = 0;
var obj49202_onDrag_activeActionGroupIndex = -1;
var obj49202_onDrag_runningActionsCount = 0;
var obj49202_onDrag_loopCount = 0;
var obj49202_onTouchDown_activeActionGroupIndex = -1;
var obj49202_onTouchDown_runningActionsCount = 0;
var obj49202_onTouchDown_loopCount = 0;
var obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_runningActionsCount = 0;
var obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_loopCount = 0;
var obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj49202_droppedInsideTargetActions_3_loopCount = 0;
var obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj49202_droppedInsideTargetActions_2_loopCount = 0;
var obj49202_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj49202_droppedInsideTargetActions_runningActionsCount = 0;
var obj49202_droppedInsideTargetActions_loopCount = 0;
var obj49162_onDrag_activeActionGroupIndex = -1;
var obj49162_onDrag_runningActionsCount = 0;
var obj49162_onDrag_loopCount = 0;
var obj49162_onTouchDown_activeActionGroupIndex = -1;
var obj49162_onTouchDown_runningActionsCount = 0;
var obj49162_onTouchDown_loopCount = 0;
var obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_runningActionsCount = 0;
var obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_loopCount = 0;
var obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj49162_droppedInsideTargetActions_3_loopCount = 0;
var obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj49162_droppedInsideTargetActions_2_loopCount = 0;
var obj49162_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj49162_droppedInsideTargetActions_runningActionsCount = 0;
var obj49162_droppedInsideTargetActions_loopCount = 0;
var obj67838_onTap_activeActionGroupIndex = -1;
var obj67838_onTap_runningActionsCount = 0;
var obj67838_onTap_loopCount = 0;
var obj67830_onTap_activeActionGroupIndex = -1;
var obj67830_onTap_runningActionsCount = 0;
var obj67830_onTap_loopCount = 0;
var obj86673_onTap_activeActionGroupIndex = -1;
var obj86673_onTap_runningActionsCount = 0;
var obj86673_onTap_loopCount = 0;
var obj89005_onTap_activeActionGroupIndex = -1;
var obj89005_onTap_runningActionsCount = 0;
var obj89005_onTap_loopCount = 0;
var obj89000_onTap_activeActionGroupIndex = -1;
var obj89000_onTap_runningActionsCount = 0;
var obj89000_onTap_loopCount = 0;
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
		
obj49315_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49315_onTap_activeActionGroupIndex = -1;
		$("#obj49315").trigger("obj49315_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49315) {
				console.warn("de-queueing event obj49315." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49315").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49315_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49317();
function goToPage_49317() {
	window.obj49315_onTap_runningActionsCount = obj49315_onTap_runningActionsCount + 1;
	$("#anchor1043")[0].click();
	window.obj49315_onTap_runningActionsCount = window.obj49315_onTap_runningActionsCount - 1;
if (window.obj49315_onTap_runningActionsCount < 0) {
	window.obj49315_onTap_runningActionsCount = 0;
} else if (window.obj49315_onTap_runningActionsCount == 0) {
	obj49315_onTap_actionGroup1();
}
}





















};
obj49315_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49315_onTap_activeActionGroupIndex = -1;
		$("#obj49315").trigger("obj49315_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49315) {
				console.warn("de-queueing event obj49315." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49315").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49315_onTap_activeActionGroupIndex = 1;
	





















};
obj49312_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49312_onTap_activeActionGroupIndex = -1;
		$("#obj49312").trigger("obj49312_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49312) {
				console.warn("de-queueing event obj49312." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49312").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49312_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86793();
function goToPage_86793() {
	window.obj49312_onTap_runningActionsCount = obj49312_onTap_runningActionsCount + 1;
	$("#anchor1044")[0].click();
	window.obj49312_onTap_runningActionsCount = window.obj49312_onTap_runningActionsCount - 1;
if (window.obj49312_onTap_runningActionsCount < 0) {
	window.obj49312_onTap_runningActionsCount = 0;
} else if (window.obj49312_onTap_runningActionsCount == 0) {
	obj49312_onTap_actionGroup1();
}
}





















};
obj49312_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49312_onTap_activeActionGroupIndex = -1;
		$("#obj49312").trigger("obj49312_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49312) {
				console.warn("de-queueing event obj49312." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49312").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49312_onTap_activeActionGroupIndex = 1;
	





















};
obj49308_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49308_onTap_activeActionGroupIndex = -1;
		$("#obj49308").trigger("obj49308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49308) {
				console.warn("de-queueing event obj49308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49308_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_49310();
function goToPage_49310() {
	window.obj49308_onTap_runningActionsCount = obj49308_onTap_runningActionsCount + 1;
	$("#anchor1045")[0].click();
	window.obj49308_onTap_runningActionsCount = window.obj49308_onTap_runningActionsCount - 1;
if (window.obj49308_onTap_runningActionsCount < 0) {
	window.obj49308_onTap_runningActionsCount = 0;
} else if (window.obj49308_onTap_runningActionsCount == 0) {
	obj49308_onTap_actionGroup1();
}
}





















};
obj49308_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49308_onTap_activeActionGroupIndex = -1;
		$("#obj49308").trigger("obj49308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49308) {
				console.warn("de-queueing event obj49308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49308_onTap_activeActionGroupIndex = 1;
	





















};
obj49248_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_onTouchDown_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj49248");
//	action: dragDrop
//	target: obj49248 
dragDrop_49251();
function dragDrop_49251() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj49248_onTouchDown_runningActionsCount = obj49248_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj49248');
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
	  	containerNode = $('#obj49300');
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
    	window.obj49248_onTouchDown_runningActionsCount = window.obj49248_onTouchDown_runningActionsCount - 1;
if (window.obj49248_onTouchDown_runningActionsCount < 0) {
	window.obj49248_onTouchDown_runningActionsCount = 0;
} else if (window.obj49248_onTouchDown_runningActionsCount == 0) {
	obj49248_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj49294","#obj49298","#obj49296");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_49251 = false;
    	var dropped_id_49251;
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
					dropped_49251 = true;
					dropped_id_49251 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_49251) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj49248").trigger('SCActionDragDrop49251_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj49248_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49248_onTouchDown_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj49248 
move_92749();
function move_92749() {
	window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_runningActionsCount = obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj49248");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 262;
	var moveY = 594;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_runningActionsCount = window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj49248_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49269();
function runjs_49269() {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = obj49248_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49296").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49270();
function runjs_49270() {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = obj49248_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49296").css("border-color", "#C00000"); $("#obj49296").css("border-width", "2px"); $("#obj49296").css("border-style", "solid"); $("#obj49296").css("border-radius", "10px"); $("#obj49296").css("-webkit-border-radius", "10px"); $("#obj49296").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_49271();
function switchText_49271() {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = obj49248_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj49248_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj49248 
move_49272();
function move_49272() {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = obj49248_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj49248");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 262;
	var moveY = 594;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj49248_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_49273();
function runjs_49273() {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = obj49248_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49296").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_49274();
function runjs_49274() {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = obj49248_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49296").css("border-color", "#000000"); $("#obj49296").css("border-width", "1px"); $("#obj49296").css("border-style", "solid"); $("#obj49296").css("border-radius", "15px"); $("#obj49296").css("-webkit-border-radius", "15px"); $("#obj49296").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_49275();
function runjs_49275() {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = obj49248_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49248").css("border-color", "rgba(0,0,0,0)"); $("#obj49248").css("border-width", "0px"); $("#obj49248").css("border-style", "solid"); $("#obj49248").css("border-radius", "20px"); $("#obj49248").css("-webkit-border-radius", "20px"); $("#obj49248").css("-moz-border-radius", "20px"); $("#obj49248_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_49276();
function switchText_49276() {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = obj49248_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj49248_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj49245 
playAudio_49277();
function playAudio_49277() {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = obj49248_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj49245")[0];
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
		    window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49248_droppedInsideTargetActions_3_runningActionsCount = window.obj49248_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj49248_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj49248_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49259();
function runjs_49259() {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = obj49248_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49298").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49260();
function runjs_49260() {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = obj49248_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49298").css("border-color", "#C00000"); $("#obj49298").css("border-width", "2px"); $("#obj49298").css("border-style", "solid"); $("#obj49298").css("border-radius", "10px"); $("#obj49298").css("-webkit-border-radius", "10px"); $("#obj49298").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_49261();
function switchText_49261() {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = obj49248_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj49248_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj49248 
move_49262();
function move_49262() {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = obj49248_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj49248");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 262;
	var moveY = 594;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj49248_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_49263();
function runjs_49263() {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = obj49248_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49298").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_49264();
function runjs_49264() {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = obj49248_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49298").css("border-color", "#000000"); $("#obj49298").css("border-width", "1px"); $("#obj49298").css("border-style", "solid"); $("#obj49298").css("border-radius", "15px"); $("#obj49298").css("-webkit-border-radius", "15px"); $("#obj49298").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_49265();
function runjs_49265() {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = obj49248_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49248").css("border-color", "rgba(0,0,0,0)"); $("#obj49248").css("border-width", "0px"); $("#obj49248").css("border-style", "solid"); $("#obj49248").css("border-radius", "20px"); $("#obj49248").css("-webkit-border-radius", "20px"); $("#obj49248").css("-moz-border-radius", "20px"); $("#obj49248_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_49266();
function switchText_49266() {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = obj49248_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj49248_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj49245 
playAudio_49267();
function playAudio_49267() {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = obj49248_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj49245")[0];
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
		    window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49248_droppedInsideTargetActions_2_runningActionsCount = window.obj49248_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj49248_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj49248_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49253();
function runjs_49253() {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = obj49248_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49294").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_runningActionsCount = window.obj49248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49254();
function runjs_49254() {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = obj49248_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49294").css("border-color", "#058E3F"); $("#obj49294").css("border-width", "2px"); $("#obj49294").css("border-style", "solid"); $("#obj49294").css("border-radius", "10px"); $("#obj49294").css("-webkit-border-radius", "10px"); $("#obj49294").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49248_droppedInsideTargetActions_runningActionsCount = window.obj49248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj49248_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49288 
hide_49255();
function hide_49255() {
	var selector = "#obj49288";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj49248_droppedInsideTargetActions_runningActionsCount = obj49248_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj49248_droppedInsideTargetActions_runningActionsCount = window.obj49248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_49255(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj49248_droppedInsideTargetActions_runningActionsCount = window.obj49248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj49248_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_49256();
function switchText_49256() {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = obj49248_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49248_droppedInsideTargetActions_runningActionsCount = window.obj49248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49248_droppedInsideTargetActions_runningActionsCount = window.obj49248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj49248_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj49244 
playAudio_49257();
function playAudio_49257() {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = obj49248_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj49244")[0];
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
		    window.obj49248_droppedInsideTargetActions_runningActionsCount = window.obj49248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49248_droppedInsideTargetActions_runningActionsCount = window.obj49248_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49248_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49248_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49248_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49248_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj49248_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49248").trigger("obj49248_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49248) {
				console.warn("de-queueing event obj49248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49248_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj49202_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_onTouchDown_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj49202");
//	action: dragDrop
//	target: obj49202 
dragDrop_49205();
function dragDrop_49205() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj49202_onTouchDown_runningActionsCount = obj49202_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj49202');
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
	  	containerNode = $('#obj49300');
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
    	window.obj49202_onTouchDown_runningActionsCount = window.obj49202_onTouchDown_runningActionsCount - 1;
if (window.obj49202_onTouchDown_runningActionsCount < 0) {
	window.obj49202_onTouchDown_runningActionsCount = 0;
} else if (window.obj49202_onTouchDown_runningActionsCount == 0) {
	obj49202_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj49296","#obj49298","#obj49294");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_49205 = false;
    	var dropped_id_49205;
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
					dropped_49205 = true;
					dropped_id_49205 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_49205) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj49202").trigger('SCActionDragDrop49205_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj49202_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49202_onTouchDown_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj49202 
move_92747();
function move_92747() {
	window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_runningActionsCount = obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj49202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 590;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_runningActionsCount = window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj49202_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49223();
function runjs_49223() {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = obj49202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49294").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49224();
function runjs_49224() {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = obj49202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49294").css("border-color", "#C00000"); $("#obj49294").css("border-width", "2px"); $("#obj49294").css("border-style", "solid"); $("#obj49294").css("border-radius", "10px"); $("#obj49294").css("-webkit-border-radius", "10px"); $("#obj49294").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_49225();
function switchText_49225() {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = obj49202_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj49202_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj49202 
move_49226();
function move_49226() {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = obj49202_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj49202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 590;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj49202_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_49227();
function runjs_49227() {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = obj49202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49294").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_49228();
function runjs_49228() {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = obj49202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49294").css("border-color", "#000000"); $("#obj49294").css("border-width", "1px"); $("#obj49294").css("border-style", "solid"); $("#obj49294").css("border-radius", "15px"); $("#obj49294").css("-webkit-border-radius", "15px"); $("#obj49294").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_49229();
function runjs_49229() {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = obj49202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49202").css("border-color", "rgba(0,0,0,0)"); $("#obj49202").css("border-width", "0px"); $("#obj49202").css("border-style", "solid"); $("#obj49202").css("border-radius", "20px"); $("#obj49202").css("-webkit-border-radius", "20px"); $("#obj49202").css("-moz-border-radius", "20px"); $("#obj49202_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_49230();
function switchText_49230() {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = obj49202_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj49202_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj49245 
playAudio_49231();
function playAudio_49231() {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = obj49202_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj49245")[0];
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
		    window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49202_droppedInsideTargetActions_3_runningActionsCount = window.obj49202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj49202_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj49202_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49213();
function runjs_49213() {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = obj49202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49298").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49214();
function runjs_49214() {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = obj49202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49298").css("border-color", "#C00000"); $("#obj49298").css("border-width", "2px"); $("#obj49298").css("border-style", "solid"); $("#obj49298").css("border-radius", "10px"); $("#obj49298").css("-webkit-border-radius", "10px"); $("#obj49298").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_49215();
function switchText_49215() {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = obj49202_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj49202_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj49202 
move_49216();
function move_49216() {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = obj49202_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj49202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 590;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj49202_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_49217();
function runjs_49217() {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = obj49202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49298").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_49218();
function runjs_49218() {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = obj49202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49298").css("border-color", "#000000"); $("#obj49298").css("border-width", "1px"); $("#obj49298").css("border-style", "solid"); $("#obj49298").css("border-radius", "15px"); $("#obj49298").css("-webkit-border-radius", "15px"); $("#obj49298").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_49219();
function runjs_49219() {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = obj49202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49202").css("border-color", "rgba(0,0,0,0)"); $("#obj49202").css("border-width", "0px"); $("#obj49202").css("border-style", "solid"); $("#obj49202").css("border-radius", "20px"); $("#obj49202").css("-webkit-border-radius", "20px"); $("#obj49202").css("-moz-border-radius", "20px"); $("#obj49202_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_49220();
function switchText_49220() {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = obj49202_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj49202_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj49245 
playAudio_49221();
function playAudio_49221() {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = obj49202_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj49245")[0];
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
		    window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49202_droppedInsideTargetActions_2_runningActionsCount = window.obj49202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj49202_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj49202_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49207();
function runjs_49207() {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = obj49202_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49296").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_runningActionsCount = window.obj49202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49208();
function runjs_49208() {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = obj49202_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49296").css("border-color", "#058E3F"); $("#obj49296").css("border-width", "2px"); $("#obj49296").css("border-style", "solid"); $("#obj49296").css("border-radius", "10px"); $("#obj49296").css("-webkit-border-radius", "10px"); $("#obj49296").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49202_droppedInsideTargetActions_runningActionsCount = window.obj49202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj49202_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49290 
hide_49209();
function hide_49209() {
	var selector = "#obj49290";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj49202_droppedInsideTargetActions_runningActionsCount = obj49202_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj49202_droppedInsideTargetActions_runningActionsCount = window.obj49202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_49209(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj49202_droppedInsideTargetActions_runningActionsCount = window.obj49202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj49202_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_49210();
function switchText_49210() {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = obj49202_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49202_droppedInsideTargetActions_runningActionsCount = window.obj49202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49202_droppedInsideTargetActions_runningActionsCount = window.obj49202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj49202_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj49244 
playAudio_49211();
function playAudio_49211() {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = obj49202_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj49244")[0];
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
		    window.obj49202_droppedInsideTargetActions_runningActionsCount = window.obj49202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49202_droppedInsideTargetActions_runningActionsCount = window.obj49202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49202_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj49202_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49202").trigger("obj49202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49202) {
				console.warn("de-queueing event obj49202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49202_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj49162_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_onTouchDown_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj49162");
//	action: dragDrop
//	target: obj49162 
dragDrop_49165();
function dragDrop_49165() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj49162_onTouchDown_runningActionsCount = obj49162_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj49162');
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
	  	containerNode = $('#obj49300');
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
    	window.obj49162_onTouchDown_runningActionsCount = window.obj49162_onTouchDown_runningActionsCount - 1;
if (window.obj49162_onTouchDown_runningActionsCount < 0) {
	window.obj49162_onTouchDown_runningActionsCount = 0;
} else if (window.obj49162_onTouchDown_runningActionsCount == 0) {
	obj49162_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj49298","#obj49294","#obj49296");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_49165 = false;
    	var dropped_id_49165;
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
					dropped_49165 = true;
					dropped_id_49165 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_49165) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj49162").trigger('SCActionDragDrop49165_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj49162_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49162_onTouchDown_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj49162 
move_92751();
function move_92751() {
	window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_runningActionsCount = obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj49162");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 590;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_runningActionsCount = window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj49162_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49183();
function runjs_49183() {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = obj49162_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49296").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49184();
function runjs_49184() {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = obj49162_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49296").css("border-color", "#C00000"); $("#obj49296").css("border-width", "2px"); $("#obj49296").css("border-style", "solid"); $("#obj49296").css("border-radius", "10px"); $("#obj49296").css("-webkit-border-radius", "10px"); $("#obj49296").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_49185();
function switchText_49185() {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = obj49162_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj49162_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj49162 
move_49186();
function move_49186() {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = obj49162_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj49162");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 590;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj49162_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_49187();
function runjs_49187() {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = obj49162_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49296").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_49188();
function runjs_49188() {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = obj49162_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49296").css("border-color", "#000000"); $("#obj49296").css("border-width", "1px"); $("#obj49296").css("border-style", "solid"); $("#obj49296").css("border-radius", "15px"); $("#obj49296").css("-webkit-border-radius", "15px"); $("#obj49296").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_49189();
function runjs_49189() {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = obj49162_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj49162").css("border-color", "rgba(0,0,0,0)"); $("#obj49162").css("border-width", "0px"); $("#obj49162").css("border-style", "solid"); $("#obj49162").css("border-radius", "20px"); $("#obj49162").css("-webkit-border-radius", "20px"); $("#obj49162").css("-moz-border-radius", "20px"); $("#obj49162_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_49190();
function switchText_49190() {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = obj49162_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj49162_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj49245 
playAudio_49191();
function playAudio_49191() {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = obj49162_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj49245")[0];
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
		    window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49162_droppedInsideTargetActions_3_runningActionsCount = window.obj49162_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj49162_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj49162_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49173();
function runjs_49173() {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = obj49162_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49294").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49174();
function runjs_49174() {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = obj49162_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49294").css("border-color", "#C00000"); $("#obj49294").css("border-width", "2px"); $("#obj49294").css("border-style", "solid"); $("#obj49294").css("border-radius", "10px"); $("#obj49294").css("-webkit-border-radius", "10px"); $("#obj49294").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_49175();
function switchText_49175() {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = obj49162_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj49162_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj49162 
move_49176();
function move_49176() {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = obj49162_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj49162");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 375;
	var moveY = 590;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj49162_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_49177();
function runjs_49177() {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = obj49162_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49294").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_49178();
function runjs_49178() {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = obj49162_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49294").css("border-color", "#000000"); $("#obj49294").css("border-width", "1px"); $("#obj49294").css("border-style", "solid"); $("#obj49294").css("border-radius", "15px"); $("#obj49294").css("-webkit-border-radius", "15px"); $("#obj49294").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_49179();
function runjs_49179() {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = obj49162_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj49162").css("border-color", "rgba(0,0,0,0)"); $("#obj49162").css("border-width", "0px"); $("#obj49162").css("border-style", "solid"); $("#obj49162").css("border-radius", "20px"); $("#obj49162").css("-webkit-border-radius", "20px"); $("#obj49162").css("-moz-border-radius", "20px"); $("#obj49162_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_49180();
function switchText_49180() {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = obj49162_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj49162_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj49245 
playAudio_49181();
function playAudio_49181() {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = obj49162_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj49245")[0];
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
		    window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49162_droppedInsideTargetActions_2_runningActionsCount = window.obj49162_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj49162_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj49162_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_49167();
function runjs_49167() {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = obj49162_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49298").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_runningActionsCount = window.obj49162_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_49168();
function runjs_49168() {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = obj49162_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj49298").css("border-color", "#058E3F"); $("#obj49298").css("border-width", "2px"); $("#obj49298").css("border-style", "solid"); $("#obj49298").css("border-radius", "10px"); $("#obj49298").css("-webkit-border-radius", "10px"); $("#obj49298").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj49162_droppedInsideTargetActions_runningActionsCount = window.obj49162_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj49162_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj49292 
hide_49169();
function hide_49169() {
	var selector = "#obj49292";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj49162_droppedInsideTargetActions_runningActionsCount = obj49162_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj49162_droppedInsideTargetActions_runningActionsCount = window.obj49162_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_49169(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj49162_droppedInsideTargetActions_runningActionsCount = window.obj49162_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj49162_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_49170();
function switchText_49170() {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = obj49162_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj49246_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj49246_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj49246").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj49246_content");
			setTimeout(function () {
				window.obj49162_droppedInsideTargetActions_runningActionsCount = window.obj49162_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj49246 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj49162_droppedInsideTargetActions_runningActionsCount = window.obj49162_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj49162_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj49244 
playAudio_49171();
function playAudio_49171() {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = obj49162_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj49244")[0];
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
		    window.obj49162_droppedInsideTargetActions_runningActionsCount = window.obj49162_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj49162_droppedInsideTargetActions_runningActionsCount = window.obj49162_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj49162_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj49162_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj49162_droppedInsideTargetActions_runningActionsCount == 0) {
	obj49162_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj49162_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj49162").trigger("obj49162_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 49162) {
				console.warn("de-queueing event obj49162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj49162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj49162_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj67838_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67838_onTap_activeActionGroupIndex = -1;
		$("#obj67838").trigger("obj67838_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67838) {
				console.warn("de-queueing event obj67838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67838_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67838 
hide_67841();
function hide_67841() {
	var selector = "#obj67838";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67838_onTap_runningActionsCount = obj67838_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67838_onTap_runningActionsCount = window.obj67838_onTap_runningActionsCount - 1;
if (window.obj67838_onTap_runningActionsCount < 0) {
	window.obj67838_onTap_runningActionsCount = 0;
} else if (window.obj67838_onTap_runningActionsCount == 0) {
	obj67838_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67841(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67838_onTap_runningActionsCount = window.obj67838_onTap_runningActionsCount - 1;
if (window.obj67838_onTap_runningActionsCount < 0) {
	window.obj67838_onTap_runningActionsCount = 0;
} else if (window.obj67838_onTap_runningActionsCount == 0) {
	obj67838_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67844 
stopMovie_67840();
function stopMovie_67840() {
	window.obj67838_onTap_runningActionsCount = obj67838_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67844")[0];
	myVideo.pause();
	window.obj67838_onTap_runningActionsCount = window.obj67838_onTap_runningActionsCount - 1;
if (window.obj67838_onTap_runningActionsCount < 0) {
	window.obj67838_onTap_runningActionsCount = 0;
} else if (window.obj67838_onTap_runningActionsCount == 0) {
	obj67838_onTap_actionGroup1();
}
}
















};
obj67838_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67838_onTap_activeActionGroupIndex = -1;
		$("#obj67838").trigger("obj67838_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67838) {
				console.warn("de-queueing event obj67838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67838_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67830
(function(){
	window.obj67838_onTap_runningActionsCount = obj67838_onTap_runningActionsCount + 1;

	var selector = "#obj67830";
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
					window.obj67838_onTap_runningActionsCount = window.obj67838_onTap_runningActionsCount - 1;
if (window.obj67838_onTap_runningActionsCount < 0) {
	window.obj67838_onTap_runningActionsCount = 0;
} else if (window.obj67838_onTap_runningActionsCount == 0) {
	obj67838_onTap_actionGroup2();
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
				window.obj67838_onTap_runningActionsCount = window.obj67838_onTap_runningActionsCount - 1;
if (window.obj67838_onTap_runningActionsCount < 0) {
	window.obj67838_onTap_runningActionsCount = 0;
} else if (window.obj67838_onTap_runningActionsCount == 0) {
	obj67838_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67838_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67838_onTap_activeActionGroupIndex = -1;
		$("#obj67838").trigger("obj67838_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67838) {
				console.warn("de-queueing event obj67838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67838_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67844 
move_67843();
function move_67843() {
	window.obj67838_onTap_runningActionsCount = obj67838_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67844");
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
			window.obj67838_onTap_runningActionsCount = window.obj67838_onTap_runningActionsCount - 1;
if (window.obj67838_onTap_runningActionsCount < 0) {
	window.obj67838_onTap_runningActionsCount = 0;
} else if (window.obj67838_onTap_runningActionsCount == 0) {
	obj67838_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67838_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67838_onTap_activeActionGroupIndex = -1;
		$("#obj67838").trigger("obj67838_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67838) {
				console.warn("de-queueing event obj67838." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67838").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67838_onTap_activeActionGroupIndex = 3;
	





















};
obj67830_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67830_onTap_activeActionGroupIndex = -1;
		$("#obj67830").trigger("obj67830_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67830) {
				console.warn("de-queueing event obj67830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67830_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67830 
hide_67833();
function hide_67833() {
	var selector = "#obj67830";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67830_onTap_runningActionsCount = obj67830_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67830_onTap_runningActionsCount = window.obj67830_onTap_runningActionsCount - 1;
if (window.obj67830_onTap_runningActionsCount < 0) {
	window.obj67830_onTap_runningActionsCount = 0;
} else if (window.obj67830_onTap_runningActionsCount == 0) {
	obj67830_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67833(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67830_onTap_runningActionsCount = window.obj67830_onTap_runningActionsCount - 1;
if (window.obj67830_onTap_runningActionsCount < 0) {
	window.obj67830_onTap_runningActionsCount = 0;
} else if (window.obj67830_onTap_runningActionsCount == 0) {
	obj67830_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67844 
playPauseMovie_67832();
function playPauseMovie_67832() {
	window.obj67830_onTap_runningActionsCount = obj67830_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67844")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67830_onTap_runningActionsCount = window.obj67830_onTap_runningActionsCount - 1;
if (window.obj67830_onTap_runningActionsCount < 0) {
	window.obj67830_onTap_runningActionsCount = 0;
} else if (window.obj67830_onTap_runningActionsCount == 0) {
	obj67830_onTap_actionGroup1();
}
}

















};
obj67830_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67830_onTap_activeActionGroupIndex = -1;
		$("#obj67830").trigger("obj67830_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67830) {
				console.warn("de-queueing event obj67830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67830_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67838
(function(){
	window.obj67830_onTap_runningActionsCount = obj67830_onTap_runningActionsCount + 1;

	var selector = "#obj67838";
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
					window.obj67830_onTap_runningActionsCount = window.obj67830_onTap_runningActionsCount - 1;
if (window.obj67830_onTap_runningActionsCount < 0) {
	window.obj67830_onTap_runningActionsCount = 0;
} else if (window.obj67830_onTap_runningActionsCount == 0) {
	obj67830_onTap_actionGroup2();
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
				window.obj67830_onTap_runningActionsCount = window.obj67830_onTap_runningActionsCount - 1;
if (window.obj67830_onTap_runningActionsCount < 0) {
	window.obj67830_onTap_runningActionsCount = 0;
} else if (window.obj67830_onTap_runningActionsCount == 0) {
	obj67830_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67830_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67830_onTap_activeActionGroupIndex = -1;
		$("#obj67830").trigger("obj67830_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67830) {
				console.warn("de-queueing event obj67830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67830_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67844 
move_67835();
function move_67835() {
	window.obj67830_onTap_runningActionsCount = obj67830_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67844");
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
			window.obj67830_onTap_runningActionsCount = window.obj67830_onTap_runningActionsCount - 1;
if (window.obj67830_onTap_runningActionsCount < 0) {
	window.obj67830_onTap_runningActionsCount = 0;
} else if (window.obj67830_onTap_runningActionsCount == 0) {
	obj67830_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67830_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67830_onTap_activeActionGroupIndex = -1;
		$("#obj67830").trigger("obj67830_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67830) {
				console.warn("de-queueing event obj67830." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67830").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67830_onTap_activeActionGroupIndex = 3;
	





















};
obj86673_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86673_onTap_activeActionGroupIndex = -1;
		$("#obj86673").trigger("obj86673_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86673) {
				console.warn("de-queueing event obj86673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86673_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86675();
function goToPage_86675() {
	window.obj86673_onTap_runningActionsCount = obj86673_onTap_runningActionsCount + 1;
	$("#anchor1048")[0].click();
	window.obj86673_onTap_runningActionsCount = window.obj86673_onTap_runningActionsCount - 1;
if (window.obj86673_onTap_runningActionsCount < 0) {
	window.obj86673_onTap_runningActionsCount = 0;
} else if (window.obj86673_onTap_runningActionsCount == 0) {
	obj86673_onTap_actionGroup1();
}
}





















};
obj86673_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86673_onTap_activeActionGroupIndex = -1;
		$("#obj86673").trigger("obj86673_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86673) {
				console.warn("de-queueing event obj86673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86673_onTap_activeActionGroupIndex = 1;
	





















};
obj89005_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89005_onTap_activeActionGroupIndex = -1;
		$("#obj89005").trigger("obj89005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89005) {
				console.warn("de-queueing event obj89005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89005_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89010 
stopAudio_89007();
function stopAudio_89007() {
	window.obj89005_onTap_runningActionsCount = obj89005_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89010")[0];
	myAudio.pause();
	window.obj89005_onTap_runningActionsCount = window.obj89005_onTap_runningActionsCount - 1;
if (window.obj89005_onTap_runningActionsCount < 0) {
	window.obj89005_onTap_runningActionsCount = 0;
} else if (window.obj89005_onTap_runningActionsCount == 0) {
	obj89005_onTap_actionGroup1();
}
}








};
obj89005_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89005_onTap_activeActionGroupIndex = -1;
		$("#obj89005").trigger("obj89005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89005) {
				console.warn("de-queueing event obj89005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89005_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89005 
hide_89008();
function hide_89008() {
	var selector = "#obj89005";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89005_onTap_runningActionsCount = obj89005_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89005_onTap_runningActionsCount = window.obj89005_onTap_runningActionsCount - 1;
if (window.obj89005_onTap_runningActionsCount < 0) {
	window.obj89005_onTap_runningActionsCount = 0;
} else if (window.obj89005_onTap_runningActionsCount == 0) {
	obj89005_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89008(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89005_onTap_runningActionsCount = window.obj89005_onTap_runningActionsCount - 1;
if (window.obj89005_onTap_runningActionsCount < 0) {
	window.obj89005_onTap_runningActionsCount = 0;
} else if (window.obj89005_onTap_runningActionsCount == 0) {
	obj89005_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89005_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89005_onTap_activeActionGroupIndex = -1;
		$("#obj89005").trigger("obj89005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89005) {
				console.warn("de-queueing event obj89005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89005_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89000
(function(){
	window.obj89005_onTap_runningActionsCount = obj89005_onTap_runningActionsCount + 1;

	var selector = "#obj89000";
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
					window.obj89005_onTap_runningActionsCount = window.obj89005_onTap_runningActionsCount - 1;
if (window.obj89005_onTap_runningActionsCount < 0) {
	window.obj89005_onTap_runningActionsCount = 0;
} else if (window.obj89005_onTap_runningActionsCount == 0) {
	obj89005_onTap_actionGroup3();
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
				window.obj89005_onTap_runningActionsCount = window.obj89005_onTap_runningActionsCount - 1;
if (window.obj89005_onTap_runningActionsCount < 0) {
	window.obj89005_onTap_runningActionsCount = 0;
} else if (window.obj89005_onTap_runningActionsCount == 0) {
	obj89005_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89005_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89005_onTap_activeActionGroupIndex = -1;
		$("#obj89005").trigger("obj89005_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89005) {
				console.warn("de-queueing event obj89005." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89005").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89005_onTap_activeActionGroupIndex = 3;
	





















};
obj89000_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89000_onTap_activeActionGroupIndex = -1;
		$("#obj89000").trigger("obj89000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89000) {
				console.warn("de-queueing event obj89000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89000_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89000 
hide_89002();
function hide_89002() {
	var selector = "#obj89000";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89000_onTap_runningActionsCount = obj89000_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89000_onTap_runningActionsCount = window.obj89000_onTap_runningActionsCount - 1;
if (window.obj89000_onTap_runningActionsCount < 0) {
	window.obj89000_onTap_runningActionsCount = 0;
} else if (window.obj89000_onTap_runningActionsCount == 0) {
	obj89000_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89002(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89000_onTap_runningActionsCount = window.obj89000_onTap_runningActionsCount - 1;
if (window.obj89000_onTap_runningActionsCount < 0) {
	window.obj89000_onTap_runningActionsCount = 0;
} else if (window.obj89000_onTap_runningActionsCount == 0) {
	obj89000_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89000_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89000_onTap_activeActionGroupIndex = -1;
		$("#obj89000").trigger("obj89000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89000) {
				console.warn("de-queueing event obj89000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89000_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89005
(function(){
	window.obj89000_onTap_runningActionsCount = obj89000_onTap_runningActionsCount + 1;

	var selector = "#obj89005";
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
					window.obj89000_onTap_runningActionsCount = window.obj89000_onTap_runningActionsCount - 1;
if (window.obj89000_onTap_runningActionsCount < 0) {
	window.obj89000_onTap_runningActionsCount = 0;
} else if (window.obj89000_onTap_runningActionsCount == 0) {
	obj89000_onTap_actionGroup2();
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
				window.obj89000_onTap_runningActionsCount = window.obj89000_onTap_runningActionsCount - 1;
if (window.obj89000_onTap_runningActionsCount < 0) {
	window.obj89000_onTap_runningActionsCount = 0;
} else if (window.obj89000_onTap_runningActionsCount == 0) {
	obj89000_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89000_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89000_onTap_activeActionGroupIndex = -1;
		$("#obj89000").trigger("obj89000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89000) {
				console.warn("de-queueing event obj89000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89000_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89010 
playAudio_89004();
function playAudio_89004() {
	window.obj89000_onTap_runningActionsCount = obj89000_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89010")[0];
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
		    window.obj89000_onTap_runningActionsCount = window.obj89000_onTap_runningActionsCount - 1;
if (window.obj89000_onTap_runningActionsCount < 0) {
	window.obj89000_onTap_runningActionsCount = 0;
} else if (window.obj89000_onTap_runningActionsCount == 0) {
	obj89000_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89000_onTap_runningActionsCount = window.obj89000_onTap_runningActionsCount - 1;
if (window.obj89000_onTap_runningActionsCount < 0) {
	window.obj89000_onTap_runningActionsCount = 0;
} else if (window.obj89000_onTap_runningActionsCount == 0) {
	obj89000_onTap_actionGroup3();
}
	}
}









};
obj89000_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89000_onTap_activeActionGroupIndex = -1;
		$("#obj89000").trigger("obj89000_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89000) {
				console.warn("de-queueing event obj89000." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89000").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89000_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj49315: Event Touch Down
 *
 */
$("#obj49315").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49315_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49315_onTap is still running");
	return;
}
var obj49315_onTap_runningActionsCount = 0;
var obj49315_onTap_loopCount = 0;
obj49315_onTap_actionGroup0();
});










/*
 *
 *   obj49312: Event Touch Down
 *
 */
$("#obj49312").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49312_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49312_onTap is still running");
	return;
}
var obj49312_onTap_runningActionsCount = 0;
var obj49312_onTap_loopCount = 0;
obj49312_onTap_actionGroup0();
});










/*
 *
 *   obj49308: Event Touch Down
 *
 */
$("#obj49308").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj49308_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49308_onTap is still running");
	return;
}
var obj49308_onTap_runningActionsCount = 0;
var obj49308_onTap_loopCount = 0;
obj49308_onTap_actionGroup0();
});















































































































/*
 *
 *   obj49248: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj49248");
	var winTarget = document.getElementById("obj49248");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj49248").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj49248_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj49248_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj49248_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49248_onTouchDown is still running");
	return;
}
var obj49248_onTouchDown_runningActionsCount = 0;
var obj49248_onTouchDown_loopCount = 0;
obj49248_onTouchDown_actionGroup0();
});



/*
 *
 *   obj49248: Event SCActionDragDrop49251_droppedOutsideTargetActions
 *
 */
$("#obj49248").bind("SCActionDragDrop49251_droppedOutsideTargetActions", function(event) {
	if (window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49248_SCActionDragDrop49251_droppedOutsideTargetActions is still running");
	return;
}
var obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_runningActionsCount = 0;
var obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_loopCount = 0;
obj49248_SCActionDragDrop49251_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj49248: Event droppedInsideTargetActions_3
 *
 */
$("#obj49248").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj49248_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49248_droppedInsideTargetActions_3 is still running");
	return;
}
var obj49248_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj49248_droppedInsideTargetActions_3_loopCount = 0;
obj49248_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj49248: Event droppedInsideTargetActions_2
 *
 */
$("#obj49248").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj49248_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49248_droppedInsideTargetActions_2 is still running");
	return;
}
var obj49248_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj49248_droppedInsideTargetActions_2_loopCount = 0;
obj49248_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj49248: Event droppedInsideTargetActions
 *
 */
$("#obj49248").bind("droppedInsideTargetActions", function(event) {
	if (window.obj49248_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49248_droppedInsideTargetActions is still running");
	return;
}
var obj49248_droppedInsideTargetActions_runningActionsCount = 0;
var obj49248_droppedInsideTargetActions_loopCount = 0;
obj49248_droppedInsideTargetActions_actionGroup0();
});














































/*
 *
 *   obj49202: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj49202");
	var winTarget = document.getElementById("obj49202");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj49202").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj49202_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj49202_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj49202_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49202_onTouchDown is still running");
	return;
}
var obj49202_onTouchDown_runningActionsCount = 0;
var obj49202_onTouchDown_loopCount = 0;
obj49202_onTouchDown_actionGroup0();
});



/*
 *
 *   obj49202: Event SCActionDragDrop49205_droppedOutsideTargetActions
 *
 */
$("#obj49202").bind("SCActionDragDrop49205_droppedOutsideTargetActions", function(event) {
	if (window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49202_SCActionDragDrop49205_droppedOutsideTargetActions is still running");
	return;
}
var obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_runningActionsCount = 0;
var obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_loopCount = 0;
obj49202_SCActionDragDrop49205_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj49202: Event droppedInsideTargetActions_3
 *
 */
$("#obj49202").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj49202_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49202_droppedInsideTargetActions_3 is still running");
	return;
}
var obj49202_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj49202_droppedInsideTargetActions_3_loopCount = 0;
obj49202_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj49202: Event droppedInsideTargetActions_2
 *
 */
$("#obj49202").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj49202_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49202_droppedInsideTargetActions_2 is still running");
	return;
}
var obj49202_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj49202_droppedInsideTargetActions_2_loopCount = 0;
obj49202_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj49202: Event droppedInsideTargetActions
 *
 */
$("#obj49202").bind("droppedInsideTargetActions", function(event) {
	if (window.obj49202_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49202_droppedInsideTargetActions is still running");
	return;
}
var obj49202_droppedInsideTargetActions_runningActionsCount = 0;
var obj49202_droppedInsideTargetActions_loopCount = 0;
obj49202_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj49162: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj49162");
	var winTarget = document.getElementById("obj49162");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj49162").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj49162_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj49162_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj49162_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49162_onTouchDown is still running");
	return;
}
var obj49162_onTouchDown_runningActionsCount = 0;
var obj49162_onTouchDown_loopCount = 0;
obj49162_onTouchDown_actionGroup0();
});



/*
 *
 *   obj49162: Event SCActionDragDrop49165_droppedOutsideTargetActions
 *
 */
$("#obj49162").bind("SCActionDragDrop49165_droppedOutsideTargetActions", function(event) {
	if (window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49162_SCActionDragDrop49165_droppedOutsideTargetActions is still running");
	return;
}
var obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_runningActionsCount = 0;
var obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_loopCount = 0;
obj49162_SCActionDragDrop49165_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj49162: Event droppedInsideTargetActions_3
 *
 */
$("#obj49162").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj49162_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49162_droppedInsideTargetActions_3 is still running");
	return;
}
var obj49162_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj49162_droppedInsideTargetActions_3_loopCount = 0;
obj49162_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj49162: Event droppedInsideTargetActions_2
 *
 */
$("#obj49162").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj49162_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49162_droppedInsideTargetActions_2 is still running");
	return;
}
var obj49162_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj49162_droppedInsideTargetActions_2_loopCount = 0;
obj49162_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj49162: Event droppedInsideTargetActions
 *
 */
$("#obj49162").bind("droppedInsideTargetActions", function(event) {
	if (window.obj49162_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj49162_droppedInsideTargetActions is still running");
	return;
}
var obj49162_droppedInsideTargetActions_runningActionsCount = 0;
var obj49162_droppedInsideTargetActions_loopCount = 0;
obj49162_droppedInsideTargetActions_actionGroup0();
});



































/*
 *
 *   obj67838: Event Touch Down
 *
 */
$("#obj67838").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67838_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67838_onTap is still running");
	return;
}
var obj67838_onTap_runningActionsCount = 0;
var obj67838_onTap_loopCount = 0;
obj67838_onTap_actionGroup0();
});










/*
 *
 *   obj67830: Event Touch Down
 *
 */
$("#obj67830").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67830_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67830_onTap is still running");
	return;
}
var obj67830_onTap_runningActionsCount = 0;
var obj67830_onTap_loopCount = 0;
obj67830_onTap_actionGroup0();
});










/*
 *
 *   obj86673: Event Touch Down
 *
 */
$("#obj86673").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86673_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86673_onTap is still running");
	return;
}
var obj86673_onTap_runningActionsCount = 0;
var obj86673_onTap_loopCount = 0;
obj86673_onTap_actionGroup0();
});










/*
 *
 *   obj89005: Event Touch Down
 *
 */
$("#obj89005").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89005_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89005_onTap is still running");
	return;
}
var obj89005_onTap_runningActionsCount = 0;
var obj89005_onTap_loopCount = 0;
obj89005_onTap_actionGroup0();
});










/*
 *
 *   obj89000: Event Touch Down
 *
 */
$("#obj89000").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89000_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89000_onTap is still running");
	return;
}
var obj89000_onTap_runningActionsCount = 0;
var obj89000_onTap_loopCount = 0;
obj89000_onTap_actionGroup0();
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
	
$("#obj49331").trigger('SCEventShow');
$("#obj49315").trigger('SCEventShow');
$("#obj49312").trigger('SCEventShow');
$("#obj49308").trigger('SCEventShow');
$("#obj49306").trigger('SCEventShow');
$("#obj49304").trigger('SCEventShow');
$("#obj49302").trigger('SCEventShow');
$("#obj49300").trigger('SCEventShow');
$("#obj49298").trigger('SCEventShow');
$("#obj49296").trigger('SCEventShow');
$("#obj49294").trigger('SCEventShow');
$("#obj49292").trigger('SCEventShow');
$("#obj49290").trigger('SCEventShow');
$("#obj49288").trigger('SCEventShow');
$("#obj49248").trigger('SCEventShow');
$("#obj49246").trigger('SCEventShow');
$("#obj49245").trigger('SCEventShow');
$("#obj49244").trigger('SCEventShow');
$("#obj49242").trigger('SCEventShow');
$("#obj49202").trigger('SCEventShow');
$("#obj49162").trigger('SCEventShow');
$("#obj49156").trigger('SCEventShow');
$("#obj49154").trigger('SCEventShow');
$("#obj49152").trigger('SCEventShow');
$("#obj67838").trigger('SCEventShow');
$("#obj67830").trigger('SCEventShow');
$("#obj86673").trigger('SCEventShow');
$("#obj89005").trigger('SCEventShow');
$("#obj89000").trigger('SCEventShow');
$("#obj89010").trigger('SCEventShow');
$("#obj94983").trigger('SCEventShow');
$("#obj67844").trigger('SCEventShow');
	
});