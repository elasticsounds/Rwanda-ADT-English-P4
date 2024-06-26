pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 23041;
pubcoder.page.title = pubcoder.page.title || "89";
pubcoder.page.number = pubcoder.page.number || 89;
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
var obj79052_onTap_activeActionGroupIndex = -1;
var obj79052_onTap_runningActionsCount = 0;
var obj79052_onTap_loopCount = 0;
var obj79049_onTap_activeActionGroupIndex = -1;
var obj79049_onTap_runningActionsCount = 0;
var obj79049_onTap_loopCount = 0;
var obj79045_onTap_activeActionGroupIndex = -1;
var obj79045_onTap_runningActionsCount = 0;
var obj79045_onTap_loopCount = 0;
var obj79003_onDrag_activeActionGroupIndex = -1;
var obj79003_onDrag_runningActionsCount = 0;
var obj79003_onDrag_loopCount = 0;
var obj79003_onTouchDown_activeActionGroupIndex = -1;
var obj79003_onTouchDown_runningActionsCount = 0;
var obj79003_onTouchDown_loopCount = 0;
var obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_loopCount = 0;
var obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj79003_droppedInsideTargetActions_runningActionsCount = 0;
var obj79003_droppedInsideTargetActions_loopCount = 0;
var obj78992_onDrag_activeActionGroupIndex = -1;
var obj78992_onDrag_runningActionsCount = 0;
var obj78992_onDrag_loopCount = 0;
var obj78992_onTouchDown_activeActionGroupIndex = -1;
var obj78992_onTouchDown_runningActionsCount = 0;
var obj78992_onTouchDown_loopCount = 0;
var obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_loopCount = 0;
var obj78992_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj78992_droppedInsideTargetActions_runningActionsCount = 0;
var obj78992_droppedInsideTargetActions_loopCount = 0;
var obj78974_onTap_activeActionGroupIndex = -1;
var obj78974_onTap_runningActionsCount = 0;
var obj78974_onTap_loopCount = 0;
var obj78966_onTap_activeActionGroupIndex = -1;
var obj78966_onTap_runningActionsCount = 0;
var obj78966_onTap_loopCount = 0;
var obj87937_onTap_activeActionGroupIndex = -1;
var obj87937_onTap_runningActionsCount = 0;
var obj87937_onTap_loopCount = 0;
var obj87932_onTap_activeActionGroupIndex = -1;
var obj87932_onTap_runningActionsCount = 0;
var obj87932_onTap_loopCount = 0;
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
		
