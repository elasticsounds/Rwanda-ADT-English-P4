pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 54409;
pubcoder.page.title = pubcoder.page.title || "196";
pubcoder.page.number = pubcoder.page.number || 196;
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
var obj54746_onTap_activeActionGroupIndex = -1;
var obj54746_onTap_runningActionsCount = 0;
var obj54746_onTap_loopCount = 0;
var obj54743_onTap_activeActionGroupIndex = -1;
var obj54743_onTap_runningActionsCount = 0;
var obj54743_onTap_loopCount = 0;
var obj54739_onTap_activeActionGroupIndex = -1;
var obj54739_onTap_runningActionsCount = 0;
var obj54739_onTap_loopCount = 0;
var obj54692_onTap_activeActionGroupIndex = -1;
var obj54692_onTap_runningActionsCount = 0;
var obj54692_onTap_loopCount = 0;
var obj54852_onDrag_activeActionGroupIndex = -1;
var obj54852_onDrag_runningActionsCount = 0;
var obj54852_onDrag_loopCount = 0;
var obj54852_onTouchDown_activeActionGroupIndex = -1;
var obj54852_onTouchDown_runningActionsCount = 0;
var obj54852_onTouchDown_loopCount = 0;
var obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_loopCount = 0;
var obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54852_droppedInsideTargetActions_3_loopCount = 0;
var obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54852_droppedInsideTargetActions_2_loopCount = 0;
var obj54852_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj54852_droppedInsideTargetActions_runningActionsCount = 0;
var obj54852_droppedInsideTargetActions_loopCount = 0;
var obj54795_onDrag_activeActionGroupIndex = -1;
var obj54795_onDrag_runningActionsCount = 0;
var obj54795_onDrag_loopCount = 0;
var obj54795_onTouchDown_activeActionGroupIndex = -1;
var obj54795_onTouchDown_runningActionsCount = 0;
var obj54795_onTouchDown_loopCount = 0;
var obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_loopCount = 0;
var obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54795_droppedInsideTargetActions_3_loopCount = 0;
var obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54795_droppedInsideTargetActions_2_loopCount = 0;
var obj54795_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj54795_droppedInsideTargetActions_runningActionsCount = 0;
var obj54795_droppedInsideTargetActions_loopCount = 0;
var obj54596_onDrag_activeActionGroupIndex = -1;
var obj54596_onDrag_runningActionsCount = 0;
var obj54596_onDrag_loopCount = 0;
var obj54596_onTouchDown_activeActionGroupIndex = -1;
var obj54596_onTouchDown_runningActionsCount = 0;
var obj54596_onTouchDown_loopCount = 0;
var obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_loopCount = 0;
var obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54596_droppedInsideTargetActions_3_loopCount = 0;
var obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54596_droppedInsideTargetActions_2_loopCount = 0;
var obj54596_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj54596_droppedInsideTargetActions_runningActionsCount = 0;
var obj54596_droppedInsideTargetActions_loopCount = 0;
var obj68174_onTap_activeActionGroupIndex = -1;
var obj68174_onTap_runningActionsCount = 0;
var obj68174_onTap_loopCount = 0;
var obj68166_onTap_activeActionGroupIndex = -1;
var obj68166_onTap_runningActionsCount = 0;
var obj68166_onTap_loopCount = 0;
var obj89233_onTap_activeActionGroupIndex = -1;
var obj89233_onTap_runningActionsCount = 0;
var obj89233_onTap_loopCount = 0;
var obj89228_onTap_activeActionGroupIndex = -1;
var obj89228_onTap_runningActionsCount = 0;
var obj89228_onTap_loopCount = 0;
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
		
