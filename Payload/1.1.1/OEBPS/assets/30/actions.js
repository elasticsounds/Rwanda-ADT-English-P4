pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 5375;
pubcoder.page.title = pubcoder.page.title || "30";
pubcoder.page.number = pubcoder.page.number || 30;
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
var obj5636_onTap_activeActionGroupIndex = -1;
var obj5636_onTap_runningActionsCount = 0;
var obj5636_onTap_loopCount = 0;
var obj5633_onTap_activeActionGroupIndex = -1;
var obj5633_onTap_runningActionsCount = 0;
var obj5633_onTap_loopCount = 0;
var obj5629_onTap_activeActionGroupIndex = -1;
var obj5629_onTap_runningActionsCount = 0;
var obj5629_onTap_loopCount = 0;
var obj5540_onDrag_activeActionGroupIndex = -1;
var obj5540_onDrag_runningActionsCount = 0;
var obj5540_onDrag_loopCount = 0;
var obj5540_onTouchDown_activeActionGroupIndex = -1;
var obj5540_onTouchDown_runningActionsCount = 0;
var obj5540_onTouchDown_loopCount = 0;
var obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_loopCount = 0;
var obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj5540_droppedInsideTargetActions_4_loopCount = 0;
var obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj5540_droppedInsideTargetActions_3_loopCount = 0;
var obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj5540_droppedInsideTargetActions_2_loopCount = 0;
var obj5540_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj5540_droppedInsideTargetActions_runningActionsCount = 0;
var obj5540_droppedInsideTargetActions_loopCount = 0;
var obj5654_onDrag_activeActionGroupIndex = -1;
var obj5654_onDrag_runningActionsCount = 0;
var obj5654_onDrag_loopCount = 0;
var obj5654_onTouchDown_activeActionGroupIndex = -1;
var obj5654_onTouchDown_runningActionsCount = 0;
var obj5654_onTouchDown_loopCount = 0;
var obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_loopCount = 0;
var obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj5654_droppedInsideTargetActions_4_loopCount = 0;
var obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj5654_droppedInsideTargetActions_3_loopCount = 0;
var obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj5654_droppedInsideTargetActions_2_loopCount = 0;
var obj5654_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj5654_droppedInsideTargetActions_runningActionsCount = 0;
var obj5654_droppedInsideTargetActions_loopCount = 0;
var obj5707_onDrag_activeActionGroupIndex = -1;
var obj5707_onDrag_runningActionsCount = 0;
var obj5707_onDrag_loopCount = 0;
var obj5707_onTouchDown_activeActionGroupIndex = -1;
var obj5707_onTouchDown_runningActionsCount = 0;
var obj5707_onTouchDown_loopCount = 0;
var obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_loopCount = 0;
var obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj5707_droppedInsideTargetActions_4_loopCount = 0;
var obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj5707_droppedInsideTargetActions_3_loopCount = 0;
var obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj5707_droppedInsideTargetActions_2_loopCount = 0;
var obj5707_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj5707_droppedInsideTargetActions_runningActionsCount = 0;
var obj5707_droppedInsideTargetActions_loopCount = 0;
var obj5760_onDrag_activeActionGroupIndex = -1;
var obj5760_onDrag_runningActionsCount = 0;
var obj5760_onDrag_loopCount = 0;
var obj5760_onTouchDown_activeActionGroupIndex = -1;
var obj5760_onTouchDown_runningActionsCount = 0;
var obj5760_onTouchDown_loopCount = 0;
var obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_loopCount = 0;
var obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj5760_droppedInsideTargetActions_4_loopCount = 0;
var obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj5760_droppedInsideTargetActions_3_loopCount = 0;
var obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj5760_droppedInsideTargetActions_2_loopCount = 0;
var obj5760_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj5760_droppedInsideTargetActions_runningActionsCount = 0;
var obj5760_droppedInsideTargetActions_loopCount = 0;
var obj65438_onTap_activeActionGroupIndex = -1;
var obj65438_onTap_runningActionsCount = 0;
var obj65438_onTap_loopCount = 0;
var obj65430_onTap_activeActionGroupIndex = -1;
var obj65430_onTap_runningActionsCount = 0;
var obj65430_onTap_loopCount = 0;
var obj87123_onTap_activeActionGroupIndex = -1;
var obj87123_onTap_runningActionsCount = 0;
var obj87123_onTap_loopCount = 0;
var obj87118_onTap_activeActionGroupIndex = -1;
var obj87118_onTap_runningActionsCount = 0;
var obj87118_onTap_loopCount = 0;
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
		
