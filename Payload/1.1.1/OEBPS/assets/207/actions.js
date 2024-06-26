pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 56069;
pubcoder.page.title = pubcoder.page.title || "207";
pubcoder.page.number = pubcoder.page.number || 207;
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
var obj56130_onTap_activeActionGroupIndex = -1;
var obj56130_onTap_runningActionsCount = 0;
var obj56130_onTap_loopCount = 0;
var obj56127_onTap_activeActionGroupIndex = -1;
var obj56127_onTap_runningActionsCount = 0;
var obj56127_onTap_loopCount = 0;
var obj56123_onTap_activeActionGroupIndex = -1;
var obj56123_onTap_runningActionsCount = 0;
var obj56123_onTap_loopCount = 0;
var obj56081_onDrag_activeActionGroupIndex = -1;
var obj56081_onDrag_runningActionsCount = 0;
var obj56081_onDrag_loopCount = 0;
var obj56081_onTouchDown_activeActionGroupIndex = -1;
var obj56081_onTouchDown_runningActionsCount = 0;
var obj56081_onTouchDown_loopCount = 0;
var obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_loopCount = 0;
var obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj56081_droppedInsideTargetActions_runningActionsCount = 0;
var obj56081_droppedInsideTargetActions_loopCount = 0;
var obj56070_onDrag_activeActionGroupIndex = -1;
var obj56070_onDrag_runningActionsCount = 0;
var obj56070_onDrag_loopCount = 0;
var obj56070_onTouchDown_activeActionGroupIndex = -1;
var obj56070_onTouchDown_runningActionsCount = 0;
var obj56070_onTouchDown_loopCount = 0;
var obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_loopCount = 0;
var obj56070_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj56070_droppedInsideTargetActions_runningActionsCount = 0;
var obj56070_droppedInsideTargetActions_loopCount = 0;
var obj68350_onTap_activeActionGroupIndex = -1;
var obj68350_onTap_runningActionsCount = 0;
var obj68350_onTap_loopCount = 0;
var obj68342_onTap_activeActionGroupIndex = -1;
var obj68342_onTap_runningActionsCount = 0;
var obj68342_onTap_loopCount = 0;
var obj89365_onTap_activeActionGroupIndex = -1;
var obj89365_onTap_runningActionsCount = 0;
var obj89365_onTap_loopCount = 0;
var obj89360_onTap_activeActionGroupIndex = -1;
var obj89360_onTap_runningActionsCount = 0;
var obj89360_onTap_loopCount = 0;
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
		
