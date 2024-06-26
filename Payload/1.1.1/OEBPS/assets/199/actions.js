pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 54975;
pubcoder.page.title = pubcoder.page.title || "199";
pubcoder.page.number = pubcoder.page.number || 199;
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
var obj55220_onTap_activeActionGroupIndex = -1;
var obj55220_onTap_runningActionsCount = 0;
var obj55220_onTap_loopCount = 0;
var obj55217_onTap_activeActionGroupIndex = -1;
var obj55217_onTap_runningActionsCount = 0;
var obj55217_onTap_loopCount = 0;
var obj55213_onTap_activeActionGroupIndex = -1;
var obj55213_onTap_runningActionsCount = 0;
var obj55213_onTap_loopCount = 0;
var obj55110_onDrag_activeActionGroupIndex = -1;
var obj55110_onDrag_runningActionsCount = 0;
var obj55110_onDrag_loopCount = 0;
var obj55110_onTouchDown_activeActionGroupIndex = -1;
var obj55110_onTouchDown_runningActionsCount = 0;
var obj55110_onTouchDown_loopCount = 0;
var obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_loopCount = 0;
var obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55110_droppedInsideTargetActions_3_loopCount = 0;
var obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55110_droppedInsideTargetActions_2_loopCount = 0;
var obj55110_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55110_droppedInsideTargetActions_runningActionsCount = 0;
var obj55110_droppedInsideTargetActions_loopCount = 0;
var obj55043_onDrag_activeActionGroupIndex = -1;
var obj55043_onDrag_runningActionsCount = 0;
var obj55043_onDrag_loopCount = 0;
var obj55043_onTouchDown_activeActionGroupIndex = -1;
var obj55043_onTouchDown_runningActionsCount = 0;
var obj55043_onTouchDown_loopCount = 0;
var obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_loopCount = 0;
var obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55043_droppedInsideTargetActions_3_loopCount = 0;
var obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55043_droppedInsideTargetActions_2_loopCount = 0;
var obj55043_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj55043_droppedInsideTargetActions_runningActionsCount = 0;
var obj55043_droppedInsideTargetActions_loopCount = 0;
var obj54976_onDrag_activeActionGroupIndex = -1;
var obj54976_onDrag_runningActionsCount = 0;
var obj54976_onDrag_loopCount = 0;
var obj54976_onTouchDown_activeActionGroupIndex = -1;
var obj54976_onTouchDown_runningActionsCount = 0;
var obj54976_onTouchDown_loopCount = 0;
var obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_loopCount = 0;
var obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54976_droppedInsideTargetActions_3_loopCount = 0;
var obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54976_droppedInsideTargetActions_2_loopCount = 0;
var obj54976_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj54976_droppedInsideTargetActions_runningActionsCount = 0;
var obj54976_droppedInsideTargetActions_loopCount = 0;
var obj68222_onTap_activeActionGroupIndex = -1;
var obj68222_onTap_runningActionsCount = 0;
var obj68222_onTap_loopCount = 0;
var obj68214_onTap_activeActionGroupIndex = -1;
var obj68214_onTap_runningActionsCount = 0;
var obj68214_onTap_loopCount = 0;
var obj89269_onTap_activeActionGroupIndex = -1;
var obj89269_onTap_runningActionsCount = 0;
var obj89269_onTap_loopCount = 0;
var obj89264_onTap_activeActionGroupIndex = -1;
var obj89264_onTap_runningActionsCount = 0;
var obj89264_onTap_loopCount = 0;
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
		
