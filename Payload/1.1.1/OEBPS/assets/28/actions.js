pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 5159;
pubcoder.page.title = pubcoder.page.title || "28";
pubcoder.page.number = pubcoder.page.number || 28;
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
var obj5165_onTap_activeActionGroupIndex = -1;
var obj5165_onTap_runningActionsCount = 0;
var obj5165_onTap_loopCount = 0;
var obj5162_onTap_activeActionGroupIndex = -1;
var obj5162_onTap_runningActionsCount = 0;
var obj5162_onTap_loopCount = 0;
var obj5168_onTap_activeActionGroupIndex = -1;
var obj5168_onTap_runningActionsCount = 0;
var obj5168_onTap_loopCount = 0;
var obj5210_onDrag_activeActionGroupIndex = -1;
var obj5210_onDrag_runningActionsCount = 0;
var obj5210_onDrag_loopCount = 0;
var obj5210_onTouchDown_activeActionGroupIndex = -1;
var obj5210_onTouchDown_runningActionsCount = 0;
var obj5210_onTouchDown_loopCount = 0;
var obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_loopCount = 0;
var obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj5210_droppedInsideTargetActions_runningActionsCount = 0;
var obj5210_droppedInsideTargetActions_loopCount = 0;
var obj5263_onDrag_activeActionGroupIndex = -1;
var obj5263_onDrag_runningActionsCount = 0;
var obj5263_onDrag_loopCount = 0;
var obj5263_onTouchDown_activeActionGroupIndex = -1;
var obj5263_onTouchDown_runningActionsCount = 0;
var obj5263_onTouchDown_loopCount = 0;
var obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_loopCount = 0;
var obj5263_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj5263_droppedInsideTargetActions_runningActionsCount = 0;
var obj5263_droppedInsideTargetActions_loopCount = 0;
var obj65406_onTap_activeActionGroupIndex = -1;
var obj65406_onTap_runningActionsCount = 0;
var obj65406_onTap_loopCount = 0;
var obj65398_onTap_activeActionGroupIndex = -1;
var obj65398_onTap_runningActionsCount = 0;
var obj65398_onTap_loopCount = 0;
var obj87097_onTap_activeActionGroupIndex = -1;
var obj87097_onTap_runningActionsCount = 0;
var obj87097_onTap_loopCount = 0;
var obj87092_onTap_activeActionGroupIndex = -1;
var obj87092_onTap_runningActionsCount = 0;
var obj87092_onTap_loopCount = 0;
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
		