obj56130_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56130_onTap_activeActionGroupIndex = -1;
		$("#obj56130").trigger("obj56130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56130) {
				console.warn("de-queueing event obj56130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56130_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_56132();
function goToPage_56132() {
	window.obj56130_onTap_runningActionsCount = obj56130_onTap_runningActionsCount + 1;
	$("#anchor1216")[0].click();
	window.obj56130_onTap_runningActionsCount = window.obj56130_onTap_runningActionsCount - 1;
if (window.obj56130_onTap_runningActionsCount < 0) {
	window.obj56130_onTap_runningActionsCount = 0;
} else if (window.obj56130_onTap_runningActionsCount == 0) {
	obj56130_onTap_actionGroup1();
}
}





















};
obj56130_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56130_onTap_activeActionGroupIndex = -1;
		$("#obj56130").trigger("obj56130_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56130) {
				console.warn("de-queueing event obj56130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56130_onTap_activeActionGroupIndex = 1;
	





















};
obj56127_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56127_onTap_activeActionGroupIndex = -1;
		$("#obj56127").trigger("obj56127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56127) {
				console.warn("de-queueing event obj56127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56127_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_56129();
function goToPage_56129() {
	window.obj56127_onTap_runningActionsCount = obj56127_onTap_runningActionsCount + 1;
	$("#anchor1217")[0].click();
	window.obj56127_onTap_runningActionsCount = window.obj56127_onTap_runningActionsCount - 1;
if (window.obj56127_onTap_runningActionsCount < 0) {
	window.obj56127_onTap_runningActionsCount = 0;
} else if (window.obj56127_onTap_runningActionsCount == 0) {
	obj56127_onTap_actionGroup1();
}
}





















};
obj56127_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56127_onTap_activeActionGroupIndex = -1;
		$("#obj56127").trigger("obj56127_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56127) {
				console.warn("de-queueing event obj56127." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56127").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56127_onTap_activeActionGroupIndex = 1;
	





















};
obj56123_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56123_onTap_activeActionGroupIndex = -1;
		$("#obj56123").trigger("obj56123_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56123) {
				console.warn("de-queueing event obj56123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56123_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_56125();
function goToPage_56125() {
	window.obj56123_onTap_runningActionsCount = obj56123_onTap_runningActionsCount + 1;
	$("#anchor1218")[0].click();
	window.obj56123_onTap_runningActionsCount = window.obj56123_onTap_runningActionsCount - 1;
if (window.obj56123_onTap_runningActionsCount < 0) {
	window.obj56123_onTap_runningActionsCount = 0;
} else if (window.obj56123_onTap_runningActionsCount == 0) {
	obj56123_onTap_actionGroup1();
}
}





















};
obj56123_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56123_onTap_activeActionGroupIndex = -1;
		$("#obj56123").trigger("obj56123_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56123) {
				console.warn("de-queueing event obj56123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56123_onTap_activeActionGroupIndex = 1;
	





















};
obj56081_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj56081");
//	action: dragDrop
//	target: obj56081 
dragDrop_56084();
function dragDrop_56084() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj56081_onTouchDown_runningActionsCount = obj56081_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj56081');
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
	  	containerNode = $('#obj56115');
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
    	window.obj56081_onTouchDown_runningActionsCount = window.obj56081_onTouchDown_runningActionsCount - 1;
if (window.obj56081_onTouchDown_runningActionsCount < 0) {
	window.obj56081_onTouchDown_runningActionsCount = 0;
} else if (window.obj56081_onTouchDown_runningActionsCount == 0) {
	obj56081_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj56111");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_56084 = false;
    	var dropped_id_56084;
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
					dropped_56084 = true;
					dropped_id_56084 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_56084) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj56081").trigger('SCActionDragDrop56084_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj56081_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56081_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj56081 
move_92853();
function move_92853() {
	window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_runningActionsCount = obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj56081");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 552;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_runningActionsCount = window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj56081_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56086();
function runjs_56086() {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56111").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj56081_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56087();
function runjs_56087() {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56111").css("border-color", "#C00000"); $("#obj56111").css("border-width", "2px"); $("#obj56111").css("border-style", "solid"); $("#obj56111").css("border-radius", "10px"); $("#obj56111").css("-webkit-border-radius", "10px"); $("#obj56111").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj56081_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56109 
hide_56088();
function hide_56088() {
	var selector = "#obj56109";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56088(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56081_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56089();
function runjs_56089() {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56081").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj56081_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56090();
function switchText_56090() {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56103_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56103_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56103").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56103_content");
			setTimeout(function () {
				window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56103 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj56081_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56081 
move_56091();
function move_56091() {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj56081");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 552;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj56081_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56092();
function runjs_56092() {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56111").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj56081_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56093();
function runjs_56093() {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56111").css("border-color", "#000000"); $("#obj56111").css("border-width", "1px"); $("#obj56111").css("border-style", "solid"); $("#obj56111").css("border-radius", "10px"); $("#obj56111").css("-webkit-border-radius", "10px"); $("#obj56111").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj56081_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56109
(function(){
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj56109";
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
					window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup9();
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
				window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56081_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56095();
function runjs_56095() {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56081").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj56081_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56096();
function runjs_56096() {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56081").css("border-color", "rgba(0,0,0,0)"); $("#obj56081").css("border-width", "0px"); $("#obj56081").css("border-style", "solid"); $("#obj56081").css("border-radius", "10px"); $("#obj56081").css("-webkit-border-radius", "10px"); $("#obj56081").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj56081_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56099 
playAudio_56097();
function playAudio_56097() {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj56099")[0];
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
		    window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj56081_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56098();
function switchText_56098() {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = obj56081_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56103_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56103_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56103").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56103_content");
			setTimeout(function () {
				window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56103 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56081_droppedInsideTargetActions_runningActionsCount = window.obj56081_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56081_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56081_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56081_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56081_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj56081_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56081").trigger("obj56081_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56081) {
				console.warn("de-queueing event obj56081." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56081").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56081_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj56070_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56070_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56070").trigger("obj56070_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56070) {
				console.warn("de-queueing event obj56070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56070_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj56070");
//	action: dragDrop
//	target: obj56070 
dragDrop_56073();
function dragDrop_56073() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj56070_onTouchDown_runningActionsCount = obj56070_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj56070');
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
	  	containerNode = $('#obj56115');
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
    	window.obj56070_onTouchDown_runningActionsCount = window.obj56070_onTouchDown_runningActionsCount - 1;
if (window.obj56070_onTouchDown_runningActionsCount < 0) {
	window.obj56070_onTouchDown_runningActionsCount = 0;
} else if (window.obj56070_onTouchDown_runningActionsCount == 0) {
	obj56070_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj56111");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_56073 = false;
    	var dropped_id_56073;
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
					dropped_56073 = true;
					dropped_id_56073 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_56073) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj56070").trigger('SCActionDragDrop56073_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj56070_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56070_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56070").trigger("obj56070_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56070) {
				console.warn("de-queueing event obj56070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56070_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56070").trigger("obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56070) {
				console.warn("de-queueing event obj56070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj56070 
move_92851();
function move_92851() {
	window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_runningActionsCount = obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj56070");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 121;
	var moveY = 552;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_runningActionsCount = window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56070").trigger("obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56070) {
				console.warn("de-queueing event obj56070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj56070_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56070").trigger("obj56070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56070) {
				console.warn("de-queueing event obj56070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56075();
function runjs_56075() {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = obj56070_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56111").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56070_droppedInsideTargetActions_runningActionsCount = window.obj56070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56070_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj56070_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56070").trigger("obj56070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56070) {
				console.warn("de-queueing event obj56070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56076();
function runjs_56076() {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = obj56070_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56111").css("border-color", "#058E3F"); $("#obj56111").css("border-width", "2px"); $("#obj56111").css("border-style", "solid"); $("#obj56111").css("border-radius", "10px"); $("#obj56111").css("-webkit-border-radius", "10px"); $("#obj56111").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56070_droppedInsideTargetActions_runningActionsCount = window.obj56070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56070_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj56070_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56070").trigger("obj56070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56070) {
				console.warn("de-queueing event obj56070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56109 
hide_56077();
function hide_56077() {
	var selector = "#obj56109";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56070_droppedInsideTargetActions_runningActionsCount = obj56070_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56070_droppedInsideTargetActions_runningActionsCount = window.obj56070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56070_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56077(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56070_droppedInsideTargetActions_runningActionsCount = window.obj56070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56070_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56070_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56070").trigger("obj56070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56070) {
				console.warn("de-queueing event obj56070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56078();
function runjs_56078() {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = obj56070_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56070").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56070_droppedInsideTargetActions_runningActionsCount = window.obj56070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56070_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj56070_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56070").trigger("obj56070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56070) {
				console.warn("de-queueing event obj56070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56079();
function switchText_56079() {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = obj56070_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56103_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56103_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56103").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56103_content");
			setTimeout(function () {
				window.obj56070_droppedInsideTargetActions_runningActionsCount = window.obj56070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56070_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56103 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56070_droppedInsideTargetActions_runningActionsCount = window.obj56070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56070_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj56070_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56070").trigger("obj56070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56070) {
				console.warn("de-queueing event obj56070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj56107 
playAudio_56080();
function playAudio_56080() {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = obj56070_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj56107")[0];
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
		    window.obj56070_droppedInsideTargetActions_runningActionsCount = window.obj56070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56070_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56070_droppedInsideTargetActions_runningActionsCount = window.obj56070_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56070_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56070_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56070_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56070_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj56070_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56070").trigger("obj56070_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56070) {
				console.warn("de-queueing event obj56070." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56070").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56070_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68350_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68350_onTap_activeActionGroupIndex = -1;
		$("#obj68350").trigger("obj68350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68350) {
				console.warn("de-queueing event obj68350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68350_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68350 
hide_68353();
function hide_68353() {
	var selector = "#obj68350";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68350_onTap_runningActionsCount = obj68350_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68350_onTap_runningActionsCount = window.obj68350_onTap_runningActionsCount - 1;
if (window.obj68350_onTap_runningActionsCount < 0) {
	window.obj68350_onTap_runningActionsCount = 0;
} else if (window.obj68350_onTap_runningActionsCount == 0) {
	obj68350_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68353(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68350_onTap_runningActionsCount = window.obj68350_onTap_runningActionsCount - 1;
if (window.obj68350_onTap_runningActionsCount < 0) {
	window.obj68350_onTap_runningActionsCount = 0;
} else if (window.obj68350_onTap_runningActionsCount == 0) {
	obj68350_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68356 
stopMovie_68352();
function stopMovie_68352() {
	window.obj68350_onTap_runningActionsCount = obj68350_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68356")[0];
	myVideo.pause();
	window.obj68350_onTap_runningActionsCount = window.obj68350_onTap_runningActionsCount - 1;
if (window.obj68350_onTap_runningActionsCount < 0) {
	window.obj68350_onTap_runningActionsCount = 0;
} else if (window.obj68350_onTap_runningActionsCount == 0) {
	obj68350_onTap_actionGroup1();
}
}
















};
obj68350_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68350_onTap_activeActionGroupIndex = -1;
		$("#obj68350").trigger("obj68350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68350) {
				console.warn("de-queueing event obj68350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68350_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68342
(function(){
	window.obj68350_onTap_runningActionsCount = obj68350_onTap_runningActionsCount + 1;

	var selector = "#obj68342";
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
					window.obj68350_onTap_runningActionsCount = window.obj68350_onTap_runningActionsCount - 1;
if (window.obj68350_onTap_runningActionsCount < 0) {
	window.obj68350_onTap_runningActionsCount = 0;
} else if (window.obj68350_onTap_runningActionsCount == 0) {
	obj68350_onTap_actionGroup2();
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
				window.obj68350_onTap_runningActionsCount = window.obj68350_onTap_runningActionsCount - 1;
if (window.obj68350_onTap_runningActionsCount < 0) {
	window.obj68350_onTap_runningActionsCount = 0;
} else if (window.obj68350_onTap_runningActionsCount == 0) {
	obj68350_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68350_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68350_onTap_activeActionGroupIndex = -1;
		$("#obj68350").trigger("obj68350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68350) {
				console.warn("de-queueing event obj68350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68350_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68356 
move_68355();
function move_68355() {
	window.obj68350_onTap_runningActionsCount = obj68350_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68356");
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
			window.obj68350_onTap_runningActionsCount = window.obj68350_onTap_runningActionsCount - 1;
if (window.obj68350_onTap_runningActionsCount < 0) {
	window.obj68350_onTap_runningActionsCount = 0;
} else if (window.obj68350_onTap_runningActionsCount == 0) {
	obj68350_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68350_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68350_onTap_activeActionGroupIndex = -1;
		$("#obj68350").trigger("obj68350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68350) {
				console.warn("de-queueing event obj68350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68350_onTap_activeActionGroupIndex = 3;
	





















};
obj68342_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68342_onTap_activeActionGroupIndex = -1;
		$("#obj68342").trigger("obj68342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68342) {
				console.warn("de-queueing event obj68342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68342_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68342 
hide_68345();
function hide_68345() {
	var selector = "#obj68342";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68342_onTap_runningActionsCount = obj68342_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68342_onTap_runningActionsCount = window.obj68342_onTap_runningActionsCount - 1;
if (window.obj68342_onTap_runningActionsCount < 0) {
	window.obj68342_onTap_runningActionsCount = 0;
} else if (window.obj68342_onTap_runningActionsCount == 0) {
	obj68342_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68345(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68342_onTap_runningActionsCount = window.obj68342_onTap_runningActionsCount - 1;
if (window.obj68342_onTap_runningActionsCount < 0) {
	window.obj68342_onTap_runningActionsCount = 0;
} else if (window.obj68342_onTap_runningActionsCount == 0) {
	obj68342_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68356 
playPauseMovie_68344();
function playPauseMovie_68344() {
	window.obj68342_onTap_runningActionsCount = obj68342_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68356")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68342_onTap_runningActionsCount = window.obj68342_onTap_runningActionsCount - 1;
if (window.obj68342_onTap_runningActionsCount < 0) {
	window.obj68342_onTap_runningActionsCount = 0;
} else if (window.obj68342_onTap_runningActionsCount == 0) {
	obj68342_onTap_actionGroup1();
}
}

















};
obj68342_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68342_onTap_activeActionGroupIndex = -1;
		$("#obj68342").trigger("obj68342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68342) {
				console.warn("de-queueing event obj68342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68342_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68350
(function(){
	window.obj68342_onTap_runningActionsCount = obj68342_onTap_runningActionsCount + 1;

	var selector = "#obj68350";
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
					window.obj68342_onTap_runningActionsCount = window.obj68342_onTap_runningActionsCount - 1;
if (window.obj68342_onTap_runningActionsCount < 0) {
	window.obj68342_onTap_runningActionsCount = 0;
} else if (window.obj68342_onTap_runningActionsCount == 0) {
	obj68342_onTap_actionGroup2();
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
				window.obj68342_onTap_runningActionsCount = window.obj68342_onTap_runningActionsCount - 1;
if (window.obj68342_onTap_runningActionsCount < 0) {
	window.obj68342_onTap_runningActionsCount = 0;
} else if (window.obj68342_onTap_runningActionsCount == 0) {
	obj68342_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68342_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68342_onTap_activeActionGroupIndex = -1;
		$("#obj68342").trigger("obj68342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68342) {
				console.warn("de-queueing event obj68342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68342_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68356 
move_68347();
function move_68347() {
	window.obj68342_onTap_runningActionsCount = obj68342_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68356");
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
			window.obj68342_onTap_runningActionsCount = window.obj68342_onTap_runningActionsCount - 1;
if (window.obj68342_onTap_runningActionsCount < 0) {
	window.obj68342_onTap_runningActionsCount = 0;
} else if (window.obj68342_onTap_runningActionsCount == 0) {
	obj68342_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68342_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68342_onTap_activeActionGroupIndex = -1;
		$("#obj68342").trigger("obj68342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68342) {
				console.warn("de-queueing event obj68342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68342_onTap_activeActionGroupIndex = 3;
	





















};
obj89365_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89365_onTap_activeActionGroupIndex = -1;
		$("#obj89365").trigger("obj89365_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89365) {
				console.warn("de-queueing event obj89365." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89365").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89365_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89370 
stopAudio_89367();
function stopAudio_89367() {
	window.obj89365_onTap_runningActionsCount = obj89365_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89370")[0];
	myAudio.pause();
	window.obj89365_onTap_runningActionsCount = window.obj89365_onTap_runningActionsCount - 1;
if (window.obj89365_onTap_runningActionsCount < 0) {
	window.obj89365_onTap_runningActionsCount = 0;
} else if (window.obj89365_onTap_runningActionsCount == 0) {
	obj89365_onTap_actionGroup1();
}
}








};
obj89365_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89365_onTap_activeActionGroupIndex = -1;
		$("#obj89365").trigger("obj89365_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89365) {
				console.warn("de-queueing event obj89365." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89365").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89365_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89365 
hide_89368();
function hide_89368() {
	var selector = "#obj89365";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89365_onTap_runningActionsCount = obj89365_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89365_onTap_runningActionsCount = window.obj89365_onTap_runningActionsCount - 1;
if (window.obj89365_onTap_runningActionsCount < 0) {
	window.obj89365_onTap_runningActionsCount = 0;
} else if (window.obj89365_onTap_runningActionsCount == 0) {
	obj89365_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89368(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89365_onTap_runningActionsCount = window.obj89365_onTap_runningActionsCount - 1;
if (window.obj89365_onTap_runningActionsCount < 0) {
	window.obj89365_onTap_runningActionsCount = 0;
} else if (window.obj89365_onTap_runningActionsCount == 0) {
	obj89365_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89365_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89365_onTap_activeActionGroupIndex = -1;
		$("#obj89365").trigger("obj89365_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89365) {
				console.warn("de-queueing event obj89365." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89365").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89365_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89360
(function(){
	window.obj89365_onTap_runningActionsCount = obj89365_onTap_runningActionsCount + 1;

	var selector = "#obj89360";
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
					window.obj89365_onTap_runningActionsCount = window.obj89365_onTap_runningActionsCount - 1;
if (window.obj89365_onTap_runningActionsCount < 0) {
	window.obj89365_onTap_runningActionsCount = 0;
} else if (window.obj89365_onTap_runningActionsCount == 0) {
	obj89365_onTap_actionGroup3();
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
				window.obj89365_onTap_runningActionsCount = window.obj89365_onTap_runningActionsCount - 1;
if (window.obj89365_onTap_runningActionsCount < 0) {
	window.obj89365_onTap_runningActionsCount = 0;
} else if (window.obj89365_onTap_runningActionsCount == 0) {
	obj89365_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89365_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89365_onTap_activeActionGroupIndex = -1;
		$("#obj89365").trigger("obj89365_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89365) {
				console.warn("de-queueing event obj89365." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89365").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89365_onTap_activeActionGroupIndex = 3;
	





















};
obj89360_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89360_onTap_activeActionGroupIndex = -1;
		$("#obj89360").trigger("obj89360_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89360) {
				console.warn("de-queueing event obj89360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89360_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89360 
hide_89362();
function hide_89362() {
	var selector = "#obj89360";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89360_onTap_runningActionsCount = obj89360_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89360_onTap_runningActionsCount = window.obj89360_onTap_runningActionsCount - 1;
if (window.obj89360_onTap_runningActionsCount < 0) {
	window.obj89360_onTap_runningActionsCount = 0;
} else if (window.obj89360_onTap_runningActionsCount == 0) {
	obj89360_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89362(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89360_onTap_runningActionsCount = window.obj89360_onTap_runningActionsCount - 1;
if (window.obj89360_onTap_runningActionsCount < 0) {
	window.obj89360_onTap_runningActionsCount = 0;
} else if (window.obj89360_onTap_runningActionsCount == 0) {
	obj89360_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89360_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89360_onTap_activeActionGroupIndex = -1;
		$("#obj89360").trigger("obj89360_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89360) {
				console.warn("de-queueing event obj89360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89360_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89365
(function(){
	window.obj89360_onTap_runningActionsCount = obj89360_onTap_runningActionsCount + 1;

	var selector = "#obj89365";
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
					window.obj89360_onTap_runningActionsCount = window.obj89360_onTap_runningActionsCount - 1;
if (window.obj89360_onTap_runningActionsCount < 0) {
	window.obj89360_onTap_runningActionsCount = 0;
} else if (window.obj89360_onTap_runningActionsCount == 0) {
	obj89360_onTap_actionGroup2();
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
				window.obj89360_onTap_runningActionsCount = window.obj89360_onTap_runningActionsCount - 1;
if (window.obj89360_onTap_runningActionsCount < 0) {
	window.obj89360_onTap_runningActionsCount = 0;
} else if (window.obj89360_onTap_runningActionsCount == 0) {
	obj89360_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89360_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89360_onTap_activeActionGroupIndex = -1;
		$("#obj89360").trigger("obj89360_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89360) {
				console.warn("de-queueing event obj89360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89360_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89370 
playAudio_89364();
function playAudio_89364() {
	window.obj89360_onTap_runningActionsCount = obj89360_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89370")[0];
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
		    window.obj89360_onTap_runningActionsCount = window.obj89360_onTap_runningActionsCount - 1;
if (window.obj89360_onTap_runningActionsCount < 0) {
	window.obj89360_onTap_runningActionsCount = 0;
} else if (window.obj89360_onTap_runningActionsCount == 0) {
	obj89360_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89360_onTap_runningActionsCount = window.obj89360_onTap_runningActionsCount - 1;
if (window.obj89360_onTap_runningActionsCount < 0) {
	window.obj89360_onTap_runningActionsCount = 0;
} else if (window.obj89360_onTap_runningActionsCount == 0) {
	obj89360_onTap_actionGroup3();
}
	}
}









};
obj89360_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89360_onTap_activeActionGroupIndex = -1;
		$("#obj89360").trigger("obj89360_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89360) {
				console.warn("de-queueing event obj89360." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89360").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89360_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj56130: Event Touch Down
 *
 */
$("#obj56130").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj56130_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56130_onTap is still running");
	return;
}
var obj56130_onTap_runningActionsCount = 0;
var obj56130_onTap_loopCount = 0;
obj56130_onTap_actionGroup0();
});










/*
 *
 *   obj56127: Event Touch Down
 *
 */
$("#obj56127").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj56127_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56127_onTap is still running");
	return;
}
var obj56127_onTap_runningActionsCount = 0;
var obj56127_onTap_loopCount = 0;
obj56127_onTap_actionGroup0();
});










/*
 *
 *   obj56123: Event Touch Down
 *
 */
$("#obj56123").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj56123_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56123_onTap is still running");
	return;
}
var obj56123_onTap_runningActionsCount = 0;
var obj56123_onTap_loopCount = 0;
obj56123_onTap_actionGroup0();
});



































































































































/*
 *
 *   obj56081: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj56081");
	var winTarget = document.getElementById("obj56081");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj56081").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj56081_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj56081_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj56081_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56081_onTouchDown is still running");
	return;
}
var obj56081_onTouchDown_runningActionsCount = 0;
var obj56081_onTouchDown_loopCount = 0;
obj56081_onTouchDown_actionGroup0();
});



/*
 *
 *   obj56081: Event SCActionDragDrop56084_droppedOutsideTargetActions
 *
 */
$("#obj56081").bind("SCActionDragDrop56084_droppedOutsideTargetActions", function(event) {
	if (window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56081_SCActionDragDrop56084_droppedOutsideTargetActions is still running");
	return;
}
var obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_loopCount = 0;
obj56081_SCActionDragDrop56084_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj56081: Event droppedInsideTargetActions
 *
 */
$("#obj56081").bind("droppedInsideTargetActions", function(event) {
	if (window.obj56081_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56081_droppedInsideTargetActions is still running");
	return;
}
var obj56081_droppedInsideTargetActions_runningActionsCount = 0;
var obj56081_droppedInsideTargetActions_loopCount = 0;
obj56081_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj56070: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj56070");
	var winTarget = document.getElementById("obj56070");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj56070").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj56070_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj56070_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj56070_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56070_onTouchDown is still running");
	return;
}
var obj56070_onTouchDown_runningActionsCount = 0;
var obj56070_onTouchDown_loopCount = 0;
obj56070_onTouchDown_actionGroup0();
});



/*
 *
 *   obj56070: Event SCActionDragDrop56073_droppedOutsideTargetActions
 *
 */
$("#obj56070").bind("SCActionDragDrop56073_droppedOutsideTargetActions", function(event) {
	if (window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56070_SCActionDragDrop56073_droppedOutsideTargetActions is still running");
	return;
}
var obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_loopCount = 0;
obj56070_SCActionDragDrop56073_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj56070: Event droppedInsideTargetActions
 *
 */
$("#obj56070").bind("droppedInsideTargetActions", function(event) {
	if (window.obj56070_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56070_droppedInsideTargetActions is still running");
	return;
}
var obj56070_droppedInsideTargetActions_runningActionsCount = 0;
var obj56070_droppedInsideTargetActions_loopCount = 0;
obj56070_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68350: Event Touch Down
 *
 */
$("#obj68350").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68350_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68350_onTap is still running");
	return;
}
var obj68350_onTap_runningActionsCount = 0;
var obj68350_onTap_loopCount = 0;
obj68350_onTap_actionGroup0();
});










/*
 *
 *   obj68342: Event Touch Down
 *
 */
$("#obj68342").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68342_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68342_onTap is still running");
	return;
}
var obj68342_onTap_runningActionsCount = 0;
var obj68342_onTap_loopCount = 0;
obj68342_onTap_actionGroup0();
});










/*
 *
 *   obj89365: Event Touch Down
 *
 */
$("#obj89365").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89365_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89365_onTap is still running");
	return;
}
var obj89365_onTap_runningActionsCount = 0;
var obj89365_onTap_loopCount = 0;
obj89365_onTap_actionGroup0();
});










/*
 *
 *   obj89360: Event Touch Down
 *
 */
$("#obj89360").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89360_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89360_onTap is still running");
	return;
}
var obj89360_onTap_runningActionsCount = 0;
var obj89360_onTap_loopCount = 0;
obj89360_onTap_actionGroup0();
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
	
$("#obj56146").trigger('SCEventShow');
$("#obj56130").trigger('SCEventShow');
$("#obj56127").trigger('SCEventShow');
$("#obj56123").trigger('SCEventShow');
$("#obj56121").trigger('SCEventShow');
$("#obj56119").trigger('SCEventShow');
$("#obj56117").trigger('SCEventShow');
$("#obj56115").trigger('SCEventShow');
$("#obj56113").trigger('SCEventShow');
$("#obj56111").trigger('SCEventShow');
$("#obj56109").trigger('SCEventShow');
$("#obj56107").trigger('SCEventShow');
$("#obj56105").trigger('SCEventShow');
$("#obj56103").trigger('SCEventShow');
$("#obj56101").trigger('SCEventShow');
$("#obj56099").trigger('SCEventShow');
$("#obj56081").trigger('SCEventShow');
$("#obj56070").trigger('SCEventShow');
$("#obj68350").trigger('SCEventShow');
$("#obj68342").trigger('SCEventShow');
$("#obj89365").trigger('SCEventShow');
$("#obj89360").trigger('SCEventShow');
$("#obj89370").trigger('SCEventShow');
$("#obj95043").trigger('SCEventShow');
$("#obj68356").trigger('SCEventShow');
	
});