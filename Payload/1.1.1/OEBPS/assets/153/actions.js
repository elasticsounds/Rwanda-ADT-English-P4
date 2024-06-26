pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 45245;
pubcoder.page.title = pubcoder.page.title || "153";
pubcoder.page.number = pubcoder.page.number || 153;
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
var obj45563_onTap_activeActionGroupIndex = -1;
var obj45563_onTap_runningActionsCount = 0;
var obj45563_onTap_loopCount = 0;
var obj45560_onTap_activeActionGroupIndex = -1;
var obj45560_onTap_runningActionsCount = 0;
var obj45560_onTap_loopCount = 0;
var obj45556_onTap_activeActionGroupIndex = -1;
var obj45556_onTap_runningActionsCount = 0;
var obj45556_onTap_loopCount = 0;
var obj45447_onDrag_activeActionGroupIndex = -1;
var obj45447_onDrag_runningActionsCount = 0;
var obj45447_onDrag_loopCount = 0;
var obj45447_onTouchDown_activeActionGroupIndex = -1;
var obj45447_onTouchDown_runningActionsCount = 0;
var obj45447_onTouchDown_loopCount = 0;
var obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_loopCount = 0;
var obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45447_droppedInsideTargetActions_4_loopCount = 0;
var obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45447_droppedInsideTargetActions_3_loopCount = 0;
var obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45447_droppedInsideTargetActions_2_loopCount = 0;
var obj45447_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45447_droppedInsideTargetActions_runningActionsCount = 0;
var obj45447_droppedInsideTargetActions_loopCount = 0;
var obj45380_onDrag_activeActionGroupIndex = -1;
var obj45380_onDrag_runningActionsCount = 0;
var obj45380_onDrag_loopCount = 0;
var obj45380_onTouchDown_activeActionGroupIndex = -1;
var obj45380_onTouchDown_runningActionsCount = 0;
var obj45380_onTouchDown_loopCount = 0;
var obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_loopCount = 0;
var obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45380_droppedInsideTargetActions_4_loopCount = 0;
var obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45380_droppedInsideTargetActions_3_loopCount = 0;
var obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45380_droppedInsideTargetActions_2_loopCount = 0;
var obj45380_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45380_droppedInsideTargetActions_runningActionsCount = 0;
var obj45380_droppedInsideTargetActions_loopCount = 0;
var obj45313_onDrag_activeActionGroupIndex = -1;
var obj45313_onDrag_runningActionsCount = 0;
var obj45313_onDrag_loopCount = 0;
var obj45313_onTouchDown_activeActionGroupIndex = -1;
var obj45313_onTouchDown_runningActionsCount = 0;
var obj45313_onTouchDown_loopCount = 0;
var obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_loopCount = 0;
var obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45313_droppedInsideTargetActions_4_loopCount = 0;
var obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45313_droppedInsideTargetActions_3_loopCount = 0;
var obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45313_droppedInsideTargetActions_2_loopCount = 0;
var obj45313_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45313_droppedInsideTargetActions_runningActionsCount = 0;
var obj45313_droppedInsideTargetActions_loopCount = 0;
var obj45246_onDrag_activeActionGroupIndex = -1;
var obj45246_onDrag_runningActionsCount = 0;
var obj45246_onDrag_loopCount = 0;
var obj45246_onTouchDown_activeActionGroupIndex = -1;
var obj45246_onTouchDown_runningActionsCount = 0;
var obj45246_onTouchDown_loopCount = 0;
var obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_loopCount = 0;
var obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45246_droppedInsideTargetActions_4_loopCount = 0;
var obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45246_droppedInsideTargetActions_3_loopCount = 0;
var obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45246_droppedInsideTargetActions_2_loopCount = 0;
var obj45246_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45246_droppedInsideTargetActions_runningActionsCount = 0;
var obj45246_droppedInsideTargetActions_loopCount = 0;
var obj67454_onTap_activeActionGroupIndex = -1;
var obj67454_onTap_runningActionsCount = 0;
var obj67454_onTap_loopCount = 0;
var obj67446_onTap_activeActionGroupIndex = -1;
var obj67446_onTap_runningActionsCount = 0;
var obj67446_onTap_loopCount = 0;
var obj88717_onTap_activeActionGroupIndex = -1;
var obj88717_onTap_runningActionsCount = 0;
var obj88717_onTap_loopCount = 0;
var obj88712_onTap_activeActionGroupIndex = -1;
var obj88712_onTap_runningActionsCount = 0;
var obj88712_onTap_loopCount = 0;
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
		