obj5165_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5165_onTap_activeActionGroupIndex = -1;
		$("#obj5165").trigger("obj5165_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5165) {
				console.warn("de-queueing event obj5165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5165_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_5167();
function goToPage_5167() {
	window.obj5165_onTap_runningActionsCount = obj5165_onTap_runningActionsCount + 1;
	$("#anchor168")[0].click();
	window.obj5165_onTap_runningActionsCount = window.obj5165_onTap_runningActionsCount - 1;
if (window.obj5165_onTap_runningActionsCount < 0) {
	window.obj5165_onTap_runningActionsCount = 0;
} else if (window.obj5165_onTap_runningActionsCount == 0) {
	obj5165_onTap_actionGroup1();
}
}





















};
obj5165_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5165_onTap_activeActionGroupIndex = -1;
		$("#obj5165").trigger("obj5165_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5165) {
				console.warn("de-queueing event obj5165." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5165").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5165_onTap_activeActionGroupIndex = 1;
	





















};
obj5162_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5162_onTap_activeActionGroupIndex = -1;
		$("#obj5162").trigger("obj5162_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5162) {
				console.warn("de-queueing event obj5162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5162_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_5164();
function goToPage_5164() {
	window.obj5162_onTap_runningActionsCount = obj5162_onTap_runningActionsCount + 1;
	$("#anchor169")[0].click();
	window.obj5162_onTap_runningActionsCount = window.obj5162_onTap_runningActionsCount - 1;
if (window.obj5162_onTap_runningActionsCount < 0) {
	window.obj5162_onTap_runningActionsCount = 0;
} else if (window.obj5162_onTap_runningActionsCount == 0) {
	obj5162_onTap_actionGroup1();
}
}





















};
obj5162_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5162_onTap_activeActionGroupIndex = -1;
		$("#obj5162").trigger("obj5162_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5162) {
				console.warn("de-queueing event obj5162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5162_onTap_activeActionGroupIndex = 1;
	





















};
obj5168_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5168_onTap_activeActionGroupIndex = -1;
		$("#obj5168").trigger("obj5168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5168) {
				console.warn("de-queueing event obj5168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5168_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_5170();
function goToPage_5170() {
	window.obj5168_onTap_runningActionsCount = obj5168_onTap_runningActionsCount + 1;
	$("#anchor170")[0].click();
	window.obj5168_onTap_runningActionsCount = window.obj5168_onTap_runningActionsCount - 1;
if (window.obj5168_onTap_runningActionsCount < 0) {
	window.obj5168_onTap_runningActionsCount = 0;
} else if (window.obj5168_onTap_runningActionsCount == 0) {
	obj5168_onTap_actionGroup1();
}
}





















};
obj5168_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5168_onTap_activeActionGroupIndex = -1;
		$("#obj5168").trigger("obj5168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5168) {
				console.warn("de-queueing event obj5168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5168_onTap_activeActionGroupIndex = 1;
	





















};
obj5210_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5210");
//	action: dragDrop
//	target: obj5210 
dragDrop_5213();
function dragDrop_5213() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5210_onTouchDown_runningActionsCount = obj5210_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5210');
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
	  	containerNode = $('#obj5202');
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
    	window.obj5210_onTouchDown_runningActionsCount = window.obj5210_onTouchDown_runningActionsCount - 1;
if (window.obj5210_onTouchDown_runningActionsCount < 0) {
	window.obj5210_onTouchDown_runningActionsCount = 0;
} else if (window.obj5210_onTouchDown_runningActionsCount == 0) {
	obj5210_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj5206");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_5213 = false;
    	var dropped_id_5213;
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
					dropped_5213 = true;
					dropped_id_5213 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_5213) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj5210").trigger('SCActionDragDrop5213_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj5210_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5210_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj5210 
move_92170();
function move_92170() {
	window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_runningActionsCount = obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj5210");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 137;
	var moveY = 684;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_runningActionsCount = window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5210_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5332();
function runjs_5332() {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5206").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj5210_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5333();
function runjs_5333() {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5206").css("border-color", "#C00000"); $("#obj5206").css("border-width", "2px"); $("#obj5206").css("border-style", "solid"); $("#obj5206").css("border-radius", "10px"); $("#obj5206").css("-webkit-border-radius", "10px"); $("#obj5206").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj5210_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5208 
hide_5334();
function hide_5334() {
	var selector = "#obj5208";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5334(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5210_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5335();
function runjs_5335() {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5210").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj5210_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5336();
function switchText_5336() {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5320_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5320_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5320").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5320_content");
			setTimeout(function () {
				window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5320 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj5210_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5210 
move_5337();
function move_5337() {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj5210");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 137;
	var moveY = 684;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj5210_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5338();
function runjs_5338() {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5206").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj5210_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5339();
function runjs_5339() {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5206").css("border-color", "#000000"); $("#obj5206").css("border-width", "1px"); $("#obj5206").css("border-style", "solid"); $("#obj5206").css("border-radius", "10px"); $("#obj5206").css("-webkit-border-radius", "10px"); $("#obj5206").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj5210_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5208
(function(){
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj5208";
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
					window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup9();
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
				window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5210_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5341();
function runjs_5341() {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5210").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj5210_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5342();
function runjs_5342() {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5210").css("border-color", "rgba(0,0,0,0)"); $("#obj5210").css("border-width", "0px"); $("#obj5210").css("border-style", "solid"); $("#obj5210").css("border-radius", "10px"); $("#obj5210").css("-webkit-border-radius", "10px"); $("#obj5210").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj5210_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5329 
playAudio_5343();
function playAudio_5343() {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj5329")[0];
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
		    window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj5210_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5344();
function switchText_5344() {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = obj5210_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5320_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5320_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5320").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5320_content");
			setTimeout(function () {
				window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5320 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5210_droppedInsideTargetActions_runningActionsCount = window.obj5210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5210_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj5210_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5210").trigger("obj5210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5210) {
				console.warn("de-queueing event obj5210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5210_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj5263_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5263_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5263");
//	action: dragDrop
//	target: obj5263 
dragDrop_5266();
function dragDrop_5266() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5263_onTouchDown_runningActionsCount = obj5263_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5263');
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
	  	containerNode = $('#obj5202');
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
    	window.obj5263_onTouchDown_runningActionsCount = window.obj5263_onTouchDown_runningActionsCount - 1;
if (window.obj5263_onTouchDown_runningActionsCount < 0) {
	window.obj5263_onTouchDown_runningActionsCount = 0;
} else if (window.obj5263_onTouchDown_runningActionsCount == 0) {
	obj5263_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj5206");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_5266 = false;
    	var dropped_id_5266;
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
					dropped_5266 = true;
					dropped_id_5266 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_5266) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj5263").trigger('SCActionDragDrop5266_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj5263_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5263_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj5263 
move_92172();
function move_92172() {
	window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_runningActionsCount = obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj5263");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 308;
	var moveY = 683;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_runningActionsCount = window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5263_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5323();
function runjs_5323() {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = obj5263_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5206").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5263_droppedInsideTargetActions_runningActionsCount = window.obj5263_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5263_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5263_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj5263_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_5327();
function switchText_5327() {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = obj5263_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5320_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5320_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5320").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5320_content");
			setTimeout(function () {
				window.obj5263_droppedInsideTargetActions_runningActionsCount = window.obj5263_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5263_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5263_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj5320 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5263_droppedInsideTargetActions_runningActionsCount = window.obj5263_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5263_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5263_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj5263_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_5324();
function runjs_5324() {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = obj5263_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5206").css("border-color", "#058E3F"); $("#obj5206").css("border-width", "2px"); $("#obj5206").css("border-style", "solid"); $("#obj5206").css("border-radius", "10px"); $("#obj5206").css("-webkit-border-radius", "10px"); $("#obj5206").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5263_droppedInsideTargetActions_runningActionsCount = window.obj5263_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5263_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5263_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj5263_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj5208 
hide_5325();
function hide_5325() {
	var selector = "#obj5208";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5263_droppedInsideTargetActions_runningActionsCount = obj5263_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5263_droppedInsideTargetActions_runningActionsCount = window.obj5263_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5263_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5263_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5325(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5263_droppedInsideTargetActions_runningActionsCount = window.obj5263_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5263_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5263_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5263_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_5326();
function runjs_5326() {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = obj5263_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5263").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5263_droppedInsideTargetActions_runningActionsCount = window.obj5263_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5263_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5263_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj5263_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj5330 
playAudio_5328();
function playAudio_5328() {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = obj5263_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj5330")[0];
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
		    window.obj5263_droppedInsideTargetActions_runningActionsCount = window.obj5263_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5263_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5263_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5263_droppedInsideTargetActions_runningActionsCount = window.obj5263_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5263_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5263_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj5263_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90114();
function switchText_90114() {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = obj5263_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5320_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5320_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5320").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5320_content");
			setTimeout(function () {
				window.obj5263_droppedInsideTargetActions_runningActionsCount = window.obj5263_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5263_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5263_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj5320 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5263_droppedInsideTargetActions_runningActionsCount = window.obj5263_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5263_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5263_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5263_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5263_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj5263_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5263").trigger("obj5263_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5263) {
				console.warn("de-queueing event obj5263." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5263").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5263_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj65406_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65406_onTap_activeActionGroupIndex = -1;
		$("#obj65406").trigger("obj65406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65406) {
				console.warn("de-queueing event obj65406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65406_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65406 
hide_65409();
function hide_65409() {
	var selector = "#obj65406";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65406_onTap_runningActionsCount = obj65406_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65406_onTap_runningActionsCount = window.obj65406_onTap_runningActionsCount - 1;
if (window.obj65406_onTap_runningActionsCount < 0) {
	window.obj65406_onTap_runningActionsCount = 0;
} else if (window.obj65406_onTap_runningActionsCount == 0) {
	obj65406_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65409(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65406_onTap_runningActionsCount = window.obj65406_onTap_runningActionsCount - 1;
if (window.obj65406_onTap_runningActionsCount < 0) {
	window.obj65406_onTap_runningActionsCount = 0;
} else if (window.obj65406_onTap_runningActionsCount == 0) {
	obj65406_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65412 
stopMovie_65408();
function stopMovie_65408() {
	window.obj65406_onTap_runningActionsCount = obj65406_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65412")[0];
	myVideo.pause();
	window.obj65406_onTap_runningActionsCount = window.obj65406_onTap_runningActionsCount - 1;
if (window.obj65406_onTap_runningActionsCount < 0) {
	window.obj65406_onTap_runningActionsCount = 0;
} else if (window.obj65406_onTap_runningActionsCount == 0) {
	obj65406_onTap_actionGroup1();
}
}
















};
obj65406_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65406_onTap_activeActionGroupIndex = -1;
		$("#obj65406").trigger("obj65406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65406) {
				console.warn("de-queueing event obj65406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65406_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65398
(function(){
	window.obj65406_onTap_runningActionsCount = obj65406_onTap_runningActionsCount + 1;

	var selector = "#obj65398";
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
					window.obj65406_onTap_runningActionsCount = window.obj65406_onTap_runningActionsCount - 1;
if (window.obj65406_onTap_runningActionsCount < 0) {
	window.obj65406_onTap_runningActionsCount = 0;
} else if (window.obj65406_onTap_runningActionsCount == 0) {
	obj65406_onTap_actionGroup2();
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
				window.obj65406_onTap_runningActionsCount = window.obj65406_onTap_runningActionsCount - 1;
if (window.obj65406_onTap_runningActionsCount < 0) {
	window.obj65406_onTap_runningActionsCount = 0;
} else if (window.obj65406_onTap_runningActionsCount == 0) {
	obj65406_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65406_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65406_onTap_activeActionGroupIndex = -1;
		$("#obj65406").trigger("obj65406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65406) {
				console.warn("de-queueing event obj65406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65406_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65412 
move_65411();
function move_65411() {
	window.obj65406_onTap_runningActionsCount = obj65406_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65412");
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
			window.obj65406_onTap_runningActionsCount = window.obj65406_onTap_runningActionsCount - 1;
if (window.obj65406_onTap_runningActionsCount < 0) {
	window.obj65406_onTap_runningActionsCount = 0;
} else if (window.obj65406_onTap_runningActionsCount == 0) {
	obj65406_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65406_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65406_onTap_activeActionGroupIndex = -1;
		$("#obj65406").trigger("obj65406_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65406) {
				console.warn("de-queueing event obj65406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65406_onTap_activeActionGroupIndex = 3;
	





















};
obj65398_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65398_onTap_activeActionGroupIndex = -1;
		$("#obj65398").trigger("obj65398_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65398) {
				console.warn("de-queueing event obj65398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65398_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65398 
hide_65401();
function hide_65401() {
	var selector = "#obj65398";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65398_onTap_runningActionsCount = obj65398_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65398_onTap_runningActionsCount = window.obj65398_onTap_runningActionsCount - 1;
if (window.obj65398_onTap_runningActionsCount < 0) {
	window.obj65398_onTap_runningActionsCount = 0;
} else if (window.obj65398_onTap_runningActionsCount == 0) {
	obj65398_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65401(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65398_onTap_runningActionsCount = window.obj65398_onTap_runningActionsCount - 1;
if (window.obj65398_onTap_runningActionsCount < 0) {
	window.obj65398_onTap_runningActionsCount = 0;
} else if (window.obj65398_onTap_runningActionsCount == 0) {
	obj65398_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65412 
playPauseMovie_65400();
function playPauseMovie_65400() {
	window.obj65398_onTap_runningActionsCount = obj65398_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65412")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65398_onTap_runningActionsCount = window.obj65398_onTap_runningActionsCount - 1;
if (window.obj65398_onTap_runningActionsCount < 0) {
	window.obj65398_onTap_runningActionsCount = 0;
} else if (window.obj65398_onTap_runningActionsCount == 0) {
	obj65398_onTap_actionGroup1();
}
}

















};
obj65398_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65398_onTap_activeActionGroupIndex = -1;
		$("#obj65398").trigger("obj65398_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65398) {
				console.warn("de-queueing event obj65398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65398_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65406
(function(){
	window.obj65398_onTap_runningActionsCount = obj65398_onTap_runningActionsCount + 1;

	var selector = "#obj65406";
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
					window.obj65398_onTap_runningActionsCount = window.obj65398_onTap_runningActionsCount - 1;
if (window.obj65398_onTap_runningActionsCount < 0) {
	window.obj65398_onTap_runningActionsCount = 0;
} else if (window.obj65398_onTap_runningActionsCount == 0) {
	obj65398_onTap_actionGroup2();
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
				window.obj65398_onTap_runningActionsCount = window.obj65398_onTap_runningActionsCount - 1;
if (window.obj65398_onTap_runningActionsCount < 0) {
	window.obj65398_onTap_runningActionsCount = 0;
} else if (window.obj65398_onTap_runningActionsCount == 0) {
	obj65398_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65398_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65398_onTap_activeActionGroupIndex = -1;
		$("#obj65398").trigger("obj65398_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65398) {
				console.warn("de-queueing event obj65398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65398_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65412 
move_65403();
function move_65403() {
	window.obj65398_onTap_runningActionsCount = obj65398_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65412");
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
			window.obj65398_onTap_runningActionsCount = window.obj65398_onTap_runningActionsCount - 1;
if (window.obj65398_onTap_runningActionsCount < 0) {
	window.obj65398_onTap_runningActionsCount = 0;
} else if (window.obj65398_onTap_runningActionsCount == 0) {
	obj65398_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65398_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65398_onTap_activeActionGroupIndex = -1;
		$("#obj65398").trigger("obj65398_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65398) {
				console.warn("de-queueing event obj65398." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65398").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65398_onTap_activeActionGroupIndex = 3;
	





















};
obj87097_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87097_onTap_activeActionGroupIndex = -1;
		$("#obj87097").trigger("obj87097_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87097) {
				console.warn("de-queueing event obj87097." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87097").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87097_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87102 
stopAudio_87099();
function stopAudio_87099() {
	window.obj87097_onTap_runningActionsCount = obj87097_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87102")[0];
	myAudio.pause();
	window.obj87097_onTap_runningActionsCount = window.obj87097_onTap_runningActionsCount - 1;
if (window.obj87097_onTap_runningActionsCount < 0) {
	window.obj87097_onTap_runningActionsCount = 0;
} else if (window.obj87097_onTap_runningActionsCount == 0) {
	obj87097_onTap_actionGroup1();
}
}








};
obj87097_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87097_onTap_activeActionGroupIndex = -1;
		$("#obj87097").trigger("obj87097_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87097) {
				console.warn("de-queueing event obj87097." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87097").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87097_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87097 
hide_87100();
function hide_87100() {
	var selector = "#obj87097";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87097_onTap_runningActionsCount = obj87097_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87097_onTap_runningActionsCount = window.obj87097_onTap_runningActionsCount - 1;
if (window.obj87097_onTap_runningActionsCount < 0) {
	window.obj87097_onTap_runningActionsCount = 0;
} else if (window.obj87097_onTap_runningActionsCount == 0) {
	obj87097_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87100(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87097_onTap_runningActionsCount = window.obj87097_onTap_runningActionsCount - 1;
if (window.obj87097_onTap_runningActionsCount < 0) {
	window.obj87097_onTap_runningActionsCount = 0;
} else if (window.obj87097_onTap_runningActionsCount == 0) {
	obj87097_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87097_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87097_onTap_activeActionGroupIndex = -1;
		$("#obj87097").trigger("obj87097_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87097) {
				console.warn("de-queueing event obj87097." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87097").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87097_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87092
(function(){
	window.obj87097_onTap_runningActionsCount = obj87097_onTap_runningActionsCount + 1;

	var selector = "#obj87092";
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
					window.obj87097_onTap_runningActionsCount = window.obj87097_onTap_runningActionsCount - 1;
if (window.obj87097_onTap_runningActionsCount < 0) {
	window.obj87097_onTap_runningActionsCount = 0;
} else if (window.obj87097_onTap_runningActionsCount == 0) {
	obj87097_onTap_actionGroup3();
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
				window.obj87097_onTap_runningActionsCount = window.obj87097_onTap_runningActionsCount - 1;
if (window.obj87097_onTap_runningActionsCount < 0) {
	window.obj87097_onTap_runningActionsCount = 0;
} else if (window.obj87097_onTap_runningActionsCount == 0) {
	obj87097_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87097_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87097_onTap_activeActionGroupIndex = -1;
		$("#obj87097").trigger("obj87097_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87097) {
				console.warn("de-queueing event obj87097." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87097").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87097_onTap_activeActionGroupIndex = 3;
	





















};
obj87092_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87092_onTap_activeActionGroupIndex = -1;
		$("#obj87092").trigger("obj87092_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87092) {
				console.warn("de-queueing event obj87092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87092_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87092 
hide_87094();
function hide_87094() {
	var selector = "#obj87092";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87092_onTap_runningActionsCount = obj87092_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87092_onTap_runningActionsCount = window.obj87092_onTap_runningActionsCount - 1;
if (window.obj87092_onTap_runningActionsCount < 0) {
	window.obj87092_onTap_runningActionsCount = 0;
} else if (window.obj87092_onTap_runningActionsCount == 0) {
	obj87092_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87094(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87092_onTap_runningActionsCount = window.obj87092_onTap_runningActionsCount - 1;
if (window.obj87092_onTap_runningActionsCount < 0) {
	window.obj87092_onTap_runningActionsCount = 0;
} else if (window.obj87092_onTap_runningActionsCount == 0) {
	obj87092_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87092_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87092_onTap_activeActionGroupIndex = -1;
		$("#obj87092").trigger("obj87092_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87092) {
				console.warn("de-queueing event obj87092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87092_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87097
(function(){
	window.obj87092_onTap_runningActionsCount = obj87092_onTap_runningActionsCount + 1;

	var selector = "#obj87097";
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
					window.obj87092_onTap_runningActionsCount = window.obj87092_onTap_runningActionsCount - 1;
if (window.obj87092_onTap_runningActionsCount < 0) {
	window.obj87092_onTap_runningActionsCount = 0;
} else if (window.obj87092_onTap_runningActionsCount == 0) {
	obj87092_onTap_actionGroup2();
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
				window.obj87092_onTap_runningActionsCount = window.obj87092_onTap_runningActionsCount - 1;
if (window.obj87092_onTap_runningActionsCount < 0) {
	window.obj87092_onTap_runningActionsCount = 0;
} else if (window.obj87092_onTap_runningActionsCount == 0) {
	obj87092_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87092_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87092_onTap_activeActionGroupIndex = -1;
		$("#obj87092").trigger("obj87092_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87092) {
				console.warn("de-queueing event obj87092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87092_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87102 
playAudio_87096();
function playAudio_87096() {
	window.obj87092_onTap_runningActionsCount = obj87092_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87102")[0];
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
		    window.obj87092_onTap_runningActionsCount = window.obj87092_onTap_runningActionsCount - 1;
if (window.obj87092_onTap_runningActionsCount < 0) {
	window.obj87092_onTap_runningActionsCount = 0;
} else if (window.obj87092_onTap_runningActionsCount == 0) {
	obj87092_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87092_onTap_runningActionsCount = window.obj87092_onTap_runningActionsCount - 1;
if (window.obj87092_onTap_runningActionsCount < 0) {
	window.obj87092_onTap_runningActionsCount = 0;
} else if (window.obj87092_onTap_runningActionsCount == 0) {
	obj87092_onTap_actionGroup3();
}
	}
}









};
obj87092_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87092_onTap_activeActionGroupIndex = -1;
		$("#obj87092").trigger("obj87092_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87092) {
				console.warn("de-queueing event obj87092." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87092").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87092_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj5165: Event Touch Down
 *
 */
$("#obj5165").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5165_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5165_onTap is still running");
	return;
}
var obj5165_onTap_runningActionsCount = 0;
var obj5165_onTap_loopCount = 0;
obj5165_onTap_actionGroup0();
});










/*
 *
 *   obj5162: Event Touch Down
 *
 */
$("#obj5162").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5162_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5162_onTap is still running");
	return;
}
var obj5162_onTap_runningActionsCount = 0;
var obj5162_onTap_loopCount = 0;
obj5162_onTap_actionGroup0();
});










/*
 *
 *   obj5168: Event Touch Down
 *
 */
$("#obj5168").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5168_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5168_onTap is still running");
	return;
}
var obj5168_onTap_runningActionsCount = 0;
var obj5168_onTap_loopCount = 0;
obj5168_onTap_actionGroup0();
});

























































































































/*
 *
 *   obj5210: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5210");
	var winTarget = document.getElementById("obj5210");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5210").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5210_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5210_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5210_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5210_onTouchDown is still running");
	return;
}
var obj5210_onTouchDown_runningActionsCount = 0;
var obj5210_onTouchDown_loopCount = 0;
obj5210_onTouchDown_actionGroup0();
});



/*
 *
 *   obj5210: Event SCActionDragDrop5213_droppedOutsideTargetActions
 *
 */
$("#obj5210").bind("SCActionDragDrop5213_droppedOutsideTargetActions", function(event) {
	if (window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5210_SCActionDragDrop5213_droppedOutsideTargetActions is still running");
	return;
}
var obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_loopCount = 0;
obj5210_SCActionDragDrop5213_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5210: Event droppedInsideTargetActions
 *
 */
$("#obj5210").bind("droppedInsideTargetActions", function(event) {
	if (window.obj5210_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5210_droppedInsideTargetActions is still running");
	return;
}
var obj5210_droppedInsideTargetActions_runningActionsCount = 0;
var obj5210_droppedInsideTargetActions_loopCount = 0;
obj5210_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj5263: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5263");
	var winTarget = document.getElementById("obj5263");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5263").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5263_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5263_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5263_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5263_onTouchDown is still running");
	return;
}
var obj5263_onTouchDown_runningActionsCount = 0;
var obj5263_onTouchDown_loopCount = 0;
obj5263_onTouchDown_actionGroup0();
});



/*
 *
 *   obj5263: Event SCActionDragDrop5266_droppedOutsideTargetActions
 *
 */
$("#obj5263").bind("SCActionDragDrop5266_droppedOutsideTargetActions", function(event) {
	if (window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5263_SCActionDragDrop5266_droppedOutsideTargetActions is still running");
	return;
}
var obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_loopCount = 0;
obj5263_SCActionDragDrop5266_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5263: Event droppedInsideTargetActions
 *
 */
$("#obj5263").bind("droppedInsideTargetActions", function(event) {
	if (window.obj5263_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5263_droppedInsideTargetActions is still running");
	return;
}
var obj5263_droppedInsideTargetActions_runningActionsCount = 0;
var obj5263_droppedInsideTargetActions_loopCount = 0;
obj5263_droppedInsideTargetActions_actionGroup0();
});













































/*
 *
 *   obj65406: Event Touch Down
 *
 */
$("#obj65406").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65406_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65406_onTap is still running");
	return;
}
var obj65406_onTap_runningActionsCount = 0;
var obj65406_onTap_loopCount = 0;
obj65406_onTap_actionGroup0();
});










/*
 *
 *   obj65398: Event Touch Down
 *
 */
$("#obj65398").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65398_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65398_onTap is still running");
	return;
}
var obj65398_onTap_runningActionsCount = 0;
var obj65398_onTap_loopCount = 0;
obj65398_onTap_actionGroup0();
});










/*
 *
 *   obj87097: Event Touch Down
 *
 */
$("#obj87097").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87097_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87097_onTap is still running");
	return;
}
var obj87097_onTap_runningActionsCount = 0;
var obj87097_onTap_loopCount = 0;
obj87097_onTap_actionGroup0();
});










/*
 *
 *   obj87092: Event Touch Down
 *
 */
$("#obj87092").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87092_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87092_onTap is still running");
	return;
}
var obj87092_onTap_runningActionsCount = 0;
var obj87092_onTap_loopCount = 0;
obj87092_onTap_actionGroup0();
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
	
$("#obj5160").trigger('SCEventShow');
$("#obj5165").trigger('SCEventShow');
$("#obj5162").trigger('SCEventShow');
$("#obj5168").trigger('SCEventShow');
$("#obj5185").trigger('SCEventShow');
$("#obj5187").trigger('SCEventShow');
$("#obj5189").trigger('SCEventShow');
$("#obj5194").trigger('SCEventShow');
$("#obj5196").trigger('SCEventShow');
$("#obj5200").trigger('SCEventShow');
$("#obj5198").trigger('SCEventShow');
$("#obj5202").trigger('SCEventShow');
$("#obj5204").trigger('SCEventShow');
$("#obj5206").trigger('SCEventShow');
$("#obj5208").trigger('SCEventShow');
$("#obj5210").trigger('SCEventShow');
$("#obj5263").trigger('SCEventShow');
$("#obj5318").trigger('SCEventShow');
$("#obj5320").trigger('SCEventShow');
$("#obj5329").trigger('SCEventShow');
$("#obj5330").trigger('SCEventShow');
$("#obj65406").trigger('SCEventShow');
$("#obj65398").trigger('SCEventShow');
$("#obj87097").trigger('SCEventShow');
$("#obj87092").trigger('SCEventShow');
$("#obj87102").trigger('SCEventShow');
$("#obj94685").trigger('SCEventShow');
$("#obj65412").trigger('SCEventShow');
	
});