obj79052_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79052_onTap_activeActionGroupIndex = -1;
		$("#obj79052").trigger("obj79052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79052) {
				console.warn("de-queueing event obj79052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79052_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79054();
function goToPage_79054() {
	window.obj79052_onTap_runningActionsCount = obj79052_onTap_runningActionsCount + 1;
	$("#anchor524")[0].click();
	window.obj79052_onTap_runningActionsCount = window.obj79052_onTap_runningActionsCount - 1;
if (window.obj79052_onTap_runningActionsCount < 0) {
	window.obj79052_onTap_runningActionsCount = 0;
} else if (window.obj79052_onTap_runningActionsCount == 0) {
	obj79052_onTap_actionGroup1();
}
}





















};
obj79052_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79052_onTap_activeActionGroupIndex = -1;
		$("#obj79052").trigger("obj79052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79052) {
				console.warn("de-queueing event obj79052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79052_onTap_activeActionGroupIndex = 1;
	





















};
obj79049_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79049_onTap_activeActionGroupIndex = -1;
		$("#obj79049").trigger("obj79049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79049) {
				console.warn("de-queueing event obj79049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79049_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79051();
function goToPage_79051() {
	window.obj79049_onTap_runningActionsCount = obj79049_onTap_runningActionsCount + 1;
	$("#anchor525")[0].click();
	window.obj79049_onTap_runningActionsCount = window.obj79049_onTap_runningActionsCount - 1;
if (window.obj79049_onTap_runningActionsCount < 0) {
	window.obj79049_onTap_runningActionsCount = 0;
} else if (window.obj79049_onTap_runningActionsCount == 0) {
	obj79049_onTap_actionGroup1();
}
}





















};
obj79049_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79049_onTap_activeActionGroupIndex = -1;
		$("#obj79049").trigger("obj79049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79049) {
				console.warn("de-queueing event obj79049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79049_onTap_activeActionGroupIndex = 1;
	





















};
obj79045_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79045_onTap_activeActionGroupIndex = -1;
		$("#obj79045").trigger("obj79045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79045) {
				console.warn("de-queueing event obj79045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79045_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79047();
function goToPage_79047() {
	window.obj79045_onTap_runningActionsCount = obj79045_onTap_runningActionsCount + 1;
	$("#anchor526")[0].click();
	window.obj79045_onTap_runningActionsCount = window.obj79045_onTap_runningActionsCount - 1;
if (window.obj79045_onTap_runningActionsCount < 0) {
	window.obj79045_onTap_runningActionsCount = 0;
} else if (window.obj79045_onTap_runningActionsCount == 0) {
	obj79045_onTap_actionGroup1();
}
}





















};
obj79045_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79045_onTap_activeActionGroupIndex = -1;
		$("#obj79045").trigger("obj79045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79045) {
				console.warn("de-queueing event obj79045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79045_onTap_activeActionGroupIndex = 1;
	





















};
obj79003_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj79003");
//	action: dragDrop
//	target: obj79003 
dragDrop_79006();
function dragDrop_79006() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj79003_onTouchDown_runningActionsCount = obj79003_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj79003');
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
	  	containerNode = $('#obj79037');
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
    	window.obj79003_onTouchDown_runningActionsCount = window.obj79003_onTouchDown_runningActionsCount - 1;
if (window.obj79003_onTouchDown_runningActionsCount < 0) {
	window.obj79003_onTouchDown_runningActionsCount = 0;
} else if (window.obj79003_onTouchDown_runningActionsCount == 0) {
	obj79003_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj79033");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_79006 = false;
    	var dropped_id_79006;
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
					dropped_79006 = true;
					dropped_id_79006 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_79006) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj79003").trigger('SCActionDragDrop79006_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj79003_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79003_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj79003 
move_92372();
function move_92372() {
	window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_runningActionsCount = obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj79003");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 123;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_runningActionsCount = window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj79003_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79008();
function runjs_79008() {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79033").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj79003_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_79009();
function runjs_79009() {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79033").css("border-color", "#C00000"); $("#obj79033").css("border-width", "2px"); $("#obj79033").css("border-style", "solid"); $("#obj79033").css("border-radius", "10px"); $("#obj79033").css("-webkit-border-radius", "10px"); $("#obj79033").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj79003_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj79031 
hide_79010();
function hide_79010() {
	var selector = "#obj79031";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79010(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79003_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_79011();
function runjs_79011() {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79003").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj79003_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_79012();
function switchText_79012() {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79025_content");
			setTimeout(function () {
				window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj79025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj79003_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj79003 
move_79013();
function move_79013() {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj79003");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 123;
	var moveY = 518;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj79003_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_79014();
function runjs_79014() {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79033").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj79003_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_79015();
function runjs_79015() {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79033").css("border-color", "#000000"); $("#obj79033").css("border-width", "1px"); $("#obj79033").css("border-style", "solid"); $("#obj79033").css("border-radius", "10px"); $("#obj79033").css("-webkit-border-radius", "10px"); $("#obj79033").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj79003_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj79031
(function(){
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj79031";
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
					window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup9();
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
				window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79003_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_79017();
function runjs_79017() {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79003").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj79003_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_79018();
function runjs_79018() {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79003").css("border-color", "rgba(0,0,0,0)"); $("#obj79003").css("border-width", "0px"); $("#obj79003").css("border-style", "solid"); $("#obj79003").css("border-radius", "10px"); $("#obj79003").css("-webkit-border-radius", "10px"); $("#obj79003").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj79003_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj79021 
playAudio_79019();
function playAudio_79019() {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj79021")[0];
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
		    window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj79003_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_79020();
function switchText_79020() {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = obj79003_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79025_content");
			setTimeout(function () {
				window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj79025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79003_droppedInsideTargetActions_runningActionsCount = window.obj79003_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79003_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79003_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79003_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79003_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj79003_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79003").trigger("obj79003_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79003) {
				console.warn("de-queueing event obj79003." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79003").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79003_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj78992_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78992_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj78992");
//	action: dragDrop
//	target: obj78992 
dragDrop_78995();
function dragDrop_78995() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj78992_onTouchDown_runningActionsCount = obj78992_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj78992');
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
	  	containerNode = $('#obj79037');
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
    	window.obj78992_onTouchDown_runningActionsCount = window.obj78992_onTouchDown_runningActionsCount - 1;
if (window.obj78992_onTouchDown_runningActionsCount < 0) {
	window.obj78992_onTouchDown_runningActionsCount = 0;
} else if (window.obj78992_onTouchDown_runningActionsCount == 0) {
	obj78992_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj79033");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_78995 = false;
    	var dropped_id_78995;
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
					dropped_78995 = true;
					dropped_id_78995 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_78995) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj78992").trigger('SCActionDragDrop78995_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj78992_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78992_onTouchDown_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj78992 
move_92374();
function move_92374() {
	window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_runningActionsCount = obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj78992");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 517;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_runningActionsCount = window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj78992_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_78997();
function runjs_78997() {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = obj78992_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79033").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj78992_droppedInsideTargetActions_runningActionsCount = window.obj78992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78992_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj78992_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_79001();
function switchText_79001() {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = obj78992_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79025_content");
			setTimeout(function () {
				window.obj78992_droppedInsideTargetActions_runningActionsCount = window.obj78992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78992_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj79025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78992_droppedInsideTargetActions_runningActionsCount = window.obj78992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78992_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj78992_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_78998();
function runjs_78998() {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = obj78992_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79033").css("border-color", "#058E3F"); $("#obj79033").css("border-width", "2px"); $("#obj79033").css("border-style", "solid"); $("#obj79033").css("border-radius", "10px"); $("#obj79033").css("-webkit-border-radius", "10px"); $("#obj79033").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj78992_droppedInsideTargetActions_runningActionsCount = window.obj78992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78992_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj78992_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj79031 
hide_78999();
function hide_78999() {
	var selector = "#obj79031";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78992_droppedInsideTargetActions_runningActionsCount = obj78992_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78992_droppedInsideTargetActions_runningActionsCount = window.obj78992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78992_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78999(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78992_droppedInsideTargetActions_runningActionsCount = window.obj78992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78992_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj78992_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_79000();
function runjs_79000() {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = obj78992_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj78992").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj78992_droppedInsideTargetActions_runningActionsCount = window.obj78992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78992_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj78992_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj79029 
playAudio_79002();
function playAudio_79002() {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = obj78992_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj79029")[0];
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
		    window.obj78992_droppedInsideTargetActions_runningActionsCount = window.obj78992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78992_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj78992_droppedInsideTargetActions_runningActionsCount = window.obj78992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78992_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj78992_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90311();
function switchText_90311() {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = obj78992_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79025_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79025_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79025").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79025_content");
			setTimeout(function () {
				window.obj78992_droppedInsideTargetActions_runningActionsCount = window.obj78992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78992_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj79025 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj78992_droppedInsideTargetActions_runningActionsCount = window.obj78992_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj78992_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj78992_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj78992_droppedInsideTargetActions_runningActionsCount == 0) {
	obj78992_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj78992_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj78992").trigger("obj78992_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78992) {
				console.warn("de-queueing event obj78992." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78992").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78992_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj78974_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78974_onTap_activeActionGroupIndex = -1;
		$("#obj78974").trigger("obj78974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78974) {
				console.warn("de-queueing event obj78974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78974_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78974 
hide_78977();
function hide_78977() {
	var selector = "#obj78974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78974_onTap_runningActionsCount = obj78974_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78974_onTap_runningActionsCount = window.obj78974_onTap_runningActionsCount - 1;
if (window.obj78974_onTap_runningActionsCount < 0) {
	window.obj78974_onTap_runningActionsCount = 0;
} else if (window.obj78974_onTap_runningActionsCount == 0) {
	obj78974_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78977(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78974_onTap_runningActionsCount = window.obj78974_onTap_runningActionsCount - 1;
if (window.obj78974_onTap_runningActionsCount < 0) {
	window.obj78974_onTap_runningActionsCount = 0;
} else if (window.obj78974_onTap_runningActionsCount == 0) {
	obj78974_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj78964 
stopMovie_78976();
function stopMovie_78976() {
	window.obj78974_onTap_runningActionsCount = obj78974_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78964")[0];
	myVideo.pause();
	window.obj78974_onTap_runningActionsCount = window.obj78974_onTap_runningActionsCount - 1;
if (window.obj78974_onTap_runningActionsCount < 0) {
	window.obj78974_onTap_runningActionsCount = 0;
} else if (window.obj78974_onTap_runningActionsCount == 0) {
	obj78974_onTap_actionGroup1();
}
}
















};
obj78974_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78974_onTap_activeActionGroupIndex = -1;
		$("#obj78974").trigger("obj78974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78974) {
				console.warn("de-queueing event obj78974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78974_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78966
(function(){
	window.obj78974_onTap_runningActionsCount = obj78974_onTap_runningActionsCount + 1;

	var selector = "#obj78966";
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
					window.obj78974_onTap_runningActionsCount = window.obj78974_onTap_runningActionsCount - 1;
if (window.obj78974_onTap_runningActionsCount < 0) {
	window.obj78974_onTap_runningActionsCount = 0;
} else if (window.obj78974_onTap_runningActionsCount == 0) {
	obj78974_onTap_actionGroup2();
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
				window.obj78974_onTap_runningActionsCount = window.obj78974_onTap_runningActionsCount - 1;
if (window.obj78974_onTap_runningActionsCount < 0) {
	window.obj78974_onTap_runningActionsCount = 0;
} else if (window.obj78974_onTap_runningActionsCount == 0) {
	obj78974_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78974_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78974_onTap_activeActionGroupIndex = -1;
		$("#obj78974").trigger("obj78974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78974) {
				console.warn("de-queueing event obj78974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78974_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78964 
move_78979();
function move_78979() {
	window.obj78974_onTap_runningActionsCount = obj78974_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78964");
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
			window.obj78974_onTap_runningActionsCount = window.obj78974_onTap_runningActionsCount - 1;
if (window.obj78974_onTap_runningActionsCount < 0) {
	window.obj78974_onTap_runningActionsCount = 0;
} else if (window.obj78974_onTap_runningActionsCount == 0) {
	obj78974_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78974_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78974_onTap_activeActionGroupIndex = -1;
		$("#obj78974").trigger("obj78974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78974) {
				console.warn("de-queueing event obj78974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78974_onTap_activeActionGroupIndex = 3;
	





















};
obj78966_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78966_onTap_activeActionGroupIndex = -1;
		$("#obj78966").trigger("obj78966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78966) {
				console.warn("de-queueing event obj78966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78966_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj78966 
hide_78969();
function hide_78969() {
	var selector = "#obj78966";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj78966_onTap_runningActionsCount = obj78966_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj78966_onTap_runningActionsCount = window.obj78966_onTap_runningActionsCount - 1;
if (window.obj78966_onTap_runningActionsCount < 0) {
	window.obj78966_onTap_runningActionsCount = 0;
} else if (window.obj78966_onTap_runningActionsCount == 0) {
	obj78966_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_78969(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj78966_onTap_runningActionsCount = window.obj78966_onTap_runningActionsCount - 1;
if (window.obj78966_onTap_runningActionsCount < 0) {
	window.obj78966_onTap_runningActionsCount = 0;
} else if (window.obj78966_onTap_runningActionsCount == 0) {
	obj78966_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj78964 
playPauseMovie_78968();
function playPauseMovie_78968() {
	window.obj78966_onTap_runningActionsCount = obj78966_onTap_runningActionsCount + 1;
	var myVideo = $("#obj78964")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj78966_onTap_runningActionsCount = window.obj78966_onTap_runningActionsCount - 1;
if (window.obj78966_onTap_runningActionsCount < 0) {
	window.obj78966_onTap_runningActionsCount = 0;
} else if (window.obj78966_onTap_runningActionsCount == 0) {
	obj78966_onTap_actionGroup1();
}
}

















};
obj78966_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78966_onTap_activeActionGroupIndex = -1;
		$("#obj78966").trigger("obj78966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78966) {
				console.warn("de-queueing event obj78966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78966_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj78974
(function(){
	window.obj78966_onTap_runningActionsCount = obj78966_onTap_runningActionsCount + 1;

	var selector = "#obj78974";
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
					window.obj78966_onTap_runningActionsCount = window.obj78966_onTap_runningActionsCount - 1;
if (window.obj78966_onTap_runningActionsCount < 0) {
	window.obj78966_onTap_runningActionsCount = 0;
} else if (window.obj78966_onTap_runningActionsCount == 0) {
	obj78966_onTap_actionGroup2();
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
				window.obj78966_onTap_runningActionsCount = window.obj78966_onTap_runningActionsCount - 1;
if (window.obj78966_onTap_runningActionsCount < 0) {
	window.obj78966_onTap_runningActionsCount = 0;
} else if (window.obj78966_onTap_runningActionsCount == 0) {
	obj78966_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj78966_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78966_onTap_activeActionGroupIndex = -1;
		$("#obj78966").trigger("obj78966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78966) {
				console.warn("de-queueing event obj78966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78966_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj78964 
move_78971();
function move_78971() {
	window.obj78966_onTap_runningActionsCount = obj78966_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj78964");
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
			window.obj78966_onTap_runningActionsCount = window.obj78966_onTap_runningActionsCount - 1;
if (window.obj78966_onTap_runningActionsCount < 0) {
	window.obj78966_onTap_runningActionsCount = 0;
} else if (window.obj78966_onTap_runningActionsCount == 0) {
	obj78966_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj78966_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78966_onTap_activeActionGroupIndex = -1;
		$("#obj78966").trigger("obj78966_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78966) {
				console.warn("de-queueing event obj78966." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78966").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78966_onTap_activeActionGroupIndex = 3;
	





















};
obj87937_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87937_onTap_activeActionGroupIndex = -1;
		$("#obj87937").trigger("obj87937_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87937) {
				console.warn("de-queueing event obj87937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87937_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87942 
stopAudio_87939();
function stopAudio_87939() {
	window.obj87937_onTap_runningActionsCount = obj87937_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87942")[0];
	myAudio.pause();
	window.obj87937_onTap_runningActionsCount = window.obj87937_onTap_runningActionsCount - 1;
if (window.obj87937_onTap_runningActionsCount < 0) {
	window.obj87937_onTap_runningActionsCount = 0;
} else if (window.obj87937_onTap_runningActionsCount == 0) {
	obj87937_onTap_actionGroup1();
}
}








};
obj87937_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87937_onTap_activeActionGroupIndex = -1;
		$("#obj87937").trigger("obj87937_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87937) {
				console.warn("de-queueing event obj87937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87937_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87937 
hide_87940();
function hide_87940() {
	var selector = "#obj87937";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87937_onTap_runningActionsCount = obj87937_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87937_onTap_runningActionsCount = window.obj87937_onTap_runningActionsCount - 1;
if (window.obj87937_onTap_runningActionsCount < 0) {
	window.obj87937_onTap_runningActionsCount = 0;
} else if (window.obj87937_onTap_runningActionsCount == 0) {
	obj87937_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87940(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87937_onTap_runningActionsCount = window.obj87937_onTap_runningActionsCount - 1;
if (window.obj87937_onTap_runningActionsCount < 0) {
	window.obj87937_onTap_runningActionsCount = 0;
} else if (window.obj87937_onTap_runningActionsCount == 0) {
	obj87937_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87937_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87937_onTap_activeActionGroupIndex = -1;
		$("#obj87937").trigger("obj87937_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87937) {
				console.warn("de-queueing event obj87937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87937_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87932
(function(){
	window.obj87937_onTap_runningActionsCount = obj87937_onTap_runningActionsCount + 1;

	var selector = "#obj87932";
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
					window.obj87937_onTap_runningActionsCount = window.obj87937_onTap_runningActionsCount - 1;
if (window.obj87937_onTap_runningActionsCount < 0) {
	window.obj87937_onTap_runningActionsCount = 0;
} else if (window.obj87937_onTap_runningActionsCount == 0) {
	obj87937_onTap_actionGroup3();
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
				window.obj87937_onTap_runningActionsCount = window.obj87937_onTap_runningActionsCount - 1;
if (window.obj87937_onTap_runningActionsCount < 0) {
	window.obj87937_onTap_runningActionsCount = 0;
} else if (window.obj87937_onTap_runningActionsCount == 0) {
	obj87937_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87937_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87937_onTap_activeActionGroupIndex = -1;
		$("#obj87937").trigger("obj87937_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87937) {
				console.warn("de-queueing event obj87937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87937_onTap_activeActionGroupIndex = 3;
	





















};
obj87932_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87932_onTap_activeActionGroupIndex = -1;
		$("#obj87932").trigger("obj87932_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87932) {
				console.warn("de-queueing event obj87932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87932_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87932 
hide_87934();
function hide_87934() {
	var selector = "#obj87932";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87932_onTap_runningActionsCount = obj87932_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87932_onTap_runningActionsCount = window.obj87932_onTap_runningActionsCount - 1;
if (window.obj87932_onTap_runningActionsCount < 0) {
	window.obj87932_onTap_runningActionsCount = 0;
} else if (window.obj87932_onTap_runningActionsCount == 0) {
	obj87932_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87934(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87932_onTap_runningActionsCount = window.obj87932_onTap_runningActionsCount - 1;
if (window.obj87932_onTap_runningActionsCount < 0) {
	window.obj87932_onTap_runningActionsCount = 0;
} else if (window.obj87932_onTap_runningActionsCount == 0) {
	obj87932_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87932_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87932_onTap_activeActionGroupIndex = -1;
		$("#obj87932").trigger("obj87932_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87932) {
				console.warn("de-queueing event obj87932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87932_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87937
(function(){
	window.obj87932_onTap_runningActionsCount = obj87932_onTap_runningActionsCount + 1;

	var selector = "#obj87937";
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
					window.obj87932_onTap_runningActionsCount = window.obj87932_onTap_runningActionsCount - 1;
if (window.obj87932_onTap_runningActionsCount < 0) {
	window.obj87932_onTap_runningActionsCount = 0;
} else if (window.obj87932_onTap_runningActionsCount == 0) {
	obj87932_onTap_actionGroup2();
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
				window.obj87932_onTap_runningActionsCount = window.obj87932_onTap_runningActionsCount - 1;
if (window.obj87932_onTap_runningActionsCount < 0) {
	window.obj87932_onTap_runningActionsCount = 0;
} else if (window.obj87932_onTap_runningActionsCount == 0) {
	obj87932_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87932_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87932_onTap_activeActionGroupIndex = -1;
		$("#obj87932").trigger("obj87932_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87932) {
				console.warn("de-queueing event obj87932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87932_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87942 
playAudio_87936();
function playAudio_87936() {
	window.obj87932_onTap_runningActionsCount = obj87932_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87942")[0];
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
		    window.obj87932_onTap_runningActionsCount = window.obj87932_onTap_runningActionsCount - 1;
if (window.obj87932_onTap_runningActionsCount < 0) {
	window.obj87932_onTap_runningActionsCount = 0;
} else if (window.obj87932_onTap_runningActionsCount == 0) {
	obj87932_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87932_onTap_runningActionsCount = window.obj87932_onTap_runningActionsCount - 1;
if (window.obj87932_onTap_runningActionsCount < 0) {
	window.obj87932_onTap_runningActionsCount = 0;
} else if (window.obj87932_onTap_runningActionsCount == 0) {
	obj87932_onTap_actionGroup3();
}
	}
}









};
obj87932_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87932_onTap_activeActionGroupIndex = -1;
		$("#obj87932").trigger("obj87932_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87932) {
				console.warn("de-queueing event obj87932." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87932").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87932_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj79052: Event Touch Down
 *
 */
$("#obj79052").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79052_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79052_onTap is still running");
	return;
}
var obj79052_onTap_runningActionsCount = 0;
var obj79052_onTap_loopCount = 0;
obj79052_onTap_actionGroup0();
});










/*
 *
 *   obj79049: Event Touch Down
 *
 */
$("#obj79049").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79049_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79049_onTap is still running");
	return;
}
var obj79049_onTap_runningActionsCount = 0;
var obj79049_onTap_loopCount = 0;
obj79049_onTap_actionGroup0();
});










/*
 *
 *   obj79045: Event Touch Down
 *
 */
$("#obj79045").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79045_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79045_onTap is still running");
	return;
}
var obj79045_onTap_runningActionsCount = 0;
var obj79045_onTap_loopCount = 0;
obj79045_onTap_actionGroup0();
});



































































































































/*
 *
 *   obj79003: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj79003");
	var winTarget = document.getElementById("obj79003");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj79003").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj79003_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj79003_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj79003_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79003_onTouchDown is still running");
	return;
}
var obj79003_onTouchDown_runningActionsCount = 0;
var obj79003_onTouchDown_loopCount = 0;
obj79003_onTouchDown_actionGroup0();
});



/*
 *
 *   obj79003: Event SCActionDragDrop79006_droppedOutsideTargetActions
 *
 */
$("#obj79003").bind("SCActionDragDrop79006_droppedOutsideTargetActions", function(event) {
	if (window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79003_SCActionDragDrop79006_droppedOutsideTargetActions is still running");
	return;
}
var obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_loopCount = 0;
obj79003_SCActionDragDrop79006_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj79003: Event droppedInsideTargetActions
 *
 */
$("#obj79003").bind("droppedInsideTargetActions", function(event) {
	if (window.obj79003_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79003_droppedInsideTargetActions is still running");
	return;
}
var obj79003_droppedInsideTargetActions_runningActionsCount = 0;
var obj79003_droppedInsideTargetActions_loopCount = 0;
obj79003_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj78992: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj78992");
	var winTarget = document.getElementById("obj78992");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj78992").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj78992_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj78992_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj78992_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78992_onTouchDown is still running");
	return;
}
var obj78992_onTouchDown_runningActionsCount = 0;
var obj78992_onTouchDown_loopCount = 0;
obj78992_onTouchDown_actionGroup0();
});



/*
 *
 *   obj78992: Event SCActionDragDrop78995_droppedOutsideTargetActions
 *
 */
$("#obj78992").bind("SCActionDragDrop78995_droppedOutsideTargetActions", function(event) {
	if (window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78992_SCActionDragDrop78995_droppedOutsideTargetActions is still running");
	return;
}
var obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_runningActionsCount = 0;
var obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_loopCount = 0;
obj78992_SCActionDragDrop78995_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj78992: Event droppedInsideTargetActions
 *
 */
$("#obj78992").bind("droppedInsideTargetActions", function(event) {
	if (window.obj78992_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78992_droppedInsideTargetActions is still running");
	return;
}
var obj78992_droppedInsideTargetActions_runningActionsCount = 0;
var obj78992_droppedInsideTargetActions_loopCount = 0;
obj78992_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj78974: Event Touch Down
 *
 */
$("#obj78974").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78974_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78974_onTap is still running");
	return;
}
var obj78974_onTap_runningActionsCount = 0;
var obj78974_onTap_loopCount = 0;
obj78974_onTap_actionGroup0();
});










/*
 *
 *   obj78966: Event Touch Down
 *
 */
$("#obj78966").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj78966_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78966_onTap is still running");
	return;
}
var obj78966_onTap_runningActionsCount = 0;
var obj78966_onTap_loopCount = 0;
obj78966_onTap_actionGroup0();
});










/*
 *
 *   obj87937: Event Touch Down
 *
 */
$("#obj87937").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87937_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87937_onTap is still running");
	return;
}
var obj87937_onTap_runningActionsCount = 0;
var obj87937_onTap_loopCount = 0;
obj87937_onTap_actionGroup0();
});










/*
 *
 *   obj87932: Event Touch Down
 *
 */
$("#obj87932").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87932_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87932_onTap is still running");
	return;
}
var obj87932_onTap_runningActionsCount = 0;
var obj87932_onTap_loopCount = 0;
obj87932_onTap_actionGroup0();
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
	
$("#obj79055").trigger('SCEventShow');
$("#obj79052").trigger('SCEventShow');
$("#obj79049").trigger('SCEventShow');
$("#obj79045").trigger('SCEventShow');
$("#obj79043").trigger('SCEventShow');
$("#obj79041").trigger('SCEventShow');
$("#obj79039").trigger('SCEventShow');
$("#obj79037").trigger('SCEventShow');
$("#obj79035").trigger('SCEventShow');
$("#obj79033").trigger('SCEventShow');
$("#obj79031").trigger('SCEventShow');
$("#obj79029").trigger('SCEventShow');
$("#obj79027").trigger('SCEventShow');
$("#obj79025").trigger('SCEventShow');
$("#obj79023").trigger('SCEventShow');
$("#obj79021").trigger('SCEventShow');
$("#obj79003").trigger('SCEventShow');
$("#obj78992").trigger('SCEventShow');
$("#obj78974").trigger('SCEventShow');
$("#obj78966").trigger('SCEventShow');
$("#obj87937").trigger('SCEventShow');
$("#obj87932").trigger('SCEventShow');
$("#obj87942").trigger('SCEventShow');
$("#obj94807").trigger('SCEventShow');
$("#obj78964").trigger('SCEventShow');
	
});