obj54746_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54746_onTap_activeActionGroupIndex = -1;
		$("#obj54746").trigger("obj54746_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54746) {
				console.warn("de-queueing event obj54746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54746_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86791();
function goToPage_86791() {
	window.obj54746_onTap_runningActionsCount = obj54746_onTap_runningActionsCount + 1;
	$("#anchor1153")[0].click();
	window.obj54746_onTap_runningActionsCount = window.obj54746_onTap_runningActionsCount - 1;
if (window.obj54746_onTap_runningActionsCount < 0) {
	window.obj54746_onTap_runningActionsCount = 0;
} else if (window.obj54746_onTap_runningActionsCount == 0) {
	obj54746_onTap_actionGroup1();
}
}





















};
obj54746_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54746_onTap_activeActionGroupIndex = -1;
		$("#obj54746").trigger("obj54746_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54746) {
				console.warn("de-queueing event obj54746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54746_onTap_activeActionGroupIndex = 1;
	





















};
obj54743_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54743_onTap_activeActionGroupIndex = -1;
		$("#obj54743").trigger("obj54743_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54743) {
				console.warn("de-queueing event obj54743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54743_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_54745();
function goToPage_54745() {
	window.obj54743_onTap_runningActionsCount = obj54743_onTap_runningActionsCount + 1;
	$("#anchor1154")[0].click();
	window.obj54743_onTap_runningActionsCount = window.obj54743_onTap_runningActionsCount - 1;
if (window.obj54743_onTap_runningActionsCount < 0) {
	window.obj54743_onTap_runningActionsCount = 0;
} else if (window.obj54743_onTap_runningActionsCount == 0) {
	obj54743_onTap_actionGroup1();
}
}





















};
obj54743_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54743_onTap_activeActionGroupIndex = -1;
		$("#obj54743").trigger("obj54743_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54743) {
				console.warn("de-queueing event obj54743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54743_onTap_activeActionGroupIndex = 1;
	





















};
obj54739_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54739_onTap_activeActionGroupIndex = -1;
		$("#obj54739").trigger("obj54739_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54739) {
				console.warn("de-queueing event obj54739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54739_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_54741();
function goToPage_54741() {
	window.obj54739_onTap_runningActionsCount = obj54739_onTap_runningActionsCount + 1;
	$("#anchor1155")[0].click();
	window.obj54739_onTap_runningActionsCount = window.obj54739_onTap_runningActionsCount - 1;
if (window.obj54739_onTap_runningActionsCount < 0) {
	window.obj54739_onTap_runningActionsCount = 0;
} else if (window.obj54739_onTap_runningActionsCount == 0) {
	obj54739_onTap_actionGroup1();
}
}





















};
obj54739_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54739_onTap_activeActionGroupIndex = -1;
		$("#obj54739").trigger("obj54739_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54739) {
				console.warn("de-queueing event obj54739." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54739").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54739_onTap_activeActionGroupIndex = 1;
	





















};
obj54692_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54692_onTap_activeActionGroupIndex = -1;
		$("#obj54692").trigger("obj54692_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54692) {
				console.warn("de-queueing event obj54692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54692_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_54694();
function goToPage_54694() {
	window.obj54692_onTap_runningActionsCount = obj54692_onTap_runningActionsCount + 1;
	$("#anchor1158")[0].click();
	window.obj54692_onTap_runningActionsCount = window.obj54692_onTap_runningActionsCount - 1;
if (window.obj54692_onTap_runningActionsCount < 0) {
	window.obj54692_onTap_runningActionsCount = 0;
} else if (window.obj54692_onTap_runningActionsCount == 0) {
	obj54692_onTap_actionGroup1();
}
}





















};
obj54692_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54692_onTap_activeActionGroupIndex = -1;
		$("#obj54692").trigger("obj54692_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54692) {
				console.warn("de-queueing event obj54692." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54692").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54692_onTap_activeActionGroupIndex = 1;
	





















};
obj54852_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj54852");
//	action: dragDrop
//	target: obj54852 
dragDrop_54855();
function dragDrop_54855() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj54852_onTouchDown_runningActionsCount = obj54852_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj54852');
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
	  	containerNode = $('#obj54731');
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
    	window.obj54852_onTouchDown_runningActionsCount = window.obj54852_onTouchDown_runningActionsCount - 1;
if (window.obj54852_onTouchDown_runningActionsCount < 0) {
	window.obj54852_onTouchDown_runningActionsCount = 0;
} else if (window.obj54852_onTouchDown_runningActionsCount == 0) {
	obj54852_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj54717","#obj54721","#obj54725");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_54855 = false;
    	var dropped_id_54855;
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
					dropped_54855 = true;
					dropped_id_54855 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_54855) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj54852").trigger('SCActionDragDrop54855_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj54852_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54852_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj54852 
move_92815();
function move_92815() {
	window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_runningActionsCount = obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj54852");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 90;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_runningActionsCount = window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj54852_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54872();
function runjs_54872() {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = obj54852_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54725").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj54852_droppedInsideTargetActions_3_runningActionsCount = window.obj54852_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj54852_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_54874();
function switchText_54874() {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = obj54852_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54852_droppedInsideTargetActions_3_runningActionsCount = window.obj54852_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54852_droppedInsideTargetActions_3_runningActionsCount = window.obj54852_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj54852_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj54852 
move_54875();
function move_54875() {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = obj54852_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj54852");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 90;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54852_droppedInsideTargetActions_3_runningActionsCount = window.obj54852_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	});
}



















};
obj54852_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54876();
function runjs_54876() {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = obj54852_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54725").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54852_droppedInsideTargetActions_3_runningActionsCount = window.obj54852_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj54852_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_54877();
function runjs_54877() {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = obj54852_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54725").css("border-color", "#000000"); $("#obj54725").css("border-width", "1px"); $("#obj54725").css("border-style", "solid"); $("#obj54725").css("border-radius", "0px"); $("#obj54725").css("-webkit-border-radius", "0px"); $("#obj54725").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj54852_droppedInsideTargetActions_3_runningActionsCount = window.obj54852_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj54852_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj54695 
playAudio_54879();
function playAudio_54879() {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = obj54852_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj54695")[0];
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
		    window.obj54852_droppedInsideTargetActions_3_runningActionsCount = window.obj54852_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54852_droppedInsideTargetActions_3_runningActionsCount = window.obj54852_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj54852_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_54880();
function switchText_54880() {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = obj54852_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54852_droppedInsideTargetActions_3_runningActionsCount = window.obj54852_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54852_droppedInsideTargetActions_3_runningActionsCount = window.obj54852_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj54852_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj54852_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54862();
function runjs_54862() {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = obj54852_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54721").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj54852_droppedInsideTargetActions_2_runningActionsCount = window.obj54852_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj54852_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_54864();
function switchText_54864() {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = obj54852_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54852_droppedInsideTargetActions_2_runningActionsCount = window.obj54852_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54852_droppedInsideTargetActions_2_runningActionsCount = window.obj54852_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj54852_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj54852 
move_54865();
function move_54865() {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = obj54852_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj54852");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 90;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54852_droppedInsideTargetActions_2_runningActionsCount = window.obj54852_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	});
}



















};
obj54852_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54866();
function runjs_54866() {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = obj54852_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54721").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54852_droppedInsideTargetActions_2_runningActionsCount = window.obj54852_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj54852_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_54867();
function runjs_54867() {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = obj54852_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54721").css("border-color", "#000000"); $("#obj54721").css("border-width", "1px"); $("#obj54721").css("border-style", "solid"); $("#obj54721").css("border-radius", "0px"); $("#obj54721").css("-webkit-border-radius", "0px"); $("#obj54721").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj54852_droppedInsideTargetActions_2_runningActionsCount = window.obj54852_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj54852_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj54695 
playAudio_54869();
function playAudio_54869() {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = obj54852_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj54695")[0];
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
		    window.obj54852_droppedInsideTargetActions_2_runningActionsCount = window.obj54852_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54852_droppedInsideTargetActions_2_runningActionsCount = window.obj54852_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj54852_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_54870();
function switchText_54870() {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = obj54852_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54852_droppedInsideTargetActions_2_runningActionsCount = window.obj54852_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54852_droppedInsideTargetActions_2_runningActionsCount = window.obj54852_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj54852_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj54852_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54857();
function runjs_54857() {
	window.obj54852_droppedInsideTargetActions_runningActionsCount = obj54852_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54717").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj54852_droppedInsideTargetActions_runningActionsCount = window.obj54852_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj54852_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_54859();
function switchText_54859() {
	window.obj54852_droppedInsideTargetActions_runningActionsCount = obj54852_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54852_droppedInsideTargetActions_runningActionsCount = window.obj54852_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54852_droppedInsideTargetActions_runningActionsCount = window.obj54852_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj54852_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj54697 
playAudio_54860();
function playAudio_54860() {
	window.obj54852_droppedInsideTargetActions_runningActionsCount = obj54852_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj54697")[0];
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
		    window.obj54852_droppedInsideTargetActions_runningActionsCount = window.obj54852_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54852_droppedInsideTargetActions_runningActionsCount = window.obj54852_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54852_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54852_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54852_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54852_droppedInsideTargetActions_actionGroup3();
}
	}
}









};
obj54852_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54852_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54852").trigger("obj54852_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54852) {
				console.warn("de-queueing event obj54852." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54852").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54852_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj54795_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj54795");
//	action: dragDrop
//	target: obj54795 
dragDrop_54798();
function dragDrop_54798() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj54795_onTouchDown_runningActionsCount = obj54795_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj54795');
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
	  	containerNode = $('#obj54731');
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
    	window.obj54795_onTouchDown_runningActionsCount = window.obj54795_onTouchDown_runningActionsCount - 1;
if (window.obj54795_onTouchDown_runningActionsCount < 0) {
	window.obj54795_onTouchDown_runningActionsCount = 0;
} else if (window.obj54795_onTouchDown_runningActionsCount == 0) {
	obj54795_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj54721","#obj54725","#obj54717");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_54798 = false;
    	var dropped_id_54798;
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
					dropped_54798 = true;
					dropped_id_54798 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_54798) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj54795").trigger('SCActionDragDrop54798_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj54795_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54795_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj54795 
move_92817();
function move_92817() {
	window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_runningActionsCount = obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj54795");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_runningActionsCount = window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj54795_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54815();
function runjs_54815() {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = obj54795_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54717").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj54795_droppedInsideTargetActions_3_runningActionsCount = window.obj54795_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj54795_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_54817();
function switchText_54817() {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = obj54795_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54795_droppedInsideTargetActions_3_runningActionsCount = window.obj54795_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54795_droppedInsideTargetActions_3_runningActionsCount = window.obj54795_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj54795_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj54795 
move_54818();
function move_54818() {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = obj54795_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj54795");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54795_droppedInsideTargetActions_3_runningActionsCount = window.obj54795_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	});
}



















};
obj54795_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54819();
function runjs_54819() {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = obj54795_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54717").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54795_droppedInsideTargetActions_3_runningActionsCount = window.obj54795_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj54795_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_54820();
function runjs_54820() {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = obj54795_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54717").css("border-color", "#000000"); $("#obj54717").css("border-width", "1px"); $("#obj54717").css("border-style", "solid"); $("#obj54717").css("border-radius", "0px"); $("#obj54717").css("-webkit-border-radius", "0px"); $("#obj54717").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj54795_droppedInsideTargetActions_3_runningActionsCount = window.obj54795_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj54795_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj54695 
playAudio_54822();
function playAudio_54822() {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = obj54795_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj54695")[0];
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
		    window.obj54795_droppedInsideTargetActions_3_runningActionsCount = window.obj54795_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54795_droppedInsideTargetActions_3_runningActionsCount = window.obj54795_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj54795_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_54823();
function switchText_54823() {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = obj54795_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54795_droppedInsideTargetActions_3_runningActionsCount = window.obj54795_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54795_droppedInsideTargetActions_3_runningActionsCount = window.obj54795_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj54795_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj54795_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54805();
function runjs_54805() {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = obj54795_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54725").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj54795_droppedInsideTargetActions_2_runningActionsCount = window.obj54795_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj54795_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_54807();
function switchText_54807() {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = obj54795_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54795_droppedInsideTargetActions_2_runningActionsCount = window.obj54795_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54795_droppedInsideTargetActions_2_runningActionsCount = window.obj54795_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj54795_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj54795 
move_54808();
function move_54808() {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = obj54795_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj54795");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54795_droppedInsideTargetActions_2_runningActionsCount = window.obj54795_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	});
}



















};
obj54795_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54809();
function runjs_54809() {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = obj54795_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54725").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54795_droppedInsideTargetActions_2_runningActionsCount = window.obj54795_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj54795_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_54810();
function runjs_54810() {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = obj54795_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54725").css("border-color", "#000000"); $("#obj54725").css("border-width", "1px"); $("#obj54725").css("border-style", "solid"); $("#obj54725").css("border-radius", "0px"); $("#obj54725").css("-webkit-border-radius", "0px"); $("#obj54725").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj54795_droppedInsideTargetActions_2_runningActionsCount = window.obj54795_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj54795_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj54695 
playAudio_54812();
function playAudio_54812() {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = obj54795_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj54695")[0];
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
		    window.obj54795_droppedInsideTargetActions_2_runningActionsCount = window.obj54795_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54795_droppedInsideTargetActions_2_runningActionsCount = window.obj54795_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj54795_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_54813();
function switchText_54813() {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = obj54795_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54795_droppedInsideTargetActions_2_runningActionsCount = window.obj54795_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54795_droppedInsideTargetActions_2_runningActionsCount = window.obj54795_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj54795_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj54795_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54800();
function runjs_54800() {
	window.obj54795_droppedInsideTargetActions_runningActionsCount = obj54795_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54721").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj54795_droppedInsideTargetActions_runningActionsCount = window.obj54795_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj54795_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_54802();
function switchText_54802() {
	window.obj54795_droppedInsideTargetActions_runningActionsCount = obj54795_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54795_droppedInsideTargetActions_runningActionsCount = window.obj54795_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54795_droppedInsideTargetActions_runningActionsCount = window.obj54795_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj54795_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj54697 
playAudio_54803();
function playAudio_54803() {
	window.obj54795_droppedInsideTargetActions_runningActionsCount = obj54795_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj54697")[0];
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
		    window.obj54795_droppedInsideTargetActions_runningActionsCount = window.obj54795_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54795_droppedInsideTargetActions_runningActionsCount = window.obj54795_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54795_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54795_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54795_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54795_droppedInsideTargetActions_actionGroup3();
}
	}
}









};
obj54795_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54795_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54795").trigger("obj54795_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54795) {
				console.warn("de-queueing event obj54795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54795_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj54596_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj54596");
//	action: dragDrop
//	target: obj54596 
dragDrop_54599();
function dragDrop_54599() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj54596_onTouchDown_runningActionsCount = obj54596_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj54596');
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
	  	containerNode = $('#obj54731');
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
    	window.obj54596_onTouchDown_runningActionsCount = window.obj54596_onTouchDown_runningActionsCount - 1;
if (window.obj54596_onTouchDown_runningActionsCount < 0) {
	window.obj54596_onTouchDown_runningActionsCount = 0;
} else if (window.obj54596_onTouchDown_runningActionsCount == 0) {
	obj54596_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj54725","#obj54721","#obj54717");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_54599 = false;
    	var dropped_id_54599;
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
					dropped_54599 = true;
					dropped_id_54599 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_54599) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj54596").trigger('SCActionDragDrop54599_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj54596_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54596_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj54596 
move_92819();
function move_92819() {
	window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_runningActionsCount = obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj54596");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_runningActionsCount = window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj54596_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54779();
function runjs_54779() {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = obj54596_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54717").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj54596_droppedInsideTargetActions_3_runningActionsCount = window.obj54596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj54596_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_54781();
function switchText_54781() {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = obj54596_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54596_droppedInsideTargetActions_3_runningActionsCount = window.obj54596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54596_droppedInsideTargetActions_3_runningActionsCount = window.obj54596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj54596_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj54596 
move_54782();
function move_54782() {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = obj54596_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj54596");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54596_droppedInsideTargetActions_3_runningActionsCount = window.obj54596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	});
}



















};
obj54596_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54783();
function runjs_54783() {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = obj54596_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54717").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54596_droppedInsideTargetActions_3_runningActionsCount = window.obj54596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj54596_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_54784();
function runjs_54784() {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = obj54596_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54717").css("border-color", "#000000"); $("#obj54717").css("border-width", "1px"); $("#obj54717").css("border-style", "solid"); $("#obj54717").css("border-radius", "0px"); $("#obj54717").css("-webkit-border-radius", "0px"); $("#obj54717").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj54596_droppedInsideTargetActions_3_runningActionsCount = window.obj54596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj54596_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj54695 
playAudio_54786();
function playAudio_54786() {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = obj54596_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj54695")[0];
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
		    window.obj54596_droppedInsideTargetActions_3_runningActionsCount = window.obj54596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54596_droppedInsideTargetActions_3_runningActionsCount = window.obj54596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj54596_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_54787();
function switchText_54787() {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = obj54596_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54596_droppedInsideTargetActions_3_runningActionsCount = window.obj54596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54596_droppedInsideTargetActions_3_runningActionsCount = window.obj54596_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj54596_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj54596_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54770();
function runjs_54770() {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = obj54596_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54721").css("background-color", "#C00000");
	
	setTimeout(function() {
		window.obj54596_droppedInsideTargetActions_2_runningActionsCount = window.obj54596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj54596_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_54772();
function switchText_54772() {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = obj54596_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54596_droppedInsideTargetActions_2_runningActionsCount = window.obj54596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54596_droppedInsideTargetActions_2_runningActionsCount = window.obj54596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj54596_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj54596 
move_54773();
function move_54773() {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = obj54596_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj54596");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 392;
	var moveY = 599;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54596_droppedInsideTargetActions_2_runningActionsCount = window.obj54596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	});
}



















};
obj54596_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54774();
function runjs_54774() {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = obj54596_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54721").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54596_droppedInsideTargetActions_2_runningActionsCount = window.obj54596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj54596_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_54778();
function runjs_54778() {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = obj54596_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54721").css("border-color", "#000000"); $("#obj54721").css("border-width", "1px"); $("#obj54721").css("border-style", "solid"); $("#obj54721").css("border-radius", "0px"); $("#obj54721").css("-webkit-border-radius", "0px"); $("#obj54721").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj54596_droppedInsideTargetActions_2_runningActionsCount = window.obj54596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj54596_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj54695 
playAudio_54776();
function playAudio_54776() {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = obj54596_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj54695")[0];
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
		    window.obj54596_droppedInsideTargetActions_2_runningActionsCount = window.obj54596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54596_droppedInsideTargetActions_2_runningActionsCount = window.obj54596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj54596_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_54777();
function switchText_54777() {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = obj54596_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54596_droppedInsideTargetActions_2_runningActionsCount = window.obj54596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54596_droppedInsideTargetActions_2_runningActionsCount = window.obj54596_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj54596_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj54596_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54601();
function runjs_54601() {
	window.obj54596_droppedInsideTargetActions_runningActionsCount = obj54596_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54725").css("background-color", "#058E3F");
	
	setTimeout(function() {
		window.obj54596_droppedInsideTargetActions_runningActionsCount = window.obj54596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj54596_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_54603();
function switchText_54603() {
	window.obj54596_droppedInsideTargetActions_runningActionsCount = obj54596_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54699_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54699_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54699").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54699_content");
			setTimeout(function () {
				window.obj54596_droppedInsideTargetActions_runningActionsCount = window.obj54596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj54699 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54596_droppedInsideTargetActions_runningActionsCount = window.obj54596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj54596_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj54697 
playAudio_54604();
function playAudio_54604() {
	window.obj54596_droppedInsideTargetActions_runningActionsCount = obj54596_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj54697")[0];
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
		    window.obj54596_droppedInsideTargetActions_runningActionsCount = window.obj54596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54596_droppedInsideTargetActions_runningActionsCount = window.obj54596_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54596_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54596_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54596_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54596_droppedInsideTargetActions_actionGroup3();
}
	}
}









};
obj54596_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54596_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54596").trigger("obj54596_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54596) {
				console.warn("de-queueing event obj54596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54596_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj68174_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68174_onTap_activeActionGroupIndex = -1;
		$("#obj68174").trigger("obj68174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68174) {
				console.warn("de-queueing event obj68174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68174_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68174 
hide_68177();
function hide_68177() {
	var selector = "#obj68174";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68174_onTap_runningActionsCount = obj68174_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68174_onTap_runningActionsCount = window.obj68174_onTap_runningActionsCount - 1;
if (window.obj68174_onTap_runningActionsCount < 0) {
	window.obj68174_onTap_runningActionsCount = 0;
} else if (window.obj68174_onTap_runningActionsCount == 0) {
	obj68174_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68177(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68174_onTap_runningActionsCount = window.obj68174_onTap_runningActionsCount - 1;
if (window.obj68174_onTap_runningActionsCount < 0) {
	window.obj68174_onTap_runningActionsCount = 0;
} else if (window.obj68174_onTap_runningActionsCount == 0) {
	obj68174_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68180 
stopMovie_68176();
function stopMovie_68176() {
	window.obj68174_onTap_runningActionsCount = obj68174_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68180")[0];
	myVideo.pause();
	window.obj68174_onTap_runningActionsCount = window.obj68174_onTap_runningActionsCount - 1;
if (window.obj68174_onTap_runningActionsCount < 0) {
	window.obj68174_onTap_runningActionsCount = 0;
} else if (window.obj68174_onTap_runningActionsCount == 0) {
	obj68174_onTap_actionGroup1();
}
}
















};
obj68174_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68174_onTap_activeActionGroupIndex = -1;
		$("#obj68174").trigger("obj68174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68174) {
				console.warn("de-queueing event obj68174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68174_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68166
(function(){
	window.obj68174_onTap_runningActionsCount = obj68174_onTap_runningActionsCount + 1;

	var selector = "#obj68166";
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
					window.obj68174_onTap_runningActionsCount = window.obj68174_onTap_runningActionsCount - 1;
if (window.obj68174_onTap_runningActionsCount < 0) {
	window.obj68174_onTap_runningActionsCount = 0;
} else if (window.obj68174_onTap_runningActionsCount == 0) {
	obj68174_onTap_actionGroup2();
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
				window.obj68174_onTap_runningActionsCount = window.obj68174_onTap_runningActionsCount - 1;
if (window.obj68174_onTap_runningActionsCount < 0) {
	window.obj68174_onTap_runningActionsCount = 0;
} else if (window.obj68174_onTap_runningActionsCount == 0) {
	obj68174_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68174_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68174_onTap_activeActionGroupIndex = -1;
		$("#obj68174").trigger("obj68174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68174) {
				console.warn("de-queueing event obj68174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68174_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68180 
move_68179();
function move_68179() {
	window.obj68174_onTap_runningActionsCount = obj68174_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68180");
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
			window.obj68174_onTap_runningActionsCount = window.obj68174_onTap_runningActionsCount - 1;
if (window.obj68174_onTap_runningActionsCount < 0) {
	window.obj68174_onTap_runningActionsCount = 0;
} else if (window.obj68174_onTap_runningActionsCount == 0) {
	obj68174_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68174_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68174_onTap_activeActionGroupIndex = -1;
		$("#obj68174").trigger("obj68174_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68174) {
				console.warn("de-queueing event obj68174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68174_onTap_activeActionGroupIndex = 3;
	





















};
obj68166_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68166_onTap_activeActionGroupIndex = -1;
		$("#obj68166").trigger("obj68166_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68166) {
				console.warn("de-queueing event obj68166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68166_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68166 
hide_68169();
function hide_68169() {
	var selector = "#obj68166";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68166_onTap_runningActionsCount = obj68166_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68166_onTap_runningActionsCount = window.obj68166_onTap_runningActionsCount - 1;
if (window.obj68166_onTap_runningActionsCount < 0) {
	window.obj68166_onTap_runningActionsCount = 0;
} else if (window.obj68166_onTap_runningActionsCount == 0) {
	obj68166_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68169(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68166_onTap_runningActionsCount = window.obj68166_onTap_runningActionsCount - 1;
if (window.obj68166_onTap_runningActionsCount < 0) {
	window.obj68166_onTap_runningActionsCount = 0;
} else if (window.obj68166_onTap_runningActionsCount == 0) {
	obj68166_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68180 
playPauseMovie_68168();
function playPauseMovie_68168() {
	window.obj68166_onTap_runningActionsCount = obj68166_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68180")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68166_onTap_runningActionsCount = window.obj68166_onTap_runningActionsCount - 1;
if (window.obj68166_onTap_runningActionsCount < 0) {
	window.obj68166_onTap_runningActionsCount = 0;
} else if (window.obj68166_onTap_runningActionsCount == 0) {
	obj68166_onTap_actionGroup1();
}
}

















};
obj68166_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68166_onTap_activeActionGroupIndex = -1;
		$("#obj68166").trigger("obj68166_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68166) {
				console.warn("de-queueing event obj68166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68166_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68174
(function(){
	window.obj68166_onTap_runningActionsCount = obj68166_onTap_runningActionsCount + 1;

	var selector = "#obj68174";
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
					window.obj68166_onTap_runningActionsCount = window.obj68166_onTap_runningActionsCount - 1;
if (window.obj68166_onTap_runningActionsCount < 0) {
	window.obj68166_onTap_runningActionsCount = 0;
} else if (window.obj68166_onTap_runningActionsCount == 0) {
	obj68166_onTap_actionGroup2();
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
				window.obj68166_onTap_runningActionsCount = window.obj68166_onTap_runningActionsCount - 1;
if (window.obj68166_onTap_runningActionsCount < 0) {
	window.obj68166_onTap_runningActionsCount = 0;
} else if (window.obj68166_onTap_runningActionsCount == 0) {
	obj68166_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68166_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68166_onTap_activeActionGroupIndex = -1;
		$("#obj68166").trigger("obj68166_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68166) {
				console.warn("de-queueing event obj68166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68166_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68180 
move_68171();
function move_68171() {
	window.obj68166_onTap_runningActionsCount = obj68166_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68180");
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
			window.obj68166_onTap_runningActionsCount = window.obj68166_onTap_runningActionsCount - 1;
if (window.obj68166_onTap_runningActionsCount < 0) {
	window.obj68166_onTap_runningActionsCount = 0;
} else if (window.obj68166_onTap_runningActionsCount == 0) {
	obj68166_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68166_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68166_onTap_activeActionGroupIndex = -1;
		$("#obj68166").trigger("obj68166_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68166) {
				console.warn("de-queueing event obj68166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68166_onTap_activeActionGroupIndex = 3;
	





















};
obj89233_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89233_onTap_activeActionGroupIndex = -1;
		$("#obj89233").trigger("obj89233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89233) {
				console.warn("de-queueing event obj89233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89233_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89238 
stopAudio_89235();
function stopAudio_89235() {
	window.obj89233_onTap_runningActionsCount = obj89233_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89238")[0];
	myAudio.pause();
	window.obj89233_onTap_runningActionsCount = window.obj89233_onTap_runningActionsCount - 1;
if (window.obj89233_onTap_runningActionsCount < 0) {
	window.obj89233_onTap_runningActionsCount = 0;
} else if (window.obj89233_onTap_runningActionsCount == 0) {
	obj89233_onTap_actionGroup1();
}
}








};
obj89233_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89233_onTap_activeActionGroupIndex = -1;
		$("#obj89233").trigger("obj89233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89233) {
				console.warn("de-queueing event obj89233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89233_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89233 
hide_89236();
function hide_89236() {
	var selector = "#obj89233";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89233_onTap_runningActionsCount = obj89233_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89233_onTap_runningActionsCount = window.obj89233_onTap_runningActionsCount - 1;
if (window.obj89233_onTap_runningActionsCount < 0) {
	window.obj89233_onTap_runningActionsCount = 0;
} else if (window.obj89233_onTap_runningActionsCount == 0) {
	obj89233_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89236(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89233_onTap_runningActionsCount = window.obj89233_onTap_runningActionsCount - 1;
if (window.obj89233_onTap_runningActionsCount < 0) {
	window.obj89233_onTap_runningActionsCount = 0;
} else if (window.obj89233_onTap_runningActionsCount == 0) {
	obj89233_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89233_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89233_onTap_activeActionGroupIndex = -1;
		$("#obj89233").trigger("obj89233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89233) {
				console.warn("de-queueing event obj89233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89233_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89228
(function(){
	window.obj89233_onTap_runningActionsCount = obj89233_onTap_runningActionsCount + 1;

	var selector = "#obj89228";
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
					window.obj89233_onTap_runningActionsCount = window.obj89233_onTap_runningActionsCount - 1;
if (window.obj89233_onTap_runningActionsCount < 0) {
	window.obj89233_onTap_runningActionsCount = 0;
} else if (window.obj89233_onTap_runningActionsCount == 0) {
	obj89233_onTap_actionGroup3();
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
				window.obj89233_onTap_runningActionsCount = window.obj89233_onTap_runningActionsCount - 1;
if (window.obj89233_onTap_runningActionsCount < 0) {
	window.obj89233_onTap_runningActionsCount = 0;
} else if (window.obj89233_onTap_runningActionsCount == 0) {
	obj89233_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89233_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89233_onTap_activeActionGroupIndex = -1;
		$("#obj89233").trigger("obj89233_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89233) {
				console.warn("de-queueing event obj89233." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89233").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89233_onTap_activeActionGroupIndex = 3;
	





















};
obj89228_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89228_onTap_activeActionGroupIndex = -1;
		$("#obj89228").trigger("obj89228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89228) {
				console.warn("de-queueing event obj89228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89228_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89228 
hide_89230();
function hide_89230() {
	var selector = "#obj89228";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89228_onTap_runningActionsCount = obj89228_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89228_onTap_runningActionsCount = window.obj89228_onTap_runningActionsCount - 1;
if (window.obj89228_onTap_runningActionsCount < 0) {
	window.obj89228_onTap_runningActionsCount = 0;
} else if (window.obj89228_onTap_runningActionsCount == 0) {
	obj89228_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89230(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89228_onTap_runningActionsCount = window.obj89228_onTap_runningActionsCount - 1;
if (window.obj89228_onTap_runningActionsCount < 0) {
	window.obj89228_onTap_runningActionsCount = 0;
} else if (window.obj89228_onTap_runningActionsCount == 0) {
	obj89228_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89228_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89228_onTap_activeActionGroupIndex = -1;
		$("#obj89228").trigger("obj89228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89228) {
				console.warn("de-queueing event obj89228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89228_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89233
(function(){
	window.obj89228_onTap_runningActionsCount = obj89228_onTap_runningActionsCount + 1;

	var selector = "#obj89233";
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
					window.obj89228_onTap_runningActionsCount = window.obj89228_onTap_runningActionsCount - 1;
if (window.obj89228_onTap_runningActionsCount < 0) {
	window.obj89228_onTap_runningActionsCount = 0;
} else if (window.obj89228_onTap_runningActionsCount == 0) {
	obj89228_onTap_actionGroup2();
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
				window.obj89228_onTap_runningActionsCount = window.obj89228_onTap_runningActionsCount - 1;
if (window.obj89228_onTap_runningActionsCount < 0) {
	window.obj89228_onTap_runningActionsCount = 0;
} else if (window.obj89228_onTap_runningActionsCount == 0) {
	obj89228_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89228_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89228_onTap_activeActionGroupIndex = -1;
		$("#obj89228").trigger("obj89228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89228) {
				console.warn("de-queueing event obj89228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89228_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89238 
playAudio_89232();
function playAudio_89232() {
	window.obj89228_onTap_runningActionsCount = obj89228_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89238")[0];
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
		    window.obj89228_onTap_runningActionsCount = window.obj89228_onTap_runningActionsCount - 1;
if (window.obj89228_onTap_runningActionsCount < 0) {
	window.obj89228_onTap_runningActionsCount = 0;
} else if (window.obj89228_onTap_runningActionsCount == 0) {
	obj89228_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89228_onTap_runningActionsCount = window.obj89228_onTap_runningActionsCount - 1;
if (window.obj89228_onTap_runningActionsCount < 0) {
	window.obj89228_onTap_runningActionsCount = 0;
} else if (window.obj89228_onTap_runningActionsCount == 0) {
	obj89228_onTap_actionGroup3();
}
	}
}









};
obj89228_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89228_onTap_activeActionGroupIndex = -1;
		$("#obj89228").trigger("obj89228_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89228) {
				console.warn("de-queueing event obj89228." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89228").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89228_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj54746: Event Touch Down
 *
 */
$("#obj54746").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj54746_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54746_onTap is still running");
	return;
}
var obj54746_onTap_runningActionsCount = 0;
var obj54746_onTap_loopCount = 0;
obj54746_onTap_actionGroup0();
});










/*
 *
 *   obj54743: Event Touch Down
 *
 */
$("#obj54743").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj54743_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54743_onTap is still running");
	return;
}
var obj54743_onTap_runningActionsCount = 0;
var obj54743_onTap_loopCount = 0;
obj54743_onTap_actionGroup0();
});










/*
 *
 *   obj54739: Event Touch Down
 *
 */
$("#obj54739").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj54739_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54739_onTap is still running");
	return;
}
var obj54739_onTap_runningActionsCount = 0;
var obj54739_onTap_loopCount = 0;
obj54739_onTap_actionGroup0();
});




















































































































































































/*
 *
 *   obj54692: Event Touch Down
 *
 */
$("#obj54692").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj54692_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54692_onTap is still running");
	return;
}
var obj54692_onTap_runningActionsCount = 0;
var obj54692_onTap_loopCount = 0;
obj54692_onTap_actionGroup0();
});



















































/*
 *
 *   obj54852: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj54852");
	var winTarget = document.getElementById("obj54852");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj54852").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj54852_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj54852_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj54852_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54852_onTouchDown is still running");
	return;
}
var obj54852_onTouchDown_runningActionsCount = 0;
var obj54852_onTouchDown_loopCount = 0;
obj54852_onTouchDown_actionGroup0();
});



/*
 *
 *   obj54852: Event SCActionDragDrop54855_droppedOutsideTargetActions
 *
 */
$("#obj54852").bind("SCActionDragDrop54855_droppedOutsideTargetActions", function(event) {
	if (window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54852_SCActionDragDrop54855_droppedOutsideTargetActions is still running");
	return;
}
var obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_loopCount = 0;
obj54852_SCActionDragDrop54855_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj54852: Event droppedInsideTargetActions_3
 *
 */
$("#obj54852").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj54852_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54852_droppedInsideTargetActions_3 is still running");
	return;
}
var obj54852_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54852_droppedInsideTargetActions_3_loopCount = 0;
obj54852_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj54852: Event droppedInsideTargetActions_2
 *
 */
$("#obj54852").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj54852_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54852_droppedInsideTargetActions_2 is still running");
	return;
}
var obj54852_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54852_droppedInsideTargetActions_2_loopCount = 0;
obj54852_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj54852: Event droppedInsideTargetActions
 *
 */
$("#obj54852").bind("droppedInsideTargetActions", function(event) {
	if (window.obj54852_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54852_droppedInsideTargetActions is still running");
	return;
}
var obj54852_droppedInsideTargetActions_runningActionsCount = 0;
var obj54852_droppedInsideTargetActions_loopCount = 0;
obj54852_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj54795: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj54795");
	var winTarget = document.getElementById("obj54795");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj54795").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj54795_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj54795_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj54795_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54795_onTouchDown is still running");
	return;
}
var obj54795_onTouchDown_runningActionsCount = 0;
var obj54795_onTouchDown_loopCount = 0;
obj54795_onTouchDown_actionGroup0();
});



/*
 *
 *   obj54795: Event SCActionDragDrop54798_droppedOutsideTargetActions
 *
 */
$("#obj54795").bind("SCActionDragDrop54798_droppedOutsideTargetActions", function(event) {
	if (window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54795_SCActionDragDrop54798_droppedOutsideTargetActions is still running");
	return;
}
var obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_loopCount = 0;
obj54795_SCActionDragDrop54798_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj54795: Event droppedInsideTargetActions_3
 *
 */
$("#obj54795").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj54795_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54795_droppedInsideTargetActions_3 is still running");
	return;
}
var obj54795_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54795_droppedInsideTargetActions_3_loopCount = 0;
obj54795_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj54795: Event droppedInsideTargetActions_2
 *
 */
$("#obj54795").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj54795_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54795_droppedInsideTargetActions_2 is still running");
	return;
}
var obj54795_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54795_droppedInsideTargetActions_2_loopCount = 0;
obj54795_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj54795: Event droppedInsideTargetActions
 *
 */
$("#obj54795").bind("droppedInsideTargetActions", function(event) {
	if (window.obj54795_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54795_droppedInsideTargetActions is still running");
	return;
}
var obj54795_droppedInsideTargetActions_runningActionsCount = 0;
var obj54795_droppedInsideTargetActions_loopCount = 0;
obj54795_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj54596: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj54596");
	var winTarget = document.getElementById("obj54596");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj54596").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj54596_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj54596_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj54596_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54596_onTouchDown is still running");
	return;
}
var obj54596_onTouchDown_runningActionsCount = 0;
var obj54596_onTouchDown_loopCount = 0;
obj54596_onTouchDown_actionGroup0();
});



/*
 *
 *   obj54596: Event SCActionDragDrop54599_droppedOutsideTargetActions
 *
 */
$("#obj54596").bind("SCActionDragDrop54599_droppedOutsideTargetActions", function(event) {
	if (window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54596_SCActionDragDrop54599_droppedOutsideTargetActions is still running");
	return;
}
var obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_loopCount = 0;
obj54596_SCActionDragDrop54599_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj54596: Event droppedInsideTargetActions_3
 *
 */
$("#obj54596").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj54596_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54596_droppedInsideTargetActions_3 is still running");
	return;
}
var obj54596_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54596_droppedInsideTargetActions_3_loopCount = 0;
obj54596_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj54596: Event droppedInsideTargetActions_2
 *
 */
$("#obj54596").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj54596_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54596_droppedInsideTargetActions_2 is still running");
	return;
}
var obj54596_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54596_droppedInsideTargetActions_2_loopCount = 0;
obj54596_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj54596: Event droppedInsideTargetActions
 *
 */
$("#obj54596").bind("droppedInsideTargetActions", function(event) {
	if (window.obj54596_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54596_droppedInsideTargetActions is still running");
	return;
}
var obj54596_droppedInsideTargetActions_runningActionsCount = 0;
var obj54596_droppedInsideTargetActions_loopCount = 0;
obj54596_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68174: Event Touch Down
 *
 */
$("#obj68174").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68174_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68174_onTap is still running");
	return;
}
var obj68174_onTap_runningActionsCount = 0;
var obj68174_onTap_loopCount = 0;
obj68174_onTap_actionGroup0();
});










/*
 *
 *   obj68166: Event Touch Down
 *
 */
$("#obj68166").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68166_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68166_onTap is still running");
	return;
}
var obj68166_onTap_runningActionsCount = 0;
var obj68166_onTap_loopCount = 0;
obj68166_onTap_actionGroup0();
});










/*
 *
 *   obj89233: Event Touch Down
 *
 */
$("#obj89233").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89233_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89233_onTap is still running");
	return;
}
var obj89233_onTap_runningActionsCount = 0;
var obj89233_onTap_loopCount = 0;
obj89233_onTap_actionGroup0();
});










/*
 *
 *   obj89228: Event Touch Down
 *
 */
$("#obj89228").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89228_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89228_onTap is still running");
	return;
}
var obj89228_onTap_runningActionsCount = 0;
var obj89228_onTap_loopCount = 0;
obj89228_onTap_actionGroup0();
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
	
$("#obj54762").trigger('SCEventShow');
$("#obj54746").trigger('SCEventShow');
$("#obj54743").trigger('SCEventShow');
$("#obj54739").trigger('SCEventShow');
$("#obj54737").trigger('SCEventShow');
$("#obj54735").trigger('SCEventShow');
$("#obj54733").trigger('SCEventShow');
$("#obj54731").trigger('SCEventShow');
$("#obj54729").trigger('SCEventShow');
$("#obj54727").trigger('SCEventShow');
$("#obj54725").trigger('SCEventShow');
$("#obj54723").trigger('SCEventShow');
$("#obj54721").trigger('SCEventShow');
$("#obj54719").trigger('SCEventShow');
$("#obj54717").trigger('SCEventShow');
$("#obj54715").trigger('SCEventShow');
$("#obj54703").trigger('SCEventShow');
$("#obj54701").trigger('SCEventShow');
$("#obj54699").trigger('SCEventShow');
$("#obj54697").trigger('SCEventShow');
$("#obj54695").trigger('SCEventShow');
$("#obj54692").trigger('SCEventShow');
$("#obj54690").trigger('SCEventShow');
$("#obj54764").trigger('SCEventShow');
$("#obj54766").trigger('SCEventShow');
$("#obj54768").trigger('SCEventShow');
$("#obj54852").trigger('SCEventShow');
$("#obj54795").trigger('SCEventShow');
$("#obj54596").trigger('SCEventShow');
$("#obj68174").trigger('SCEventShow');
$("#obj68166").trigger('SCEventShow');
$("#obj89233").trigger('SCEventShow');
$("#obj89228").trigger('SCEventShow');
$("#obj89238").trigger('SCEventShow');
$("#obj95021").trigger('SCEventShow');
$("#obj68180").trigger('SCEventShow');
	
});