obj5636_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5636_onTap_activeActionGroupIndex = -1;
		$("#obj5636").trigger("obj5636_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5636) {
				console.warn("de-queueing event obj5636." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5636").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5636_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_5638();
function goToPage_5638() {
	window.obj5636_onTap_runningActionsCount = obj5636_onTap_runningActionsCount + 1;
	$("#anchor179")[0].click();
	window.obj5636_onTap_runningActionsCount = window.obj5636_onTap_runningActionsCount - 1;
if (window.obj5636_onTap_runningActionsCount < 0) {
	window.obj5636_onTap_runningActionsCount = 0;
} else if (window.obj5636_onTap_runningActionsCount == 0) {
	obj5636_onTap_actionGroup1();
}
}





















};
obj5636_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5636_onTap_activeActionGroupIndex = -1;
		$("#obj5636").trigger("obj5636_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5636) {
				console.warn("de-queueing event obj5636." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5636").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5636_onTap_activeActionGroupIndex = 1;
	





















};
obj5633_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5633_onTap_activeActionGroupIndex = -1;
		$("#obj5633").trigger("obj5633_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5633) {
				console.warn("de-queueing event obj5633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5633_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_5635();
function goToPage_5635() {
	window.obj5633_onTap_runningActionsCount = obj5633_onTap_runningActionsCount + 1;
	$("#anchor180")[0].click();
	window.obj5633_onTap_runningActionsCount = window.obj5633_onTap_runningActionsCount - 1;
if (window.obj5633_onTap_runningActionsCount < 0) {
	window.obj5633_onTap_runningActionsCount = 0;
} else if (window.obj5633_onTap_runningActionsCount == 0) {
	obj5633_onTap_actionGroup1();
}
}





















};
obj5633_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5633_onTap_activeActionGroupIndex = -1;
		$("#obj5633").trigger("obj5633_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5633) {
				console.warn("de-queueing event obj5633." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5633").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5633_onTap_activeActionGroupIndex = 1;
	





















};
obj5629_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5629_onTap_activeActionGroupIndex = -1;
		$("#obj5629").trigger("obj5629_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5629) {
				console.warn("de-queueing event obj5629." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5629").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5629_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_5631();
function goToPage_5631() {
	window.obj5629_onTap_runningActionsCount = obj5629_onTap_runningActionsCount + 1;
	$("#anchor181")[0].click();
	window.obj5629_onTap_runningActionsCount = window.obj5629_onTap_runningActionsCount - 1;
if (window.obj5629_onTap_runningActionsCount < 0) {
	window.obj5629_onTap_runningActionsCount = 0;
} else if (window.obj5629_onTap_runningActionsCount == 0) {
	obj5629_onTap_actionGroup1();
}
}





















};
obj5629_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5629_onTap_activeActionGroupIndex = -1;
		$("#obj5629").trigger("obj5629_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5629) {
				console.warn("de-queueing event obj5629." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5629").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5629_onTap_activeActionGroupIndex = 1;
	





















};
obj5540_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5540");
//	action: dragDrop
//	target: obj5540 
dragDrop_5543();
function dragDrop_5543() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5540_onTouchDown_runningActionsCount = obj5540_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5540');
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
	  	containerNode = $('#obj5619');
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
    	window.obj5540_onTouchDown_runningActionsCount = window.obj5540_onTouchDown_runningActionsCount - 1;
if (window.obj5540_onTouchDown_runningActionsCount < 0) {
	window.obj5540_onTouchDown_runningActionsCount = 0;
} else if (window.obj5540_onTouchDown_runningActionsCount == 0) {
	obj5540_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj5603","#obj5609","#obj5607","#obj5605");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_5543 = false;
    	var dropped_id_5543;
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
					dropped_5543 = true;
					dropped_id_5543 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_5543) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj5540").trigger('SCActionDragDrop5543_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj5540_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5540_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj5540 
move_92174();
function move_92174() {
	window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_runningActionsCount = obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj5540");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 51;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_runningActionsCount = window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5540_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5875();
function runjs_5875() {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5605").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5876();
function runjs_5876() {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5605").css("border-color", "#C00000"); $("#obj5605").css("border-width", "2px"); $("#obj5605").css("border-style", "solid"); $("#obj5605").css("border-radius", "10px"); $("#obj5605").css("-webkit-border-radius", "10px"); $("#obj5605").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5597 
hide_5877();
function hide_5877() {
	var selector = "#obj5597";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5877(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5540_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5878();
function runjs_5878() {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5879();
function switchText_5879() {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj5540_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5540 
move_5880();
function move_5880() {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj5540");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 51;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj5540_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5881();
function runjs_5881() {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5605").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5882();
function runjs_5882() {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5605").css("border-color", "#000000"); $("#obj5605").css("border-width", "1px"); $("#obj5605").css("border-style", "solid"); $("#obj5605").css("border-radius", "10px"); $("#obj5605").css("-webkit-border-radius", "10px"); $("#obj5605").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5597
(function(){
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj5597";
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
					window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5540_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5884();
function runjs_5884() {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5540").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5885();
function runjs_5885() {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5540").css("border-color", "rgba(0,0,0,0)"); $("#obj5540").css("border-width", "0px"); $("#obj5540").css("border-style", "solid"); $("#obj5540").css("border-radius", "10px"); $("#obj5540").css("-webkit-border-radius", "10px"); $("#obj5540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_5886();
function playAudio_5886() {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj5540_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5887();
function switchText_5887() {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = obj5540_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5540_droppedInsideTargetActions_4_runningActionsCount = window.obj5540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj5540_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj5540_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5861();
function runjs_5861() {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5607").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5862();
function runjs_5862() {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5607").css("border-color", "#C00000"); $("#obj5607").css("border-width", "2px"); $("#obj5607").css("border-style", "solid"); $("#obj5607").css("border-radius", "10px"); $("#obj5607").css("-webkit-border-radius", "10px"); $("#obj5607").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5599 
hide_5863();
function hide_5863() {
	var selector = "#obj5599";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5863(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5540_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5864();
function runjs_5864() {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5865();
function switchText_5865() {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj5540_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5540 
move_5866();
function move_5866() {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj5540");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 51;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj5540_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5867();
function runjs_5867() {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5607").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5868();
function runjs_5868() {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5607").css("border-color", "#000000"); $("#obj5607").css("border-width", "1px"); $("#obj5607").css("border-style", "solid"); $("#obj5607").css("border-radius", "10px"); $("#obj5607").css("-webkit-border-radius", "10px"); $("#obj5607").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5599
(function(){
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj5599";
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
					window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5540_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5870();
function runjs_5870() {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5540").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5871();
function runjs_5871() {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5540").css("border-color", "rgba(0,0,0,0)"); $("#obj5540").css("border-width", "0px"); $("#obj5540").css("border-style", "solid"); $("#obj5540").css("border-radius", "10px"); $("#obj5540").css("-webkit-border-radius", "10px"); $("#obj5540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_5872();
function playAudio_5872() {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj5540_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5873();
function switchText_5873() {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = obj5540_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5540_droppedInsideTargetActions_3_runningActionsCount = window.obj5540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj5540_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj5540_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5847();
function runjs_5847() {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5848();
function runjs_5848() {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("border-color", "#C00000"); $("#obj5609").css("border-width", "2px"); $("#obj5609").css("border-style", "solid"); $("#obj5609").css("border-radius", "10px"); $("#obj5609").css("-webkit-border-radius", "10px"); $("#obj5609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5601 
hide_5849();
function hide_5849() {
	var selector = "#obj5601";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5849(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5540_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5850();
function runjs_5850() {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5851();
function switchText_5851() {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj5540_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5540 
move_5852();
function move_5852() {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj5540");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 51;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj5540_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5853();
function runjs_5853() {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5854();
function runjs_5854() {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("border-color", "#000000"); $("#obj5609").css("border-width", "1px"); $("#obj5609").css("border-style", "solid"); $("#obj5609").css("border-radius", "10px"); $("#obj5609").css("-webkit-border-radius", "10px"); $("#obj5609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5601
(function(){
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj5601";
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
					window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5540_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5856();
function runjs_5856() {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5540").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5857();
function runjs_5857() {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5540").css("border-color", "rgba(0,0,0,0)"); $("#obj5540").css("border-width", "0px"); $("#obj5540").css("border-style", "solid"); $("#obj5540").css("border-radius", "10px"); $("#obj5540").css("-webkit-border-radius", "10px"); $("#obj5540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_5858();
function playAudio_5858() {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj5540_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5859();
function switchText_5859() {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = obj5540_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5540_droppedInsideTargetActions_2_runningActionsCount = window.obj5540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj5540_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj5540_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5836();
function runjs_5836() {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = obj5540_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5603").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_runningActionsCount = window.obj5540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_5840();
function switchText_5840() {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = obj5540_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5540_droppedInsideTargetActions_runningActionsCount = window.obj5540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5540_droppedInsideTargetActions_runningActionsCount = window.obj5540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj5540_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_5837();
function runjs_5837() {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = obj5540_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5603").css("border-color", "#058E3F"); $("#obj5603").css("border-width", "2px"); $("#obj5603").css("border-style", "solid"); $("#obj5603").css("border-radius", "10px"); $("#obj5603").css("-webkit-border-radius", "10px"); $("#obj5603").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_runningActionsCount = window.obj5540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj5595 
hide_5838();
function hide_5838() {
	var selector = "#obj5595";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5540_droppedInsideTargetActions_runningActionsCount = obj5540_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5540_droppedInsideTargetActions_runningActionsCount = window.obj5540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5838(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5540_droppedInsideTargetActions_runningActionsCount = window.obj5540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5540_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_5839();
function runjs_5839() {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = obj5540_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5540_droppedInsideTargetActions_runningActionsCount = window.obj5540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj5540_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj5380 
playAudio_5841();
function playAudio_5841() {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = obj5540_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj5380")[0];
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
		    window.obj5540_droppedInsideTargetActions_runningActionsCount = window.obj5540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5540_droppedInsideTargetActions_runningActionsCount = window.obj5540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj5540_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90115();
function switchText_90115() {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = obj5540_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5540_droppedInsideTargetActions_runningActionsCount = window.obj5540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5540_droppedInsideTargetActions_runningActionsCount = window.obj5540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5540_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj5540_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5540").trigger("obj5540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5540) {
				console.warn("de-queueing event obj5540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5540_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj5654_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5654");
//	action: dragDrop
//	target: obj5654 
dragDrop_5657();
function dragDrop_5657() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5654_onTouchDown_runningActionsCount = obj5654_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5654');
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
	  	containerNode = $('#obj5619');
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
    	window.obj5654_onTouchDown_runningActionsCount = window.obj5654_onTouchDown_runningActionsCount - 1;
if (window.obj5654_onTouchDown_runningActionsCount < 0) {
	window.obj5654_onTouchDown_runningActionsCount = 0;
} else if (window.obj5654_onTouchDown_runningActionsCount == 0) {
	obj5654_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj5609","#obj5607","#obj5605","#obj5603");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_5657 = false;
    	var dropped_id_5657;
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
					dropped_5657 = true;
					dropped_id_5657 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_5657) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj5654").trigger('SCActionDragDrop5657_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj5654_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5654_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj5654 
move_92176();
function move_92176() {
	window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_runningActionsCount = obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj5654");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 178;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_runningActionsCount = window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5654_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5917();
function runjs_5917() {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5918();
function runjs_5918() {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("border-color", "#C00000"); $("#obj5603").css("border-width", "2px"); $("#obj5603").css("border-style", "solid"); $("#obj5603").css("border-radius", "10px"); $("#obj5603").css("-webkit-border-radius", "10px"); $("#obj5603").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5595 
hide_5919();
function hide_5919() {
	var selector = "#obj5595";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5919(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5654_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5920();
function runjs_5920() {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5654").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5921();
function switchText_5921() {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj5654_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5654 
move_5922();
function move_5922() {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj5654");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 178;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj5654_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5923();
function runjs_5923() {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5924();
function runjs_5924() {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("border-color", "#000000"); $("#obj5603").css("border-width", "1px"); $("#obj5603").css("border-style", "solid"); $("#obj5603").css("border-radius", "10px"); $("#obj5603").css("-webkit-border-radius", "10px"); $("#obj5603").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5595
(function(){
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj5595";
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
					window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5654_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5926();
function runjs_5926() {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5654").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5927();
function runjs_5927() {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5654").css("border-color", "rgba(0,0,0,0)"); $("#obj5654").css("border-width", "0px"); $("#obj5654").css("border-style", "solid"); $("#obj5654").css("border-radius", "10px"); $("#obj5654").css("-webkit-border-radius", "10px"); $("#obj5654").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_5928();
function playAudio_5928() {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj5654_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5929();
function switchText_5929() {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = obj5654_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5654_droppedInsideTargetActions_4_runningActionsCount = window.obj5654_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj5654_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj5654_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5903();
function runjs_5903() {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5605").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5904();
function runjs_5904() {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5605").css("border-color", "#C00000"); $("#obj5605").css("border-width", "2px"); $("#obj5605").css("border-style", "solid"); $("#obj5605").css("border-radius", "10px"); $("#obj5605").css("-webkit-border-radius", "10px"); $("#obj5605").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5597 
hide_5905();
function hide_5905() {
	var selector = "#obj5597";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5905(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5654_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5906();
function runjs_5906() {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5654").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5907();
function switchText_5907() {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj5654_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5654 
move_5908();
function move_5908() {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj5654");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 178;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj5654_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5909();
function runjs_5909() {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5605").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5910();
function runjs_5910() {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5605").css("border-color", "#000000"); $("#obj5605").css("border-width", "1px"); $("#obj5605").css("border-style", "solid"); $("#obj5605").css("border-radius", "10px"); $("#obj5605").css("-webkit-border-radius", "10px"); $("#obj5605").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5597
(function(){
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj5597";
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
					window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5654_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5912();
function runjs_5912() {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5654").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5913();
function runjs_5913() {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5654").css("border-color", "rgba(0,0,0,0)"); $("#obj5654").css("border-width", "0px"); $("#obj5654").css("border-style", "solid"); $("#obj5654").css("border-radius", "10px"); $("#obj5654").css("-webkit-border-radius", "10px"); $("#obj5654").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_5914();
function playAudio_5914() {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj5654_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5915();
function switchText_5915() {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = obj5654_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5654_droppedInsideTargetActions_3_runningActionsCount = window.obj5654_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj5654_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj5654_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5889();
function runjs_5889() {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5607").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5890();
function runjs_5890() {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5607").css("border-color", "#C00000"); $("#obj5607").css("border-width", "2px"); $("#obj5607").css("border-style", "solid"); $("#obj5607").css("border-radius", "10px"); $("#obj5607").css("-webkit-border-radius", "10px"); $("#obj5607").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5599 
hide_5891();
function hide_5891() {
	var selector = "#obj5599";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5891(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5654_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5892();
function runjs_5892() {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5654").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5893();
function switchText_5893() {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj5654_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5654 
move_5894();
function move_5894() {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj5654");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 178;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj5654_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5895();
function runjs_5895() {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5607").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5896();
function runjs_5896() {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5607").css("border-color", "#000000"); $("#obj5607").css("border-width", "1px"); $("#obj5607").css("border-style", "solid"); $("#obj5607").css("border-radius", "10px"); $("#obj5607").css("-webkit-border-radius", "10px"); $("#obj5607").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5599
(function(){
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj5599";
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
					window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5654_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5898();
function runjs_5898() {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5654").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5899();
function runjs_5899() {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5654").css("border-color", "rgba(0,0,0,0)"); $("#obj5654").css("border-width", "0px"); $("#obj5654").css("border-style", "solid"); $("#obj5654").css("border-radius", "10px"); $("#obj5654").css("-webkit-border-radius", "10px"); $("#obj5654").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_5900();
function playAudio_5900() {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj5654_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5901();
function switchText_5901() {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = obj5654_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5654_droppedInsideTargetActions_2_runningActionsCount = window.obj5654_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj5654_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj5654_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5815();
function runjs_5815() {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = obj5654_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5609").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_runningActionsCount = window.obj5654_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_5819();
function switchText_5819() {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = obj5654_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5654_droppedInsideTargetActions_runningActionsCount = window.obj5654_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5654_droppedInsideTargetActions_runningActionsCount = window.obj5654_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj5654_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_5816();
function runjs_5816() {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = obj5654_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5609").css("border-color", "#058E3F"); $("#obj5609").css("border-width", "2px"); $("#obj5609").css("border-style", "solid"); $("#obj5609").css("border-radius", "10px"); $("#obj5609").css("-webkit-border-radius", "10px"); $("#obj5609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_runningActionsCount = window.obj5654_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj5601 
hide_5817();
function hide_5817() {
	var selector = "#obj5601";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5654_droppedInsideTargetActions_runningActionsCount = obj5654_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5654_droppedInsideTargetActions_runningActionsCount = window.obj5654_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5817(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5654_droppedInsideTargetActions_runningActionsCount = window.obj5654_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5654_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_5818();
function runjs_5818() {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = obj5654_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5654").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5654_droppedInsideTargetActions_runningActionsCount = window.obj5654_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj5654_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj5380 
playAudio_5820();
function playAudio_5820() {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = obj5654_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj5380")[0];
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
		    window.obj5654_droppedInsideTargetActions_runningActionsCount = window.obj5654_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5654_droppedInsideTargetActions_runningActionsCount = window.obj5654_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj5654_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90116();
function switchText_90116() {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = obj5654_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5654_droppedInsideTargetActions_runningActionsCount = window.obj5654_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5654_droppedInsideTargetActions_runningActionsCount = window.obj5654_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5654_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5654_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5654_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5654_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj5654_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5654").trigger("obj5654_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5654) {
				console.warn("de-queueing event obj5654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5654_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj5707_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5707");
//	action: dragDrop
//	target: obj5707 
dragDrop_5710();
function dragDrop_5710() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5707_onTouchDown_runningActionsCount = obj5707_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5707');
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
	  	containerNode = $('#obj5619');
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
    	window.obj5707_onTouchDown_runningActionsCount = window.obj5707_onTouchDown_runningActionsCount - 1;
if (window.obj5707_onTouchDown_runningActionsCount < 0) {
	window.obj5707_onTouchDown_runningActionsCount = 0;
} else if (window.obj5707_onTouchDown_runningActionsCount == 0) {
	obj5707_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj5605","#obj5609","#obj5607","#obj5603");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_5710 = false;
    	var dropped_id_5710;
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
					dropped_5710 = true;
					dropped_id_5710 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_5710) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj5707").trigger('SCActionDragDrop5710_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj5707_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5707_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj5707 
move_92178();
function move_92178() {
	window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_runningActionsCount = obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj5707");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_runningActionsCount = window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5707_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5959();
function runjs_5959() {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5960();
function runjs_5960() {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("border-color", "#C00000"); $("#obj5603").css("border-width", "2px"); $("#obj5603").css("border-style", "solid"); $("#obj5603").css("border-radius", "10px"); $("#obj5603").css("-webkit-border-radius", "10px"); $("#obj5603").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5595 
hide_5961();
function hide_5961() {
	var selector = "#obj5595";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5961(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5707_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5962();
function runjs_5962() {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5707").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5963();
function switchText_5963() {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj5707_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5707 
move_5964();
function move_5964() {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj5707");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj5707_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5965();
function runjs_5965() {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5966();
function runjs_5966() {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("border-color", "#000000"); $("#obj5603").css("border-width", "1px"); $("#obj5603").css("border-style", "solid"); $("#obj5603").css("border-radius", "10px"); $("#obj5603").css("-webkit-border-radius", "10px"); $("#obj5603").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5595
(function(){
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj5595";
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
					window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5707_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5968();
function runjs_5968() {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5707").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5969();
function runjs_5969() {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5707").css("border-color", "rgba(0,0,0,0)"); $("#obj5707").css("border-width", "0px"); $("#obj5707").css("border-style", "solid"); $("#obj5707").css("border-radius", "10px"); $("#obj5707").css("-webkit-border-radius", "10px"); $("#obj5707").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_5970();
function playAudio_5970() {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj5707_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5971();
function switchText_5971() {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = obj5707_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5707_droppedInsideTargetActions_4_runningActionsCount = window.obj5707_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj5707_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj5707_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5945();
function runjs_5945() {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5607").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5946();
function runjs_5946() {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5607").css("border-color", "#C00000"); $("#obj5607").css("border-width", "2px"); $("#obj5607").css("border-style", "solid"); $("#obj5607").css("border-radius", "10px"); $("#obj5607").css("-webkit-border-radius", "10px"); $("#obj5607").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5599 
hide_5947();
function hide_5947() {
	var selector = "#obj5599";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5947(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5707_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5948();
function runjs_5948() {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5707").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5949();
function switchText_5949() {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj5707_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5707 
move_5950();
function move_5950() {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj5707");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj5707_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5951();
function runjs_5951() {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5607").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5952();
function runjs_5952() {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5607").css("border-color", "#000000"); $("#obj5607").css("border-width", "1px"); $("#obj5607").css("border-style", "solid"); $("#obj5607").css("border-radius", "10px"); $("#obj5607").css("-webkit-border-radius", "10px"); $("#obj5607").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5599
(function(){
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj5599";
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
					window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5707_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5954();
function runjs_5954() {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5707").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5955();
function runjs_5955() {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5707").css("border-color", "rgba(0,0,0,0)"); $("#obj5707").css("border-width", "0px"); $("#obj5707").css("border-style", "solid"); $("#obj5707").css("border-radius", "10px"); $("#obj5707").css("-webkit-border-radius", "10px"); $("#obj5707").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_5956();
function playAudio_5956() {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj5707_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5957();
function switchText_5957() {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = obj5707_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5707_droppedInsideTargetActions_3_runningActionsCount = window.obj5707_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj5707_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj5707_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5931();
function runjs_5931() {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5932();
function runjs_5932() {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("border-color", "#C00000"); $("#obj5609").css("border-width", "2px"); $("#obj5609").css("border-style", "solid"); $("#obj5609").css("border-radius", "10px"); $("#obj5609").css("-webkit-border-radius", "10px"); $("#obj5609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5601 
hide_5933();
function hide_5933() {
	var selector = "#obj5601";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5933(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5707_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5934();
function runjs_5934() {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5707").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5935();
function switchText_5935() {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj5707_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5707 
move_5936();
function move_5936() {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj5707");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj5707_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5937();
function runjs_5937() {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5938();
function runjs_5938() {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("border-color", "#000000"); $("#obj5609").css("border-width", "1px"); $("#obj5609").css("border-style", "solid"); $("#obj5609").css("border-radius", "10px"); $("#obj5609").css("-webkit-border-radius", "10px"); $("#obj5609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5601
(function(){
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj5601";
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
					window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5707_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5940();
function runjs_5940() {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5707").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5941();
function runjs_5941() {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5707").css("border-color", "rgba(0,0,0,0)"); $("#obj5707").css("border-width", "0px"); $("#obj5707").css("border-style", "solid"); $("#obj5707").css("border-radius", "10px"); $("#obj5707").css("-webkit-border-radius", "10px"); $("#obj5707").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_5942();
function playAudio_5942() {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj5707_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5943();
function switchText_5943() {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = obj5707_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5707_droppedInsideTargetActions_2_runningActionsCount = window.obj5707_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj5707_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj5707_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5829();
function runjs_5829() {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = obj5707_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5605").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_runningActionsCount = window.obj5707_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_5833();
function switchText_5833() {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = obj5707_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5707_droppedInsideTargetActions_runningActionsCount = window.obj5707_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5707_droppedInsideTargetActions_runningActionsCount = window.obj5707_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj5707_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_5830();
function runjs_5830() {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = obj5707_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5605").css("border-color", "#058E3F"); $("#obj5605").css("border-width", "2px"); $("#obj5605").css("border-style", "solid"); $("#obj5605").css("border-radius", "10px"); $("#obj5605").css("-webkit-border-radius", "10px"); $("#obj5605").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_runningActionsCount = window.obj5707_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj5597 
hide_5831();
function hide_5831() {
	var selector = "#obj5597";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5707_droppedInsideTargetActions_runningActionsCount = obj5707_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5707_droppedInsideTargetActions_runningActionsCount = window.obj5707_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5831(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5707_droppedInsideTargetActions_runningActionsCount = window.obj5707_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5707_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_5832();
function runjs_5832() {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = obj5707_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5707").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5707_droppedInsideTargetActions_runningActionsCount = window.obj5707_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj5707_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj5380 
playAudio_5834();
function playAudio_5834() {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = obj5707_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj5380")[0];
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
		    window.obj5707_droppedInsideTargetActions_runningActionsCount = window.obj5707_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5707_droppedInsideTargetActions_runningActionsCount = window.obj5707_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj5707_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90117();
function switchText_90117() {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = obj5707_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5707_droppedInsideTargetActions_runningActionsCount = window.obj5707_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5707_droppedInsideTargetActions_runningActionsCount = window.obj5707_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5707_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5707_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5707_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5707_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj5707_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5707").trigger("obj5707_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5707) {
				console.warn("de-queueing event obj5707." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5707").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5707_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj5760_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj5760");
//	action: dragDrop
//	target: obj5760 
dragDrop_5763();
function dragDrop_5763() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj5760_onTouchDown_runningActionsCount = obj5760_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj5760');
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
	  	containerNode = $('#obj5619');
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
    	window.obj5760_onTouchDown_runningActionsCount = window.obj5760_onTouchDown_runningActionsCount - 1;
if (window.obj5760_onTouchDown_runningActionsCount < 0) {
	window.obj5760_onTouchDown_runningActionsCount = 0;
} else if (window.obj5760_onTouchDown_runningActionsCount == 0) {
	obj5760_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj5607","#obj5609","#obj5605","#obj5603");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_5763 = false;
    	var dropped_id_5763;
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
					dropped_5763 = true;
					dropped_id_5763 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_5763) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj5760").trigger('SCActionDragDrop5763_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj5760_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5760_onTouchDown_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj5760 
move_92180();
function move_92180() {
	window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_runningActionsCount = obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj5760");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 432;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_runningActionsCount = window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj5760_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6001();
function runjs_6001() {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6002();
function runjs_6002() {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("border-color", "#C00000"); $("#obj5603").css("border-width", "2px"); $("#obj5603").css("border-style", "solid"); $("#obj5603").css("border-radius", "10px"); $("#obj5603").css("-webkit-border-radius", "10px"); $("#obj5603").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5595 
hide_6003();
function hide_6003() {
	var selector = "#obj5595";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6003(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5760_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6004();
function runjs_6004() {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5760").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6005();
function switchText_6005() {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj5760_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5760 
move_6006();
function move_6006() {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj5760");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 432;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj5760_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6007();
function runjs_6007() {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6008();
function runjs_6008() {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5603").css("border-color", "#000000"); $("#obj5603").css("border-width", "1px"); $("#obj5603").css("border-style", "solid"); $("#obj5603").css("border-radius", "10px"); $("#obj5603").css("-webkit-border-radius", "10px"); $("#obj5603").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5595
(function(){
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj5595";
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
					window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5760_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6010();
function runjs_6010() {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5760").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6011();
function runjs_6011() {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj5760").css("border-color", "rgba(0,0,0,0)"); $("#obj5760").css("border-width", "0px"); $("#obj5760").css("border-style", "solid"); $("#obj5760").css("border-radius", "10px"); $("#obj5760").css("-webkit-border-radius", "10px"); $("#obj5760").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_6012();
function playAudio_6012() {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj5760_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6013();
function switchText_6013() {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = obj5760_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5760_droppedInsideTargetActions_4_runningActionsCount = window.obj5760_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj5760_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj5760_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5987();
function runjs_5987() {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5605").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5988();
function runjs_5988() {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5605").css("border-color", "#C00000"); $("#obj5605").css("border-width", "2px"); $("#obj5605").css("border-style", "solid"); $("#obj5605").css("border-radius", "10px"); $("#obj5605").css("-webkit-border-radius", "10px"); $("#obj5605").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5597 
hide_5989();
function hide_5989() {
	var selector = "#obj5597";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5989(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5760_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5990();
function runjs_5990() {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5760").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5991();
function switchText_5991() {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj5760_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5760 
move_5992();
function move_5992() {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj5760");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 432;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj5760_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5993();
function runjs_5993() {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5605").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5994();
function runjs_5994() {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5605").css("border-color", "#000000"); $("#obj5605").css("border-width", "1px"); $("#obj5605").css("border-style", "solid"); $("#obj5605").css("border-radius", "10px"); $("#obj5605").css("-webkit-border-radius", "10px"); $("#obj5605").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5597
(function(){
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj5597";
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
					window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5760_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5996();
function runjs_5996() {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5760").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5997();
function runjs_5997() {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj5760").css("border-color", "rgba(0,0,0,0)"); $("#obj5760").css("border-width", "0px"); $("#obj5760").css("border-style", "solid"); $("#obj5760").css("border-radius", "10px"); $("#obj5760").css("-webkit-border-radius", "10px"); $("#obj5760").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_5998();
function playAudio_5998() {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj5760_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5999();
function switchText_5999() {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = obj5760_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5760_droppedInsideTargetActions_3_runningActionsCount = window.obj5760_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj5760_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj5760_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5973();
function runjs_5973() {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_5974();
function runjs_5974() {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("border-color", "#C00000"); $("#obj5609").css("border-width", "2px"); $("#obj5609").css("border-style", "solid"); $("#obj5609").css("border-radius", "10px"); $("#obj5609").css("-webkit-border-radius", "10px"); $("#obj5609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj5601 
hide_5975();
function hide_5975() {
	var selector = "#obj5601";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5975(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5760_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_5976();
function runjs_5976() {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5760").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_5977();
function switchText_5977() {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj5760_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj5760 
move_5978();
function move_5978() {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj5760");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 432;
	var moveY = 638;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj5760_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_5979();
function runjs_5979() {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_5980();
function runjs_5980() {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5609").css("border-color", "#000000"); $("#obj5609").css("border-width", "1px"); $("#obj5609").css("border-style", "solid"); $("#obj5609").css("border-radius", "10px"); $("#obj5609").css("-webkit-border-radius", "10px"); $("#obj5609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj5601
(function(){
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj5601";
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
					window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj5760_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_5982();
function runjs_5982() {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5760").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_5983();
function runjs_5983() {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj5760").css("border-color", "rgba(0,0,0,0)"); $("#obj5760").css("border-width", "0px"); $("#obj5760").css("border-style", "solid"); $("#obj5760").css("border-radius", "10px"); $("#obj5760").css("-webkit-border-radius", "10px"); $("#obj5760").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj5376 
playAudio_5984();
function playAudio_5984() {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj5376")[0];
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
		    window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj5760_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_5985();
function switchText_5985() {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = obj5760_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5760_droppedInsideTargetActions_2_runningActionsCount = window.obj5760_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj5760_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj5760_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_5822();
function runjs_5822() {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = obj5760_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5607").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_runningActionsCount = window.obj5760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_5826();
function switchText_5826() {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = obj5760_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5760_droppedInsideTargetActions_runningActionsCount = window.obj5760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5760_droppedInsideTargetActions_runningActionsCount = window.obj5760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj5760_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_5823();
function runjs_5823() {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = obj5760_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5607").css("border-color", "#058E3F"); $("#obj5607").css("border-width", "2px"); $("#obj5607").css("border-style", "solid"); $("#obj5607").css("border-radius", "10px"); $("#obj5607").css("-webkit-border-radius", "10px"); $("#obj5607").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_runningActionsCount = window.obj5760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj5599 
hide_5824();
function hide_5824() {
	var selector = "#obj5599";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj5760_droppedInsideTargetActions_runningActionsCount = obj5760_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj5760_droppedInsideTargetActions_runningActionsCount = window.obj5760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_5824(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj5760_droppedInsideTargetActions_runningActionsCount = window.obj5760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj5760_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_5825();
function runjs_5825() {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = obj5760_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj5760").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj5760_droppedInsideTargetActions_runningActionsCount = window.obj5760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj5760_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj5380 
playAudio_5827();
function playAudio_5827() {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = obj5760_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj5380")[0];
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
		    window.obj5760_droppedInsideTargetActions_runningActionsCount = window.obj5760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj5760_droppedInsideTargetActions_runningActionsCount = window.obj5760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj5760_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90118();
function switchText_90118() {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = obj5760_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj5378_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj5378_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj5378").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj5378_content");
			setTimeout(function () {
				window.obj5760_droppedInsideTargetActions_runningActionsCount = window.obj5760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj5378 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj5760_droppedInsideTargetActions_runningActionsCount = window.obj5760_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj5760_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj5760_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj5760_droppedInsideTargetActions_runningActionsCount == 0) {
	obj5760_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj5760_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj5760").trigger("obj5760_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 5760) {
				console.warn("de-queueing event obj5760." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj5760").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj5760_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj65438_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65438_onTap_activeActionGroupIndex = -1;
		$("#obj65438").trigger("obj65438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65438) {
				console.warn("de-queueing event obj65438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65438_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65438 
hide_65441();
function hide_65441() {
	var selector = "#obj65438";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65438_onTap_runningActionsCount = obj65438_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65438_onTap_runningActionsCount = window.obj65438_onTap_runningActionsCount - 1;
if (window.obj65438_onTap_runningActionsCount < 0) {
	window.obj65438_onTap_runningActionsCount = 0;
} else if (window.obj65438_onTap_runningActionsCount == 0) {
	obj65438_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65441(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65438_onTap_runningActionsCount = window.obj65438_onTap_runningActionsCount - 1;
if (window.obj65438_onTap_runningActionsCount < 0) {
	window.obj65438_onTap_runningActionsCount = 0;
} else if (window.obj65438_onTap_runningActionsCount == 0) {
	obj65438_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65444 
stopMovie_65440();
function stopMovie_65440() {
	window.obj65438_onTap_runningActionsCount = obj65438_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65444")[0];
	myVideo.pause();
	window.obj65438_onTap_runningActionsCount = window.obj65438_onTap_runningActionsCount - 1;
if (window.obj65438_onTap_runningActionsCount < 0) {
	window.obj65438_onTap_runningActionsCount = 0;
} else if (window.obj65438_onTap_runningActionsCount == 0) {
	obj65438_onTap_actionGroup1();
}
}
















};
obj65438_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65438_onTap_activeActionGroupIndex = -1;
		$("#obj65438").trigger("obj65438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65438) {
				console.warn("de-queueing event obj65438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65438_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65430
(function(){
	window.obj65438_onTap_runningActionsCount = obj65438_onTap_runningActionsCount + 1;

	var selector = "#obj65430";
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
					window.obj65438_onTap_runningActionsCount = window.obj65438_onTap_runningActionsCount - 1;
if (window.obj65438_onTap_runningActionsCount < 0) {
	window.obj65438_onTap_runningActionsCount = 0;
} else if (window.obj65438_onTap_runningActionsCount == 0) {
	obj65438_onTap_actionGroup2();
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
				window.obj65438_onTap_runningActionsCount = window.obj65438_onTap_runningActionsCount - 1;
if (window.obj65438_onTap_runningActionsCount < 0) {
	window.obj65438_onTap_runningActionsCount = 0;
} else if (window.obj65438_onTap_runningActionsCount == 0) {
	obj65438_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65438_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65438_onTap_activeActionGroupIndex = -1;
		$("#obj65438").trigger("obj65438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65438) {
				console.warn("de-queueing event obj65438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65438_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65444 
move_65443();
function move_65443() {
	window.obj65438_onTap_runningActionsCount = obj65438_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65444");
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
			window.obj65438_onTap_runningActionsCount = window.obj65438_onTap_runningActionsCount - 1;
if (window.obj65438_onTap_runningActionsCount < 0) {
	window.obj65438_onTap_runningActionsCount = 0;
} else if (window.obj65438_onTap_runningActionsCount == 0) {
	obj65438_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65438_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65438_onTap_activeActionGroupIndex = -1;
		$("#obj65438").trigger("obj65438_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65438) {
				console.warn("de-queueing event obj65438." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65438").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65438_onTap_activeActionGroupIndex = 3;
	





















};
obj65430_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65430_onTap_activeActionGroupIndex = -1;
		$("#obj65430").trigger("obj65430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65430) {
				console.warn("de-queueing event obj65430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65430_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65430 
hide_65433();
function hide_65433() {
	var selector = "#obj65430";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65430_onTap_runningActionsCount = obj65430_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65430_onTap_runningActionsCount = window.obj65430_onTap_runningActionsCount - 1;
if (window.obj65430_onTap_runningActionsCount < 0) {
	window.obj65430_onTap_runningActionsCount = 0;
} else if (window.obj65430_onTap_runningActionsCount == 0) {
	obj65430_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65433(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65430_onTap_runningActionsCount = window.obj65430_onTap_runningActionsCount - 1;
if (window.obj65430_onTap_runningActionsCount < 0) {
	window.obj65430_onTap_runningActionsCount = 0;
} else if (window.obj65430_onTap_runningActionsCount == 0) {
	obj65430_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65444 
playPauseMovie_65432();
function playPauseMovie_65432() {
	window.obj65430_onTap_runningActionsCount = obj65430_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65444")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65430_onTap_runningActionsCount = window.obj65430_onTap_runningActionsCount - 1;
if (window.obj65430_onTap_runningActionsCount < 0) {
	window.obj65430_onTap_runningActionsCount = 0;
} else if (window.obj65430_onTap_runningActionsCount == 0) {
	obj65430_onTap_actionGroup1();
}
}

















};
obj65430_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65430_onTap_activeActionGroupIndex = -1;
		$("#obj65430").trigger("obj65430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65430) {
				console.warn("de-queueing event obj65430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65430_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65438
(function(){
	window.obj65430_onTap_runningActionsCount = obj65430_onTap_runningActionsCount + 1;

	var selector = "#obj65438";
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
					window.obj65430_onTap_runningActionsCount = window.obj65430_onTap_runningActionsCount - 1;
if (window.obj65430_onTap_runningActionsCount < 0) {
	window.obj65430_onTap_runningActionsCount = 0;
} else if (window.obj65430_onTap_runningActionsCount == 0) {
	obj65430_onTap_actionGroup2();
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
				window.obj65430_onTap_runningActionsCount = window.obj65430_onTap_runningActionsCount - 1;
if (window.obj65430_onTap_runningActionsCount < 0) {
	window.obj65430_onTap_runningActionsCount = 0;
} else if (window.obj65430_onTap_runningActionsCount == 0) {
	obj65430_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65430_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65430_onTap_activeActionGroupIndex = -1;
		$("#obj65430").trigger("obj65430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65430) {
				console.warn("de-queueing event obj65430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65430_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65444 
move_65435();
function move_65435() {
	window.obj65430_onTap_runningActionsCount = obj65430_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65444");
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
			window.obj65430_onTap_runningActionsCount = window.obj65430_onTap_runningActionsCount - 1;
if (window.obj65430_onTap_runningActionsCount < 0) {
	window.obj65430_onTap_runningActionsCount = 0;
} else if (window.obj65430_onTap_runningActionsCount == 0) {
	obj65430_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65430_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65430_onTap_activeActionGroupIndex = -1;
		$("#obj65430").trigger("obj65430_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65430) {
				console.warn("de-queueing event obj65430." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65430").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65430_onTap_activeActionGroupIndex = 3;
	





















};
obj87123_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87123_onTap_activeActionGroupIndex = -1;
		$("#obj87123").trigger("obj87123_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87123) {
				console.warn("de-queueing event obj87123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87123_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87128 
stopAudio_87125();
function stopAudio_87125() {
	window.obj87123_onTap_runningActionsCount = obj87123_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87128")[0];
	myAudio.pause();
	window.obj87123_onTap_runningActionsCount = window.obj87123_onTap_runningActionsCount - 1;
if (window.obj87123_onTap_runningActionsCount < 0) {
	window.obj87123_onTap_runningActionsCount = 0;
} else if (window.obj87123_onTap_runningActionsCount == 0) {
	obj87123_onTap_actionGroup1();
}
}








};
obj87123_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87123_onTap_activeActionGroupIndex = -1;
		$("#obj87123").trigger("obj87123_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87123) {
				console.warn("de-queueing event obj87123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87123_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87123 
hide_87126();
function hide_87126() {
	var selector = "#obj87123";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87123_onTap_runningActionsCount = obj87123_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87123_onTap_runningActionsCount = window.obj87123_onTap_runningActionsCount - 1;
if (window.obj87123_onTap_runningActionsCount < 0) {
	window.obj87123_onTap_runningActionsCount = 0;
} else if (window.obj87123_onTap_runningActionsCount == 0) {
	obj87123_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87126(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87123_onTap_runningActionsCount = window.obj87123_onTap_runningActionsCount - 1;
if (window.obj87123_onTap_runningActionsCount < 0) {
	window.obj87123_onTap_runningActionsCount = 0;
} else if (window.obj87123_onTap_runningActionsCount == 0) {
	obj87123_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87123_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87123_onTap_activeActionGroupIndex = -1;
		$("#obj87123").trigger("obj87123_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87123) {
				console.warn("de-queueing event obj87123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87123_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87118
(function(){
	window.obj87123_onTap_runningActionsCount = obj87123_onTap_runningActionsCount + 1;

	var selector = "#obj87118";
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
					window.obj87123_onTap_runningActionsCount = window.obj87123_onTap_runningActionsCount - 1;
if (window.obj87123_onTap_runningActionsCount < 0) {
	window.obj87123_onTap_runningActionsCount = 0;
} else if (window.obj87123_onTap_runningActionsCount == 0) {
	obj87123_onTap_actionGroup3();
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
				window.obj87123_onTap_runningActionsCount = window.obj87123_onTap_runningActionsCount - 1;
if (window.obj87123_onTap_runningActionsCount < 0) {
	window.obj87123_onTap_runningActionsCount = 0;
} else if (window.obj87123_onTap_runningActionsCount == 0) {
	obj87123_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87123_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87123_onTap_activeActionGroupIndex = -1;
		$("#obj87123").trigger("obj87123_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87123) {
				console.warn("de-queueing event obj87123." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87123").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87123_onTap_activeActionGroupIndex = 3;
	





















};
obj87118_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87118_onTap_activeActionGroupIndex = -1;
		$("#obj87118").trigger("obj87118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87118) {
				console.warn("de-queueing event obj87118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87118_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87118 
hide_87120();
function hide_87120() {
	var selector = "#obj87118";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87118_onTap_runningActionsCount = obj87118_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87118_onTap_runningActionsCount = window.obj87118_onTap_runningActionsCount - 1;
if (window.obj87118_onTap_runningActionsCount < 0) {
	window.obj87118_onTap_runningActionsCount = 0;
} else if (window.obj87118_onTap_runningActionsCount == 0) {
	obj87118_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87120(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87118_onTap_runningActionsCount = window.obj87118_onTap_runningActionsCount - 1;
if (window.obj87118_onTap_runningActionsCount < 0) {
	window.obj87118_onTap_runningActionsCount = 0;
} else if (window.obj87118_onTap_runningActionsCount == 0) {
	obj87118_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87118_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87118_onTap_activeActionGroupIndex = -1;
		$("#obj87118").trigger("obj87118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87118) {
				console.warn("de-queueing event obj87118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87118_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87123
(function(){
	window.obj87118_onTap_runningActionsCount = obj87118_onTap_runningActionsCount + 1;

	var selector = "#obj87123";
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
					window.obj87118_onTap_runningActionsCount = window.obj87118_onTap_runningActionsCount - 1;
if (window.obj87118_onTap_runningActionsCount < 0) {
	window.obj87118_onTap_runningActionsCount = 0;
} else if (window.obj87118_onTap_runningActionsCount == 0) {
	obj87118_onTap_actionGroup2();
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
				window.obj87118_onTap_runningActionsCount = window.obj87118_onTap_runningActionsCount - 1;
if (window.obj87118_onTap_runningActionsCount < 0) {
	window.obj87118_onTap_runningActionsCount = 0;
} else if (window.obj87118_onTap_runningActionsCount == 0) {
	obj87118_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87118_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87118_onTap_activeActionGroupIndex = -1;
		$("#obj87118").trigger("obj87118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87118) {
				console.warn("de-queueing event obj87118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87118_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87128 
playAudio_87122();
function playAudio_87122() {
	window.obj87118_onTap_runningActionsCount = obj87118_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87128")[0];
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
		    window.obj87118_onTap_runningActionsCount = window.obj87118_onTap_runningActionsCount - 1;
if (window.obj87118_onTap_runningActionsCount < 0) {
	window.obj87118_onTap_runningActionsCount = 0;
} else if (window.obj87118_onTap_runningActionsCount == 0) {
	obj87118_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87118_onTap_runningActionsCount = window.obj87118_onTap_runningActionsCount - 1;
if (window.obj87118_onTap_runningActionsCount < 0) {
	window.obj87118_onTap_runningActionsCount = 0;
} else if (window.obj87118_onTap_runningActionsCount == 0) {
	obj87118_onTap_actionGroup3();
}
	}
}









};
obj87118_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87118_onTap_activeActionGroupIndex = -1;
		$("#obj87118").trigger("obj87118_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87118) {
				console.warn("de-queueing event obj87118." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87118").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87118_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj5636: Event Touch Down
 *
 */
$("#obj5636").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5636_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5636_onTap is still running");
	return;
}
var obj5636_onTap_runningActionsCount = 0;
var obj5636_onTap_loopCount = 0;
obj5636_onTap_actionGroup0();
});










/*
 *
 *   obj5633: Event Touch Down
 *
 */
$("#obj5633").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5633_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5633_onTap is still running");
	return;
}
var obj5633_onTap_runningActionsCount = 0;
var obj5633_onTap_loopCount = 0;
obj5633_onTap_actionGroup0();
});










/*
 *
 *   obj5629: Event Touch Down
 *
 */
$("#obj5629").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj5629_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5629_onTap is still running");
	return;
}
var obj5629_onTap_runningActionsCount = 0;
var obj5629_onTap_loopCount = 0;
obj5629_onTap_actionGroup0();
});





























































































































































































































/*
 *
 *   obj5540: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5540");
	var winTarget = document.getElementById("obj5540");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5540").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5540_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5540_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5540_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5540_onTouchDown is still running");
	return;
}
var obj5540_onTouchDown_runningActionsCount = 0;
var obj5540_onTouchDown_loopCount = 0;
obj5540_onTouchDown_actionGroup0();
});



/*
 *
 *   obj5540: Event SCActionDragDrop5543_droppedOutsideTargetActions
 *
 */
$("#obj5540").bind("SCActionDragDrop5543_droppedOutsideTargetActions", function(event) {
	if (window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5540_SCActionDragDrop5543_droppedOutsideTargetActions is still running");
	return;
}
var obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_loopCount = 0;
obj5540_SCActionDragDrop5543_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5540: Event droppedInsideTargetActions_4
 *
 */
$("#obj5540").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj5540_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5540_droppedInsideTargetActions_4 is still running");
	return;
}
var obj5540_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj5540_droppedInsideTargetActions_4_loopCount = 0;
obj5540_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj5540: Event droppedInsideTargetActions_3
 *
 */
$("#obj5540").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj5540_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5540_droppedInsideTargetActions_3 is still running");
	return;
}
var obj5540_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj5540_droppedInsideTargetActions_3_loopCount = 0;
obj5540_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj5540: Event droppedInsideTargetActions_2
 *
 */
$("#obj5540").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj5540_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5540_droppedInsideTargetActions_2 is still running");
	return;
}
var obj5540_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj5540_droppedInsideTargetActions_2_loopCount = 0;
obj5540_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj5540: Event droppedInsideTargetActions
 *
 */
$("#obj5540").bind("droppedInsideTargetActions", function(event) {
	if (window.obj5540_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5540_droppedInsideTargetActions is still running");
	return;
}
var obj5540_droppedInsideTargetActions_runningActionsCount = 0;
var obj5540_droppedInsideTargetActions_loopCount = 0;
obj5540_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj5654: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5654");
	var winTarget = document.getElementById("obj5654");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5654").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5654_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5654_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5654_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5654_onTouchDown is still running");
	return;
}
var obj5654_onTouchDown_runningActionsCount = 0;
var obj5654_onTouchDown_loopCount = 0;
obj5654_onTouchDown_actionGroup0();
});



/*
 *
 *   obj5654: Event SCActionDragDrop5657_droppedOutsideTargetActions
 *
 */
$("#obj5654").bind("SCActionDragDrop5657_droppedOutsideTargetActions", function(event) {
	if (window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5654_SCActionDragDrop5657_droppedOutsideTargetActions is still running");
	return;
}
var obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_loopCount = 0;
obj5654_SCActionDragDrop5657_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5654: Event droppedInsideTargetActions_4
 *
 */
$("#obj5654").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj5654_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5654_droppedInsideTargetActions_4 is still running");
	return;
}
var obj5654_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj5654_droppedInsideTargetActions_4_loopCount = 0;
obj5654_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj5654: Event droppedInsideTargetActions_3
 *
 */
$("#obj5654").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj5654_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5654_droppedInsideTargetActions_3 is still running");
	return;
}
var obj5654_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj5654_droppedInsideTargetActions_3_loopCount = 0;
obj5654_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj5654: Event droppedInsideTargetActions_2
 *
 */
$("#obj5654").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj5654_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5654_droppedInsideTargetActions_2 is still running");
	return;
}
var obj5654_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj5654_droppedInsideTargetActions_2_loopCount = 0;
obj5654_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj5654: Event droppedInsideTargetActions
 *
 */
$("#obj5654").bind("droppedInsideTargetActions", function(event) {
	if (window.obj5654_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5654_droppedInsideTargetActions is still running");
	return;
}
var obj5654_droppedInsideTargetActions_runningActionsCount = 0;
var obj5654_droppedInsideTargetActions_loopCount = 0;
obj5654_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj5707: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5707");
	var winTarget = document.getElementById("obj5707");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5707").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5707_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5707_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5707_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5707_onTouchDown is still running");
	return;
}
var obj5707_onTouchDown_runningActionsCount = 0;
var obj5707_onTouchDown_loopCount = 0;
obj5707_onTouchDown_actionGroup0();
});



/*
 *
 *   obj5707: Event SCActionDragDrop5710_droppedOutsideTargetActions
 *
 */
$("#obj5707").bind("SCActionDragDrop5710_droppedOutsideTargetActions", function(event) {
	if (window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5707_SCActionDragDrop5710_droppedOutsideTargetActions is still running");
	return;
}
var obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_loopCount = 0;
obj5707_SCActionDragDrop5710_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5707: Event droppedInsideTargetActions_4
 *
 */
$("#obj5707").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj5707_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5707_droppedInsideTargetActions_4 is still running");
	return;
}
var obj5707_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj5707_droppedInsideTargetActions_4_loopCount = 0;
obj5707_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj5707: Event droppedInsideTargetActions_3
 *
 */
$("#obj5707").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj5707_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5707_droppedInsideTargetActions_3 is still running");
	return;
}
var obj5707_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj5707_droppedInsideTargetActions_3_loopCount = 0;
obj5707_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj5707: Event droppedInsideTargetActions_2
 *
 */
$("#obj5707").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj5707_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5707_droppedInsideTargetActions_2 is still running");
	return;
}
var obj5707_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj5707_droppedInsideTargetActions_2_loopCount = 0;
obj5707_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj5707: Event droppedInsideTargetActions
 *
 */
$("#obj5707").bind("droppedInsideTargetActions", function(event) {
	if (window.obj5707_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5707_droppedInsideTargetActions is still running");
	return;
}
var obj5707_droppedInsideTargetActions_runningActionsCount = 0;
var obj5707_droppedInsideTargetActions_loopCount = 0;
obj5707_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj5760: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj5760");
	var winTarget = document.getElementById("obj5760");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj5760").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj5760_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj5760_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj5760_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5760_onTouchDown is still running");
	return;
}
var obj5760_onTouchDown_runningActionsCount = 0;
var obj5760_onTouchDown_loopCount = 0;
obj5760_onTouchDown_actionGroup0();
});



/*
 *
 *   obj5760: Event SCActionDragDrop5763_droppedOutsideTargetActions
 *
 */
$("#obj5760").bind("SCActionDragDrop5763_droppedOutsideTargetActions", function(event) {
	if (window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5760_SCActionDragDrop5763_droppedOutsideTargetActions is still running");
	return;
}
var obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_runningActionsCount = 0;
var obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_loopCount = 0;
obj5760_SCActionDragDrop5763_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj5760: Event droppedInsideTargetActions_4
 *
 */
$("#obj5760").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj5760_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5760_droppedInsideTargetActions_4 is still running");
	return;
}
var obj5760_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj5760_droppedInsideTargetActions_4_loopCount = 0;
obj5760_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj5760: Event droppedInsideTargetActions_3
 *
 */
$("#obj5760").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj5760_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5760_droppedInsideTargetActions_3 is still running");
	return;
}
var obj5760_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj5760_droppedInsideTargetActions_3_loopCount = 0;
obj5760_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj5760: Event droppedInsideTargetActions_2
 *
 */
$("#obj5760").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj5760_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5760_droppedInsideTargetActions_2 is still running");
	return;
}
var obj5760_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj5760_droppedInsideTargetActions_2_loopCount = 0;
obj5760_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj5760: Event droppedInsideTargetActions
 *
 */
$("#obj5760").bind("droppedInsideTargetActions", function(event) {
	if (window.obj5760_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj5760_droppedInsideTargetActions is still running");
	return;
}
var obj5760_droppedInsideTargetActions_runningActionsCount = 0;
var obj5760_droppedInsideTargetActions_loopCount = 0;
obj5760_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj65438: Event Touch Down
 *
 */
$("#obj65438").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65438_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65438_onTap is still running");
	return;
}
var obj65438_onTap_runningActionsCount = 0;
var obj65438_onTap_loopCount = 0;
obj65438_onTap_actionGroup0();
});










/*
 *
 *   obj65430: Event Touch Down
 *
 */
$("#obj65430").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65430_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65430_onTap is still running");
	return;
}
var obj65430_onTap_runningActionsCount = 0;
var obj65430_onTap_loopCount = 0;
obj65430_onTap_actionGroup0();
});










/*
 *
 *   obj87123: Event Touch Down
 *
 */
$("#obj87123").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87123_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87123_onTap is still running");
	return;
}
var obj87123_onTap_runningActionsCount = 0;
var obj87123_onTap_loopCount = 0;
obj87123_onTap_actionGroup0();
});










/*
 *
 *   obj87118: Event Touch Down
 *
 */
$("#obj87118").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87118_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87118_onTap is still running");
	return;
}
var obj87118_onTap_runningActionsCount = 0;
var obj87118_onTap_loopCount = 0;
obj87118_onTap_actionGroup0();
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
	
$("#obj5652").trigger('SCEventShow');
$("#obj5636").trigger('SCEventShow');
$("#obj5633").trigger('SCEventShow');
$("#obj5629").trigger('SCEventShow');
$("#obj5627").trigger('SCEventShow');
$("#obj5625").trigger('SCEventShow');
$("#obj5623").trigger('SCEventShow');
$("#obj5621").trigger('SCEventShow');
$("#obj5619").trigger('SCEventShow');
$("#obj5617").trigger('SCEventShow');
$("#obj5615").trigger('SCEventShow');
$("#obj5613").trigger('SCEventShow');
$("#obj5611").trigger('SCEventShow');
$("#obj5609").trigger('SCEventShow');
$("#obj5607").trigger('SCEventShow');
$("#obj5605").trigger('SCEventShow');
$("#obj5603").trigger('SCEventShow');
$("#obj5601").trigger('SCEventShow');
$("#obj5599").trigger('SCEventShow');
$("#obj5597").trigger('SCEventShow');
$("#obj5595").trigger('SCEventShow');
$("#obj5593").trigger('SCEventShow');
$("#obj5380").trigger('SCEventShow');
$("#obj5378").trigger('SCEventShow');
$("#obj5376").trigger('SCEventShow');
$("#obj5540").trigger('SCEventShow');
$("#obj5654").trigger('SCEventShow');
$("#obj5707").trigger('SCEventShow');
$("#obj5760").trigger('SCEventShow');
$("#obj65438").trigger('SCEventShow');
$("#obj65430").trigger('SCEventShow');
$("#obj87123").trigger('SCEventShow');
$("#obj87118").trigger('SCEventShow');
$("#obj87128").trigger('SCEventShow');
$("#obj94689").trigger('SCEventShow');
$("#obj65444").trigger('SCEventShow');
	
});