obj55220_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55220_onTap_activeActionGroupIndex = -1;
		$("#obj55220").trigger("obj55220_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55220) {
				console.warn("de-queueing event obj55220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55220_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55222();
function goToPage_55222() {
	window.obj55220_onTap_runningActionsCount = obj55220_onTap_runningActionsCount + 1;
	$("#anchor1169")[0].click();
	window.obj55220_onTap_runningActionsCount = window.obj55220_onTap_runningActionsCount - 1;
if (window.obj55220_onTap_runningActionsCount < 0) {
	window.obj55220_onTap_runningActionsCount = 0;
} else if (window.obj55220_onTap_runningActionsCount == 0) {
	obj55220_onTap_actionGroup1();
}
}





















};
obj55220_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55220_onTap_activeActionGroupIndex = -1;
		$("#obj55220").trigger("obj55220_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55220) {
				console.warn("de-queueing event obj55220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55220_onTap_activeActionGroupIndex = 1;
	





















};
obj55217_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55217_onTap_activeActionGroupIndex = -1;
		$("#obj55217").trigger("obj55217_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55217) {
				console.warn("de-queueing event obj55217." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55217").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55217_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55219();
function goToPage_55219() {
	window.obj55217_onTap_runningActionsCount = obj55217_onTap_runningActionsCount + 1;
	$("#anchor1170")[0].click();
	window.obj55217_onTap_runningActionsCount = window.obj55217_onTap_runningActionsCount - 1;
if (window.obj55217_onTap_runningActionsCount < 0) {
	window.obj55217_onTap_runningActionsCount = 0;
} else if (window.obj55217_onTap_runningActionsCount == 0) {
	obj55217_onTap_actionGroup1();
}
}





















};
obj55217_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55217_onTap_activeActionGroupIndex = -1;
		$("#obj55217").trigger("obj55217_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55217) {
				console.warn("de-queueing event obj55217." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55217").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55217_onTap_activeActionGroupIndex = 1;
	





















};
obj55213_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55213_onTap_activeActionGroupIndex = -1;
		$("#obj55213").trigger("obj55213_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55213) {
				console.warn("de-queueing event obj55213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55213_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_55215();
function goToPage_55215() {
	window.obj55213_onTap_runningActionsCount = obj55213_onTap_runningActionsCount + 1;
	$("#anchor1171")[0].click();
	window.obj55213_onTap_runningActionsCount = window.obj55213_onTap_runningActionsCount - 1;
if (window.obj55213_onTap_runningActionsCount < 0) {
	window.obj55213_onTap_runningActionsCount = 0;
} else if (window.obj55213_onTap_runningActionsCount == 0) {
	obj55213_onTap_actionGroup1();
}
}





















};
obj55213_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55213_onTap_activeActionGroupIndex = -1;
		$("#obj55213").trigger("obj55213_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55213) {
				console.warn("de-queueing event obj55213." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55213").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55213_onTap_activeActionGroupIndex = 1;
	





















};
obj55110_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55110");
//	action: dragDrop
//	target: obj55110 
dragDrop_55113();
function dragDrop_55113() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55110_onTouchDown_runningActionsCount = obj55110_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55110');
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
	  	containerNode = $('#obj55203');
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
    	window.obj55110_onTouchDown_runningActionsCount = window.obj55110_onTouchDown_runningActionsCount - 1;
if (window.obj55110_onTouchDown_runningActionsCount < 0) {
	window.obj55110_onTouchDown_runningActionsCount = 0;
} else if (window.obj55110_onTouchDown_runningActionsCount == 0) {
	obj55110_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55199","#obj55197","#obj55195");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55113 = false;
    	var dropped_id_55113;
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
					dropped_55113 = true;
					dropped_id_55113 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55113) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55110").trigger('SCActionDragDrop55113_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55110_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55110_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55110 
move_92821();
function move_92821() {
	window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_runningActionsCount = obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55110");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 87;
	var moveY = 553;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_runningActionsCount = window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55110_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55136();
function runjs_55136() {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55137();
function runjs_55137() {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55195").css("border-color", "#C00000"); $("#obj55195").css("border-width", "2px"); $("#obj55195").css("border-style", "solid"); $("#obj55195").css("border-radius", "10px"); $("#obj55195").css("-webkit-border-radius", "10px"); $("#obj55195").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55189 
hide_55138();
function hide_55138() {
	var selector = "#obj55189";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55138(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55110_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55139();
function runjs_55139() {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55110").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55140();
function switchText_55140() {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj55110_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55110 
move_55141();
function move_55141() {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55110");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 87;
	var moveY = 553;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj55110_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55142();
function runjs_55142() {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55195").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55143();
function runjs_55143() {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55195").css("border-color", "#000000"); $("#obj55195").css("border-width", "1px"); $("#obj55195").css("border-style", "solid"); $("#obj55195").css("border-radius", "10px"); $("#obj55195").css("-webkit-border-radius", "10px"); $("#obj55195").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55189
(function(){
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj55189";
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
					window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55110_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55145();
function runjs_55145() {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55110").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55146();
function runjs_55146() {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55110").css("border-color", "rgba(0,0,0,0)"); $("#obj55110").css("border-width", "0px"); $("#obj55110").css("border-style", "solid"); $("#obj55110").css("border-radius", "10px"); $("#obj55110").css("-webkit-border-radius", "10px"); $("#obj55110").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55181 
playAudio_55147();
function playAudio_55147() {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55181")[0];
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
		    window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj55110_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55148();
function switchText_55148() {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = obj55110_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55110_droppedInsideTargetActions_3_runningActionsCount = window.obj55110_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj55110_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj55110_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55122();
function runjs_55122() {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55123();
function runjs_55123() {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55197").css("border-color", "#C00000"); $("#obj55197").css("border-width", "2px"); $("#obj55197").css("border-style", "solid"); $("#obj55197").css("border-radius", "10px"); $("#obj55197").css("-webkit-border-radius", "10px"); $("#obj55197").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55191 
hide_55124();
function hide_55124() {
	var selector = "#obj55191";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55124(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55110_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55125();
function runjs_55125() {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55110").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55126();
function switchText_55126() {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj55110_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55110 
move_55127();
function move_55127() {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55110");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 87;
	var moveY = 553;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj55110_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55128();
function runjs_55128() {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55197").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55129();
function runjs_55129() {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55197").css("border-color", "#000000"); $("#obj55197").css("border-width", "1px"); $("#obj55197").css("border-style", "solid"); $("#obj55197").css("border-radius", "10px"); $("#obj55197").css("-webkit-border-radius", "10px"); $("#obj55197").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55191
(function(){
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj55191";
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
					window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55110_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55131();
function runjs_55131() {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55110").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55132();
function runjs_55132() {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55110").css("border-color", "rgba(0,0,0,0)"); $("#obj55110").css("border-width", "0px"); $("#obj55110").css("border-style", "solid"); $("#obj55110").css("border-radius", "10px"); $("#obj55110").css("-webkit-border-radius", "10px"); $("#obj55110").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55181 
playAudio_55133();
function playAudio_55133() {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55181")[0];
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
		    window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj55110_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55134();
function switchText_55134() {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = obj55110_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55110_droppedInsideTargetActions_2_runningActionsCount = window.obj55110_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj55110_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj55110_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55115();
function runjs_55115() {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = obj55110_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_runningActionsCount = window.obj55110_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55116();
function runjs_55116() {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = obj55110_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55199").css("border-color", "#058E3F"); $("#obj55199").css("border-width", "2px"); $("#obj55199").css("border-style", "solid"); $("#obj55199").css("border-radius", "10px"); $("#obj55199").css("-webkit-border-radius", "10px"); $("#obj55199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_runningActionsCount = window.obj55110_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55193 
hide_55117();
function hide_55117() {
	var selector = "#obj55193";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55110_droppedInsideTargetActions_runningActionsCount = obj55110_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55110_droppedInsideTargetActions_runningActionsCount = window.obj55110_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55117(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55110_droppedInsideTargetActions_runningActionsCount = window.obj55110_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55110_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55118();
function runjs_55118() {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = obj55110_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55110").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55110_droppedInsideTargetActions_runningActionsCount = window.obj55110_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj55110_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55119();
function switchText_55119() {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = obj55110_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj55110_droppedInsideTargetActions_runningActionsCount = window.obj55110_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55110_droppedInsideTargetActions_runningActionsCount = window.obj55110_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj55110_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj55185 
playAudio_55120();
function playAudio_55120() {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = obj55110_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55185")[0];
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
		    window.obj55110_droppedInsideTargetActions_runningActionsCount = window.obj55110_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55110_droppedInsideTargetActions_runningActionsCount = window.obj55110_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55110_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55110_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55110_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55110_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj55110_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55110").trigger("obj55110_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55110) {
				console.warn("de-queueing event obj55110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55110_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj55043_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj55043");
//	action: dragDrop
//	target: obj55043 
dragDrop_55046();
function dragDrop_55046() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj55043_onTouchDown_runningActionsCount = obj55043_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj55043');
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
	  	containerNode = $('#obj55203');
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
    	window.obj55043_onTouchDown_runningActionsCount = window.obj55043_onTouchDown_runningActionsCount - 1;
if (window.obj55043_onTouchDown_runningActionsCount < 0) {
	window.obj55043_onTouchDown_runningActionsCount = 0;
} else if (window.obj55043_onTouchDown_runningActionsCount == 0) {
	obj55043_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55197","#obj55199","#obj55195");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_55046 = false;
    	var dropped_id_55046;
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
					dropped_55046 = true;
					dropped_id_55046 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_55046) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj55043").trigger('SCActionDragDrop55046_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj55043_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55043_onTouchDown_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj55043 
move_92825();
function move_92825() {
	window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_runningActionsCount = obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj55043");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 553;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_runningActionsCount = window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj55043_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55069();
function runjs_55069() {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55070();
function runjs_55070() {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55195").css("border-color", "#C00000"); $("#obj55195").css("border-width", "2px"); $("#obj55195").css("border-style", "solid"); $("#obj55195").css("border-radius", "10px"); $("#obj55195").css("-webkit-border-radius", "10px"); $("#obj55195").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55189 
hide_55071();
function hide_55071() {
	var selector = "#obj55189";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55071(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55043_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55072();
function runjs_55072() {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55043").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55073();
function switchText_55073() {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj55043_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55043 
move_55074();
function move_55074() {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj55043");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 553;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj55043_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55075();
function runjs_55075() {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55195").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55076();
function runjs_55076() {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55195").css("border-color", "#000000"); $("#obj55195").css("border-width", "1px"); $("#obj55195").css("border-style", "solid"); $("#obj55195").css("border-radius", "10px"); $("#obj55195").css("-webkit-border-radius", "10px"); $("#obj55195").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55189
(function(){
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj55189";
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
					window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55043_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55078();
function runjs_55078() {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55043").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55079();
function runjs_55079() {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55043").css("border-color", "rgba(0,0,0,0)"); $("#obj55043").css("border-width", "0px"); $("#obj55043").css("border-style", "solid"); $("#obj55043").css("border-radius", "10px"); $("#obj55043").css("-webkit-border-radius", "10px"); $("#obj55043").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55181 
playAudio_55080();
function playAudio_55080() {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55181")[0];
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
		    window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj55043_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55081();
function switchText_55081() {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = obj55043_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55043_droppedInsideTargetActions_3_runningActionsCount = window.obj55043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj55043_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj55043_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55055();
function runjs_55055() {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55056();
function runjs_55056() {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55199").css("border-color", "#C00000"); $("#obj55199").css("border-width", "2px"); $("#obj55199").css("border-style", "solid"); $("#obj55199").css("border-radius", "10px"); $("#obj55199").css("-webkit-border-radius", "10px"); $("#obj55199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55193 
hide_55057();
function hide_55057() {
	var selector = "#obj55193";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55057(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55043_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55058();
function runjs_55058() {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55043").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55059();
function switchText_55059() {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj55043_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj55043 
move_55060();
function move_55060() {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj55043");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 344;
	var moveY = 553;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj55043_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55061();
function runjs_55061() {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55199").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55062();
function runjs_55062() {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55199").css("border-color", "#000000"); $("#obj55199").css("border-width", "1px"); $("#obj55199").css("border-style", "solid"); $("#obj55199").css("border-radius", "10px"); $("#obj55199").css("-webkit-border-radius", "10px"); $("#obj55199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55193
(function(){
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj55193";
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
					window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj55043_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55064();
function runjs_55064() {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55043").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55065();
function runjs_55065() {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55043").css("border-color", "rgba(0,0,0,0)"); $("#obj55043").css("border-width", "0px"); $("#obj55043").css("border-style", "solid"); $("#obj55043").css("border-radius", "10px"); $("#obj55043").css("-webkit-border-radius", "10px"); $("#obj55043").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55181 
playAudio_55066();
function playAudio_55066() {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55181")[0];
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
		    window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj55043_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55067();
function switchText_55067() {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = obj55043_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55043_droppedInsideTargetActions_2_runningActionsCount = window.obj55043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj55043_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj55043_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55048();
function runjs_55048() {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = obj55043_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_runningActionsCount = window.obj55043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55049();
function runjs_55049() {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = obj55043_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55197").css("border-color", "#058E3F"); $("#obj55197").css("border-width", "2px"); $("#obj55197").css("border-style", "solid"); $("#obj55197").css("border-radius", "10px"); $("#obj55197").css("-webkit-border-radius", "10px"); $("#obj55197").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_runningActionsCount = window.obj55043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55191 
hide_55050();
function hide_55050() {
	var selector = "#obj55191";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj55043_droppedInsideTargetActions_runningActionsCount = obj55043_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj55043_droppedInsideTargetActions_runningActionsCount = window.obj55043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55050(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj55043_droppedInsideTargetActions_runningActionsCount = window.obj55043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj55043_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55051();
function runjs_55051() {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = obj55043_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55043").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj55043_droppedInsideTargetActions_runningActionsCount = window.obj55043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj55043_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55052();
function switchText_55052() {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = obj55043_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj55043_droppedInsideTargetActions_runningActionsCount = window.obj55043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj55043_droppedInsideTargetActions_runningActionsCount = window.obj55043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj55043_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj55185 
playAudio_55053();
function playAudio_55053() {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = obj55043_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55185")[0];
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
		    window.obj55043_droppedInsideTargetActions_runningActionsCount = window.obj55043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj55043_droppedInsideTargetActions_runningActionsCount = window.obj55043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj55043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj55043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj55043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj55043_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj55043_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj55043").trigger("obj55043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 55043) {
				console.warn("de-queueing event obj55043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj55043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj55043_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj54976_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj54976");
//	action: dragDrop
//	target: obj54976 
dragDrop_54979();
function dragDrop_54979() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj54976_onTouchDown_runningActionsCount = obj54976_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj54976');
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
	  	containerNode = $('#obj55203');
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
    	window.obj54976_onTouchDown_runningActionsCount = window.obj54976_onTouchDown_runningActionsCount - 1;
if (window.obj54976_onTouchDown_runningActionsCount < 0) {
	window.obj54976_onTouchDown_runningActionsCount = 0;
} else if (window.obj54976_onTouchDown_runningActionsCount == 0) {
	obj54976_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj55195","#obj55199","#obj55197");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_54979 = false;
    	var dropped_id_54979;
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
					dropped_54979 = true;
					dropped_id_54979 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_54979) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj54976").trigger('SCActionDragDrop54979_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj54976_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54976_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj54976 
move_92823();
function move_92823() {
	window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_runningActionsCount = obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj54976");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 214;
	var moveY = 649;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_runningActionsCount = window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj54976_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_55002();
function runjs_55002() {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55197").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_55003();
function runjs_55003() {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55197").css("border-color", "#C00000"); $("#obj55197").css("border-width", "2px"); $("#obj55197").css("border-style", "solid"); $("#obj55197").css("border-radius", "10px"); $("#obj55197").css("-webkit-border-radius", "10px"); $("#obj55197").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55191 
hide_55004();
function hide_55004() {
	var selector = "#obj55191";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_55004(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54976_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_55005();
function runjs_55005() {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54976").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_55006();
function switchText_55006() {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj54976_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj54976 
move_55007();
function move_55007() {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj54976");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 214;
	var moveY = 649;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj54976_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_55008();
function runjs_55008() {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55197").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_55009();
function runjs_55009() {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj55197").css("border-color", "#000000"); $("#obj55197").css("border-width", "1px"); $("#obj55197").css("border-style", "solid"); $("#obj55197").css("border-radius", "10px"); $("#obj55197").css("-webkit-border-radius", "10px"); $("#obj55197").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55191
(function(){
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj55191";
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
					window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj54976_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_55011();
function runjs_55011() {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54976").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_55012();
function runjs_55012() {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54976").css("border-color", "rgba(0,0,0,0)"); $("#obj54976").css("border-width", "0px"); $("#obj54976").css("border-style", "solid"); $("#obj54976").css("border-radius", "10px"); $("#obj54976").css("-webkit-border-radius", "10px"); $("#obj54976").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55181 
playAudio_55013();
function playAudio_55013() {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj55181")[0];
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
		    window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj54976_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55014();
function switchText_55014() {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = obj54976_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54976_droppedInsideTargetActions_3_runningActionsCount = window.obj54976_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj54976_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj54976_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54988();
function runjs_54988() {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_54989();
function runjs_54989() {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55199").css("border-color", "#C00000"); $("#obj55199").css("border-width", "2px"); $("#obj55199").css("border-style", "solid"); $("#obj55199").css("border-radius", "10px"); $("#obj55199").css("-webkit-border-radius", "10px"); $("#obj55199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55193 
hide_54990();
function hide_54990() {
	var selector = "#obj55193";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_54990(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54976_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54991();
function runjs_54991() {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54976").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_54992();
function switchText_54992() {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj54976_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj54976 
move_54993();
function move_54993() {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj54976");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 214;
	var moveY = 649;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj54976_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_54994();
function runjs_54994() {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55199").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_54995();
function runjs_54995() {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj55199").css("border-color", "#000000"); $("#obj55199").css("border-width", "1px"); $("#obj55199").css("border-style", "solid"); $("#obj55199").css("border-radius", "10px"); $("#obj55199").css("-webkit-border-radius", "10px"); $("#obj55199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj55193
(function(){
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj55193";
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
					window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj54976_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_54997();
function runjs_54997() {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54976").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_54998();
function runjs_54998() {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54976").css("border-color", "rgba(0,0,0,0)"); $("#obj54976").css("border-width", "0px"); $("#obj54976").css("border-style", "solid"); $("#obj54976").css("border-radius", "10px"); $("#obj54976").css("-webkit-border-radius", "10px"); $("#obj54976").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj55181 
playAudio_54999();
function playAudio_54999() {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj55181")[0];
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
		    window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj54976_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_55000();
function switchText_55000() {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = obj54976_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54976_droppedInsideTargetActions_2_runningActionsCount = window.obj54976_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj54976_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj54976_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54981();
function runjs_54981() {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = obj54976_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55195").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_runningActionsCount = window.obj54976_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_54982();
function runjs_54982() {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = obj54976_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj55195").css("border-color", "#058E3F"); $("#obj55195").css("border-width", "2px"); $("#obj55195").css("border-style", "solid"); $("#obj55195").css("border-radius", "10px"); $("#obj55195").css("-webkit-border-radius", "10px"); $("#obj55195").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_runningActionsCount = window.obj54976_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj55189 
hide_54983();
function hide_54983() {
	var selector = "#obj55189";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54976_droppedInsideTargetActions_runningActionsCount = obj54976_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54976_droppedInsideTargetActions_runningActionsCount = window.obj54976_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_54983(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54976_droppedInsideTargetActions_runningActionsCount = window.obj54976_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54976_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54984();
function runjs_54984() {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = obj54976_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54976").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54976_droppedInsideTargetActions_runningActionsCount = window.obj54976_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj54976_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_54985();
function switchText_54985() {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = obj54976_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj55183_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj55183_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj55183").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj55183_content");
			setTimeout(function () {
				window.obj54976_droppedInsideTargetActions_runningActionsCount = window.obj54976_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj55183 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54976_droppedInsideTargetActions_runningActionsCount = window.obj54976_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj54976_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj55185 
playAudio_54986();
function playAudio_54986() {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = obj54976_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj55185")[0];
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
		    window.obj54976_droppedInsideTargetActions_runningActionsCount = window.obj54976_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54976_droppedInsideTargetActions_runningActionsCount = window.obj54976_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54976_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54976_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54976_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54976_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj54976_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54976").trigger("obj54976_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54976) {
				console.warn("de-queueing event obj54976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54976_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68222_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68222_onTap_activeActionGroupIndex = -1;
		$("#obj68222").trigger("obj68222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68222) {
				console.warn("de-queueing event obj68222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68222_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68222 
hide_68225();
function hide_68225() {
	var selector = "#obj68222";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68222_onTap_runningActionsCount = obj68222_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68222_onTap_runningActionsCount = window.obj68222_onTap_runningActionsCount - 1;
if (window.obj68222_onTap_runningActionsCount < 0) {
	window.obj68222_onTap_runningActionsCount = 0;
} else if (window.obj68222_onTap_runningActionsCount == 0) {
	obj68222_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68225(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68222_onTap_runningActionsCount = window.obj68222_onTap_runningActionsCount - 1;
if (window.obj68222_onTap_runningActionsCount < 0) {
	window.obj68222_onTap_runningActionsCount = 0;
} else if (window.obj68222_onTap_runningActionsCount == 0) {
	obj68222_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68228 
stopMovie_68224();
function stopMovie_68224() {
	window.obj68222_onTap_runningActionsCount = obj68222_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68228")[0];
	myVideo.pause();
	window.obj68222_onTap_runningActionsCount = window.obj68222_onTap_runningActionsCount - 1;
if (window.obj68222_onTap_runningActionsCount < 0) {
	window.obj68222_onTap_runningActionsCount = 0;
} else if (window.obj68222_onTap_runningActionsCount == 0) {
	obj68222_onTap_actionGroup1();
}
}
















};
obj68222_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68222_onTap_activeActionGroupIndex = -1;
		$("#obj68222").trigger("obj68222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68222) {
				console.warn("de-queueing event obj68222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68222_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68214
(function(){
	window.obj68222_onTap_runningActionsCount = obj68222_onTap_runningActionsCount + 1;

	var selector = "#obj68214";
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
					window.obj68222_onTap_runningActionsCount = window.obj68222_onTap_runningActionsCount - 1;
if (window.obj68222_onTap_runningActionsCount < 0) {
	window.obj68222_onTap_runningActionsCount = 0;
} else if (window.obj68222_onTap_runningActionsCount == 0) {
	obj68222_onTap_actionGroup2();
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
				window.obj68222_onTap_runningActionsCount = window.obj68222_onTap_runningActionsCount - 1;
if (window.obj68222_onTap_runningActionsCount < 0) {
	window.obj68222_onTap_runningActionsCount = 0;
} else if (window.obj68222_onTap_runningActionsCount == 0) {
	obj68222_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68222_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68222_onTap_activeActionGroupIndex = -1;
		$("#obj68222").trigger("obj68222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68222) {
				console.warn("de-queueing event obj68222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68222_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68228 
move_68227();
function move_68227() {
	window.obj68222_onTap_runningActionsCount = obj68222_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68228");
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
			window.obj68222_onTap_runningActionsCount = window.obj68222_onTap_runningActionsCount - 1;
if (window.obj68222_onTap_runningActionsCount < 0) {
	window.obj68222_onTap_runningActionsCount = 0;
} else if (window.obj68222_onTap_runningActionsCount == 0) {
	obj68222_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68222_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68222_onTap_activeActionGroupIndex = -1;
		$("#obj68222").trigger("obj68222_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68222) {
				console.warn("de-queueing event obj68222." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68222").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68222_onTap_activeActionGroupIndex = 3;
	





















};
obj68214_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68214_onTap_activeActionGroupIndex = -1;
		$("#obj68214").trigger("obj68214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68214) {
				console.warn("de-queueing event obj68214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68214_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68214 
hide_68217();
function hide_68217() {
	var selector = "#obj68214";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68214_onTap_runningActionsCount = obj68214_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68214_onTap_runningActionsCount = window.obj68214_onTap_runningActionsCount - 1;
if (window.obj68214_onTap_runningActionsCount < 0) {
	window.obj68214_onTap_runningActionsCount = 0;
} else if (window.obj68214_onTap_runningActionsCount == 0) {
	obj68214_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68217(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68214_onTap_runningActionsCount = window.obj68214_onTap_runningActionsCount - 1;
if (window.obj68214_onTap_runningActionsCount < 0) {
	window.obj68214_onTap_runningActionsCount = 0;
} else if (window.obj68214_onTap_runningActionsCount == 0) {
	obj68214_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68228 
playPauseMovie_68216();
function playPauseMovie_68216() {
	window.obj68214_onTap_runningActionsCount = obj68214_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68228")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68214_onTap_runningActionsCount = window.obj68214_onTap_runningActionsCount - 1;
if (window.obj68214_onTap_runningActionsCount < 0) {
	window.obj68214_onTap_runningActionsCount = 0;
} else if (window.obj68214_onTap_runningActionsCount == 0) {
	obj68214_onTap_actionGroup1();
}
}

















};
obj68214_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68214_onTap_activeActionGroupIndex = -1;
		$("#obj68214").trigger("obj68214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68214) {
				console.warn("de-queueing event obj68214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68214_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68222
(function(){
	window.obj68214_onTap_runningActionsCount = obj68214_onTap_runningActionsCount + 1;

	var selector = "#obj68222";
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
					window.obj68214_onTap_runningActionsCount = window.obj68214_onTap_runningActionsCount - 1;
if (window.obj68214_onTap_runningActionsCount < 0) {
	window.obj68214_onTap_runningActionsCount = 0;
} else if (window.obj68214_onTap_runningActionsCount == 0) {
	obj68214_onTap_actionGroup2();
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
				window.obj68214_onTap_runningActionsCount = window.obj68214_onTap_runningActionsCount - 1;
if (window.obj68214_onTap_runningActionsCount < 0) {
	window.obj68214_onTap_runningActionsCount = 0;
} else if (window.obj68214_onTap_runningActionsCount == 0) {
	obj68214_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68214_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68214_onTap_activeActionGroupIndex = -1;
		$("#obj68214").trigger("obj68214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68214) {
				console.warn("de-queueing event obj68214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68214_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68228 
move_68219();
function move_68219() {
	window.obj68214_onTap_runningActionsCount = obj68214_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68228");
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
			window.obj68214_onTap_runningActionsCount = window.obj68214_onTap_runningActionsCount - 1;
if (window.obj68214_onTap_runningActionsCount < 0) {
	window.obj68214_onTap_runningActionsCount = 0;
} else if (window.obj68214_onTap_runningActionsCount == 0) {
	obj68214_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68214_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68214_onTap_activeActionGroupIndex = -1;
		$("#obj68214").trigger("obj68214_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68214) {
				console.warn("de-queueing event obj68214." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68214").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68214_onTap_activeActionGroupIndex = 3;
	





















};
obj89269_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89269_onTap_activeActionGroupIndex = -1;
		$("#obj89269").trigger("obj89269_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89269) {
				console.warn("de-queueing event obj89269." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89269").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89269_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89274 
stopAudio_89271();
function stopAudio_89271() {
	window.obj89269_onTap_runningActionsCount = obj89269_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89274")[0];
	myAudio.pause();
	window.obj89269_onTap_runningActionsCount = window.obj89269_onTap_runningActionsCount - 1;
if (window.obj89269_onTap_runningActionsCount < 0) {
	window.obj89269_onTap_runningActionsCount = 0;
} else if (window.obj89269_onTap_runningActionsCount == 0) {
	obj89269_onTap_actionGroup1();
}
}








};
obj89269_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89269_onTap_activeActionGroupIndex = -1;
		$("#obj89269").trigger("obj89269_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89269) {
				console.warn("de-queueing event obj89269." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89269").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89269_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89269 
hide_89272();
function hide_89272() {
	var selector = "#obj89269";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89269_onTap_runningActionsCount = obj89269_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89269_onTap_runningActionsCount = window.obj89269_onTap_runningActionsCount - 1;
if (window.obj89269_onTap_runningActionsCount < 0) {
	window.obj89269_onTap_runningActionsCount = 0;
} else if (window.obj89269_onTap_runningActionsCount == 0) {
	obj89269_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89272(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89269_onTap_runningActionsCount = window.obj89269_onTap_runningActionsCount - 1;
if (window.obj89269_onTap_runningActionsCount < 0) {
	window.obj89269_onTap_runningActionsCount = 0;
} else if (window.obj89269_onTap_runningActionsCount == 0) {
	obj89269_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89269_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89269_onTap_activeActionGroupIndex = -1;
		$("#obj89269").trigger("obj89269_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89269) {
				console.warn("de-queueing event obj89269." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89269").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89269_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89264
(function(){
	window.obj89269_onTap_runningActionsCount = obj89269_onTap_runningActionsCount + 1;

	var selector = "#obj89264";
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
					window.obj89269_onTap_runningActionsCount = window.obj89269_onTap_runningActionsCount - 1;
if (window.obj89269_onTap_runningActionsCount < 0) {
	window.obj89269_onTap_runningActionsCount = 0;
} else if (window.obj89269_onTap_runningActionsCount == 0) {
	obj89269_onTap_actionGroup3();
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
				window.obj89269_onTap_runningActionsCount = window.obj89269_onTap_runningActionsCount - 1;
if (window.obj89269_onTap_runningActionsCount < 0) {
	window.obj89269_onTap_runningActionsCount = 0;
} else if (window.obj89269_onTap_runningActionsCount == 0) {
	obj89269_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89269_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89269_onTap_activeActionGroupIndex = -1;
		$("#obj89269").trigger("obj89269_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89269) {
				console.warn("de-queueing event obj89269." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89269").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89269_onTap_activeActionGroupIndex = 3;
	





















};
obj89264_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89264_onTap_activeActionGroupIndex = -1;
		$("#obj89264").trigger("obj89264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89264) {
				console.warn("de-queueing event obj89264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89264_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89264 
hide_89266();
function hide_89266() {
	var selector = "#obj89264";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89264_onTap_runningActionsCount = obj89264_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89264_onTap_runningActionsCount = window.obj89264_onTap_runningActionsCount - 1;
if (window.obj89264_onTap_runningActionsCount < 0) {
	window.obj89264_onTap_runningActionsCount = 0;
} else if (window.obj89264_onTap_runningActionsCount == 0) {
	obj89264_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89266(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89264_onTap_runningActionsCount = window.obj89264_onTap_runningActionsCount - 1;
if (window.obj89264_onTap_runningActionsCount < 0) {
	window.obj89264_onTap_runningActionsCount = 0;
} else if (window.obj89264_onTap_runningActionsCount == 0) {
	obj89264_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89264_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89264_onTap_activeActionGroupIndex = -1;
		$("#obj89264").trigger("obj89264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89264) {
				console.warn("de-queueing event obj89264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89264_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89269
(function(){
	window.obj89264_onTap_runningActionsCount = obj89264_onTap_runningActionsCount + 1;

	var selector = "#obj89269";
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
					window.obj89264_onTap_runningActionsCount = window.obj89264_onTap_runningActionsCount - 1;
if (window.obj89264_onTap_runningActionsCount < 0) {
	window.obj89264_onTap_runningActionsCount = 0;
} else if (window.obj89264_onTap_runningActionsCount == 0) {
	obj89264_onTap_actionGroup2();
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
				window.obj89264_onTap_runningActionsCount = window.obj89264_onTap_runningActionsCount - 1;
if (window.obj89264_onTap_runningActionsCount < 0) {
	window.obj89264_onTap_runningActionsCount = 0;
} else if (window.obj89264_onTap_runningActionsCount == 0) {
	obj89264_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89264_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89264_onTap_activeActionGroupIndex = -1;
		$("#obj89264").trigger("obj89264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89264) {
				console.warn("de-queueing event obj89264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89264_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89274 
playAudio_89268();
function playAudio_89268() {
	window.obj89264_onTap_runningActionsCount = obj89264_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89274")[0];
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
		    window.obj89264_onTap_runningActionsCount = window.obj89264_onTap_runningActionsCount - 1;
if (window.obj89264_onTap_runningActionsCount < 0) {
	window.obj89264_onTap_runningActionsCount = 0;
} else if (window.obj89264_onTap_runningActionsCount == 0) {
	obj89264_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89264_onTap_runningActionsCount = window.obj89264_onTap_runningActionsCount - 1;
if (window.obj89264_onTap_runningActionsCount < 0) {
	window.obj89264_onTap_runningActionsCount = 0;
} else if (window.obj89264_onTap_runningActionsCount == 0) {
	obj89264_onTap_actionGroup3();
}
	}
}









};
obj89264_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89264_onTap_activeActionGroupIndex = -1;
		$("#obj89264").trigger("obj89264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89264) {
				console.warn("de-queueing event obj89264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89264_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj55220: Event Touch Down
 *
 */
$("#obj55220").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55220_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55220_onTap is still running");
	return;
}
var obj55220_onTap_runningActionsCount = 0;
var obj55220_onTap_loopCount = 0;
obj55220_onTap_actionGroup0();
});










/*
 *
 *   obj55217: Event Touch Down
 *
 */
$("#obj55217").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55217_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55217_onTap is still running");
	return;
}
var obj55217_onTap_runningActionsCount = 0;
var obj55217_onTap_loopCount = 0;
obj55217_onTap_actionGroup0();
});










/*
 *
 *   obj55213: Event Touch Down
 *
 */
$("#obj55213").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj55213_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55213_onTap is still running");
	return;
}
var obj55213_onTap_runningActionsCount = 0;
var obj55213_onTap_loopCount = 0;
obj55213_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj55110: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55110");
	var winTarget = document.getElementById("obj55110");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55110").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55110_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55110_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55110_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55110_onTouchDown is still running");
	return;
}
var obj55110_onTouchDown_runningActionsCount = 0;
var obj55110_onTouchDown_loopCount = 0;
obj55110_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55110: Event SCActionDragDrop55113_droppedOutsideTargetActions
 *
 */
$("#obj55110").bind("SCActionDragDrop55113_droppedOutsideTargetActions", function(event) {
	if (window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55110_SCActionDragDrop55113_droppedOutsideTargetActions is still running");
	return;
}
var obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_loopCount = 0;
obj55110_SCActionDragDrop55113_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55110: Event droppedInsideTargetActions_3
 *
 */
$("#obj55110").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55110_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55110_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55110_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55110_droppedInsideTargetActions_3_loopCount = 0;
obj55110_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55110: Event droppedInsideTargetActions_2
 *
 */
$("#obj55110").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55110_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55110_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55110_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55110_droppedInsideTargetActions_2_loopCount = 0;
obj55110_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55110: Event droppedInsideTargetActions
 *
 */
$("#obj55110").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55110_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55110_droppedInsideTargetActions is still running");
	return;
}
var obj55110_droppedInsideTargetActions_runningActionsCount = 0;
var obj55110_droppedInsideTargetActions_loopCount = 0;
obj55110_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj55043: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj55043");
	var winTarget = document.getElementById("obj55043");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj55043").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj55043_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj55043_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj55043_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55043_onTouchDown is still running");
	return;
}
var obj55043_onTouchDown_runningActionsCount = 0;
var obj55043_onTouchDown_loopCount = 0;
obj55043_onTouchDown_actionGroup0();
});



/*
 *
 *   obj55043: Event SCActionDragDrop55046_droppedOutsideTargetActions
 *
 */
$("#obj55043").bind("SCActionDragDrop55046_droppedOutsideTargetActions", function(event) {
	if (window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55043_SCActionDragDrop55046_droppedOutsideTargetActions is still running");
	return;
}
var obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_runningActionsCount = 0;
var obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_loopCount = 0;
obj55043_SCActionDragDrop55046_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj55043: Event droppedInsideTargetActions_3
 *
 */
$("#obj55043").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj55043_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55043_droppedInsideTargetActions_3 is still running");
	return;
}
var obj55043_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj55043_droppedInsideTargetActions_3_loopCount = 0;
obj55043_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj55043: Event droppedInsideTargetActions_2
 *
 */
$("#obj55043").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj55043_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55043_droppedInsideTargetActions_2 is still running");
	return;
}
var obj55043_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj55043_droppedInsideTargetActions_2_loopCount = 0;
obj55043_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj55043: Event droppedInsideTargetActions
 *
 */
$("#obj55043").bind("droppedInsideTargetActions", function(event) {
	if (window.obj55043_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj55043_droppedInsideTargetActions is still running");
	return;
}
var obj55043_droppedInsideTargetActions_runningActionsCount = 0;
var obj55043_droppedInsideTargetActions_loopCount = 0;
obj55043_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj54976: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj54976");
	var winTarget = document.getElementById("obj54976");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj54976").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj54976_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj54976_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj54976_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54976_onTouchDown is still running");
	return;
}
var obj54976_onTouchDown_runningActionsCount = 0;
var obj54976_onTouchDown_loopCount = 0;
obj54976_onTouchDown_actionGroup0();
});



/*
 *
 *   obj54976: Event SCActionDragDrop54979_droppedOutsideTargetActions
 *
 */
$("#obj54976").bind("SCActionDragDrop54979_droppedOutsideTargetActions", function(event) {
	if (window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54976_SCActionDragDrop54979_droppedOutsideTargetActions is still running");
	return;
}
var obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_loopCount = 0;
obj54976_SCActionDragDrop54979_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj54976: Event droppedInsideTargetActions_3
 *
 */
$("#obj54976").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj54976_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54976_droppedInsideTargetActions_3 is still running");
	return;
}
var obj54976_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54976_droppedInsideTargetActions_3_loopCount = 0;
obj54976_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj54976: Event droppedInsideTargetActions_2
 *
 */
$("#obj54976").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj54976_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54976_droppedInsideTargetActions_2 is still running");
	return;
}
var obj54976_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54976_droppedInsideTargetActions_2_loopCount = 0;
obj54976_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj54976: Event droppedInsideTargetActions
 *
 */
$("#obj54976").bind("droppedInsideTargetActions", function(event) {
	if (window.obj54976_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54976_droppedInsideTargetActions is still running");
	return;
}
var obj54976_droppedInsideTargetActions_runningActionsCount = 0;
var obj54976_droppedInsideTargetActions_loopCount = 0;
obj54976_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68222: Event Touch Down
 *
 */
$("#obj68222").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68222_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68222_onTap is still running");
	return;
}
var obj68222_onTap_runningActionsCount = 0;
var obj68222_onTap_loopCount = 0;
obj68222_onTap_actionGroup0();
});










/*
 *
 *   obj68214: Event Touch Down
 *
 */
$("#obj68214").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68214_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68214_onTap is still running");
	return;
}
var obj68214_onTap_runningActionsCount = 0;
var obj68214_onTap_loopCount = 0;
obj68214_onTap_actionGroup0();
});










/*
 *
 *   obj89269: Event Touch Down
 *
 */
$("#obj89269").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89269_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89269_onTap is still running");
	return;
}
var obj89269_onTap_runningActionsCount = 0;
var obj89269_onTap_loopCount = 0;
obj89269_onTap_actionGroup0();
});










/*
 *
 *   obj89264: Event Touch Down
 *
 */
$("#obj89264").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89264_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89264_onTap is still running");
	return;
}
var obj89264_onTap_runningActionsCount = 0;
var obj89264_onTap_loopCount = 0;
obj89264_onTap_actionGroup0();
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
	
$("#obj55236").trigger('SCEventShow');
$("#obj55220").trigger('SCEventShow');
$("#obj55217").trigger('SCEventShow');
$("#obj55213").trigger('SCEventShow');
$("#obj55211").trigger('SCEventShow');
$("#obj55209").trigger('SCEventShow');
$("#obj55207").trigger('SCEventShow');
$("#obj55205").trigger('SCEventShow');
$("#obj55203").trigger('SCEventShow');
$("#obj55201").trigger('SCEventShow');
$("#obj55199").trigger('SCEventShow');
$("#obj55197").trigger('SCEventShow');
$("#obj55195").trigger('SCEventShow');
$("#obj55193").trigger('SCEventShow');
$("#obj55191").trigger('SCEventShow');
$("#obj55189").trigger('SCEventShow');
$("#obj55187").trigger('SCEventShow');
$("#obj55185").trigger('SCEventShow');
$("#obj55183").trigger('SCEventShow');
$("#obj55181").trigger('SCEventShow');
$("#obj55179").trigger('SCEventShow');
$("#obj55177").trigger('SCEventShow');
$("#obj55110").trigger('SCEventShow');
$("#obj55043").trigger('SCEventShow');
$("#obj54976").trigger('SCEventShow');
$("#obj68222").trigger('SCEventShow');
$("#obj68214").trigger('SCEventShow');
$("#obj89269").trigger('SCEventShow');
$("#obj89264").trigger('SCEventShow');
$("#obj89274").trigger('SCEventShow');
$("#obj95027").trigger('SCEventShow');
$("#obj68228").trigger('SCEventShow');
	
});