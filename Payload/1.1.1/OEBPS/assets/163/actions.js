pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 46478;
pubcoder.page.title = pubcoder.page.title || "163";
pubcoder.page.number = pubcoder.page.number || 163;
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
var obj46539_onTap_activeActionGroupIndex = -1;
var obj46539_onTap_runningActionsCount = 0;
var obj46539_onTap_loopCount = 0;
var obj46536_onTap_activeActionGroupIndex = -1;
var obj46536_onTap_runningActionsCount = 0;
var obj46536_onTap_loopCount = 0;
var obj46532_onTap_activeActionGroupIndex = -1;
var obj46532_onTap_runningActionsCount = 0;
var obj46532_onTap_loopCount = 0;
var obj46483_onDrag_activeActionGroupIndex = -1;
var obj46483_onDrag_runningActionsCount = 0;
var obj46483_onDrag_loopCount = 0;
var obj46483_onTouchDown_activeActionGroupIndex = -1;
var obj46483_onTouchDown_runningActionsCount = 0;
var obj46483_onTouchDown_loopCount = 0;
var obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_loopCount = 0;
var obj46483_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj46483_droppedInsideTargetActions_runningActionsCount = 0;
var obj46483_droppedInsideTargetActions_loopCount = 0;
var obj46500_onDrag_activeActionGroupIndex = -1;
var obj46500_onDrag_runningActionsCount = 0;
var obj46500_onDrag_loopCount = 0;
var obj46500_onTouchDown_activeActionGroupIndex = -1;
var obj46500_onTouchDown_runningActionsCount = 0;
var obj46500_onTouchDown_loopCount = 0;
var obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_loopCount = 0;
var obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj46500_droppedInsideTargetActions_runningActionsCount = 0;
var obj46500_droppedInsideTargetActions_loopCount = 0;
var obj67614_onTap_activeActionGroupIndex = -1;
var obj67614_onTap_runningActionsCount = 0;
var obj67614_onTap_loopCount = 0;
var obj67606_onTap_activeActionGroupIndex = -1;
var obj67606_onTap_runningActionsCount = 0;
var obj67606_onTap_loopCount = 0;
var obj88837_onTap_activeActionGroupIndex = -1;
var obj88837_onTap_runningActionsCount = 0;
var obj88837_onTap_loopCount = 0;
var obj88832_onTap_activeActionGroupIndex = -1;
var obj88832_onTap_runningActionsCount = 0;
var obj88832_onTap_loopCount = 0;
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
		
