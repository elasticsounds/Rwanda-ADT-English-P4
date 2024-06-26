pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 55743;
pubcoder.page.title = pubcoder.page.title || "203";
pubcoder.page.number = pubcoder.page.number || 203;
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
var obj55804_onTap_activeActionGroupIndex = -1;
var obj55804_onTap_runningActionsCount = 0;
var obj55804_onTap_loopCount = 0;
var obj55801_onTap_activeActionGroupIndex = -1;
var obj55801_onTap_runningActionsCount = 0;
var obj55801_onTap_loopCount = 0;
var obj55797_onTap_activeActionGroupIndex = -1;
var obj55797_onTap_runningActionsCount = 0;
var obj55797_onTap_loopCount = 0;
var obj55765_onDrag_activeActionGroupIndex = -1;
var obj55765_onDrag_runningActionsCount = 0;
var obj55765_onDrag_loopCount = 0;
var obj55765_onTouchDown_activeActionGroupIndex = -1;
var obj55765_onTouchDown_runningActionsCount = 0;
var obj55765_onTouchDown_loopCount = 0;
var obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_loopCount = 0;
var obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55765_droppedInsideTargetActions_runningActionsCount = 0;
var obj55765_droppedInsideTargetActions_loopCount = 0;
var obj55748_onDrag_activeActionGroupIndex = -1;
var obj55748_onDrag_runningActionsCount = 0;
var obj55748_onDrag_loopCount = 0;
var obj55748_onTouchDown_activeActionGroupIndex = -1;
var obj55748_onTouchDown_runningActionsCount = 0;
var obj55748_onTouchDown_loopCount = 0;
var obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_loopCount = 0;
var obj55748_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55748_droppedInsideTargetActions_runningActionsCount = 0;
var obj55748_droppedInsideTargetActions_loopCount = 0;
var obj68286_onTap_activeActionGroupIndex = -1;
var obj68286_onTap_runningActionsCount = 0;
var obj68286_onTap_loopCount = 0;
var obj68278_onTap_activeActionGroupIndex = -1;
var obj68278_onTap_runningActionsCount = 0;
var obj68278_onTap_loopCount = 0;
var obj89317_onTap_activeActionGroupIndex = -1;
var obj89317_onTap_runningActionsCount = 0;
var obj89317_onTap_loopCount = 0;
var obj89312_onTap_activeActionGroupIndex = -1;
var obj89312_onTap_runningActionsCount = 0;
var obj89312_onTap_loopCount = 0;
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
		
