pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 17728;
pubcoder.page.title = pubcoder.page.title || "67";
pubcoder.page.number = pubcoder.page.number || 67;
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
var obj75170_onTap_activeActionGroupIndex = -1;
var obj75170_onTap_runningActionsCount = 0;
var obj75170_onTap_loopCount = 0;
var obj75167_onTap_activeActionGroupIndex = -1;
var obj75167_onTap_runningActionsCount = 0;
var obj75167_onTap_loopCount = 0;
var obj75163_onTap_activeActionGroupIndex = -1;
var obj75163_onTap_runningActionsCount = 0;
var obj75163_onTap_loopCount = 0;
var obj75104_onDrag_activeActionGroupIndex = -1;
var obj75104_onDrag_runningActionsCount = 0;
var obj75104_onDrag_loopCount = 0;
var obj75104_onTouchDown_activeActionGroupIndex = -1;
var obj75104_onTouchDown_runningActionsCount = 0;
var obj75104_onTouchDown_loopCount = 0;
var obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_loopCount = 0;
var obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75104_droppedInsideTargetActions_2_loopCount = 0;
var obj75104_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75104_droppedInsideTargetActions_runningActionsCount = 0;
var obj75104_droppedInsideTargetActions_loopCount = 0;
var obj75079_onDrag_activeActionGroupIndex = -1;
var obj75079_onDrag_runningActionsCount = 0;
var obj75079_onDrag_loopCount = 0;
var obj75079_onTouchDown_activeActionGroupIndex = -1;
var obj75079_onTouchDown_runningActionsCount = 0;
var obj75079_onTouchDown_loopCount = 0;
var obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_loopCount = 0;
var obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75079_droppedInsideTargetActions_2_loopCount = 0;
var obj75079_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj75079_droppedInsideTargetActions_runningActionsCount = 0;
var obj75079_droppedInsideTargetActions_loopCount = 0;
var obj75061_onTap_activeActionGroupIndex = -1;
var obj75061_onTap_runningActionsCount = 0;
var obj75061_onTap_loopCount = 0;
var obj75053_onTap_activeActionGroupIndex = -1;
var obj75053_onTap_runningActionsCount = 0;
var obj75053_onTap_loopCount = 0;
var obj87637_onTap_activeActionGroupIndex = -1;
var obj87637_onTap_runningActionsCount = 0;
var obj87637_onTap_loopCount = 0;
var obj87632_onTap_activeActionGroupIndex = -1;
var obj87632_onTap_runningActionsCount = 0;
var obj87632_onTap_loopCount = 0;
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
		