obj45563_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45563_onTap_activeActionGroupIndex = -1;
		$("#obj45563").trigger("obj45563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45563) {
				console.warn("de-queueing event obj45563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45563_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45565();
function goToPage_45565() {
	window.obj45563_onTap_runningActionsCount = obj45563_onTap_runningActionsCount + 1;
	$("#anchor904")[0].click();
	window.obj45563_onTap_runningActionsCount = window.obj45563_onTap_runningActionsCount - 1;
if (window.obj45563_onTap_runningActionsCount < 0) {
	window.obj45563_onTap_runningActionsCount = 0;
} else if (window.obj45563_onTap_runningActionsCount == 0) {
	obj45563_onTap_actionGroup1();
}
}





















};
obj45563_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45563_onTap_activeActionGroupIndex = -1;
		$("#obj45563").trigger("obj45563_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45563) {
				console.warn("de-queueing event obj45563." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45563").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45563_onTap_activeActionGroupIndex = 1;
	





















};
obj45560_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45560_onTap_activeActionGroupIndex = -1;
		$("#obj45560").trigger("obj45560_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45560) {
				console.warn("de-queueing event obj45560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45560_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45562();
function goToPage_45562() {
	window.obj45560_onTap_runningActionsCount = obj45560_onTap_runningActionsCount + 1;
	$("#anchor905")[0].click();
	window.obj45560_onTap_runningActionsCount = window.obj45560_onTap_runningActionsCount - 1;
if (window.obj45560_onTap_runningActionsCount < 0) {
	window.obj45560_onTap_runningActionsCount = 0;
} else if (window.obj45560_onTap_runningActionsCount == 0) {
	obj45560_onTap_actionGroup1();
}
}





















};
obj45560_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45560_onTap_activeActionGroupIndex = -1;
		$("#obj45560").trigger("obj45560_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45560) {
				console.warn("de-queueing event obj45560." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45560").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45560_onTap_activeActionGroupIndex = 1;
	





















};
obj45556_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45556_onTap_activeActionGroupIndex = -1;
		$("#obj45556").trigger("obj45556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45556) {
				console.warn("de-queueing event obj45556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45556_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45558();
function goToPage_45558() {
	window.obj45556_onTap_runningActionsCount = obj45556_onTap_runningActionsCount + 1;
	$("#anchor906")[0].click();
	window.obj45556_onTap_runningActionsCount = window.obj45556_onTap_runningActionsCount - 1;
if (window.obj45556_onTap_runningActionsCount < 0) {
	window.obj45556_onTap_runningActionsCount = 0;
} else if (window.obj45556_onTap_runningActionsCount == 0) {
	obj45556_onTap_actionGroup1();
}
}





















};
obj45556_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45556_onTap_activeActionGroupIndex = -1;
		$("#obj45556").trigger("obj45556_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45556) {
				console.warn("de-queueing event obj45556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45556_onTap_activeActionGroupIndex = 1;
	





















};
obj45447_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45447");
//	action: dragDrop
//	target: obj45447 
dragDrop_45450();
function dragDrop_45450() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45447_onTouchDown_runningActionsCount = obj45447_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45447');
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
	  	containerNode = $('#obj45546');
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
    	window.obj45447_onTouchDown_runningActionsCount = window.obj45447_onTouchDown_runningActionsCount - 1;
if (window.obj45447_onTouchDown_runningActionsCount < 0) {
	window.obj45447_onTouchDown_runningActionsCount = 0;
} else if (window.obj45447_onTouchDown_runningActionsCount == 0) {
	obj45447_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45536","#obj45542","#obj45540","#obj45538");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45450 = false;
    	var dropped_id_45450;
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
					dropped_45450 = true;
					dropped_id_45450 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45450) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45447").trigger('SCActionDragDrop45450_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45447_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45447_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45447 
move_92673();
function move_92673() {
	window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_runningActionsCount = obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 608;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_runningActionsCount = window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45447_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45487();
function runjs_45487() {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45538").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45488();
function runjs_45488() {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45538").css("border-color", "#C00000"); $("#obj45538").css("border-width", "2px"); $("#obj45538").css("border-style", "solid"); $("#obj45538").css("border-radius", "10px"); $("#obj45538").css("-webkit-border-radius", "10px"); $("#obj45538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45530 
hide_45489();
function hide_45489() {
	var selector = "#obj45530";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45489(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45447_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45490();
function runjs_45490() {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45447").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45491();
function switchText_45491() {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj45447_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45447 
move_45492();
function move_45492() {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj45447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 608;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj45447_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45493();
function runjs_45493() {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45538").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45494();
function runjs_45494() {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45538").css("border-color", "#000000"); $("#obj45538").css("border-width", "1px"); $("#obj45538").css("border-style", "solid"); $("#obj45538").css("border-radius", "10px"); $("#obj45538").css("-webkit-border-radius", "10px"); $("#obj45538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45530
(function(){
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj45530";
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
					window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45447_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45496();
function runjs_45496() {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45447").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45497();
function runjs_45497() {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45447").css("border-color", "rgba(0,0,0,0)"); $("#obj45447").css("border-width", "0px"); $("#obj45447").css("border-style", "solid"); $("#obj45447").css("border-radius", "10px"); $("#obj45447").css("-webkit-border-radius", "10px"); $("#obj45447").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45498();
function playAudio_45498() {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj45447_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45499();
function switchText_45499() {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = obj45447_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45447_droppedInsideTargetActions_4_runningActionsCount = window.obj45447_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj45447_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj45447_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45473();
function runjs_45473() {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45540").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45474();
function runjs_45474() {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45540").css("border-color", "#C00000"); $("#obj45540").css("border-width", "2px"); $("#obj45540").css("border-style", "solid"); $("#obj45540").css("border-radius", "10px"); $("#obj45540").css("-webkit-border-radius", "10px"); $("#obj45540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45532 
hide_45475();
function hide_45475() {
	var selector = "#obj45532";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45475(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45447_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45476();
function runjs_45476() {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45447").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45477();
function switchText_45477() {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj45447_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45447 
move_45478();
function move_45478() {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj45447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 608;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj45447_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45479();
function runjs_45479() {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45540").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45480();
function runjs_45480() {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45540").css("border-color", "#000000"); $("#obj45540").css("border-width", "1px"); $("#obj45540").css("border-style", "solid"); $("#obj45540").css("border-radius", "10px"); $("#obj45540").css("-webkit-border-radius", "10px"); $("#obj45540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45532
(function(){
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj45532";
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
					window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45447_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45482();
function runjs_45482() {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45447").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45483();
function runjs_45483() {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45447").css("border-color", "rgba(0,0,0,0)"); $("#obj45447").css("border-width", "0px"); $("#obj45447").css("border-style", "solid"); $("#obj45447").css("border-radius", "10px"); $("#obj45447").css("-webkit-border-radius", "10px"); $("#obj45447").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45484();
function playAudio_45484() {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj45447_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45485();
function switchText_45485() {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = obj45447_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45447_droppedInsideTargetActions_3_runningActionsCount = window.obj45447_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj45447_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj45447_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45459();
function runjs_45459() {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45460();
function runjs_45460() {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("border-color", "#C00000"); $("#obj45542").css("border-width", "2px"); $("#obj45542").css("border-style", "solid"); $("#obj45542").css("border-radius", "10px"); $("#obj45542").css("-webkit-border-radius", "10px"); $("#obj45542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45534 
hide_45461();
function hide_45461() {
	var selector = "#obj45534";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45461(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45447_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45462();
function runjs_45462() {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45447").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45463();
function switchText_45463() {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj45447_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45447 
move_45464();
function move_45464() {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj45447");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 608;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj45447_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45465();
function runjs_45465() {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45466();
function runjs_45466() {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("border-color", "#000000"); $("#obj45542").css("border-width", "1px"); $("#obj45542").css("border-style", "solid"); $("#obj45542").css("border-radius", "10px"); $("#obj45542").css("-webkit-border-radius", "10px"); $("#obj45542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45534
(function(){
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj45534";
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
					window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45447_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45468();
function runjs_45468() {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45447").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45469();
function runjs_45469() {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45447").css("border-color", "rgba(0,0,0,0)"); $("#obj45447").css("border-width", "0px"); $("#obj45447").css("border-style", "solid"); $("#obj45447").css("border-radius", "10px"); $("#obj45447").css("-webkit-border-radius", "10px"); $("#obj45447").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45470();
function playAudio_45470() {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj45447_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45471();
function switchText_45471() {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = obj45447_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45447_droppedInsideTargetActions_2_runningActionsCount = window.obj45447_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj45447_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj45447_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45452();
function runjs_45452() {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = obj45447_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45536").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_runningActionsCount = window.obj45447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45456();
function switchText_45456() {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = obj45447_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45447_droppedInsideTargetActions_runningActionsCount = window.obj45447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45447_droppedInsideTargetActions_runningActionsCount = window.obj45447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj45447_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45453();
function runjs_45453() {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = obj45447_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45536").css("border-color", "#058E3F"); $("#obj45536").css("border-width", "2px"); $("#obj45536").css("border-style", "solid"); $("#obj45536").css("border-radius", "10px"); $("#obj45536").css("-webkit-border-radius", "10px"); $("#obj45536").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_runningActionsCount = window.obj45447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj45528 
hide_45454();
function hide_45454() {
	var selector = "#obj45528";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45447_droppedInsideTargetActions_runningActionsCount = obj45447_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45447_droppedInsideTargetActions_runningActionsCount = window.obj45447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45454(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45447_droppedInsideTargetActions_runningActionsCount = window.obj45447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45447_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_45455();
function runjs_45455() {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = obj45447_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45447").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45447_droppedInsideTargetActions_runningActionsCount = window.obj45447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj45447_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj45524 
playAudio_45457();
function playAudio_45457() {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = obj45447_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45524")[0];
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
		    window.obj45447_droppedInsideTargetActions_runningActionsCount = window.obj45447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45447_droppedInsideTargetActions_runningActionsCount = window.obj45447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj45447_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90573();
function switchText_90573() {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = obj45447_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45447_droppedInsideTargetActions_runningActionsCount = window.obj45447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45447_droppedInsideTargetActions_runningActionsCount = window.obj45447_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45447_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45447_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45447_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45447_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj45447_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45447").trigger("obj45447_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45447) {
				console.warn("de-queueing event obj45447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45447_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj45380_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45380");
//	action: dragDrop
//	target: obj45380 
dragDrop_45383();
function dragDrop_45383() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45380_onTouchDown_runningActionsCount = obj45380_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45380');
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
	  	containerNode = $('#obj45546');
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
    	window.obj45380_onTouchDown_runningActionsCount = window.obj45380_onTouchDown_runningActionsCount - 1;
if (window.obj45380_onTouchDown_runningActionsCount < 0) {
	window.obj45380_onTouchDown_runningActionsCount = 0;
} else if (window.obj45380_onTouchDown_runningActionsCount == 0) {
	obj45380_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45538","#obj45542","#obj45540","#obj45536");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45383 = false;
    	var dropped_id_45383;
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
					dropped_45383 = true;
					dropped_id_45383 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45383) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45380").trigger('SCActionDragDrop45383_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45380_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45380_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45380 
move_92677();
function move_92677() {
	window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_runningActionsCount = obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45380");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_runningActionsCount = window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45380_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45420();
function runjs_45420() {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45421();
function runjs_45421() {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("border-color", "#C00000"); $("#obj45536").css("border-width", "2px"); $("#obj45536").css("border-style", "solid"); $("#obj45536").css("border-radius", "10px"); $("#obj45536").css("-webkit-border-radius", "10px"); $("#obj45536").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45528 
hide_45422();
function hide_45422() {
	var selector = "#obj45528";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45422(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45380_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45423();
function runjs_45423() {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45380").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45424();
function switchText_45424() {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj45380_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45380 
move_45425();
function move_45425() {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj45380");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj45380_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45426();
function runjs_45426() {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45427();
function runjs_45427() {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("border-color", "#000000"); $("#obj45536").css("border-width", "1px"); $("#obj45536").css("border-style", "solid"); $("#obj45536").css("border-radius", "10px"); $("#obj45536").css("-webkit-border-radius", "10px"); $("#obj45536").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45528
(function(){
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj45528";
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
					window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45380_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45429();
function runjs_45429() {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45380").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45430();
function runjs_45430() {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45380").css("border-color", "rgba(0,0,0,0)"); $("#obj45380").css("border-width", "0px"); $("#obj45380").css("border-style", "solid"); $("#obj45380").css("border-radius", "10px"); $("#obj45380").css("-webkit-border-radius", "10px"); $("#obj45380").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45431();
function playAudio_45431() {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj45380_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45432();
function switchText_45432() {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = obj45380_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45380_droppedInsideTargetActions_4_runningActionsCount = window.obj45380_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj45380_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj45380_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45406();
function runjs_45406() {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45540").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45407();
function runjs_45407() {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45540").css("border-color", "#C00000"); $("#obj45540").css("border-width", "2px"); $("#obj45540").css("border-style", "solid"); $("#obj45540").css("border-radius", "10px"); $("#obj45540").css("-webkit-border-radius", "10px"); $("#obj45540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45532 
hide_45408();
function hide_45408() {
	var selector = "#obj45532";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45408(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45380_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45409();
function runjs_45409() {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45380").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45410();
function switchText_45410() {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj45380_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45380 
move_45411();
function move_45411() {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj45380");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj45380_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45412();
function runjs_45412() {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45540").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45413();
function runjs_45413() {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45540").css("border-color", "#000000"); $("#obj45540").css("border-width", "1px"); $("#obj45540").css("border-style", "solid"); $("#obj45540").css("border-radius", "10px"); $("#obj45540").css("-webkit-border-radius", "10px"); $("#obj45540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45532
(function(){
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj45532";
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
					window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45380_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45415();
function runjs_45415() {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45380").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45416();
function runjs_45416() {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45380").css("border-color", "rgba(0,0,0,0)"); $("#obj45380").css("border-width", "0px"); $("#obj45380").css("border-style", "solid"); $("#obj45380").css("border-radius", "10px"); $("#obj45380").css("-webkit-border-radius", "10px"); $("#obj45380").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45417();
function playAudio_45417() {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj45380_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45418();
function switchText_45418() {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = obj45380_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45380_droppedInsideTargetActions_3_runningActionsCount = window.obj45380_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj45380_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj45380_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45392();
function runjs_45392() {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45393();
function runjs_45393() {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("border-color", "#C00000"); $("#obj45542").css("border-width", "2px"); $("#obj45542").css("border-style", "solid"); $("#obj45542").css("border-radius", "10px"); $("#obj45542").css("-webkit-border-radius", "10px"); $("#obj45542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45534 
hide_45394();
function hide_45394() {
	var selector = "#obj45534";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45394(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45380_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45395();
function runjs_45395() {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45380").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45396();
function switchText_45396() {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj45380_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45380 
move_45397();
function move_45397() {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj45380");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj45380_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45398();
function runjs_45398() {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45399();
function runjs_45399() {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("border-color", "#000000"); $("#obj45542").css("border-width", "1px"); $("#obj45542").css("border-style", "solid"); $("#obj45542").css("border-radius", "10px"); $("#obj45542").css("-webkit-border-radius", "10px"); $("#obj45542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45534
(function(){
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj45534";
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
					window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45380_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45401();
function runjs_45401() {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45380").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45402();
function runjs_45402() {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45380").css("border-color", "rgba(0,0,0,0)"); $("#obj45380").css("border-width", "0px"); $("#obj45380").css("border-style", "solid"); $("#obj45380").css("border-radius", "10px"); $("#obj45380").css("-webkit-border-radius", "10px"); $("#obj45380").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45403();
function playAudio_45403() {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj45380_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45404();
function switchText_45404() {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = obj45380_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45380_droppedInsideTargetActions_2_runningActionsCount = window.obj45380_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj45380_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj45380_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45385();
function runjs_45385() {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = obj45380_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45538").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_runningActionsCount = window.obj45380_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45386();
function runjs_45386() {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = obj45380_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45538").css("border-color", "#058E3F"); $("#obj45538").css("border-width", "2px"); $("#obj45538").css("border-style", "solid"); $("#obj45538").css("border-radius", "10px"); $("#obj45538").css("-webkit-border-radius", "10px"); $("#obj45538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_runningActionsCount = window.obj45380_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45530 
hide_45387();
function hide_45387() {
	var selector = "#obj45530";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45380_droppedInsideTargetActions_runningActionsCount = obj45380_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45380_droppedInsideTargetActions_runningActionsCount = window.obj45380_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45387(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45380_droppedInsideTargetActions_runningActionsCount = window.obj45380_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45380_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45388();
function runjs_45388() {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = obj45380_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45380").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45380_droppedInsideTargetActions_runningActionsCount = window.obj45380_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj45380_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45389();
function switchText_45389() {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = obj45380_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45380_droppedInsideTargetActions_runningActionsCount = window.obj45380_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45380_droppedInsideTargetActions_runningActionsCount = window.obj45380_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj45380_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj45524 
playAudio_45390();
function playAudio_45390() {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = obj45380_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45524")[0];
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
		    window.obj45380_droppedInsideTargetActions_runningActionsCount = window.obj45380_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45380_droppedInsideTargetActions_runningActionsCount = window.obj45380_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj45380_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90574();
function switchText_90574() {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = obj45380_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45380_droppedInsideTargetActions_runningActionsCount = window.obj45380_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45380_droppedInsideTargetActions_runningActionsCount = window.obj45380_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45380_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45380_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45380_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45380_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj45380_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45380").trigger("obj45380_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45380) {
				console.warn("de-queueing event obj45380." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45380").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45380_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj45313_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45313");
//	action: dragDrop
//	target: obj45313 
dragDrop_45316();
function dragDrop_45316() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45313_onTouchDown_runningActionsCount = obj45313_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45313');
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
	  	containerNode = $('#obj45546');
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
    	window.obj45313_onTouchDown_runningActionsCount = window.obj45313_onTouchDown_runningActionsCount - 1;
if (window.obj45313_onTouchDown_runningActionsCount < 0) {
	window.obj45313_onTouchDown_runningActionsCount = 0;
} else if (window.obj45313_onTouchDown_runningActionsCount == 0) {
	obj45313_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45542","#obj45540","#obj45538","#obj45536");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45316 = false;
    	var dropped_id_45316;
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
					dropped_45316 = true;
					dropped_id_45316 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45316) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45313").trigger('SCActionDragDrop45316_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45313_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45313_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45313 
move_92675();
function move_92675() {
	window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_runningActionsCount = obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45313");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_runningActionsCount = window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45313_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45353();
function runjs_45353() {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45354();
function runjs_45354() {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("border-color", "#C00000"); $("#obj45536").css("border-width", "2px"); $("#obj45536").css("border-style", "solid"); $("#obj45536").css("border-radius", "10px"); $("#obj45536").css("-webkit-border-radius", "10px"); $("#obj45536").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45528 
hide_45355();
function hide_45355() {
	var selector = "#obj45528";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45355(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45313_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45356();
function runjs_45356() {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45313").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45357();
function switchText_45357() {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj45313_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45313 
move_45358();
function move_45358() {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj45313");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj45313_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45359();
function runjs_45359() {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45360();
function runjs_45360() {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("border-color", "#000000"); $("#obj45536").css("border-width", "1px"); $("#obj45536").css("border-style", "solid"); $("#obj45536").css("border-radius", "10px"); $("#obj45536").css("-webkit-border-radius", "10px"); $("#obj45536").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45528
(function(){
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj45528";
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
					window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45313_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45362();
function runjs_45362() {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45313").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45363();
function runjs_45363() {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45313").css("border-color", "rgba(0,0,0,0)"); $("#obj45313").css("border-width", "0px"); $("#obj45313").css("border-style", "solid"); $("#obj45313").css("border-radius", "10px"); $("#obj45313").css("-webkit-border-radius", "10px"); $("#obj45313").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45364();
function playAudio_45364() {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj45313_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45365();
function switchText_45365() {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = obj45313_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45313_droppedInsideTargetActions_4_runningActionsCount = window.obj45313_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj45313_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj45313_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45339();
function runjs_45339() {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45538").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45340();
function runjs_45340() {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45538").css("border-color", "#C00000"); $("#obj45538").css("border-width", "2px"); $("#obj45538").css("border-style", "solid"); $("#obj45538").css("border-radius", "10px"); $("#obj45538").css("-webkit-border-radius", "10px"); $("#obj45538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45530 
hide_45341();
function hide_45341() {
	var selector = "#obj45530";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45341(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45313_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45342();
function runjs_45342() {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45313").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45343();
function switchText_45343() {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj45313_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45313 
move_45344();
function move_45344() {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj45313");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj45313_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45345();
function runjs_45345() {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45538").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45346();
function runjs_45346() {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45538").css("border-color", "#000000"); $("#obj45538").css("border-width", "1px"); $("#obj45538").css("border-style", "solid"); $("#obj45538").css("border-radius", "10px"); $("#obj45538").css("-webkit-border-radius", "10px"); $("#obj45538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45530
(function(){
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj45530";
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
					window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45313_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45348();
function runjs_45348() {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45313").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45349();
function runjs_45349() {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45313").css("border-color", "rgba(0,0,0,0)"); $("#obj45313").css("border-width", "0px"); $("#obj45313").css("border-style", "solid"); $("#obj45313").css("border-radius", "10px"); $("#obj45313").css("-webkit-border-radius", "10px"); $("#obj45313").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45350();
function playAudio_45350() {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj45313_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45351();
function switchText_45351() {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = obj45313_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45313_droppedInsideTargetActions_3_runningActionsCount = window.obj45313_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj45313_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj45313_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45325();
function runjs_45325() {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45540").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45326();
function runjs_45326() {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45540").css("border-color", "#C00000"); $("#obj45540").css("border-width", "2px"); $("#obj45540").css("border-style", "solid"); $("#obj45540").css("border-radius", "10px"); $("#obj45540").css("-webkit-border-radius", "10px"); $("#obj45540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45532 
hide_45327();
function hide_45327() {
	var selector = "#obj45532";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45327(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45313_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45328();
function runjs_45328() {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45313").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45329();
function switchText_45329() {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj45313_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45313 
move_45330();
function move_45330() {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj45313");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 661;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj45313_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45331();
function runjs_45331() {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45540").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45332();
function runjs_45332() {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45540").css("border-color", "#000000"); $("#obj45540").css("border-width", "1px"); $("#obj45540").css("border-style", "solid"); $("#obj45540").css("border-radius", "10px"); $("#obj45540").css("-webkit-border-radius", "10px"); $("#obj45540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45532
(function(){
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj45532";
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
					window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45313_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45334();
function runjs_45334() {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45313").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45335();
function runjs_45335() {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45313").css("border-color", "rgba(0,0,0,0)"); $("#obj45313").css("border-width", "0px"); $("#obj45313").css("border-style", "solid"); $("#obj45313").css("border-radius", "10px"); $("#obj45313").css("-webkit-border-radius", "10px"); $("#obj45313").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45336();
function playAudio_45336() {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj45313_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45337();
function switchText_45337() {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = obj45313_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45313_droppedInsideTargetActions_2_runningActionsCount = window.obj45313_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj45313_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj45313_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45318();
function runjs_45318() {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = obj45313_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45542").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_runningActionsCount = window.obj45313_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45322();
function switchText_45322() {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = obj45313_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45313_droppedInsideTargetActions_runningActionsCount = window.obj45313_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45313_droppedInsideTargetActions_runningActionsCount = window.obj45313_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj45313_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45319();
function runjs_45319() {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = obj45313_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45542").css("border-color", "#058E3F"); $("#obj45542").css("border-width", "2px"); $("#obj45542").css("border-style", "solid"); $("#obj45542").css("border-radius", "10px"); $("#obj45542").css("-webkit-border-radius", "10px"); $("#obj45542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_runningActionsCount = window.obj45313_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj45534 
hide_45320();
function hide_45320() {
	var selector = "#obj45534";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45313_droppedInsideTargetActions_runningActionsCount = obj45313_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45313_droppedInsideTargetActions_runningActionsCount = window.obj45313_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45320(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45313_droppedInsideTargetActions_runningActionsCount = window.obj45313_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45313_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_45321();
function runjs_45321() {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = obj45313_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45313").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45313_droppedInsideTargetActions_runningActionsCount = window.obj45313_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj45313_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj45524 
playAudio_45323();
function playAudio_45323() {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = obj45313_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45524")[0];
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
		    window.obj45313_droppedInsideTargetActions_runningActionsCount = window.obj45313_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45313_droppedInsideTargetActions_runningActionsCount = window.obj45313_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj45313_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90572();
function switchText_90572() {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = obj45313_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45313_droppedInsideTargetActions_runningActionsCount = window.obj45313_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45313_droppedInsideTargetActions_runningActionsCount = window.obj45313_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45313_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45313_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45313_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45313_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj45313_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45313").trigger("obj45313_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45313) {
				console.warn("de-queueing event obj45313." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45313").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45313_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj45246_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45246");
//	action: dragDrop
//	target: obj45246 
dragDrop_45249();
function dragDrop_45249() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45246_onTouchDown_runningActionsCount = obj45246_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45246');
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
	  	containerNode = $('#obj45546');
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
    	window.obj45246_onTouchDown_runningActionsCount = window.obj45246_onTouchDown_runningActionsCount - 1;
if (window.obj45246_onTouchDown_runningActionsCount < 0) {
	window.obj45246_onTouchDown_runningActionsCount = 0;
} else if (window.obj45246_onTouchDown_runningActionsCount == 0) {
	obj45246_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45540","#obj45542","#obj45538","#obj45536");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45249 = false;
    	var dropped_id_45249;
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
					dropped_45249 = true;
					dropped_id_45249 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45249) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45246").trigger('SCActionDragDrop45249_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45246_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45246_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45246 
move_92671();
function move_92671() {
	window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_runningActionsCount = obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45246");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 608;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_runningActionsCount = window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45246_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45286();
function runjs_45286() {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45287();
function runjs_45287() {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("border-color", "#C00000"); $("#obj45536").css("border-width", "2px"); $("#obj45536").css("border-style", "solid"); $("#obj45536").css("border-radius", "10px"); $("#obj45536").css("-webkit-border-radius", "10px"); $("#obj45536").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45528 
hide_45288();
function hide_45288() {
	var selector = "#obj45528";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45288(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45246_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45289();
function runjs_45289() {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45246").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45290();
function switchText_45290() {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj45246_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45246 
move_45291();
function move_45291() {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj45246");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 608;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj45246_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45292();
function runjs_45292() {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45293();
function runjs_45293() {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45536").css("border-color", "#000000"); $("#obj45536").css("border-width", "1px"); $("#obj45536").css("border-style", "solid"); $("#obj45536").css("border-radius", "10px"); $("#obj45536").css("-webkit-border-radius", "10px"); $("#obj45536").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45528
(function(){
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj45528";
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
					window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45246_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45295();
function runjs_45295() {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45246").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45296();
function runjs_45296() {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45246").css("border-color", "rgba(0,0,0,0)"); $("#obj45246").css("border-width", "0px"); $("#obj45246").css("border-style", "solid"); $("#obj45246").css("border-radius", "10px"); $("#obj45246").css("-webkit-border-radius", "10px"); $("#obj45246").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45297();
function playAudio_45297() {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj45246_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45298();
function switchText_45298() {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = obj45246_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45246_droppedInsideTargetActions_4_runningActionsCount = window.obj45246_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj45246_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj45246_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45272();
function runjs_45272() {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45538").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45273();
function runjs_45273() {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45538").css("border-color", "#C00000"); $("#obj45538").css("border-width", "2px"); $("#obj45538").css("border-style", "solid"); $("#obj45538").css("border-radius", "10px"); $("#obj45538").css("-webkit-border-radius", "10px"); $("#obj45538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45530 
hide_45274();
function hide_45274() {
	var selector = "#obj45530";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45274(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45246_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45275();
function runjs_45275() {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45246").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45276();
function switchText_45276() {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj45246_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45246 
move_45277();
function move_45277() {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj45246");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 608;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj45246_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45278();
function runjs_45278() {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45538").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45279();
function runjs_45279() {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45538").css("border-color", "#000000"); $("#obj45538").css("border-width", "1px"); $("#obj45538").css("border-style", "solid"); $("#obj45538").css("border-radius", "10px"); $("#obj45538").css("-webkit-border-radius", "10px"); $("#obj45538").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45530
(function(){
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj45530";
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
					window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45246_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45281();
function runjs_45281() {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45246").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45282();
function runjs_45282() {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45246").css("border-color", "rgba(0,0,0,0)"); $("#obj45246").css("border-width", "0px"); $("#obj45246").css("border-style", "solid"); $("#obj45246").css("border-radius", "10px"); $("#obj45246").css("-webkit-border-radius", "10px"); $("#obj45246").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45283();
function playAudio_45283() {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj45246_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45284();
function switchText_45284() {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = obj45246_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45246_droppedInsideTargetActions_3_runningActionsCount = window.obj45246_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj45246_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj45246_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45258();
function runjs_45258() {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45259();
function runjs_45259() {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("border-color", "#C00000"); $("#obj45542").css("border-width", "2px"); $("#obj45542").css("border-style", "solid"); $("#obj45542").css("border-radius", "10px"); $("#obj45542").css("-webkit-border-radius", "10px"); $("#obj45542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45534 
hide_45260();
function hide_45260() {
	var selector = "#obj45534";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45260(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45246_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45261();
function runjs_45261() {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45246").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45262();
function switchText_45262() {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj45246_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45246 
move_45263();
function move_45263() {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj45246");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 608;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj45246_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45264();
function runjs_45264() {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45265();
function runjs_45265() {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45542").css("border-color", "#000000"); $("#obj45542").css("border-width", "1px"); $("#obj45542").css("border-style", "solid"); $("#obj45542").css("border-radius", "10px"); $("#obj45542").css("-webkit-border-radius", "10px"); $("#obj45542").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45534
(function(){
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj45534";
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
					window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45246_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45267();
function runjs_45267() {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45246").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45268();
function runjs_45268() {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45246").css("border-color", "rgba(0,0,0,0)"); $("#obj45246").css("border-width", "0px"); $("#obj45246").css("border-style", "solid"); $("#obj45246").css("border-radius", "10px"); $("#obj45246").css("-webkit-border-radius", "10px"); $("#obj45246").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45520 
playAudio_45269();
function playAudio_45269() {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45520")[0];
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
		    window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj45246_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45270();
function switchText_45270() {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = obj45246_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45246_droppedInsideTargetActions_2_runningActionsCount = window.obj45246_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj45246_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj45246_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45251();
function runjs_45251() {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = obj45246_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45540").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_runningActionsCount = window.obj45246_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45255();
function switchText_45255() {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = obj45246_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45246_droppedInsideTargetActions_runningActionsCount = window.obj45246_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45246_droppedInsideTargetActions_runningActionsCount = window.obj45246_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj45246_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45252();
function runjs_45252() {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = obj45246_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45540").css("border-color", "#058E3F"); $("#obj45540").css("border-width", "2px"); $("#obj45540").css("border-style", "solid"); $("#obj45540").css("border-radius", "10px"); $("#obj45540").css("-webkit-border-radius", "10px"); $("#obj45540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_runningActionsCount = window.obj45246_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj45532 
hide_45253();
function hide_45253() {
	var selector = "#obj45532";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45246_droppedInsideTargetActions_runningActionsCount = obj45246_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45246_droppedInsideTargetActions_runningActionsCount = window.obj45246_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45253(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45246_droppedInsideTargetActions_runningActionsCount = window.obj45246_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45246_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_45254();
function runjs_45254() {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = obj45246_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45246").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45246_droppedInsideTargetActions_runningActionsCount = window.obj45246_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj45246_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj45524 
playAudio_45256();
function playAudio_45256() {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = obj45246_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45524")[0];
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
		    window.obj45246_droppedInsideTargetActions_runningActionsCount = window.obj45246_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45246_droppedInsideTargetActions_runningActionsCount = window.obj45246_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj45246_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90571();
function switchText_90571() {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = obj45246_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45522_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45522_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45522").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45522_content");
			setTimeout(function () {
				window.obj45246_droppedInsideTargetActions_runningActionsCount = window.obj45246_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj45522 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45246_droppedInsideTargetActions_runningActionsCount = window.obj45246_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45246_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45246_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45246_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45246_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj45246_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45246").trigger("obj45246_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45246) {
				console.warn("de-queueing event obj45246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45246_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67454_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67454_onTap_activeActionGroupIndex = -1;
		$("#obj67454").trigger("obj67454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67454) {
				console.warn("de-queueing event obj67454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67454_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67454 
hide_67457();
function hide_67457() {
	var selector = "#obj67454";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67454_onTap_runningActionsCount = obj67454_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67454_onTap_runningActionsCount = window.obj67454_onTap_runningActionsCount - 1;
if (window.obj67454_onTap_runningActionsCount < 0) {
	window.obj67454_onTap_runningActionsCount = 0;
} else if (window.obj67454_onTap_runningActionsCount == 0) {
	obj67454_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67457(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67454_onTap_runningActionsCount = window.obj67454_onTap_runningActionsCount - 1;
if (window.obj67454_onTap_runningActionsCount < 0) {
	window.obj67454_onTap_runningActionsCount = 0;
} else if (window.obj67454_onTap_runningActionsCount == 0) {
	obj67454_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67460 
stopMovie_67456();
function stopMovie_67456() {
	window.obj67454_onTap_runningActionsCount = obj67454_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67460")[0];
	myVideo.pause();
	window.obj67454_onTap_runningActionsCount = window.obj67454_onTap_runningActionsCount - 1;
if (window.obj67454_onTap_runningActionsCount < 0) {
	window.obj67454_onTap_runningActionsCount = 0;
} else if (window.obj67454_onTap_runningActionsCount == 0) {
	obj67454_onTap_actionGroup1();
}
}
















};
obj67454_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67454_onTap_activeActionGroupIndex = -1;
		$("#obj67454").trigger("obj67454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67454) {
				console.warn("de-queueing event obj67454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67454_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67446
(function(){
	window.obj67454_onTap_runningActionsCount = obj67454_onTap_runningActionsCount + 1;

	var selector = "#obj67446";
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
					window.obj67454_onTap_runningActionsCount = window.obj67454_onTap_runningActionsCount - 1;
if (window.obj67454_onTap_runningActionsCount < 0) {
	window.obj67454_onTap_runningActionsCount = 0;
} else if (window.obj67454_onTap_runningActionsCount == 0) {
	obj67454_onTap_actionGroup2();
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
				window.obj67454_onTap_runningActionsCount = window.obj67454_onTap_runningActionsCount - 1;
if (window.obj67454_onTap_runningActionsCount < 0) {
	window.obj67454_onTap_runningActionsCount = 0;
} else if (window.obj67454_onTap_runningActionsCount == 0) {
	obj67454_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67454_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67454_onTap_activeActionGroupIndex = -1;
		$("#obj67454").trigger("obj67454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67454) {
				console.warn("de-queueing event obj67454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67454_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67460 
move_67459();
function move_67459() {
	window.obj67454_onTap_runningActionsCount = obj67454_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67460");
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
			window.obj67454_onTap_runningActionsCount = window.obj67454_onTap_runningActionsCount - 1;
if (window.obj67454_onTap_runningActionsCount < 0) {
	window.obj67454_onTap_runningActionsCount = 0;
} else if (window.obj67454_onTap_runningActionsCount == 0) {
	obj67454_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67454_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67454_onTap_activeActionGroupIndex = -1;
		$("#obj67454").trigger("obj67454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67454) {
				console.warn("de-queueing event obj67454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67454_onTap_activeActionGroupIndex = 3;
	





















};
obj67446_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67446_onTap_activeActionGroupIndex = -1;
		$("#obj67446").trigger("obj67446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67446) {
				console.warn("de-queueing event obj67446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67446_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67446 
hide_67449();
function hide_67449() {
	var selector = "#obj67446";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67446_onTap_runningActionsCount = obj67446_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67446_onTap_runningActionsCount = window.obj67446_onTap_runningActionsCount - 1;
if (window.obj67446_onTap_runningActionsCount < 0) {
	window.obj67446_onTap_runningActionsCount = 0;
} else if (window.obj67446_onTap_runningActionsCount == 0) {
	obj67446_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67449(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67446_onTap_runningActionsCount = window.obj67446_onTap_runningActionsCount - 1;
if (window.obj67446_onTap_runningActionsCount < 0) {
	window.obj67446_onTap_runningActionsCount = 0;
} else if (window.obj67446_onTap_runningActionsCount == 0) {
	obj67446_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67460 
playPauseMovie_67448();
function playPauseMovie_67448() {
	window.obj67446_onTap_runningActionsCount = obj67446_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67460")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67446_onTap_runningActionsCount = window.obj67446_onTap_runningActionsCount - 1;
if (window.obj67446_onTap_runningActionsCount < 0) {
	window.obj67446_onTap_runningActionsCount = 0;
} else if (window.obj67446_onTap_runningActionsCount == 0) {
	obj67446_onTap_actionGroup1();
}
}

















};
obj67446_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67446_onTap_activeActionGroupIndex = -1;
		$("#obj67446").trigger("obj67446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67446) {
				console.warn("de-queueing event obj67446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67446_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67454
(function(){
	window.obj67446_onTap_runningActionsCount = obj67446_onTap_runningActionsCount + 1;

	var selector = "#obj67454";
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
					window.obj67446_onTap_runningActionsCount = window.obj67446_onTap_runningActionsCount - 1;
if (window.obj67446_onTap_runningActionsCount < 0) {
	window.obj67446_onTap_runningActionsCount = 0;
} else if (window.obj67446_onTap_runningActionsCount == 0) {
	obj67446_onTap_actionGroup2();
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
				window.obj67446_onTap_runningActionsCount = window.obj67446_onTap_runningActionsCount - 1;
if (window.obj67446_onTap_runningActionsCount < 0) {
	window.obj67446_onTap_runningActionsCount = 0;
} else if (window.obj67446_onTap_runningActionsCount == 0) {
	obj67446_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67446_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67446_onTap_activeActionGroupIndex = -1;
		$("#obj67446").trigger("obj67446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67446) {
				console.warn("de-queueing event obj67446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67446_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67460 
move_67451();
function move_67451() {
	window.obj67446_onTap_runningActionsCount = obj67446_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67460");
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
			window.obj67446_onTap_runningActionsCount = window.obj67446_onTap_runningActionsCount - 1;
if (window.obj67446_onTap_runningActionsCount < 0) {
	window.obj67446_onTap_runningActionsCount = 0;
} else if (window.obj67446_onTap_runningActionsCount == 0) {
	obj67446_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67446_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67446_onTap_activeActionGroupIndex = -1;
		$("#obj67446").trigger("obj67446_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67446) {
				console.warn("de-queueing event obj67446." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67446").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67446_onTap_activeActionGroupIndex = 3;
	





















};
obj88717_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88717_onTap_activeActionGroupIndex = -1;
		$("#obj88717").trigger("obj88717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88717) {
				console.warn("de-queueing event obj88717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88717_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88722 
stopAudio_88719();
function stopAudio_88719() {
	window.obj88717_onTap_runningActionsCount = obj88717_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88722")[0];
	myAudio.pause();
	window.obj88717_onTap_runningActionsCount = window.obj88717_onTap_runningActionsCount - 1;
if (window.obj88717_onTap_runningActionsCount < 0) {
	window.obj88717_onTap_runningActionsCount = 0;
} else if (window.obj88717_onTap_runningActionsCount == 0) {
	obj88717_onTap_actionGroup1();
}
}








};
obj88717_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88717_onTap_activeActionGroupIndex = -1;
		$("#obj88717").trigger("obj88717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88717) {
				console.warn("de-queueing event obj88717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88717_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88717 
hide_88720();
function hide_88720() {
	var selector = "#obj88717";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88717_onTap_runningActionsCount = obj88717_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88717_onTap_runningActionsCount = window.obj88717_onTap_runningActionsCount - 1;
if (window.obj88717_onTap_runningActionsCount < 0) {
	window.obj88717_onTap_runningActionsCount = 0;
} else if (window.obj88717_onTap_runningActionsCount == 0) {
	obj88717_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88720(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88717_onTap_runningActionsCount = window.obj88717_onTap_runningActionsCount - 1;
if (window.obj88717_onTap_runningActionsCount < 0) {
	window.obj88717_onTap_runningActionsCount = 0;
} else if (window.obj88717_onTap_runningActionsCount == 0) {
	obj88717_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88717_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88717_onTap_activeActionGroupIndex = -1;
		$("#obj88717").trigger("obj88717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88717) {
				console.warn("de-queueing event obj88717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88717_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88712
(function(){
	window.obj88717_onTap_runningActionsCount = obj88717_onTap_runningActionsCount + 1;

	var selector = "#obj88712";
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
					window.obj88717_onTap_runningActionsCount = window.obj88717_onTap_runningActionsCount - 1;
if (window.obj88717_onTap_runningActionsCount < 0) {
	window.obj88717_onTap_runningActionsCount = 0;
} else if (window.obj88717_onTap_runningActionsCount == 0) {
	obj88717_onTap_actionGroup3();
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
				window.obj88717_onTap_runningActionsCount = window.obj88717_onTap_runningActionsCount - 1;
if (window.obj88717_onTap_runningActionsCount < 0) {
	window.obj88717_onTap_runningActionsCount = 0;
} else if (window.obj88717_onTap_runningActionsCount == 0) {
	obj88717_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88717_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88717_onTap_activeActionGroupIndex = -1;
		$("#obj88717").trigger("obj88717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88717) {
				console.warn("de-queueing event obj88717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88717_onTap_activeActionGroupIndex = 3;
	





















};
obj88712_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88712_onTap_activeActionGroupIndex = -1;
		$("#obj88712").trigger("obj88712_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88712) {
				console.warn("de-queueing event obj88712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88712_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88712 
hide_88714();
function hide_88714() {
	var selector = "#obj88712";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88712_onTap_runningActionsCount = obj88712_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88712_onTap_runningActionsCount = window.obj88712_onTap_runningActionsCount - 1;
if (window.obj88712_onTap_runningActionsCount < 0) {
	window.obj88712_onTap_runningActionsCount = 0;
} else if (window.obj88712_onTap_runningActionsCount == 0) {
	obj88712_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88714(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88712_onTap_runningActionsCount = window.obj88712_onTap_runningActionsCount - 1;
if (window.obj88712_onTap_runningActionsCount < 0) {
	window.obj88712_onTap_runningActionsCount = 0;
} else if (window.obj88712_onTap_runningActionsCount == 0) {
	obj88712_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88712_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88712_onTap_activeActionGroupIndex = -1;
		$("#obj88712").trigger("obj88712_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88712) {
				console.warn("de-queueing event obj88712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88712_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88717
(function(){
	window.obj88712_onTap_runningActionsCount = obj88712_onTap_runningActionsCount + 1;

	var selector = "#obj88717";
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
					window.obj88712_onTap_runningActionsCount = window.obj88712_onTap_runningActionsCount - 1;
if (window.obj88712_onTap_runningActionsCount < 0) {
	window.obj88712_onTap_runningActionsCount = 0;
} else if (window.obj88712_onTap_runningActionsCount == 0) {
	obj88712_onTap_actionGroup2();
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
				window.obj88712_onTap_runningActionsCount = window.obj88712_onTap_runningActionsCount - 1;
if (window.obj88712_onTap_runningActionsCount < 0) {
	window.obj88712_onTap_runningActionsCount = 0;
} else if (window.obj88712_onTap_runningActionsCount == 0) {
	obj88712_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88712_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88712_onTap_activeActionGroupIndex = -1;
		$("#obj88712").trigger("obj88712_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88712) {
				console.warn("de-queueing event obj88712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88712_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88722 
playAudio_88716();
function playAudio_88716() {
	window.obj88712_onTap_runningActionsCount = obj88712_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88722")[0];
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
		    window.obj88712_onTap_runningActionsCount = window.obj88712_onTap_runningActionsCount - 1;
if (window.obj88712_onTap_runningActionsCount < 0) {
	window.obj88712_onTap_runningActionsCount = 0;
} else if (window.obj88712_onTap_runningActionsCount == 0) {
	obj88712_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88712_onTap_runningActionsCount = window.obj88712_onTap_runningActionsCount - 1;
if (window.obj88712_onTap_runningActionsCount < 0) {
	window.obj88712_onTap_runningActionsCount = 0;
} else if (window.obj88712_onTap_runningActionsCount == 0) {
	obj88712_onTap_actionGroup3();
}
	}
}









};
obj88712_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88712_onTap_activeActionGroupIndex = -1;
		$("#obj88712").trigger("obj88712_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88712) {
				console.warn("de-queueing event obj88712." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88712").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88712_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj45563: Event Touch Down
 *
 */
$("#obj45563").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45563_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45563_onTap is still running");
	return;
}
var obj45563_onTap_runningActionsCount = 0;
var obj45563_onTap_loopCount = 0;
obj45563_onTap_actionGroup0();
});










/*
 *
 *   obj45560: Event Touch Down
 *
 */
$("#obj45560").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45560_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45560_onTap is still running");
	return;
}
var obj45560_onTap_runningActionsCount = 0;
var obj45560_onTap_loopCount = 0;
obj45560_onTap_actionGroup0();
});










/*
 *
 *   obj45556: Event Touch Down
 *
 */
$("#obj45556").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45556_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45556_onTap is still running");
	return;
}
var obj45556_onTap_runningActionsCount = 0;
var obj45556_onTap_loopCount = 0;
obj45556_onTap_actionGroup0();
});





























































































































































































































/*
 *
 *   obj45447: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45447");
	var winTarget = document.getElementById("obj45447");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45447").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45447_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45447_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45447_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45447_onTouchDown is still running");
	return;
}
var obj45447_onTouchDown_runningActionsCount = 0;
var obj45447_onTouchDown_loopCount = 0;
obj45447_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45447: Event SCActionDragDrop45450_droppedOutsideTargetActions
 *
 */
$("#obj45447").bind("SCActionDragDrop45450_droppedOutsideTargetActions", function(event) {
	if (window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45447_SCActionDragDrop45450_droppedOutsideTargetActions is still running");
	return;
}
var obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_loopCount = 0;
obj45447_SCActionDragDrop45450_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45447: Event droppedInsideTargetActions_4
 *
 */
$("#obj45447").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj45447_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45447_droppedInsideTargetActions_4 is still running");
	return;
}
var obj45447_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45447_droppedInsideTargetActions_4_loopCount = 0;
obj45447_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj45447: Event droppedInsideTargetActions_3
 *
 */
$("#obj45447").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj45447_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45447_droppedInsideTargetActions_3 is still running");
	return;
}
var obj45447_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45447_droppedInsideTargetActions_3_loopCount = 0;
obj45447_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj45447: Event droppedInsideTargetActions_2
 *
 */
$("#obj45447").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj45447_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45447_droppedInsideTargetActions_2 is still running");
	return;
}
var obj45447_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45447_droppedInsideTargetActions_2_loopCount = 0;
obj45447_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj45447: Event droppedInsideTargetActions
 *
 */
$("#obj45447").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45447_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45447_droppedInsideTargetActions is still running");
	return;
}
var obj45447_droppedInsideTargetActions_runningActionsCount = 0;
var obj45447_droppedInsideTargetActions_loopCount = 0;
obj45447_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj45380: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45380");
	var winTarget = document.getElementById("obj45380");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45380").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45380_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45380_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45380_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45380_onTouchDown is still running");
	return;
}
var obj45380_onTouchDown_runningActionsCount = 0;
var obj45380_onTouchDown_loopCount = 0;
obj45380_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45380: Event SCActionDragDrop45383_droppedOutsideTargetActions
 *
 */
$("#obj45380").bind("SCActionDragDrop45383_droppedOutsideTargetActions", function(event) {
	if (window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45380_SCActionDragDrop45383_droppedOutsideTargetActions is still running");
	return;
}
var obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_loopCount = 0;
obj45380_SCActionDragDrop45383_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45380: Event droppedInsideTargetActions_4
 *
 */
$("#obj45380").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj45380_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45380_droppedInsideTargetActions_4 is still running");
	return;
}
var obj45380_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45380_droppedInsideTargetActions_4_loopCount = 0;
obj45380_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj45380: Event droppedInsideTargetActions_3
 *
 */
$("#obj45380").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj45380_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45380_droppedInsideTargetActions_3 is still running");
	return;
}
var obj45380_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45380_droppedInsideTargetActions_3_loopCount = 0;
obj45380_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj45380: Event droppedInsideTargetActions_2
 *
 */
$("#obj45380").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj45380_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45380_droppedInsideTargetActions_2 is still running");
	return;
}
var obj45380_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45380_droppedInsideTargetActions_2_loopCount = 0;
obj45380_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj45380: Event droppedInsideTargetActions
 *
 */
$("#obj45380").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45380_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45380_droppedInsideTargetActions is still running");
	return;
}
var obj45380_droppedInsideTargetActions_runningActionsCount = 0;
var obj45380_droppedInsideTargetActions_loopCount = 0;
obj45380_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj45313: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45313");
	var winTarget = document.getElementById("obj45313");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45313").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45313_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45313_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45313_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45313_onTouchDown is still running");
	return;
}
var obj45313_onTouchDown_runningActionsCount = 0;
var obj45313_onTouchDown_loopCount = 0;
obj45313_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45313: Event SCActionDragDrop45316_droppedOutsideTargetActions
 *
 */
$("#obj45313").bind("SCActionDragDrop45316_droppedOutsideTargetActions", function(event) {
	if (window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45313_SCActionDragDrop45316_droppedOutsideTargetActions is still running");
	return;
}
var obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_loopCount = 0;
obj45313_SCActionDragDrop45316_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45313: Event droppedInsideTargetActions_4
 *
 */
$("#obj45313").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj45313_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45313_droppedInsideTargetActions_4 is still running");
	return;
}
var obj45313_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45313_droppedInsideTargetActions_4_loopCount = 0;
obj45313_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj45313: Event droppedInsideTargetActions_3
 *
 */
$("#obj45313").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj45313_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45313_droppedInsideTargetActions_3 is still running");
	return;
}
var obj45313_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45313_droppedInsideTargetActions_3_loopCount = 0;
obj45313_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj45313: Event droppedInsideTargetActions_2
 *
 */
$("#obj45313").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj45313_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45313_droppedInsideTargetActions_2 is still running");
	return;
}
var obj45313_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45313_droppedInsideTargetActions_2_loopCount = 0;
obj45313_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj45313: Event droppedInsideTargetActions
 *
 */
$("#obj45313").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45313_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45313_droppedInsideTargetActions is still running");
	return;
}
var obj45313_droppedInsideTargetActions_runningActionsCount = 0;
var obj45313_droppedInsideTargetActions_loopCount = 0;
obj45313_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj45246: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45246");
	var winTarget = document.getElementById("obj45246");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45246").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45246_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45246_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45246_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45246_onTouchDown is still running");
	return;
}
var obj45246_onTouchDown_runningActionsCount = 0;
var obj45246_onTouchDown_loopCount = 0;
obj45246_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45246: Event SCActionDragDrop45249_droppedOutsideTargetActions
 *
 */
$("#obj45246").bind("SCActionDragDrop45249_droppedOutsideTargetActions", function(event) {
	if (window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45246_SCActionDragDrop45249_droppedOutsideTargetActions is still running");
	return;
}
var obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_loopCount = 0;
obj45246_SCActionDragDrop45249_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45246: Event droppedInsideTargetActions_4
 *
 */
$("#obj45246").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj45246_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45246_droppedInsideTargetActions_4 is still running");
	return;
}
var obj45246_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45246_droppedInsideTargetActions_4_loopCount = 0;
obj45246_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj45246: Event droppedInsideTargetActions_3
 *
 */
$("#obj45246").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj45246_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45246_droppedInsideTargetActions_3 is still running");
	return;
}
var obj45246_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45246_droppedInsideTargetActions_3_loopCount = 0;
obj45246_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj45246: Event droppedInsideTargetActions_2
 *
 */
$("#obj45246").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj45246_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45246_droppedInsideTargetActions_2 is still running");
	return;
}
var obj45246_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45246_droppedInsideTargetActions_2_loopCount = 0;
obj45246_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj45246: Event droppedInsideTargetActions
 *
 */
$("#obj45246").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45246_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45246_droppedInsideTargetActions is still running");
	return;
}
var obj45246_droppedInsideTargetActions_runningActionsCount = 0;
var obj45246_droppedInsideTargetActions_loopCount = 0;
obj45246_droppedInsideTargetActions_actionGroup0();
});













































/*
 *
 *   obj67454: Event Touch Down
 *
 */
$("#obj67454").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67454_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67454_onTap is still running");
	return;
}
var obj67454_onTap_runningActionsCount = 0;
var obj67454_onTap_loopCount = 0;
obj67454_onTap_actionGroup0();
});










/*
 *
 *   obj67446: Event Touch Down
 *
 */
$("#obj67446").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67446_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67446_onTap is still running");
	return;
}
var obj67446_onTap_runningActionsCount = 0;
var obj67446_onTap_loopCount = 0;
obj67446_onTap_actionGroup0();
});










/*
 *
 *   obj88717: Event Touch Down
 *
 */
$("#obj88717").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88717_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88717_onTap is still running");
	return;
}
var obj88717_onTap_runningActionsCount = 0;
var obj88717_onTap_loopCount = 0;
obj88717_onTap_actionGroup0();
});










/*
 *
 *   obj88712: Event Touch Down
 *
 */
$("#obj88712").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88712_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88712_onTap is still running");
	return;
}
var obj88712_onTap_runningActionsCount = 0;
var obj88712_onTap_loopCount = 0;
obj88712_onTap_actionGroup0();
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
	
$("#obj45579").trigger('SCEventShow');
$("#obj45563").trigger('SCEventShow');
$("#obj45560").trigger('SCEventShow');
$("#obj45556").trigger('SCEventShow');
$("#obj45554").trigger('SCEventShow');
$("#obj45552").trigger('SCEventShow');
$("#obj45550").trigger('SCEventShow');
$("#obj45548").trigger('SCEventShow');
$("#obj45546").trigger('SCEventShow');
$("#obj45544").trigger('SCEventShow');
$("#obj45542").trigger('SCEventShow');
$("#obj45540").trigger('SCEventShow');
$("#obj45538").trigger('SCEventShow');
$("#obj45536").trigger('SCEventShow');
$("#obj45534").trigger('SCEventShow');
$("#obj45532").trigger('SCEventShow');
$("#obj45530").trigger('SCEventShow');
$("#obj45528").trigger('SCEventShow');
$("#obj45526").trigger('SCEventShow');
$("#obj45524").trigger('SCEventShow');
$("#obj45522").trigger('SCEventShow');
$("#obj45520").trigger('SCEventShow');
$("#obj45518").trigger('SCEventShow');
$("#obj45516").trigger('SCEventShow');
$("#obj45514").trigger('SCEventShow');
$("#obj45447").trigger('SCEventShow');
$("#obj45380").trigger('SCEventShow');
$("#obj45313").trigger('SCEventShow');
$("#obj45246").trigger('SCEventShow');
$("#obj45583").trigger('SCEventShow');
$("#obj45581").trigger('SCEventShow');
$("#obj45585").trigger('SCEventShow');
$("#obj45587").trigger('SCEventShow');
$("#obj67454").trigger('SCEventShow');
$("#obj67446").trigger('SCEventShow');
$("#obj88717").trigger('SCEventShow');
$("#obj88712").trigger('SCEventShow');
$("#obj88722").trigger('SCEventShow');
$("#obj94935").trigger('SCEventShow');
$("#obj67460").trigger('SCEventShow');
	
});