obj46539_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46539_onTap_activeActionGroupIndex = -1;
		$("#obj46539").trigger("obj46539_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46539) {
				console.warn("de-queueing event obj46539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46539_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46541();
function goToPage_46541() {
	window.obj46539_onTap_runningActionsCount = obj46539_onTap_runningActionsCount + 1;
	$("#anchor959")[0].click();
	window.obj46539_onTap_runningActionsCount = window.obj46539_onTap_runningActionsCount - 1;
if (window.obj46539_onTap_runningActionsCount < 0) {
	window.obj46539_onTap_runningActionsCount = 0;
} else if (window.obj46539_onTap_runningActionsCount == 0) {
	obj46539_onTap_actionGroup1();
}
}





















};
obj46539_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46539_onTap_activeActionGroupIndex = -1;
		$("#obj46539").trigger("obj46539_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46539) {
				console.warn("de-queueing event obj46539." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46539").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46539_onTap_activeActionGroupIndex = 1;
	





















};
obj46536_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46536_onTap_activeActionGroupIndex = -1;
		$("#obj46536").trigger("obj46536_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46536) {
				console.warn("de-queueing event obj46536." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46536").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46536_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46538();
function goToPage_46538() {
	window.obj46536_onTap_runningActionsCount = obj46536_onTap_runningActionsCount + 1;
	$("#anchor960")[0].click();
	window.obj46536_onTap_runningActionsCount = window.obj46536_onTap_runningActionsCount - 1;
if (window.obj46536_onTap_runningActionsCount < 0) {
	window.obj46536_onTap_runningActionsCount = 0;
} else if (window.obj46536_onTap_runningActionsCount == 0) {
	obj46536_onTap_actionGroup1();
}
}





















};
obj46536_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46536_onTap_activeActionGroupIndex = -1;
		$("#obj46536").trigger("obj46536_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46536) {
				console.warn("de-queueing event obj46536." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46536").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46536_onTap_activeActionGroupIndex = 1;
	





















};
obj46532_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46532_onTap_activeActionGroupIndex = -1;
		$("#obj46532").trigger("obj46532_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46532) {
				console.warn("de-queueing event obj46532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46532_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46534();
function goToPage_46534() {
	window.obj46532_onTap_runningActionsCount = obj46532_onTap_runningActionsCount + 1;
	$("#anchor961")[0].click();
	window.obj46532_onTap_runningActionsCount = window.obj46532_onTap_runningActionsCount - 1;
if (window.obj46532_onTap_runningActionsCount < 0) {
	window.obj46532_onTap_runningActionsCount = 0;
} else if (window.obj46532_onTap_runningActionsCount == 0) {
	obj46532_onTap_actionGroup1();
}
}





















};
obj46532_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46532_onTap_activeActionGroupIndex = -1;
		$("#obj46532").trigger("obj46532_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46532) {
				console.warn("de-queueing event obj46532." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46532").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46532_onTap_activeActionGroupIndex = 1;
	





















};
obj46483_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46483_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj46483");
//	action: dragDrop
//	target: obj46483 
dragDrop_46486();
function dragDrop_46486() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj46483_onTouchDown_runningActionsCount = obj46483_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj46483');
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
	  	containerNode = $('#obj46524');
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
    	window.obj46483_onTouchDown_runningActionsCount = window.obj46483_onTouchDown_runningActionsCount - 1;
if (window.obj46483_onTouchDown_runningActionsCount < 0) {
	window.obj46483_onTouchDown_runningActionsCount = 0;
} else if (window.obj46483_onTouchDown_runningActionsCount == 0) {
	obj46483_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46520");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_46486 = false;
    	var dropped_id_46486;
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
					dropped_46486 = true;
					dropped_id_46486 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_46486) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj46483").trigger('SCActionDragDrop46486_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj46483_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46483_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj46483 
move_92701();
function move_92701() {
	window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_runningActionsCount = obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj46483");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 148;
	var moveY = 541;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_runningActionsCount = window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj46483_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46488();
function runjs_46488() {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = obj46483_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46520").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46483_droppedInsideTargetActions_runningActionsCount = window.obj46483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46483_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj46483_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_46492();
function switchText_46492() {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = obj46483_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46494_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46494_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46494").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46494_content");
			setTimeout(function () {
				window.obj46483_droppedInsideTargetActions_runningActionsCount = window.obj46483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46483_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj46494 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46483_droppedInsideTargetActions_runningActionsCount = window.obj46483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46483_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj46483_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_46489();
function runjs_46489() {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = obj46483_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46520").css("border-color", "#058E3F"); $("#obj46520").css("border-width", "2px"); $("#obj46520").css("border-style", "solid"); $("#obj46520").css("border-radius", "10px"); $("#obj46520").css("-webkit-border-radius", "10px"); $("#obj46520").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46483_droppedInsideTargetActions_runningActionsCount = window.obj46483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46483_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj46483_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj46518 
hide_46490();
function hide_46490() {
	var selector = "#obj46518";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46483_droppedInsideTargetActions_runningActionsCount = obj46483_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46483_droppedInsideTargetActions_runningActionsCount = window.obj46483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46483_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46490(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46483_droppedInsideTargetActions_runningActionsCount = window.obj46483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46483_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46483_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_46491();
function runjs_46491() {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = obj46483_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46483").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46483_droppedInsideTargetActions_runningActionsCount = window.obj46483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46483_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj46483_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj46498 
playAudio_46493();
function playAudio_46493() {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = obj46483_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46498")[0];
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
		    window.obj46483_droppedInsideTargetActions_runningActionsCount = window.obj46483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46483_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46483_droppedInsideTargetActions_runningActionsCount = window.obj46483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46483_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj46483_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90584();
function switchText_90584() {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = obj46483_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46494_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46494_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46494").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46494_content");
			setTimeout(function () {
				window.obj46483_droppedInsideTargetActions_runningActionsCount = window.obj46483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46483_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj46494 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46483_droppedInsideTargetActions_runningActionsCount = window.obj46483_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46483_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46483_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46483_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46483_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj46483_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46483").trigger("obj46483_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46483) {
				console.warn("de-queueing event obj46483." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46483").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46483_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj46500_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj46500");
//	action: dragDrop
//	target: obj46500 
dragDrop_46503();
function dragDrop_46503() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj46500_onTouchDown_runningActionsCount = obj46500_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj46500');
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
	  	containerNode = $('#obj46524');
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
    	window.obj46500_onTouchDown_runningActionsCount = window.obj46500_onTouchDown_runningActionsCount - 1;
if (window.obj46500_onTouchDown_runningActionsCount < 0) {
	window.obj46500_onTouchDown_runningActionsCount = 0;
} else if (window.obj46500_onTouchDown_runningActionsCount == 0) {
	obj46500_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46520");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_46503 = false;
    	var dropped_id_46503;
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
					dropped_46503 = true;
					dropped_id_46503 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_46503) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj46500").trigger('SCActionDragDrop46503_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj46500_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46500_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj46500 
move_92703();
function move_92703() {
	window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_runningActionsCount = obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj46500");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 357;
	var moveY = 541;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_runningActionsCount = window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj46500_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46505();
function runjs_46505() {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46520").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj46500_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_46506();
function runjs_46506() {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46520").css("border-color", "#C00000"); $("#obj46520").css("border-width", "2px"); $("#obj46520").css("border-style", "solid"); $("#obj46520").css("border-radius", "10px"); $("#obj46520").css("-webkit-border-radius", "10px"); $("#obj46520").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj46500_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46518 
hide_46507();
function hide_46507() {
	var selector = "#obj46518";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46507(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46500_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_46508();
function runjs_46508() {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46500").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj46500_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_46509();
function switchText_46509() {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46494_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46494_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46494").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46494_content");
			setTimeout(function () {
				window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46494 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj46500_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj46500 
move_46510();
function move_46510() {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj46500");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 357;
	var moveY = 541;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj46500_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_46511();
function runjs_46511() {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46520").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj46500_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_46512();
function runjs_46512() {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46520").css("border-color", "#000000"); $("#obj46520").css("border-width", "1px"); $("#obj46520").css("border-style", "solid"); $("#obj46520").css("border-radius", "10px"); $("#obj46520").css("-webkit-border-radius", "10px"); $("#obj46520").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj46500_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj46518
(function(){
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj46518";
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
					window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup9();
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
				window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46500_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_46514();
function runjs_46514() {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46500").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj46500_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_46515();
function runjs_46515() {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46500").css("border-color", "rgba(0,0,0,0)"); $("#obj46500").css("border-width", "0px"); $("#obj46500").css("border-style", "solid"); $("#obj46500").css("border-radius", "10px"); $("#obj46500").css("-webkit-border-radius", "10px"); $("#obj46500").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj46500_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj46479 
playAudio_46516();
function playAudio_46516() {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46479")[0];
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
		    window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj46500_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_46517();
function switchText_46517() {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = obj46500_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46494_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46494_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46494").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46494_content");
			setTimeout(function () {
				window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj46494 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46500_droppedInsideTargetActions_runningActionsCount = window.obj46500_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46500_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46500_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46500_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46500_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj46500_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46500").trigger("obj46500_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46500) {
				console.warn("de-queueing event obj46500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46500_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj67614_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67614_onTap_activeActionGroupIndex = -1;
		$("#obj67614").trigger("obj67614_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67614) {
				console.warn("de-queueing event obj67614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67614_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67614 
hide_67617();
function hide_67617() {
	var selector = "#obj67614";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67614_onTap_runningActionsCount = obj67614_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67614_onTap_runningActionsCount = window.obj67614_onTap_runningActionsCount - 1;
if (window.obj67614_onTap_runningActionsCount < 0) {
	window.obj67614_onTap_runningActionsCount = 0;
} else if (window.obj67614_onTap_runningActionsCount == 0) {
	obj67614_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67617(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67614_onTap_runningActionsCount = window.obj67614_onTap_runningActionsCount - 1;
if (window.obj67614_onTap_runningActionsCount < 0) {
	window.obj67614_onTap_runningActionsCount = 0;
} else if (window.obj67614_onTap_runningActionsCount == 0) {
	obj67614_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67620 
stopMovie_67616();
function stopMovie_67616() {
	window.obj67614_onTap_runningActionsCount = obj67614_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67620")[0];
	myVideo.pause();
	window.obj67614_onTap_runningActionsCount = window.obj67614_onTap_runningActionsCount - 1;
if (window.obj67614_onTap_runningActionsCount < 0) {
	window.obj67614_onTap_runningActionsCount = 0;
} else if (window.obj67614_onTap_runningActionsCount == 0) {
	obj67614_onTap_actionGroup1();
}
}
















};
obj67614_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67614_onTap_activeActionGroupIndex = -1;
		$("#obj67614").trigger("obj67614_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67614) {
				console.warn("de-queueing event obj67614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67614_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67606
(function(){
	window.obj67614_onTap_runningActionsCount = obj67614_onTap_runningActionsCount + 1;

	var selector = "#obj67606";
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
					window.obj67614_onTap_runningActionsCount = window.obj67614_onTap_runningActionsCount - 1;
if (window.obj67614_onTap_runningActionsCount < 0) {
	window.obj67614_onTap_runningActionsCount = 0;
} else if (window.obj67614_onTap_runningActionsCount == 0) {
	obj67614_onTap_actionGroup2();
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
				window.obj67614_onTap_runningActionsCount = window.obj67614_onTap_runningActionsCount - 1;
if (window.obj67614_onTap_runningActionsCount < 0) {
	window.obj67614_onTap_runningActionsCount = 0;
} else if (window.obj67614_onTap_runningActionsCount == 0) {
	obj67614_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67614_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67614_onTap_activeActionGroupIndex = -1;
		$("#obj67614").trigger("obj67614_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67614) {
				console.warn("de-queueing event obj67614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67614_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67620 
move_67619();
function move_67619() {
	window.obj67614_onTap_runningActionsCount = obj67614_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67620");
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
			window.obj67614_onTap_runningActionsCount = window.obj67614_onTap_runningActionsCount - 1;
if (window.obj67614_onTap_runningActionsCount < 0) {
	window.obj67614_onTap_runningActionsCount = 0;
} else if (window.obj67614_onTap_runningActionsCount == 0) {
	obj67614_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67614_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67614_onTap_activeActionGroupIndex = -1;
		$("#obj67614").trigger("obj67614_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67614) {
				console.warn("de-queueing event obj67614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67614_onTap_activeActionGroupIndex = 3;
	





















};
obj67606_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67606_onTap_activeActionGroupIndex = -1;
		$("#obj67606").trigger("obj67606_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67606) {
				console.warn("de-queueing event obj67606." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67606").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67606_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67606 
hide_67609();
function hide_67609() {
	var selector = "#obj67606";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67606_onTap_runningActionsCount = obj67606_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67606_onTap_runningActionsCount = window.obj67606_onTap_runningActionsCount - 1;
if (window.obj67606_onTap_runningActionsCount < 0) {
	window.obj67606_onTap_runningActionsCount = 0;
} else if (window.obj67606_onTap_runningActionsCount == 0) {
	obj67606_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67609(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67606_onTap_runningActionsCount = window.obj67606_onTap_runningActionsCount - 1;
if (window.obj67606_onTap_runningActionsCount < 0) {
	window.obj67606_onTap_runningActionsCount = 0;
} else if (window.obj67606_onTap_runningActionsCount == 0) {
	obj67606_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67620 
playPauseMovie_67608();
function playPauseMovie_67608() {
	window.obj67606_onTap_runningActionsCount = obj67606_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67620")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67606_onTap_runningActionsCount = window.obj67606_onTap_runningActionsCount - 1;
if (window.obj67606_onTap_runningActionsCount < 0) {
	window.obj67606_onTap_runningActionsCount = 0;
} else if (window.obj67606_onTap_runningActionsCount == 0) {
	obj67606_onTap_actionGroup1();
}
}

















};
obj67606_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67606_onTap_activeActionGroupIndex = -1;
		$("#obj67606").trigger("obj67606_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67606) {
				console.warn("de-queueing event obj67606." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67606").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67606_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67614
(function(){
	window.obj67606_onTap_runningActionsCount = obj67606_onTap_runningActionsCount + 1;

	var selector = "#obj67614";
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
					window.obj67606_onTap_runningActionsCount = window.obj67606_onTap_runningActionsCount - 1;
if (window.obj67606_onTap_runningActionsCount < 0) {
	window.obj67606_onTap_runningActionsCount = 0;
} else if (window.obj67606_onTap_runningActionsCount == 0) {
	obj67606_onTap_actionGroup2();
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
				window.obj67606_onTap_runningActionsCount = window.obj67606_onTap_runningActionsCount - 1;
if (window.obj67606_onTap_runningActionsCount < 0) {
	window.obj67606_onTap_runningActionsCount = 0;
} else if (window.obj67606_onTap_runningActionsCount == 0) {
	obj67606_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67606_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67606_onTap_activeActionGroupIndex = -1;
		$("#obj67606").trigger("obj67606_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67606) {
				console.warn("de-queueing event obj67606." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67606").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67606_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67620 
move_67611();
function move_67611() {
	window.obj67606_onTap_runningActionsCount = obj67606_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67620");
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
			window.obj67606_onTap_runningActionsCount = window.obj67606_onTap_runningActionsCount - 1;
if (window.obj67606_onTap_runningActionsCount < 0) {
	window.obj67606_onTap_runningActionsCount = 0;
} else if (window.obj67606_onTap_runningActionsCount == 0) {
	obj67606_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67606_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67606_onTap_activeActionGroupIndex = -1;
		$("#obj67606").trigger("obj67606_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67606) {
				console.warn("de-queueing event obj67606." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67606").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67606_onTap_activeActionGroupIndex = 3;
	





















};
obj88837_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88837_onTap_activeActionGroupIndex = -1;
		$("#obj88837").trigger("obj88837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88837) {
				console.warn("de-queueing event obj88837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88837_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88842 
stopAudio_88839();
function stopAudio_88839() {
	window.obj88837_onTap_runningActionsCount = obj88837_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88842")[0];
	myAudio.pause();
	window.obj88837_onTap_runningActionsCount = window.obj88837_onTap_runningActionsCount - 1;
if (window.obj88837_onTap_runningActionsCount < 0) {
	window.obj88837_onTap_runningActionsCount = 0;
} else if (window.obj88837_onTap_runningActionsCount == 0) {
	obj88837_onTap_actionGroup1();
}
}








};
obj88837_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88837_onTap_activeActionGroupIndex = -1;
		$("#obj88837").trigger("obj88837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88837) {
				console.warn("de-queueing event obj88837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88837_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88837 
hide_88840();
function hide_88840() {
	var selector = "#obj88837";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88837_onTap_runningActionsCount = obj88837_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88837_onTap_runningActionsCount = window.obj88837_onTap_runningActionsCount - 1;
if (window.obj88837_onTap_runningActionsCount < 0) {
	window.obj88837_onTap_runningActionsCount = 0;
} else if (window.obj88837_onTap_runningActionsCount == 0) {
	obj88837_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88840(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88837_onTap_runningActionsCount = window.obj88837_onTap_runningActionsCount - 1;
if (window.obj88837_onTap_runningActionsCount < 0) {
	window.obj88837_onTap_runningActionsCount = 0;
} else if (window.obj88837_onTap_runningActionsCount == 0) {
	obj88837_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88837_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88837_onTap_activeActionGroupIndex = -1;
		$("#obj88837").trigger("obj88837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88837) {
				console.warn("de-queueing event obj88837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88837_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88832
(function(){
	window.obj88837_onTap_runningActionsCount = obj88837_onTap_runningActionsCount + 1;

	var selector = "#obj88832";
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
					window.obj88837_onTap_runningActionsCount = window.obj88837_onTap_runningActionsCount - 1;
if (window.obj88837_onTap_runningActionsCount < 0) {
	window.obj88837_onTap_runningActionsCount = 0;
} else if (window.obj88837_onTap_runningActionsCount == 0) {
	obj88837_onTap_actionGroup3();
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
				window.obj88837_onTap_runningActionsCount = window.obj88837_onTap_runningActionsCount - 1;
if (window.obj88837_onTap_runningActionsCount < 0) {
	window.obj88837_onTap_runningActionsCount = 0;
} else if (window.obj88837_onTap_runningActionsCount == 0) {
	obj88837_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88837_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88837_onTap_activeActionGroupIndex = -1;
		$("#obj88837").trigger("obj88837_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88837) {
				console.warn("de-queueing event obj88837." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88837").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88837_onTap_activeActionGroupIndex = 3;
	





















};
obj88832_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88832_onTap_activeActionGroupIndex = -1;
		$("#obj88832").trigger("obj88832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88832) {
				console.warn("de-queueing event obj88832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88832_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88832 
hide_88834();
function hide_88834() {
	var selector = "#obj88832";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88832_onTap_runningActionsCount = obj88832_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88832_onTap_runningActionsCount = window.obj88832_onTap_runningActionsCount - 1;
if (window.obj88832_onTap_runningActionsCount < 0) {
	window.obj88832_onTap_runningActionsCount = 0;
} else if (window.obj88832_onTap_runningActionsCount == 0) {
	obj88832_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88834(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88832_onTap_runningActionsCount = window.obj88832_onTap_runningActionsCount - 1;
if (window.obj88832_onTap_runningActionsCount < 0) {
	window.obj88832_onTap_runningActionsCount = 0;
} else if (window.obj88832_onTap_runningActionsCount == 0) {
	obj88832_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88832_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88832_onTap_activeActionGroupIndex = -1;
		$("#obj88832").trigger("obj88832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88832) {
				console.warn("de-queueing event obj88832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88832_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88837
(function(){
	window.obj88832_onTap_runningActionsCount = obj88832_onTap_runningActionsCount + 1;

	var selector = "#obj88837";
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
					window.obj88832_onTap_runningActionsCount = window.obj88832_onTap_runningActionsCount - 1;
if (window.obj88832_onTap_runningActionsCount < 0) {
	window.obj88832_onTap_runningActionsCount = 0;
} else if (window.obj88832_onTap_runningActionsCount == 0) {
	obj88832_onTap_actionGroup2();
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
				window.obj88832_onTap_runningActionsCount = window.obj88832_onTap_runningActionsCount - 1;
if (window.obj88832_onTap_runningActionsCount < 0) {
	window.obj88832_onTap_runningActionsCount = 0;
} else if (window.obj88832_onTap_runningActionsCount == 0) {
	obj88832_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88832_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88832_onTap_activeActionGroupIndex = -1;
		$("#obj88832").trigger("obj88832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88832) {
				console.warn("de-queueing event obj88832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88832_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88842 
playAudio_88836();
function playAudio_88836() {
	window.obj88832_onTap_runningActionsCount = obj88832_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88842")[0];
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
		    window.obj88832_onTap_runningActionsCount = window.obj88832_onTap_runningActionsCount - 1;
if (window.obj88832_onTap_runningActionsCount < 0) {
	window.obj88832_onTap_runningActionsCount = 0;
} else if (window.obj88832_onTap_runningActionsCount == 0) {
	obj88832_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88832_onTap_runningActionsCount = window.obj88832_onTap_runningActionsCount - 1;
if (window.obj88832_onTap_runningActionsCount < 0) {
	window.obj88832_onTap_runningActionsCount = 0;
} else if (window.obj88832_onTap_runningActionsCount == 0) {
	obj88832_onTap_actionGroup3();
}
	}
}









};
obj88832_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88832_onTap_activeActionGroupIndex = -1;
		$("#obj88832").trigger("obj88832_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88832) {
				console.warn("de-queueing event obj88832." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88832").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88832_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj46539: Event Touch Down
 *
 */
$("#obj46539").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46539_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46539_onTap is still running");
	return;
}
var obj46539_onTap_runningActionsCount = 0;
var obj46539_onTap_loopCount = 0;
obj46539_onTap_actionGroup0();
});










/*
 *
 *   obj46536: Event Touch Down
 *
 */
$("#obj46536").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46536_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46536_onTap is still running");
	return;
}
var obj46536_onTap_runningActionsCount = 0;
var obj46536_onTap_loopCount = 0;
obj46536_onTap_actionGroup0();
});










/*
 *
 *   obj46532: Event Touch Down
 *
 */
$("#obj46532").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46532_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46532_onTap is still running");
	return;
}
var obj46532_onTap_runningActionsCount = 0;
var obj46532_onTap_loopCount = 0;
obj46532_onTap_actionGroup0();
});



































































































































/*
 *
 *   obj46483: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj46483");
	var winTarget = document.getElementById("obj46483");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj46483").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj46483_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj46483_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj46483_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46483_onTouchDown is still running");
	return;
}
var obj46483_onTouchDown_runningActionsCount = 0;
var obj46483_onTouchDown_loopCount = 0;
obj46483_onTouchDown_actionGroup0();
});



/*
 *
 *   obj46483: Event SCActionDragDrop46486_droppedOutsideTargetActions
 *
 */
$("#obj46483").bind("SCActionDragDrop46486_droppedOutsideTargetActions", function(event) {
	if (window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46483_SCActionDragDrop46486_droppedOutsideTargetActions is still running");
	return;
}
var obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_loopCount = 0;
obj46483_SCActionDragDrop46486_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj46483: Event droppedInsideTargetActions
 *
 */
$("#obj46483").bind("droppedInsideTargetActions", function(event) {
	if (window.obj46483_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46483_droppedInsideTargetActions is still running");
	return;
}
var obj46483_droppedInsideTargetActions_runningActionsCount = 0;
var obj46483_droppedInsideTargetActions_loopCount = 0;
obj46483_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj46500: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj46500");
	var winTarget = document.getElementById("obj46500");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj46500").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj46500_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj46500_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj46500_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46500_onTouchDown is still running");
	return;
}
var obj46500_onTouchDown_runningActionsCount = 0;
var obj46500_onTouchDown_loopCount = 0;
obj46500_onTouchDown_actionGroup0();
});



/*
 *
 *   obj46500: Event SCActionDragDrop46503_droppedOutsideTargetActions
 *
 */
$("#obj46500").bind("SCActionDragDrop46503_droppedOutsideTargetActions", function(event) {
	if (window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46500_SCActionDragDrop46503_droppedOutsideTargetActions is still running");
	return;
}
var obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_loopCount = 0;
obj46500_SCActionDragDrop46503_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj46500: Event droppedInsideTargetActions
 *
 */
$("#obj46500").bind("droppedInsideTargetActions", function(event) {
	if (window.obj46500_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46500_droppedInsideTargetActions is still running");
	return;
}
var obj46500_droppedInsideTargetActions_runningActionsCount = 0;
var obj46500_droppedInsideTargetActions_loopCount = 0;
obj46500_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67614: Event Touch Down
 *
 */
$("#obj67614").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67614_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67614_onTap is still running");
	return;
}
var obj67614_onTap_runningActionsCount = 0;
var obj67614_onTap_loopCount = 0;
obj67614_onTap_actionGroup0();
});










/*
 *
 *   obj67606: Event Touch Down
 *
 */
$("#obj67606").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67606_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67606_onTap is still running");
	return;
}
var obj67606_onTap_runningActionsCount = 0;
var obj67606_onTap_loopCount = 0;
obj67606_onTap_actionGroup0();
});










/*
 *
 *   obj88837: Event Touch Down
 *
 */
$("#obj88837").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88837_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88837_onTap is still running");
	return;
}
var obj88837_onTap_runningActionsCount = 0;
var obj88837_onTap_loopCount = 0;
obj88837_onTap_actionGroup0();
});










/*
 *
 *   obj88832: Event Touch Down
 *
 */
$("#obj88832").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88832_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88832_onTap is still running");
	return;
}
var obj88832_onTap_runningActionsCount = 0;
var obj88832_onTap_loopCount = 0;
obj88832_onTap_actionGroup0();
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
	
$("#obj46555").trigger('SCEventShow');
$("#obj46539").trigger('SCEventShow');
$("#obj46536").trigger('SCEventShow');
$("#obj46532").trigger('SCEventShow');
$("#obj46530").trigger('SCEventShow');
$("#obj46528").trigger('SCEventShow');
$("#obj46526").trigger('SCEventShow');
$("#obj46524").trigger('SCEventShow');
$("#obj46522").trigger('SCEventShow');
$("#obj46520").trigger('SCEventShow');
$("#obj46518").trigger('SCEventShow');
$("#obj46498").trigger('SCEventShow');
$("#obj46496").trigger('SCEventShow');
$("#obj46494").trigger('SCEventShow');
$("#obj46481").trigger('SCEventShow');
$("#obj46479").trigger('SCEventShow');
$("#obj46483").trigger('SCEventShow');
$("#obj46500").trigger('SCEventShow');
$("#obj67614").trigger('SCEventShow');
$("#obj67606").trigger('SCEventShow');
$("#obj88837").trigger('SCEventShow');
$("#obj88832").trigger('SCEventShow');
$("#obj88842").trigger('SCEventShow');
$("#obj94955").trigger('SCEventShow');
$("#obj67620").trigger('SCEventShow');
	
});