obj75170_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75170_onTap_activeActionGroupIndex = -1;
		$("#obj75170").trigger("obj75170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75170) {
				console.warn("de-queueing event obj75170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75170_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75172();
function goToPage_75172() {
	window.obj75170_onTap_runningActionsCount = obj75170_onTap_runningActionsCount + 1;
	$("#anchor400")[0].click();
	window.obj75170_onTap_runningActionsCount = window.obj75170_onTap_runningActionsCount - 1;
if (window.obj75170_onTap_runningActionsCount < 0) {
	window.obj75170_onTap_runningActionsCount = 0;
} else if (window.obj75170_onTap_runningActionsCount == 0) {
	obj75170_onTap_actionGroup1();
}
}





















};
obj75170_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75170_onTap_activeActionGroupIndex = -1;
		$("#obj75170").trigger("obj75170_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75170) {
				console.warn("de-queueing event obj75170." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75170").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75170_onTap_activeActionGroupIndex = 1;
	





















};
obj75167_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75167_onTap_activeActionGroupIndex = -1;
		$("#obj75167").trigger("obj75167_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75167) {
				console.warn("de-queueing event obj75167." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75167").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75167_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75169();
function goToPage_75169() {
	window.obj75167_onTap_runningActionsCount = obj75167_onTap_runningActionsCount + 1;
	$("#anchor401")[0].click();
	window.obj75167_onTap_runningActionsCount = window.obj75167_onTap_runningActionsCount - 1;
if (window.obj75167_onTap_runningActionsCount < 0) {
	window.obj75167_onTap_runningActionsCount = 0;
} else if (window.obj75167_onTap_runningActionsCount == 0) {
	obj75167_onTap_actionGroup1();
}
}





















};
obj75167_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75167_onTap_activeActionGroupIndex = -1;
		$("#obj75167").trigger("obj75167_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75167) {
				console.warn("de-queueing event obj75167." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75167").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75167_onTap_activeActionGroupIndex = 1;
	





















};
obj75163_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75163_onTap_activeActionGroupIndex = -1;
		$("#obj75163").trigger("obj75163_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75163) {
				console.warn("de-queueing event obj75163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75163_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_75165();
function goToPage_75165() {
	window.obj75163_onTap_runningActionsCount = obj75163_onTap_runningActionsCount + 1;
	$("#anchor402")[0].click();
	window.obj75163_onTap_runningActionsCount = window.obj75163_onTap_runningActionsCount - 1;
if (window.obj75163_onTap_runningActionsCount < 0) {
	window.obj75163_onTap_runningActionsCount = 0;
} else if (window.obj75163_onTap_runningActionsCount == 0) {
	obj75163_onTap_actionGroup1();
}
}





















};
obj75163_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75163_onTap_activeActionGroupIndex = -1;
		$("#obj75163").trigger("obj75163_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75163) {
				console.warn("de-queueing event obj75163." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75163").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75163_onTap_activeActionGroupIndex = 1;
	





















};
obj75104_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75104");
//	action: dragDrop
//	target: obj75104 
dragDrop_75107();
function dragDrop_75107() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75104_onTouchDown_runningActionsCount = obj75104_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75104');
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
	  	containerNode = $('#obj75153');
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
    	window.obj75104_onTouchDown_runningActionsCount = window.obj75104_onTouchDown_runningActionsCount - 1;
if (window.obj75104_onTouchDown_runningActionsCount < 0) {
	window.obj75104_onTouchDown_runningActionsCount = 0;
} else if (window.obj75104_onTouchDown_runningActionsCount == 0) {
	obj75104_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75137","#obj75139");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75107 = false;
    	var dropped_id_75107;
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
					dropped_75107 = true;
					dropped_id_75107 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75107) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75104").trigger('SCActionDragDrop75107_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75104_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75104_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75104 
move_92312();
function move_92312() {
	window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_runningActionsCount = obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75104");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 139;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_runningActionsCount = window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75104_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75116();
function runjs_75116() {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75139").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj75104_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75117();
function runjs_75117() {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75139").css("border-color", "#C00000"); $("#obj75139").css("border-width", "2px"); $("#obj75139").css("border-style", "solid"); $("#obj75139").css("border-radius", "10px"); $("#obj75139").css("-webkit-border-radius", "10px"); $("#obj75139").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj75104_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75135 
hide_75118();
function hide_75118() {
	var selector = "#obj75135";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75118(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75104_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75119();
function runjs_75119() {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75104").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj75104_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75120();
function switchText_75120() {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75149_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75149_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75149").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75149_content");
			setTimeout(function () {
				window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75149 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj75104_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75104 
move_75121();
function move_75121() {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj75104");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 139;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj75104_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75122();
function runjs_75122() {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75139").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj75104_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75123();
function runjs_75123() {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75139").css("border-color", "#000000"); $("#obj75139").css("border-width", "1px"); $("#obj75139").css("border-style", "solid"); $("#obj75139").css("border-radius", "10px"); $("#obj75139").css("-webkit-border-radius", "10px"); $("#obj75139").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj75104_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75135
(function(){
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj75135";
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
					window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75104_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75125();
function runjs_75125() {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75104").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj75104_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75126();
function runjs_75126() {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75104").css("border-color", "rgba(0,0,0,0)"); $("#obj75104").css("border-width", "0px"); $("#obj75104").css("border-style", "solid"); $("#obj75104").css("border-radius", "10px"); $("#obj75104").css("-webkit-border-radius", "10px"); $("#obj75104").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj75104_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75148 
playAudio_75127();
function playAudio_75127() {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj75148")[0];
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
		    window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj75104_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75128();
function switchText_75128() {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = obj75104_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75149_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75149_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75149").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75149_content");
			setTimeout(function () {
				window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75149 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75104_droppedInsideTargetActions_2_runningActionsCount = window.obj75104_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj75104_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj75104_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75109();
function runjs_75109() {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = obj75104_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75137").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75104_droppedInsideTargetActions_runningActionsCount = window.obj75104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75104_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75110();
function runjs_75110() {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = obj75104_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75137").css("border-color", "#058E3F"); $("#obj75137").css("border-width", "2px"); $("#obj75137").css("border-style", "solid"); $("#obj75137").css("border-radius", "10px"); $("#obj75137").css("-webkit-border-radius", "10px"); $("#obj75137").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75104_droppedInsideTargetActions_runningActionsCount = window.obj75104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj75104_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75133 
hide_75111();
function hide_75111() {
	var selector = "#obj75133";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75104_droppedInsideTargetActions_runningActionsCount = obj75104_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75104_droppedInsideTargetActions_runningActionsCount = window.obj75104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75111(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75104_droppedInsideTargetActions_runningActionsCount = window.obj75104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75104_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75112();
function runjs_75112() {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = obj75104_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75104").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75104_droppedInsideTargetActions_runningActionsCount = window.obj75104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj75104_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75113();
function switchText_75113() {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = obj75104_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75149_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75149_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75149").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75149_content");
			setTimeout(function () {
				window.obj75104_droppedInsideTargetActions_runningActionsCount = window.obj75104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75149 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75104_droppedInsideTargetActions_runningActionsCount = window.obj75104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj75104_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75147 
playAudio_75114();
function playAudio_75114() {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = obj75104_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75147")[0];
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
		    window.obj75104_droppedInsideTargetActions_runningActionsCount = window.obj75104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75104_droppedInsideTargetActions_runningActionsCount = window.obj75104_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75104_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75104_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75104_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75104_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj75104_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75104").trigger("obj75104_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75104) {
				console.warn("de-queueing event obj75104." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75104").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75104_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj75079_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj75079");
//	action: dragDrop
//	target: obj75079 
dragDrop_75082();
function dragDrop_75082() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj75079_onTouchDown_runningActionsCount = obj75079_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj75079');
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
	  	containerNode = $('#obj75153');
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
    	window.obj75079_onTouchDown_runningActionsCount = window.obj75079_onTouchDown_runningActionsCount - 1;
if (window.obj75079_onTouchDown_runningActionsCount < 0) {
	window.obj75079_onTouchDown_runningActionsCount = 0;
} else if (window.obj75079_onTouchDown_runningActionsCount == 0) {
	obj75079_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj75139","#obj75137");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_75082 = false;
    	var dropped_id_75082;
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
					dropped_75082 = true;
					dropped_id_75082 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_75082) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj75079").trigger('SCActionDragDrop75082_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj75079_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75079_onTouchDown_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj75079 
move_92314();
function move_92314() {
	window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_runningActionsCount = obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj75079");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 316;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_runningActionsCount = window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj75079_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75091();
function runjs_75091() {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75137").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj75079_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75092();
function runjs_75092() {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75137").css("border-color", "#C00000"); $("#obj75137").css("border-width", "2px"); $("#obj75137").css("border-style", "solid"); $("#obj75137").css("border-radius", "10px"); $("#obj75137").css("-webkit-border-radius", "10px"); $("#obj75137").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj75079_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75133 
hide_75093();
function hide_75093() {
	var selector = "#obj75133";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75093(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75079_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75094();
function runjs_75094() {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75079").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj75079_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75095();
function switchText_75095() {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75149_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75149_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75149").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75149_content");
			setTimeout(function () {
				window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75149 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj75079_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj75079 
move_75096();
function move_75096() {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj75079");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 316;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj75079_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_75097();
function runjs_75097() {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75137").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj75079_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_75098();
function runjs_75098() {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75137").css("border-color", "#000000"); $("#obj75137").css("border-width", "1px"); $("#obj75137").css("border-style", "solid"); $("#obj75137").css("border-radius", "10px"); $("#obj75137").css("-webkit-border-radius", "10px"); $("#obj75137").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj75079_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj75133
(function(){
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj75133";
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
					window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75079_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_75100();
function runjs_75100() {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75079").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj75079_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_75101();
function runjs_75101() {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj75079").css("border-color", "rgba(0,0,0,0)"); $("#obj75079").css("border-width", "0px"); $("#obj75079").css("border-style", "solid"); $("#obj75079").css("border-radius", "10px"); $("#obj75079").css("-webkit-border-radius", "10px"); $("#obj75079").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj75079_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj75148 
playAudio_75102();
function playAudio_75102() {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj75148")[0];
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
		    window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj75079_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_75103();
function switchText_75103() {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = obj75079_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75149_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75149_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75149").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75149_content");
			setTimeout(function () {
				window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj75149 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75079_droppedInsideTargetActions_2_runningActionsCount = window.obj75079_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj75079_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj75079_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_75084();
function runjs_75084() {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = obj75079_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75139").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj75079_droppedInsideTargetActions_runningActionsCount = window.obj75079_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj75079_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_75085();
function runjs_75085() {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = obj75079_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75139").css("border-color", "#058E3F"); $("#obj75139").css("border-width", "2px"); $("#obj75139").css("border-style", "solid"); $("#obj75139").css("border-radius", "10px"); $("#obj75139").css("-webkit-border-radius", "10px"); $("#obj75139").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj75079_droppedInsideTargetActions_runningActionsCount = window.obj75079_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj75079_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj75135 
hide_75086();
function hide_75086() {
	var selector = "#obj75135";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75079_droppedInsideTargetActions_runningActionsCount = obj75079_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75079_droppedInsideTargetActions_runningActionsCount = window.obj75079_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75086(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75079_droppedInsideTargetActions_runningActionsCount = window.obj75079_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj75079_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_75087();
function runjs_75087() {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = obj75079_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj75079").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj75079_droppedInsideTargetActions_runningActionsCount = window.obj75079_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj75079_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_75088();
function switchText_75088() {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = obj75079_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj75149_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj75149_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj75149").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj75149_content");
			setTimeout(function () {
				window.obj75079_droppedInsideTargetActions_runningActionsCount = window.obj75079_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj75149 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj75079_droppedInsideTargetActions_runningActionsCount = window.obj75079_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj75079_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj75147 
playAudio_75089();
function playAudio_75089() {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = obj75079_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj75147")[0];
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
		    window.obj75079_droppedInsideTargetActions_runningActionsCount = window.obj75079_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj75079_droppedInsideTargetActions_runningActionsCount = window.obj75079_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj75079_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj75079_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj75079_droppedInsideTargetActions_runningActionsCount == 0) {
	obj75079_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj75079_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj75079").trigger("obj75079_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75079) {
				console.warn("de-queueing event obj75079." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75079").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75079_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj75061_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75061_onTap_activeActionGroupIndex = -1;
		$("#obj75061").trigger("obj75061_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75061) {
				console.warn("de-queueing event obj75061." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75061").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75061_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75061 
hide_75064();
function hide_75064() {
	var selector = "#obj75061";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75061_onTap_runningActionsCount = obj75061_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75061_onTap_runningActionsCount = window.obj75061_onTap_runningActionsCount - 1;
if (window.obj75061_onTap_runningActionsCount < 0) {
	window.obj75061_onTap_runningActionsCount = 0;
} else if (window.obj75061_onTap_runningActionsCount == 0) {
	obj75061_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75064(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75061_onTap_runningActionsCount = window.obj75061_onTap_runningActionsCount - 1;
if (window.obj75061_onTap_runningActionsCount < 0) {
	window.obj75061_onTap_runningActionsCount = 0;
} else if (window.obj75061_onTap_runningActionsCount == 0) {
	obj75061_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj75051 
stopMovie_75063();
function stopMovie_75063() {
	window.obj75061_onTap_runningActionsCount = obj75061_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75051")[0];
	myVideo.pause();
	window.obj75061_onTap_runningActionsCount = window.obj75061_onTap_runningActionsCount - 1;
if (window.obj75061_onTap_runningActionsCount < 0) {
	window.obj75061_onTap_runningActionsCount = 0;
} else if (window.obj75061_onTap_runningActionsCount == 0) {
	obj75061_onTap_actionGroup1();
}
}
















};
obj75061_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75061_onTap_activeActionGroupIndex = -1;
		$("#obj75061").trigger("obj75061_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75061) {
				console.warn("de-queueing event obj75061." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75061").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75061_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75053
(function(){
	window.obj75061_onTap_runningActionsCount = obj75061_onTap_runningActionsCount + 1;

	var selector = "#obj75053";
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
					window.obj75061_onTap_runningActionsCount = window.obj75061_onTap_runningActionsCount - 1;
if (window.obj75061_onTap_runningActionsCount < 0) {
	window.obj75061_onTap_runningActionsCount = 0;
} else if (window.obj75061_onTap_runningActionsCount == 0) {
	obj75061_onTap_actionGroup2();
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
				window.obj75061_onTap_runningActionsCount = window.obj75061_onTap_runningActionsCount - 1;
if (window.obj75061_onTap_runningActionsCount < 0) {
	window.obj75061_onTap_runningActionsCount = 0;
} else if (window.obj75061_onTap_runningActionsCount == 0) {
	obj75061_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75061_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75061_onTap_activeActionGroupIndex = -1;
		$("#obj75061").trigger("obj75061_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75061) {
				console.warn("de-queueing event obj75061." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75061").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75061_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75051 
move_75066();
function move_75066() {
	window.obj75061_onTap_runningActionsCount = obj75061_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75051");
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
			window.obj75061_onTap_runningActionsCount = window.obj75061_onTap_runningActionsCount - 1;
if (window.obj75061_onTap_runningActionsCount < 0) {
	window.obj75061_onTap_runningActionsCount = 0;
} else if (window.obj75061_onTap_runningActionsCount == 0) {
	obj75061_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75061_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75061_onTap_activeActionGroupIndex = -1;
		$("#obj75061").trigger("obj75061_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75061) {
				console.warn("de-queueing event obj75061." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75061").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75061_onTap_activeActionGroupIndex = 3;
	





















};
obj75053_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75053_onTap_activeActionGroupIndex = -1;
		$("#obj75053").trigger("obj75053_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75053) {
				console.warn("de-queueing event obj75053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75053_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj75053 
hide_75056();
function hide_75056() {
	var selector = "#obj75053";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj75053_onTap_runningActionsCount = obj75053_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj75053_onTap_runningActionsCount = window.obj75053_onTap_runningActionsCount - 1;
if (window.obj75053_onTap_runningActionsCount < 0) {
	window.obj75053_onTap_runningActionsCount = 0;
} else if (window.obj75053_onTap_runningActionsCount == 0) {
	obj75053_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_75056(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj75053_onTap_runningActionsCount = window.obj75053_onTap_runningActionsCount - 1;
if (window.obj75053_onTap_runningActionsCount < 0) {
	window.obj75053_onTap_runningActionsCount = 0;
} else if (window.obj75053_onTap_runningActionsCount == 0) {
	obj75053_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj75051 
playPauseMovie_75055();
function playPauseMovie_75055() {
	window.obj75053_onTap_runningActionsCount = obj75053_onTap_runningActionsCount + 1;
	var myVideo = $("#obj75051")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj75053_onTap_runningActionsCount = window.obj75053_onTap_runningActionsCount - 1;
if (window.obj75053_onTap_runningActionsCount < 0) {
	window.obj75053_onTap_runningActionsCount = 0;
} else if (window.obj75053_onTap_runningActionsCount == 0) {
	obj75053_onTap_actionGroup1();
}
}

















};
obj75053_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75053_onTap_activeActionGroupIndex = -1;
		$("#obj75053").trigger("obj75053_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75053) {
				console.warn("de-queueing event obj75053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75053_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj75061
(function(){
	window.obj75053_onTap_runningActionsCount = obj75053_onTap_runningActionsCount + 1;

	var selector = "#obj75061";
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
					window.obj75053_onTap_runningActionsCount = window.obj75053_onTap_runningActionsCount - 1;
if (window.obj75053_onTap_runningActionsCount < 0) {
	window.obj75053_onTap_runningActionsCount = 0;
} else if (window.obj75053_onTap_runningActionsCount == 0) {
	obj75053_onTap_actionGroup2();
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
				window.obj75053_onTap_runningActionsCount = window.obj75053_onTap_runningActionsCount - 1;
if (window.obj75053_onTap_runningActionsCount < 0) {
	window.obj75053_onTap_runningActionsCount = 0;
} else if (window.obj75053_onTap_runningActionsCount == 0) {
	obj75053_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj75053_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj75053_onTap_activeActionGroupIndex = -1;
		$("#obj75053").trigger("obj75053_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75053) {
				console.warn("de-queueing event obj75053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75053_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj75051 
move_75058();
function move_75058() {
	window.obj75053_onTap_runningActionsCount = obj75053_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj75051");
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
			window.obj75053_onTap_runningActionsCount = window.obj75053_onTap_runningActionsCount - 1;
if (window.obj75053_onTap_runningActionsCount < 0) {
	window.obj75053_onTap_runningActionsCount = 0;
} else if (window.obj75053_onTap_runningActionsCount == 0) {
	obj75053_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj75053_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj75053_onTap_activeActionGroupIndex = -1;
		$("#obj75053").trigger("obj75053_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 75053) {
				console.warn("de-queueing event obj75053." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj75053").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj75053_onTap_activeActionGroupIndex = 3;
	





















};
obj87637_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87637_onTap_activeActionGroupIndex = -1;
		$("#obj87637").trigger("obj87637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87637) {
				console.warn("de-queueing event obj87637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87637_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87642 
stopAudio_87639();
function stopAudio_87639() {
	window.obj87637_onTap_runningActionsCount = obj87637_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87642")[0];
	myAudio.pause();
	window.obj87637_onTap_runningActionsCount = window.obj87637_onTap_runningActionsCount - 1;
if (window.obj87637_onTap_runningActionsCount < 0) {
	window.obj87637_onTap_runningActionsCount = 0;
} else if (window.obj87637_onTap_runningActionsCount == 0) {
	obj87637_onTap_actionGroup1();
}
}








};
obj87637_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87637_onTap_activeActionGroupIndex = -1;
		$("#obj87637").trigger("obj87637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87637) {
				console.warn("de-queueing event obj87637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87637_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87637 
hide_87640();
function hide_87640() {
	var selector = "#obj87637";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87637_onTap_runningActionsCount = obj87637_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87637_onTap_runningActionsCount = window.obj87637_onTap_runningActionsCount - 1;
if (window.obj87637_onTap_runningActionsCount < 0) {
	window.obj87637_onTap_runningActionsCount = 0;
} else if (window.obj87637_onTap_runningActionsCount == 0) {
	obj87637_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87640(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87637_onTap_runningActionsCount = window.obj87637_onTap_runningActionsCount - 1;
if (window.obj87637_onTap_runningActionsCount < 0) {
	window.obj87637_onTap_runningActionsCount = 0;
} else if (window.obj87637_onTap_runningActionsCount == 0) {
	obj87637_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87637_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87637_onTap_activeActionGroupIndex = -1;
		$("#obj87637").trigger("obj87637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87637) {
				console.warn("de-queueing event obj87637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87637_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87632
(function(){
	window.obj87637_onTap_runningActionsCount = obj87637_onTap_runningActionsCount + 1;

	var selector = "#obj87632";
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
					window.obj87637_onTap_runningActionsCount = window.obj87637_onTap_runningActionsCount - 1;
if (window.obj87637_onTap_runningActionsCount < 0) {
	window.obj87637_onTap_runningActionsCount = 0;
} else if (window.obj87637_onTap_runningActionsCount == 0) {
	obj87637_onTap_actionGroup3();
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
				window.obj87637_onTap_runningActionsCount = window.obj87637_onTap_runningActionsCount - 1;
if (window.obj87637_onTap_runningActionsCount < 0) {
	window.obj87637_onTap_runningActionsCount = 0;
} else if (window.obj87637_onTap_runningActionsCount == 0) {
	obj87637_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87637_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87637_onTap_activeActionGroupIndex = -1;
		$("#obj87637").trigger("obj87637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87637) {
				console.warn("de-queueing event obj87637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87637_onTap_activeActionGroupIndex = 3;
	





















};
obj87632_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87632_onTap_activeActionGroupIndex = -1;
		$("#obj87632").trigger("obj87632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87632) {
				console.warn("de-queueing event obj87632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87632_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87632 
hide_87634();
function hide_87634() {
	var selector = "#obj87632";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87632_onTap_runningActionsCount = obj87632_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87632_onTap_runningActionsCount = window.obj87632_onTap_runningActionsCount - 1;
if (window.obj87632_onTap_runningActionsCount < 0) {
	window.obj87632_onTap_runningActionsCount = 0;
} else if (window.obj87632_onTap_runningActionsCount == 0) {
	obj87632_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87634(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87632_onTap_runningActionsCount = window.obj87632_onTap_runningActionsCount - 1;
if (window.obj87632_onTap_runningActionsCount < 0) {
	window.obj87632_onTap_runningActionsCount = 0;
} else if (window.obj87632_onTap_runningActionsCount == 0) {
	obj87632_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87632_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87632_onTap_activeActionGroupIndex = -1;
		$("#obj87632").trigger("obj87632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87632) {
				console.warn("de-queueing event obj87632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87632_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87637
(function(){
	window.obj87632_onTap_runningActionsCount = obj87632_onTap_runningActionsCount + 1;

	var selector = "#obj87637";
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
					window.obj87632_onTap_runningActionsCount = window.obj87632_onTap_runningActionsCount - 1;
if (window.obj87632_onTap_runningActionsCount < 0) {
	window.obj87632_onTap_runningActionsCount = 0;
} else if (window.obj87632_onTap_runningActionsCount == 0) {
	obj87632_onTap_actionGroup2();
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
				window.obj87632_onTap_runningActionsCount = window.obj87632_onTap_runningActionsCount - 1;
if (window.obj87632_onTap_runningActionsCount < 0) {
	window.obj87632_onTap_runningActionsCount = 0;
} else if (window.obj87632_onTap_runningActionsCount == 0) {
	obj87632_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87632_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87632_onTap_activeActionGroupIndex = -1;
		$("#obj87632").trigger("obj87632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87632) {
				console.warn("de-queueing event obj87632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87632_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87642 
playAudio_87636();
function playAudio_87636() {
	window.obj87632_onTap_runningActionsCount = obj87632_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87642")[0];
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
		    window.obj87632_onTap_runningActionsCount = window.obj87632_onTap_runningActionsCount - 1;
if (window.obj87632_onTap_runningActionsCount < 0) {
	window.obj87632_onTap_runningActionsCount = 0;
} else if (window.obj87632_onTap_runningActionsCount == 0) {
	obj87632_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87632_onTap_runningActionsCount = window.obj87632_onTap_runningActionsCount - 1;
if (window.obj87632_onTap_runningActionsCount < 0) {
	window.obj87632_onTap_runningActionsCount = 0;
} else if (window.obj87632_onTap_runningActionsCount == 0) {
	obj87632_onTap_actionGroup3();
}
	}
}









};
obj87632_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87632_onTap_activeActionGroupIndex = -1;
		$("#obj87632").trigger("obj87632_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87632) {
				console.warn("de-queueing event obj87632." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87632").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87632_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj75170: Event Touch Down
 *
 */
$("#obj75170").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75170_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75170_onTap is still running");
	return;
}
var obj75170_onTap_runningActionsCount = 0;
var obj75170_onTap_loopCount = 0;
obj75170_onTap_actionGroup0();
});










/*
 *
 *   obj75167: Event Touch Down
 *
 */
$("#obj75167").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75167_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75167_onTap is still running");
	return;
}
var obj75167_onTap_runningActionsCount = 0;
var obj75167_onTap_loopCount = 0;
obj75167_onTap_actionGroup0();
});










/*
 *
 *   obj75163: Event Touch Down
 *
 */
$("#obj75163").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75163_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75163_onTap is still running");
	return;
}
var obj75163_onTap_runningActionsCount = 0;
var obj75163_onTap_loopCount = 0;
obj75163_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj75104: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75104");
	var winTarget = document.getElementById("obj75104");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75104").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75104_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75104_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75104_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75104_onTouchDown is still running");
	return;
}
var obj75104_onTouchDown_runningActionsCount = 0;
var obj75104_onTouchDown_loopCount = 0;
obj75104_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75104: Event SCActionDragDrop75107_droppedOutsideTargetActions
 *
 */
$("#obj75104").bind("SCActionDragDrop75107_droppedOutsideTargetActions", function(event) {
	if (window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75104_SCActionDragDrop75107_droppedOutsideTargetActions is still running");
	return;
}
var obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_loopCount = 0;
obj75104_SCActionDragDrop75107_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75104: Event droppedInsideTargetActions_2
 *
 */
$("#obj75104").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj75104_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75104_droppedInsideTargetActions_2 is still running");
	return;
}
var obj75104_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75104_droppedInsideTargetActions_2_loopCount = 0;
obj75104_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj75104: Event droppedInsideTargetActions
 *
 */
$("#obj75104").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75104_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75104_droppedInsideTargetActions is still running");
	return;
}
var obj75104_droppedInsideTargetActions_runningActionsCount = 0;
var obj75104_droppedInsideTargetActions_loopCount = 0;
obj75104_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj75079: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj75079");
	var winTarget = document.getElementById("obj75079");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj75079").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj75079_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj75079_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj75079_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75079_onTouchDown is still running");
	return;
}
var obj75079_onTouchDown_runningActionsCount = 0;
var obj75079_onTouchDown_loopCount = 0;
obj75079_onTouchDown_actionGroup0();
});



/*
 *
 *   obj75079: Event SCActionDragDrop75082_droppedOutsideTargetActions
 *
 */
$("#obj75079").bind("SCActionDragDrop75082_droppedOutsideTargetActions", function(event) {
	if (window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75079_SCActionDragDrop75082_droppedOutsideTargetActions is still running");
	return;
}
var obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_runningActionsCount = 0;
var obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_loopCount = 0;
obj75079_SCActionDragDrop75082_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj75079: Event droppedInsideTargetActions_2
 *
 */
$("#obj75079").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj75079_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75079_droppedInsideTargetActions_2 is still running");
	return;
}
var obj75079_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj75079_droppedInsideTargetActions_2_loopCount = 0;
obj75079_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj75079: Event droppedInsideTargetActions
 *
 */
$("#obj75079").bind("droppedInsideTargetActions", function(event) {
	if (window.obj75079_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75079_droppedInsideTargetActions is still running");
	return;
}
var obj75079_droppedInsideTargetActions_runningActionsCount = 0;
var obj75079_droppedInsideTargetActions_loopCount = 0;
obj75079_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj75061: Event Touch Down
 *
 */
$("#obj75061").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75061_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75061_onTap is still running");
	return;
}
var obj75061_onTap_runningActionsCount = 0;
var obj75061_onTap_loopCount = 0;
obj75061_onTap_actionGroup0();
});










/*
 *
 *   obj75053: Event Touch Down
 *
 */
$("#obj75053").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj75053_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj75053_onTap is still running");
	return;
}
var obj75053_onTap_runningActionsCount = 0;
var obj75053_onTap_loopCount = 0;
obj75053_onTap_actionGroup0();
});










/*
 *
 *   obj87637: Event Touch Down
 *
 */
$("#obj87637").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87637_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87637_onTap is still running");
	return;
}
var obj87637_onTap_runningActionsCount = 0;
var obj87637_onTap_loopCount = 0;
obj87637_onTap_actionGroup0();
});










/*
 *
 *   obj87632: Event Touch Down
 *
 */
$("#obj87632").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87632_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87632_onTap is still running");
	return;
}
var obj87632_onTap_runningActionsCount = 0;
var obj87632_onTap_loopCount = 0;
obj87632_onTap_actionGroup0();
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
	
$("#obj75173").trigger('SCEventShow');
$("#obj75170").trigger('SCEventShow');
$("#obj75167").trigger('SCEventShow');
$("#obj75163").trigger('SCEventShow');
$("#obj75161").trigger('SCEventShow');
$("#obj75159").trigger('SCEventShow');
$("#obj75157").trigger('SCEventShow');
$("#obj75155").trigger('SCEventShow');
$("#obj75153").trigger('SCEventShow');
$("#obj75151").trigger('SCEventShow');
$("#obj75149").trigger('SCEventShow');
$("#obj75148").trigger('SCEventShow');
$("#obj75147").trigger('SCEventShow');
$("#obj75145").trigger('SCEventShow');
$("#obj75143").trigger('SCEventShow');
$("#obj75141").trigger('SCEventShow');
$("#obj75139").trigger('SCEventShow');
$("#obj75137").trigger('SCEventShow');
$("#obj75135").trigger('SCEventShow');
$("#obj75133").trigger('SCEventShow');
$("#obj75131").trigger('SCEventShow');
$("#obj75129").trigger('SCEventShow');
$("#obj75104").trigger('SCEventShow');
$("#obj75079").trigger('SCEventShow');
$("#obj75061").trigger('SCEventShow');
$("#obj75053").trigger('SCEventShow');
$("#obj87637").trigger('SCEventShow');
$("#obj87632").trigger('SCEventShow');
$("#obj87642").trigger('SCEventShow');
$("#obj94763").trigger('SCEventShow');
$("#obj75051").trigger('SCEventShow');
	
});