obj55804_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55804_onTap_activeActionGroupIndex = -1;
		$("#obj55804").trigger("obj55804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55804) {
				console.warn("de-queueing event obj55804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55804_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55806();
function goToPage_55806() {
	window.obj55804_onTap_runningActionsCount = obj55804_onTap_runningActionsCount + 1;
	$("#anchor1194")[0].click();
	window.obj55804_onTap_runningActionsCount = window.obj55804_onTap_runningActionsCount - 1;
if (window.obj55804_onTap_runningActionsCount < 0) {
	window.obj55804_onTap_runningActionsCount = 0;
} else if (window.obj55804_onTap_runningActionsCount == 0) {
	obj55804_onTap_actionGroup1();
}
}





















};
obj55804_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55804_onTap_activeActionGroupIndex = -1;
		$("#obj55804").trigger("obj55804_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55804) {
				console.warn("de-queueing event obj55804." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55804").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55804_onTap_activeActionGroupIndex = 1;
	





















};
obj55801_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55801_onTap_activeActionGroupIndex = -1;
		$("#obj55801").trigger("obj55801_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55801) {
				console.warn("de-queueing event obj55801." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55801").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55801_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55803();
function goToPage_55803() {
	window.obj55801_onTap_runningActionsCount = obj55801_onTap_runningActionsCount + 1;
	$("#anchor1195")[0].click();
	window.obj55801_onTap_runningActionsCount = window.obj55801_onTap_runningActionsCount - 1;
if (window.obj55801_onTap_runningActionsCount < 0) {
	window.obj55801_onTap_runningActionsCount = 0;
} else if (window.obj55801_onTap_runningActionsCount == 0) {
	obj55801_onTap_actionGroup1();
}
}





















};
obj55801_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55801_onTap_activeActionGroupIndex = -1;
		$("#obj55801").trigger("obj55801_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55801) {
				console.warn("de-queueing event obj55801." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55801").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55801_onTap_activeActionGroupIndex = 1;
	





















};
obj55797_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55797_onTap_activeActionGroupIndex = -1;
		$("#obj55797").trigger("obj55797_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55797) {
				console.warn("de-queueing event obj55797." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55797").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55797_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55799();
function goToPage_55799() {
	window.obj55797_onTap_runningActionsCount = obj55797_onTap_runningActionsCount + 1;
	$("#anchor1196")[0].click();
	window.obj55797_onTap_runningActionsCount = window.obj55797_onTap_runningActionsCount - 1;
if (window.obj55797_onTap_runningActionsCount < 0) {
	window.obj55797_onTap_runningActionsCount = 0;
} else if (window.obj55797_onTap_runningActionsCount == 0) {
	obj55797_onTap_actionGroup1();
}
}





















};
obj55797_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55797_onTap_activeActionGroupIndex = -1;
		$("#obj55797").trigger("obj55797_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55797) {
				console.warn("de-queueing event obj55797." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55797").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55797_onTap_activeActionGroupIndex = 1;
	





















};
obj55765_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55765");
//	action: dragDrop
//	target: obj55765 
dragDrop_55768();
function dragDrop_55768() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55765_onTouchDown_runningActionsCount = obj55765_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55765');
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
	  	containerNode = $('#obj55789');
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
    	window.obj55765_onTouchDown_runningActionsCount = window.obj55765_onTouchDown_runningActionsCount - 1;
if (window.obj55765_onTouchDown_runningActionsCount < 0) {
	window.obj55765_onTouchDown_runningActionsCount = 0;
} else if (window.obj55765_onTouchDown_runningActionsCount == 0) {
	obj55765_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55785");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55768 = false;
    	var dropped_id_55768;
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
					dropped_55768 = true;
					dropped_id_55768 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55768) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55765").trigger('SCActionDragDrop55768_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55765_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55765_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55765 
move_92841();
function move_92841() {
	window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_runningActionsCount = obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55765");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 552;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_runningActionsCount = window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55765_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55770();
function runjs_55770() {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55785").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55765_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55771();
function runjs_55771() {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55785").css("border-color", "#C00000"); $("#obj55785").css("border-width", "2px"); $("#obj55785").css("border-style", "solid"); $("#obj55785").css("border-radius", "10px"); $("#obj55785").css("-webkit-border-radius", "10px"); $("#obj55785").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55765_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55783 
hide_55772();
function hide_55772() {
	var selector = "#obj55783";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55772(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55765_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55773();
function runjs_55773() {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55765").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj55765_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55774();
function switchText_55774() {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55759_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55759_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55759").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55759_content");
			setTimeout(function () {
				window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55759 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj55765_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55765 
move_55775();
function move_55775() {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55765");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 552;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj55765_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55776();
function runjs_55776() {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55785").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj55765_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55777();
function runjs_55777() {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55785").css("border-color", "#000000"); $("#obj55785").css("border-width", "1px"); $("#obj55785").css("border-style", "solid"); $("#obj55785").css("border-radius", "10px"); $("#obj55785").css("-webkit-border-radius", "10px"); $("#obj55785").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj55765_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55783
(function(){
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj55783";
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
					window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup9();
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
				window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55765_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55779();
function runjs_55779() {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55765").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj55765_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55780();
function runjs_55780() {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55765").css("border-color", "rgba(0,0,0,0)"); $("#obj55765").css("border-width", "0px"); $("#obj55765").css("border-style", "solid"); $("#obj55765").css("border-radius", "10px"); $("#obj55765").css("-webkit-border-radius", "10px"); $("#obj55765").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj55765_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55744 
playAudio_55781();
function playAudio_55781() {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55744")[0];
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
		    window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj55765_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55782();
function switchText_55782() {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = obj55765_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55759_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55759_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55759").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55759_content");
			setTimeout(function () {
				window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55759 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55765_droppedInsideTargetActions_runningActionsCount = window.obj55765_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55765_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55765_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55765_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55765_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj55765_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55765").trigger("obj55765_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55765) {
				console.warn("de-queueing event obj55765." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55765").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55765_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj55748_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55748_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55748").trigger("obj55748_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55748) {
				console.warn("de-queueing event obj55748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55748_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55748");
//	action: dragDrop
//	target: obj55748 
dragDrop_55751();
function dragDrop_55751() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55748_onTouchDown_runningActionsCount = obj55748_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55748');
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
	  	containerNode = $('#obj55789');
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
    	window.obj55748_onTouchDown_runningActionsCount = window.obj55748_onTouchDown_runningActionsCount - 1;
if (window.obj55748_onTouchDown_runningActionsCount < 0) {
	window.obj55748_onTouchDown_runningActionsCount = 0;
} else if (window.obj55748_onTouchDown_runningActionsCount == 0) {
	obj55748_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55785");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55751 = false;
    	var dropped_id_55751;
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
					dropped_55751 = true;
					dropped_id_55751 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55751) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55748").trigger('SCActionDragDrop55751_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55748_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55748_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55748").trigger("obj55748_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55748) {
				console.warn("de-queueing event obj55748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55748_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55748").trigger("obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55748) {
				console.warn("de-queueing event obj55748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55748 
move_92843();
function move_92843() {
	window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_runningActionsCount = obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55748");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 318;
	var moveY = 553;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_runningActionsCount = window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55748").trigger("obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55748) {
				console.warn("de-queueing event obj55748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55748_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55748").trigger("obj55748_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55748) {
				console.warn("de-queueing event obj55748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55753();
function runjs_55753() {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = obj55748_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55785").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55748_droppedInsideTargetActions_runningActionsCount = window.obj55748_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55748_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55748_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55748_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55748_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55748").trigger("obj55748_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55748) {
				console.warn("de-queueing event obj55748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55754();
function runjs_55754() {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = obj55748_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55785").css("border-color", "#058E3F"); $("#obj55785").css("border-width", "2px"); $("#obj55785").css("border-style", "solid"); $("#obj55785").css("border-radius", "10px"); $("#obj55785").css("-webkit-border-radius", "10px"); $("#obj55785").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55748_droppedInsideTargetActions_runningActionsCount = window.obj55748_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55748_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55748_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55748_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55748_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55748").trigger("obj55748_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55748) {
				console.warn("de-queueing event obj55748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55783 
hide_55755();
function hide_55755() {
	var selector = "#obj55783";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55748_droppedInsideTargetActions_runningActionsCount = obj55748_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55748_droppedInsideTargetActions_runningActionsCount = window.obj55748_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55748_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55748_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55748_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55755(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55748_droppedInsideTargetActions_runningActionsCount = window.obj55748_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55748_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55748_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55748_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55748_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55748").trigger("obj55748_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55748) {
				console.warn("de-queueing event obj55748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55756();
function runjs_55756() {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = obj55748_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55748").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55748_droppedInsideTargetActions_runningActionsCount = window.obj55748_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55748_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55748_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55748_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj55748_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55748").trigger("obj55748_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55748) {
				console.warn("de-queueing event obj55748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55757();
function switchText_55757() {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = obj55748_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55759_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55759_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55759").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55759_content");
			setTimeout(function () {
				window.obj55748_droppedInsideTargetActions_runningActionsCount = window.obj55748_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55748_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55748_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55748_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55759 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55748_droppedInsideTargetActions_runningActionsCount = window.obj55748_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55748_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55748_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55748_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj55748_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55748").trigger("obj55748_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55748) {
				console.warn("de-queueing event obj55748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj55763 
playAudio_55758();
function playAudio_55758() {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = obj55748_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55763")[0];
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
		    window.obj55748_droppedInsideTargetActions_runningActionsCount = window.obj55748_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55748_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55748_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55748_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55748_droppedInsideTargetActions_runningActionsCount = window.obj55748_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55748_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55748_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55748_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55748_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj55748_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55748").trigger("obj55748_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55748) {
				console.warn("de-queueing event obj55748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55748_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68286_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68286_onTap_activeActionGroupIndex = -1;
		$("#obj68286").trigger("obj68286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68286) {
				console.warn("de-queueing event obj68286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68286_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68286 
hide_68289();
function hide_68289() {
	var selector = "#obj68286";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68286_onTap_runningActionsCount = obj68286_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68286_onTap_runningActionsCount = window.obj68286_onTap_runningActionsCount - 1;
if (window.obj68286_onTap_runningActionsCount < 0) {
	window.obj68286_onTap_runningActionsCount = 0;
} else if (window.obj68286_onTap_runningActionsCount == 0) {
	obj68286_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68289(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68286_onTap_runningActionsCount = window.obj68286_onTap_runningActionsCount - 1;
if (window.obj68286_onTap_runningActionsCount < 0) {
	window.obj68286_onTap_runningActionsCount = 0;
} else if (window.obj68286_onTap_runningActionsCount == 0) {
	obj68286_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68292 
stopMovie_68288();
function stopMovie_68288() {
	window.obj68286_onTap_runningActionsCount = obj68286_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68292")[0];
	myVideo.pause();
	window.obj68286_onTap_runningActionsCount = window.obj68286_onTap_runningActionsCount - 1;
if (window.obj68286_onTap_runningActionsCount < 0) {
	window.obj68286_onTap_runningActionsCount = 0;
} else if (window.obj68286_onTap_runningActionsCount == 0) {
	obj68286_onTap_actionGroup1();
}
}
















};
obj68286_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68286_onTap_activeActionGroupIndex = -1;
		$("#obj68286").trigger("obj68286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68286) {
				console.warn("de-queueing event obj68286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68286_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68278
(function(){
	window.obj68286_onTap_runningActionsCount = obj68286_onTap_runningActionsCount + 1;

	var selector = "#obj68278";
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
					window.obj68286_onTap_runningActionsCount = window.obj68286_onTap_runningActionsCount - 1;
if (window.obj68286_onTap_runningActionsCount < 0) {
	window.obj68286_onTap_runningActionsCount = 0;
} else if (window.obj68286_onTap_runningActionsCount == 0) {
	obj68286_onTap_actionGroup2();
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
				window.obj68286_onTap_runningActionsCount = window.obj68286_onTap_runningActionsCount - 1;
if (window.obj68286_onTap_runningActionsCount < 0) {
	window.obj68286_onTap_runningActionsCount = 0;
} else if (window.obj68286_onTap_runningActionsCount == 0) {
	obj68286_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68286_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68286_onTap_activeActionGroupIndex = -1;
		$("#obj68286").trigger("obj68286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68286) {
				console.warn("de-queueing event obj68286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68286_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68292 
move_68291();
function move_68291() {
	window.obj68286_onTap_runningActionsCount = obj68286_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68292");
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
			window.obj68286_onTap_runningActionsCount = window.obj68286_onTap_runningActionsCount - 1;
if (window.obj68286_onTap_runningActionsCount < 0) {
	window.obj68286_onTap_runningActionsCount = 0;
} else if (window.obj68286_onTap_runningActionsCount == 0) {
	obj68286_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68286_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68286_onTap_activeActionGroupIndex = -1;
		$("#obj68286").trigger("obj68286_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68286) {
				console.warn("de-queueing event obj68286." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68286").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68286_onTap_activeActionGroupIndex = 3;
	





















};
obj68278_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68278_onTap_activeActionGroupIndex = -1;
		$("#obj68278").trigger("obj68278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68278) {
				console.warn("de-queueing event obj68278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68278_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68278 
hide_68281();
function hide_68281() {
	var selector = "#obj68278";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68278_onTap_runningActionsCount = obj68278_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68278_onTap_runningActionsCount = window.obj68278_onTap_runningActionsCount - 1;
if (window.obj68278_onTap_runningActionsCount < 0) {
	window.obj68278_onTap_runningActionsCount = 0;
} else if (window.obj68278_onTap_runningActionsCount == 0) {
	obj68278_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68281(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68278_onTap_runningActionsCount = window.obj68278_onTap_runningActionsCount - 1;
if (window.obj68278_onTap_runningActionsCount < 0) {
	window.obj68278_onTap_runningActionsCount = 0;
} else if (window.obj68278_onTap_runningActionsCount == 0) {
	obj68278_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68292 
playPauseMovie_68280();
function playPauseMovie_68280() {
	window.obj68278_onTap_runningActionsCount = obj68278_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68292")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68278_onTap_runningActionsCount = window.obj68278_onTap_runningActionsCount - 1;
if (window.obj68278_onTap_runningActionsCount < 0) {
	window.obj68278_onTap_runningActionsCount = 0;
} else if (window.obj68278_onTap_runningActionsCount == 0) {
	obj68278_onTap_actionGroup1();
}
}

















};
obj68278_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68278_onTap_activeActionGroupIndex = -1;
		$("#obj68278").trigger("obj68278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68278) {
				console.warn("de-queueing event obj68278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68278_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68286
(function(){
	window.obj68278_onTap_runningActionsCount = obj68278_onTap_runningActionsCount + 1;

	var selector = "#obj68286";
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
					window.obj68278_onTap_runningActionsCount = window.obj68278_onTap_runningActionsCount - 1;
if (window.obj68278_onTap_runningActionsCount < 0) {
	window.obj68278_onTap_runningActionsCount = 0;
} else if (window.obj68278_onTap_runningActionsCount == 0) {
	obj68278_onTap_actionGroup2();
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
				window.obj68278_onTap_runningActionsCount = window.obj68278_onTap_runningActionsCount - 1;
if (window.obj68278_onTap_runningActionsCount < 0) {
	window.obj68278_onTap_runningActionsCount = 0;
} else if (window.obj68278_onTap_runningActionsCount == 0) {
	obj68278_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68278_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68278_onTap_activeActionGroupIndex = -1;
		$("#obj68278").trigger("obj68278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68278) {
				console.warn("de-queueing event obj68278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68278_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68292 
move_68283();
function move_68283() {
	window.obj68278_onTap_runningActionsCount = obj68278_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68292");
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
			window.obj68278_onTap_runningActionsCount = window.obj68278_onTap_runningActionsCount - 1;
if (window.obj68278_onTap_runningActionsCount < 0) {
	window.obj68278_onTap_runningActionsCount = 0;
} else if (window.obj68278_onTap_runningActionsCount == 0) {
	obj68278_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68278_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68278_onTap_activeActionGroupIndex = -1;
		$("#obj68278").trigger("obj68278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68278) {
				console.warn("de-queueing event obj68278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68278_onTap_activeActionGroupIndex = 3;
	





















};
obj89317_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89317_onTap_activeActionGroupIndex = -1;
		$("#obj89317").trigger("obj89317_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89317) {
				console.warn("de-queueing event obj89317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89317_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89322 
stopAudio_89319();
function stopAudio_89319() {
	window.obj89317_onTap_runningActionsCount = obj89317_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89322")[0];
	myAudio.pause();
	window.obj89317_onTap_runningActionsCount = window.obj89317_onTap_runningActionsCount - 1;
if (window.obj89317_onTap_runningActionsCount < 0) {
	window.obj89317_onTap_runningActionsCount = 0;
} else if (window.obj89317_onTap_runningActionsCount == 0) {
	obj89317_onTap_actionGroup1();
}
}








};
obj89317_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89317_onTap_activeActionGroupIndex = -1;
		$("#obj89317").trigger("obj89317_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89317) {
				console.warn("de-queueing event obj89317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89317_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89317 
hide_89320();
function hide_89320() {
	var selector = "#obj89317";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89317_onTap_runningActionsCount = obj89317_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89317_onTap_runningActionsCount = window.obj89317_onTap_runningActionsCount - 1;
if (window.obj89317_onTap_runningActionsCount < 0) {
	window.obj89317_onTap_runningActionsCount = 0;
} else if (window.obj89317_onTap_runningActionsCount == 0) {
	obj89317_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89320(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89317_onTap_runningActionsCount = window.obj89317_onTap_runningActionsCount - 1;
if (window.obj89317_onTap_runningActionsCount < 0) {
	window.obj89317_onTap_runningActionsCount = 0;
} else if (window.obj89317_onTap_runningActionsCount == 0) {
	obj89317_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89317_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89317_onTap_activeActionGroupIndex = -1;
		$("#obj89317").trigger("obj89317_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89317) {
				console.warn("de-queueing event obj89317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89317_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89312
(function(){
	window.obj89317_onTap_runningActionsCount = obj89317_onTap_runningActionsCount + 1;

	var selector = "#obj89312";
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
					window.obj89317_onTap_runningActionsCount = window.obj89317_onTap_runningActionsCount - 1;
if (window.obj89317_onTap_runningActionsCount < 0) {
	window.obj89317_onTap_runningActionsCount = 0;
} else if (window.obj89317_onTap_runningActionsCount == 0) {
	obj89317_onTap_actionGroup3();
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
				window.obj89317_onTap_runningActionsCount = window.obj89317_onTap_runningActionsCount - 1;
if (window.obj89317_onTap_runningActionsCount < 0) {
	window.obj89317_onTap_runningActionsCount = 0;
} else if (window.obj89317_onTap_runningActionsCount == 0) {
	obj89317_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89317_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89317_onTap_activeActionGroupIndex = -1;
		$("#obj89317").trigger("obj89317_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89317) {
				console.warn("de-queueing event obj89317." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89317").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89317_onTap_activeActionGroupIndex = 3;
	





















};
obj89312_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89312_onTap_activeActionGroupIndex = -1;
		$("#obj89312").trigger("obj89312_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89312) {
				console.warn("de-queueing event obj89312." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89312").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89312_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89312 
hide_89314();
function hide_89314() {
	var selector = "#obj89312";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89312_onTap_runningActionsCount = obj89312_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89312_onTap_runningActionsCount = window.obj89312_onTap_runningActionsCount - 1;
if (window.obj89312_onTap_runningActionsCount < 0) {
	window.obj89312_onTap_runningActionsCount = 0;
} else if (window.obj89312_onTap_runningActionsCount == 0) {
	obj89312_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89314(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89312_onTap_runningActionsCount = window.obj89312_onTap_runningActionsCount - 1;
if (window.obj89312_onTap_runningActionsCount < 0) {
	window.obj89312_onTap_runningActionsCount = 0;
} else if (window.obj89312_onTap_runningActionsCount == 0) {
	obj89312_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89312_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89312_onTap_activeActionGroupIndex = -1;
		$("#obj89312").trigger("obj89312_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89312) {
				console.warn("de-queueing event obj89312." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89312").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89312_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89317
(function(){
	window.obj89312_onTap_runningActionsCount = obj89312_onTap_runningActionsCount + 1;

	var selector = "#obj89317";
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
					window.obj89312_onTap_runningActionsCount = window.obj89312_onTap_runningActionsCount - 1;
if (window.obj89312_onTap_runningActionsCount < 0) {
	window.obj89312_onTap_runningActionsCount = 0;
} else if (window.obj89312_onTap_runningActionsCount == 0) {
	obj89312_onTap_actionGroup2();
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
				window.obj89312_onTap_runningActionsCount = window.obj89312_onTap_runningActionsCount - 1;
if (window.obj89312_onTap_runningActionsCount < 0) {
	window.obj89312_onTap_runningActionsCount = 0;
} else if (window.obj89312_onTap_runningActionsCount == 0) {
	obj89312_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89312_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89312_onTap_activeActionGroupIndex = -1;
		$("#obj89312").trigger("obj89312_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89312) {
				console.warn("de-queueing event obj89312." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89312").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89312_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89322 
playAudio_89316();
function playAudio_89316() {
	window.obj89312_onTap_runningActionsCount = obj89312_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89322")[0];
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
		    window.obj89312_onTap_runningActionsCount = window.obj89312_onTap_runningActionsCount - 1;
if (window.obj89312_onTap_runningActionsCount < 0) {
	window.obj89312_onTap_runningActionsCount = 0;
} else if (window.obj89312_onTap_runningActionsCount == 0) {
	obj89312_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89312_onTap_runningActionsCount = window.obj89312_onTap_runningActionsCount - 1;
if (window.obj89312_onTap_runningActionsCount < 0) {
	window.obj89312_onTap_runningActionsCount = 0;
} else if (window.obj89312_onTap_runningActionsCount == 0) {
	obj89312_onTap_actionGroup3();
}
	}
}









};
obj89312_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89312_onTap_activeActionGroupIndex = -1;
		$("#obj89312").trigger("obj89312_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89312) {
				console.warn("de-queueing event obj89312." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89312").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89312_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj55804: Event Touch Down
 *
 */
$("#obj55804").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55804_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55804_onTap is still running");
	return;
}
var obj55804_onTap_runningActionsCount = 0;
var obj55804_onTap_loopCount = 0;
obj55804_onTap_actionGroup0();
});










/*
 *
 *   obj55801: Event Touch Down
 *
 */
$("#obj55801").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55801_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55801_onTap is still running");
	return;
}
var obj55801_onTap_runningActionsCount = 0;
var obj55801_onTap_loopCount = 0;
obj55801_onTap_actionGroup0();
});










/*
 *
 *   obj55797: Event Touch Down
 *
 */
$("#obj55797").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55797_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55797_onTap is still running");
	return;
}
var obj55797_onTap_runningActionsCount = 0;
var obj55797_onTap_loopCount = 0;
obj55797_onTap_actionGroup0();
});



































































































































/*
 *
 *   obj55765: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55765");
	var winTarget = document.getElementById("obj55765");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55765").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55765_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55765_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55765_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55765_onTouchDown is still running");
	return;
}
var obj55765_onTouchDown_runningActionsCount = 0;
var obj55765_onTouchDown_loopCount = 0;
obj55765_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55765: Event SCActionDragDrop55768_droppedOutsideTargetActions
 *
 */
$("#obj55765").bind("SCActionDragDrop55768_droppedOutsideTargetActions", function(event) {
	if (window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55765_SCActionDragDrop55768_droppedOutsideTargetActions is still running");
	return;
}
var obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_loopCount = 0;
obj55765_SCActionDragDrop55768_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55765: Event droppedInsideTargetActions
 *
 */
$("#obj55765").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55765_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55765_droppedInsideTargetActions is still running");
	return;
}
var obj55765_droppedInsideTargetActions_runningActionsCount = 0;
var obj55765_droppedInsideTargetActions_loopCount = 0;
obj55765_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj55748: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55748");
	var winTarget = document.getElementById("obj55748");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55748").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55748_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55748_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55748_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55748_onTouchDown is still running");
	return;
}
var obj55748_onTouchDown_runningActionsCount = 0;
var obj55748_onTouchDown_loopCount = 0;
obj55748_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55748: Event SCActionDragDrop55751_droppedOutsideTargetActions
 *
 */
$("#obj55748").bind("SCActionDragDrop55751_droppedOutsideTargetActions", function(event) {
	if (window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55748_SCActionDragDrop55751_droppedOutsideTargetActions is still running");
	return;
}
var obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_loopCount = 0;
obj55748_SCActionDragDrop55751_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55748: Event droppedInsideTargetActions
 *
 */
$("#obj55748").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55748_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55748_droppedInsideTargetActions is still running");
	return;
}
var obj55748_droppedInsideTargetActions_runningActionsCount = 0;
var obj55748_droppedInsideTargetActions_loopCount = 0;
obj55748_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68286: Event Touch Down
 *
 */
$("#obj68286").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68286_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68286_onTap is still running");
	return;
}
var obj68286_onTap_runningActionsCount = 0;
var obj68286_onTap_loopCount = 0;
obj68286_onTap_actionGroup0();
});










/*
 *
 *   obj68278: Event Touch Down
 *
 */
$("#obj68278").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68278_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68278_onTap is still running");
	return;
}
var obj68278_onTap_runningActionsCount = 0;
var obj68278_onTap_loopCount = 0;
obj68278_onTap_actionGroup0();
});










/*
 *
 *   obj89317: Event Touch Down
 *
 */
$("#obj89317").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89317_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89317_onTap is still running");
	return;
}
var obj89317_onTap_runningActionsCount = 0;
var obj89317_onTap_loopCount = 0;
obj89317_onTap_actionGroup0();
});










/*
 *
 *   obj89312: Event Touch Down
 *
 */
$("#obj89312").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89312_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89312_onTap is still running");
	return;
}
var obj89312_onTap_runningActionsCount = 0;
var obj89312_onTap_loopCount = 0;
obj89312_onTap_actionGroup0();
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
	
$("#obj55820").trigger('SCEventShow');
$("#obj55804").trigger('SCEventShow');
$("#obj55801").trigger('SCEventShow');
$("#obj55797").trigger('SCEventShow');
$("#obj55795").trigger('SCEventShow');
$("#obj55793").trigger('SCEventShow');
$("#obj55791").trigger('SCEventShow');
$("#obj55789").trigger('SCEventShow');
$("#obj55787").trigger('SCEventShow');
$("#obj55785").trigger('SCEventShow');
$("#obj55783").trigger('SCEventShow');
$("#obj55763").trigger('SCEventShow');
$("#obj55761").trigger('SCEventShow');
$("#obj55759").trigger('SCEventShow');
$("#obj55746").trigger('SCEventShow');
$("#obj55744").trigger('SCEventShow');
$("#obj55765").trigger('SCEventShow');
$("#obj55748").trigger('SCEventShow');
$("#obj68286").trigger('SCEventShow');
$("#obj68278").trigger('SCEventShow');
$("#obj89317").trigger('SCEventShow');
$("#obj89312").trigger('SCEventShow');
$("#obj89322").trigger('SCEventShow');
$("#obj95035").trigger('SCEventShow');
$("#obj68292").trigger('SCEventShow');
	
});