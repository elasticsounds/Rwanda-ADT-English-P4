pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 43779;
pubcoder.page.title = pubcoder.page.title || "151";
pubcoder.page.number = pubcoder.page.number || 151;
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
var obj44244_onTap_activeActionGroupIndex = -1;
var obj44244_onTap_runningActionsCount = 0;
var obj44244_onTap_loopCount = 0;
var obj44241_onTap_activeActionGroupIndex = -1;
var obj44241_onTap_runningActionsCount = 0;
var obj44241_onTap_loopCount = 0;
var obj44237_onTap_activeActionGroupIndex = -1;
var obj44237_onTap_runningActionsCount = 0;
var obj44237_onTap_loopCount = 0;
var obj44122_onDrag_activeActionGroupIndex = -1;
var obj44122_onDrag_runningActionsCount = 0;
var obj44122_onDrag_loopCount = 0;
var obj44122_onTouchDown_activeActionGroupIndex = -1;
var obj44122_onTouchDown_runningActionsCount = 0;
var obj44122_onTouchDown_loopCount = 0;
var obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_loopCount = 0;
var obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44122_droppedInsideTargetActions_5_loopCount = 0;
var obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44122_droppedInsideTargetActions_4_loopCount = 0;
var obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44122_droppedInsideTargetActions_3_loopCount = 0;
var obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44122_droppedInsideTargetActions_2_loopCount = 0;
var obj44122_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj44122_droppedInsideTargetActions_runningActionsCount = 0;
var obj44122_droppedInsideTargetActions_loopCount = 0;
var obj44055_onDrag_activeActionGroupIndex = -1;
var obj44055_onDrag_runningActionsCount = 0;
var obj44055_onDrag_loopCount = 0;
var obj44055_onTouchDown_activeActionGroupIndex = -1;
var obj44055_onTouchDown_runningActionsCount = 0;
var obj44055_onTouchDown_loopCount = 0;
var obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_loopCount = 0;
var obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44055_droppedInsideTargetActions_5_loopCount = 0;
var obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44055_droppedInsideTargetActions_4_loopCount = 0;
var obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44055_droppedInsideTargetActions_3_loopCount = 0;
var obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44055_droppedInsideTargetActions_2_loopCount = 0;
var obj44055_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj44055_droppedInsideTargetActions_runningActionsCount = 0;
var obj44055_droppedInsideTargetActions_loopCount = 0;
var obj43914_onDrag_activeActionGroupIndex = -1;
var obj43914_onDrag_runningActionsCount = 0;
var obj43914_onDrag_loopCount = 0;
var obj43914_onTouchDown_activeActionGroupIndex = -1;
var obj43914_onTouchDown_runningActionsCount = 0;
var obj43914_onTouchDown_loopCount = 0;
var obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_loopCount = 0;
var obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj43914_droppedInsideTargetActions_5_loopCount = 0;
var obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43914_droppedInsideTargetActions_4_loopCount = 0;
var obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43914_droppedInsideTargetActions_3_loopCount = 0;
var obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43914_droppedInsideTargetActions_2_loopCount = 0;
var obj43914_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj43914_droppedInsideTargetActions_runningActionsCount = 0;
var obj43914_droppedInsideTargetActions_loopCount = 0;
var obj43847_onDrag_activeActionGroupIndex = -1;
var obj43847_onDrag_runningActionsCount = 0;
var obj43847_onDrag_loopCount = 0;
var obj43847_onTouchDown_activeActionGroupIndex = -1;
var obj43847_onTouchDown_runningActionsCount = 0;
var obj43847_onTouchDown_loopCount = 0;
var obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_loopCount = 0;
var obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj43847_droppedInsideTargetActions_5_loopCount = 0;
var obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43847_droppedInsideTargetActions_4_loopCount = 0;
var obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43847_droppedInsideTargetActions_3_loopCount = 0;
var obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43847_droppedInsideTargetActions_2_loopCount = 0;
var obj43847_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj43847_droppedInsideTargetActions_runningActionsCount = 0;
var obj43847_droppedInsideTargetActions_loopCount = 0;
var obj43780_onDrag_activeActionGroupIndex = -1;
var obj43780_onDrag_runningActionsCount = 0;
var obj43780_onDrag_loopCount = 0;
var obj43780_onTouchDown_activeActionGroupIndex = -1;
var obj43780_onTouchDown_runningActionsCount = 0;
var obj43780_onTouchDown_loopCount = 0;
var obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_loopCount = 0;
var obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj43780_droppedInsideTargetActions_5_loopCount = 0;
var obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43780_droppedInsideTargetActions_4_loopCount = 0;
var obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43780_droppedInsideTargetActions_3_loopCount = 0;
var obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43780_droppedInsideTargetActions_2_loopCount = 0;
var obj43780_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj43780_droppedInsideTargetActions_runningActionsCount = 0;
var obj43780_droppedInsideTargetActions_loopCount = 0;
var obj67422_onTap_activeActionGroupIndex = -1;
var obj67422_onTap_runningActionsCount = 0;
var obj67422_onTap_loopCount = 0;
var obj67414_onTap_activeActionGroupIndex = -1;
var obj67414_onTap_runningActionsCount = 0;
var obj67414_onTap_loopCount = 0;
var obj88693_onTap_activeActionGroupIndex = -1;
var obj88693_onTap_runningActionsCount = 0;
var obj88693_onTap_loopCount = 0;
var obj88688_onTap_activeActionGroupIndex = -1;
var obj88688_onTap_runningActionsCount = 0;
var obj88688_onTap_loopCount = 0;
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
		
obj44244_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44244_onTap_activeActionGroupIndex = -1;
		$("#obj44244").trigger("obj44244_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44244) {
				console.warn("de-queueing event obj44244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44244_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_44246();
function goToPage_44246() {
	window.obj44244_onTap_runningActionsCount = obj44244_onTap_runningActionsCount + 1;
	$("#anchor890")[0].click();
	window.obj44244_onTap_runningActionsCount = window.obj44244_onTap_runningActionsCount - 1;
if (window.obj44244_onTap_runningActionsCount < 0) {
	window.obj44244_onTap_runningActionsCount = 0;
} else if (window.obj44244_onTap_runningActionsCount == 0) {
	obj44244_onTap_actionGroup1();
}
}





















};
obj44244_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44244_onTap_activeActionGroupIndex = -1;
		$("#obj44244").trigger("obj44244_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44244) {
				console.warn("de-queueing event obj44244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44244_onTap_activeActionGroupIndex = 1;
	





















};
obj44241_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44241_onTap_activeActionGroupIndex = -1;
		$("#obj44241").trigger("obj44241_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44241) {
				console.warn("de-queueing event obj44241." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44241").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44241_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_44243();
function goToPage_44243() {
	window.obj44241_onTap_runningActionsCount = obj44241_onTap_runningActionsCount + 1;
	$("#anchor891")[0].click();
	window.obj44241_onTap_runningActionsCount = window.obj44241_onTap_runningActionsCount - 1;
if (window.obj44241_onTap_runningActionsCount < 0) {
	window.obj44241_onTap_runningActionsCount = 0;
} else if (window.obj44241_onTap_runningActionsCount == 0) {
	obj44241_onTap_actionGroup1();
}
}





















};
obj44241_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44241_onTap_activeActionGroupIndex = -1;
		$("#obj44241").trigger("obj44241_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44241) {
				console.warn("de-queueing event obj44241." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44241").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44241_onTap_activeActionGroupIndex = 1;
	





















};
obj44237_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44237_onTap_activeActionGroupIndex = -1;
		$("#obj44237").trigger("obj44237_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44237) {
				console.warn("de-queueing event obj44237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44237_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_44239();
function goToPage_44239() {
	window.obj44237_onTap_runningActionsCount = obj44237_onTap_runningActionsCount + 1;
	$("#anchor892")[0].click();
	window.obj44237_onTap_runningActionsCount = window.obj44237_onTap_runningActionsCount - 1;
if (window.obj44237_onTap_runningActionsCount < 0) {
	window.obj44237_onTap_runningActionsCount = 0;
} else if (window.obj44237_onTap_runningActionsCount == 0) {
	obj44237_onTap_actionGroup1();
}
}





















};
obj44237_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44237_onTap_activeActionGroupIndex = -1;
		$("#obj44237").trigger("obj44237_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44237) {
				console.warn("de-queueing event obj44237." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44237").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44237_onTap_activeActionGroupIndex = 1;
	





















};
obj44122_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj44122");
//	action: dragDrop
//	target: obj44122 
dragDrop_44125();
function dragDrop_44125() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj44122_onTouchDown_runningActionsCount = obj44122_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj44122');
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
	  	containerNode = $('#obj44227');
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
    	window.obj44122_onTouchDown_runningActionsCount = window.obj44122_onTouchDown_runningActionsCount - 1;
if (window.obj44122_onTouchDown_runningActionsCount < 0) {
	window.obj44122_onTouchDown_runningActionsCount = 0;
} else if (window.obj44122_onTouchDown_runningActionsCount == 0) {
	obj44122_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj44217","#obj44223","#obj44221","#obj44219","#obj44199");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_44125 = false;
    	var dropped_id_44125;
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
					dropped_44125 = true;
					dropped_id_44125 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_44125) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj44122").trigger('SCActionDragDrop44125_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj44122_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44122_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj44122 
move_92657();
function move_92657() {
	window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_runningActionsCount = obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj44122");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 397;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_runningActionsCount = window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj44122_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44176();
function runjs_44176() {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44177();
function runjs_44177() {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("border-color", "#C00000"); $("#obj44199").css("border-width", "2px"); $("#obj44199").css("border-style", "solid"); $("#obj44199").css("border-radius", "10px"); $("#obj44199").css("-webkit-border-radius", "10px"); $("#obj44199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44197 
hide_44178();
function hide_44178() {
	var selector = "#obj44197";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_44178(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj44122_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44179();
function runjs_44179() {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44122").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_44180();
function switchText_44180() {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj44122_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj44122 
move_44181();
function move_44181() {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj44122");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 397;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj44122_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44182();
function runjs_44182() {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44183();
function runjs_44183() {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("border-color", "#000000"); $("#obj44199").css("border-width", "1px"); $("#obj44199").css("border-style", "solid"); $("#obj44199").css("border-radius", "10px"); $("#obj44199").css("-webkit-border-radius", "10px"); $("#obj44199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44197
(function(){
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj44197";
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
					window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj44122_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_44185();
function runjs_44185() {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44122").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_44186();
function runjs_44186() {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44122").css("border-color", "rgba(0,0,0,0)"); $("#obj44122").css("border-width", "0px"); $("#obj44122").css("border-style", "solid"); $("#obj44122").css("border-radius", "10px"); $("#obj44122").css("-webkit-border-radius", "10px"); $("#obj44122").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_44187();
function playAudio_44187() {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj44122_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_44188();
function switchText_44188() {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = obj44122_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44122_droppedInsideTargetActions_5_runningActionsCount = window.obj44122_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj44122_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj44122_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44162();
function runjs_44162() {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44219").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44163();
function runjs_44163() {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44219").css("border-color", "#C00000"); $("#obj44219").css("border-width", "2px"); $("#obj44219").css("border-style", "solid"); $("#obj44219").css("border-radius", "10px"); $("#obj44219").css("-webkit-border-radius", "10px"); $("#obj44219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44211 
hide_44164();
function hide_44164() {
	var selector = "#obj44211";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_44164(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj44122_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44165();
function runjs_44165() {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44122").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_44166();
function switchText_44166() {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj44122_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj44122 
move_44167();
function move_44167() {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj44122");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 397;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj44122_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44168();
function runjs_44168() {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44219").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44169();
function runjs_44169() {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44219").css("border-color", "#000000"); $("#obj44219").css("border-width", "1px"); $("#obj44219").css("border-style", "solid"); $("#obj44219").css("border-radius", "10px"); $("#obj44219").css("-webkit-border-radius", "10px"); $("#obj44219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44211
(function(){
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj44211";
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
					window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj44122_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_44171();
function runjs_44171() {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44122").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_44172();
function runjs_44172() {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44122").css("border-color", "rgba(0,0,0,0)"); $("#obj44122").css("border-width", "0px"); $("#obj44122").css("border-style", "solid"); $("#obj44122").css("border-radius", "10px"); $("#obj44122").css("-webkit-border-radius", "10px"); $("#obj44122").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_44173();
function playAudio_44173() {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj44122_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_44174();
function switchText_44174() {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = obj44122_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44122_droppedInsideTargetActions_4_runningActionsCount = window.obj44122_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj44122_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj44122_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44148();
function runjs_44148() {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44149();
function runjs_44149() {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("border-color", "#C00000"); $("#obj44221").css("border-width", "2px"); $("#obj44221").css("border-style", "solid"); $("#obj44221").css("border-radius", "10px"); $("#obj44221").css("-webkit-border-radius", "10px"); $("#obj44221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44213 
hide_44150();
function hide_44150() {
	var selector = "#obj44213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_44150(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj44122_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44151();
function runjs_44151() {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44122").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_44152();
function switchText_44152() {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj44122_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj44122 
move_44153();
function move_44153() {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj44122");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 397;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj44122_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44154();
function runjs_44154() {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44155();
function runjs_44155() {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("border-color", "#000000"); $("#obj44221").css("border-width", "1px"); $("#obj44221").css("border-style", "solid"); $("#obj44221").css("border-radius", "10px"); $("#obj44221").css("-webkit-border-radius", "10px"); $("#obj44221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44213
(function(){
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj44213";
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
					window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj44122_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_44157();
function runjs_44157() {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44122").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_44158();
function runjs_44158() {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44122").css("border-color", "rgba(0,0,0,0)"); $("#obj44122").css("border-width", "0px"); $("#obj44122").css("border-style", "solid"); $("#obj44122").css("border-radius", "10px"); $("#obj44122").css("-webkit-border-radius", "10px"); $("#obj44122").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_44159();
function playAudio_44159() {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj44122_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_44160();
function switchText_44160() {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = obj44122_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44122_droppedInsideTargetActions_3_runningActionsCount = window.obj44122_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj44122_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj44122_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44134();
function runjs_44134() {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44135();
function runjs_44135() {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("border-color", "#C00000"); $("#obj44223").css("border-width", "2px"); $("#obj44223").css("border-style", "solid"); $("#obj44223").css("border-radius", "10px"); $("#obj44223").css("-webkit-border-radius", "10px"); $("#obj44223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44215 
hide_44136();
function hide_44136() {
	var selector = "#obj44215";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_44136(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj44122_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44137();
function runjs_44137() {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44122").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_44138();
function switchText_44138() {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj44122_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj44122 
move_44139();
function move_44139() {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj44122");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 397;
	var moveY = 605;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj44122_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44140();
function runjs_44140() {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44141();
function runjs_44141() {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("border-color", "#000000"); $("#obj44223").css("border-width", "1px"); $("#obj44223").css("border-style", "solid"); $("#obj44223").css("border-radius", "10px"); $("#obj44223").css("-webkit-border-radius", "10px"); $("#obj44223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44215
(function(){
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj44215";
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
					window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj44122_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_44143();
function runjs_44143() {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44122").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_44144();
function runjs_44144() {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44122").css("border-color", "rgba(0,0,0,0)"); $("#obj44122").css("border-width", "0px"); $("#obj44122").css("border-style", "solid"); $("#obj44122").css("border-radius", "10px"); $("#obj44122").css("-webkit-border-radius", "10px"); $("#obj44122").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_44145();
function playAudio_44145() {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj44122_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_44146();
function switchText_44146() {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = obj44122_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44122_droppedInsideTargetActions_2_runningActionsCount = window.obj44122_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj44122_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj44122_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44127();
function runjs_44127() {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = obj44122_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44217").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_runningActionsCount = window.obj44122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44131();
function switchText_44131() {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = obj44122_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44122_droppedInsideTargetActions_runningActionsCount = window.obj44122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44122_droppedInsideTargetActions_runningActionsCount = window.obj44122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj44122_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44128();
function runjs_44128() {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = obj44122_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44217").css("border-color", "#058E3F"); $("#obj44217").css("border-width", "2px"); $("#obj44217").css("border-style", "solid"); $("#obj44217").css("border-radius", "10px"); $("#obj44217").css("-webkit-border-radius", "10px"); $("#obj44217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_runningActionsCount = window.obj44122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj44209 
hide_44129();
function hide_44129() {
	var selector = "#obj44209";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj44122_droppedInsideTargetActions_runningActionsCount = obj44122_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj44122_droppedInsideTargetActions_runningActionsCount = window.obj44122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_44129(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj44122_droppedInsideTargetActions_runningActionsCount = window.obj44122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj44122_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_44130();
function runjs_44130() {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = obj44122_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44122").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44122_droppedInsideTargetActions_runningActionsCount = window.obj44122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj44122_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj44205 
playAudio_44132();
function playAudio_44132() {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = obj44122_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj44205")[0];
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
		    window.obj44122_droppedInsideTargetActions_runningActionsCount = window.obj44122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44122_droppedInsideTargetActions_runningActionsCount = window.obj44122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj44122_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90552();
function switchText_90552() {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = obj44122_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44122_droppedInsideTargetActions_runningActionsCount = window.obj44122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44122_droppedInsideTargetActions_runningActionsCount = window.obj44122_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44122_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44122_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44122_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44122_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj44122_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44122").trigger("obj44122_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44122) {
				console.warn("de-queueing event obj44122." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44122").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44122_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj44055_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj44055");
//	action: dragDrop
//	target: obj44055 
dragDrop_44058();
function dragDrop_44058() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj44055_onTouchDown_runningActionsCount = obj44055_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj44055');
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
	  	containerNode = $('#obj44227');
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
    	window.obj44055_onTouchDown_runningActionsCount = window.obj44055_onTouchDown_runningActionsCount - 1;
if (window.obj44055_onTouchDown_runningActionsCount < 0) {
	window.obj44055_onTouchDown_runningActionsCount = 0;
} else if (window.obj44055_onTouchDown_runningActionsCount == 0) {
	obj44055_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj44219","#obj44223","#obj44221","#obj44217","#obj44199");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_44058 = false;
    	var dropped_id_44058;
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
					dropped_44058 = true;
					dropped_id_44058 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_44058) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj44055").trigger('SCActionDragDrop44058_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj44055_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44055_onTouchDown_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj44055 
move_92653();
function move_92653() {
	window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_runningActionsCount = obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj44055");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 237;
	var moveY = 580;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_runningActionsCount = window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj44055_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44109();
function runjs_44109() {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44110();
function runjs_44110() {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("border-color", "#C00000"); $("#obj44199").css("border-width", "2px"); $("#obj44199").css("border-style", "solid"); $("#obj44199").css("border-radius", "10px"); $("#obj44199").css("-webkit-border-radius", "10px"); $("#obj44199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44197 
hide_44111();
function hide_44111() {
	var selector = "#obj44197";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_44111(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj44055_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44112();
function runjs_44112() {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44055").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_44113();
function switchText_44113() {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj44055_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj44055 
move_44114();
function move_44114() {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj44055");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 237;
	var moveY = 580;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj44055_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44115();
function runjs_44115() {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44116();
function runjs_44116() {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("border-color", "#000000"); $("#obj44199").css("border-width", "1px"); $("#obj44199").css("border-style", "solid"); $("#obj44199").css("border-radius", "10px"); $("#obj44199").css("-webkit-border-radius", "10px"); $("#obj44199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44197
(function(){
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj44197";
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
					window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj44055_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_44118();
function runjs_44118() {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44055").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_44119();
function runjs_44119() {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44055").css("border-color", "rgba(0,0,0,0)"); $("#obj44055").css("border-width", "0px"); $("#obj44055").css("border-style", "solid"); $("#obj44055").css("border-radius", "10px"); $("#obj44055").css("-webkit-border-radius", "10px"); $("#obj44055").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_44120();
function playAudio_44120() {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj44055_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_44121();
function switchText_44121() {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = obj44055_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44055_droppedInsideTargetActions_5_runningActionsCount = window.obj44055_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj44055_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj44055_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44095();
function runjs_44095() {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44096();
function runjs_44096() {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("border-color", "#C00000"); $("#obj44217").css("border-width", "2px"); $("#obj44217").css("border-style", "solid"); $("#obj44217").css("border-radius", "10px"); $("#obj44217").css("-webkit-border-radius", "10px"); $("#obj44217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44209 
hide_44097();
function hide_44097() {
	var selector = "#obj44209";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_44097(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj44055_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44098();
function runjs_44098() {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44055").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_44099();
function switchText_44099() {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj44055_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj44055 
move_44100();
function move_44100() {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj44055");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 237;
	var moveY = 580;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj44055_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44101();
function runjs_44101() {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44102();
function runjs_44102() {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("border-color", "#000000"); $("#obj44217").css("border-width", "1px"); $("#obj44217").css("border-style", "solid"); $("#obj44217").css("border-radius", "10px"); $("#obj44217").css("-webkit-border-radius", "10px"); $("#obj44217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44209
(function(){
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj44209";
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
					window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj44055_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_44104();
function runjs_44104() {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44055").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_44105();
function runjs_44105() {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44055").css("border-color", "rgba(0,0,0,0)"); $("#obj44055").css("border-width", "0px"); $("#obj44055").css("border-style", "solid"); $("#obj44055").css("border-radius", "10px"); $("#obj44055").css("-webkit-border-radius", "10px"); $("#obj44055").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_44106();
function playAudio_44106() {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj44055_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_44107();
function switchText_44107() {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = obj44055_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44055_droppedInsideTargetActions_4_runningActionsCount = window.obj44055_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj44055_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj44055_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44081();
function runjs_44081() {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44082();
function runjs_44082() {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("border-color", "#C00000"); $("#obj44221").css("border-width", "2px"); $("#obj44221").css("border-style", "solid"); $("#obj44221").css("border-radius", "10px"); $("#obj44221").css("-webkit-border-radius", "10px"); $("#obj44221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44213 
hide_44083();
function hide_44083() {
	var selector = "#obj44213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_44083(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj44055_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44084();
function runjs_44084() {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44055").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_44085();
function switchText_44085() {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj44055_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj44055 
move_44086();
function move_44086() {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj44055");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 237;
	var moveY = 580;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj44055_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44087();
function runjs_44087() {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44088();
function runjs_44088() {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("border-color", "#000000"); $("#obj44221").css("border-width", "1px"); $("#obj44221").css("border-style", "solid"); $("#obj44221").css("border-radius", "10px"); $("#obj44221").css("-webkit-border-radius", "10px"); $("#obj44221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44213
(function(){
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj44213";
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
					window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj44055_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_44090();
function runjs_44090() {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44055").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_44091();
function runjs_44091() {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44055").css("border-color", "rgba(0,0,0,0)"); $("#obj44055").css("border-width", "0px"); $("#obj44055").css("border-style", "solid"); $("#obj44055").css("border-radius", "10px"); $("#obj44055").css("-webkit-border-radius", "10px"); $("#obj44055").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_44092();
function playAudio_44092() {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj44055_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_44093();
function switchText_44093() {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = obj44055_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44055_droppedInsideTargetActions_3_runningActionsCount = window.obj44055_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj44055_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj44055_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44067();
function runjs_44067() {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_44068();
function runjs_44068() {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("border-color", "#C00000"); $("#obj44223").css("border-width", "2px"); $("#obj44223").css("border-style", "solid"); $("#obj44223").css("border-radius", "10px"); $("#obj44223").css("-webkit-border-radius", "10px"); $("#obj44223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44215 
hide_44069();
function hide_44069() {
	var selector = "#obj44215";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_44069(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj44055_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_44070();
function runjs_44070() {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44055").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_44071();
function switchText_44071() {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj44055_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj44055 
move_44072();
function move_44072() {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj44055");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 237;
	var moveY = 580;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj44055_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_44073();
function runjs_44073() {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_44074();
function runjs_44074() {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("border-color", "#000000"); $("#obj44223").css("border-width", "1px"); $("#obj44223").css("border-style", "solid"); $("#obj44223").css("border-radius", "10px"); $("#obj44223").css("-webkit-border-radius", "10px"); $("#obj44223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44215
(function(){
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj44215";
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
					window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj44055_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_44076();
function runjs_44076() {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44055").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_44077();
function runjs_44077() {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44055").css("border-color", "rgba(0,0,0,0)"); $("#obj44055").css("border-width", "0px"); $("#obj44055").css("border-style", "solid"); $("#obj44055").css("border-radius", "10px"); $("#obj44055").css("-webkit-border-radius", "10px"); $("#obj44055").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_44078();
function playAudio_44078() {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj44055_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_44079();
function switchText_44079() {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = obj44055_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44055_droppedInsideTargetActions_2_runningActionsCount = window.obj44055_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj44055_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj44055_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_44060();
function runjs_44060() {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = obj44055_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44219").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_runningActionsCount = window.obj44055_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_44064();
function switchText_44064() {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = obj44055_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44055_droppedInsideTargetActions_runningActionsCount = window.obj44055_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44055_droppedInsideTargetActions_runningActionsCount = window.obj44055_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj44055_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_44061();
function runjs_44061() {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = obj44055_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44219").css("border-color", "#058E3F"); $("#obj44219").css("border-width", "2px"); $("#obj44219").css("border-style", "solid"); $("#obj44219").css("border-radius", "10px"); $("#obj44219").css("-webkit-border-radius", "10px"); $("#obj44219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_runningActionsCount = window.obj44055_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj44211 
hide_44062();
function hide_44062() {
	var selector = "#obj44211";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj44055_droppedInsideTargetActions_runningActionsCount = obj44055_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj44055_droppedInsideTargetActions_runningActionsCount = window.obj44055_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_44062(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj44055_droppedInsideTargetActions_runningActionsCount = window.obj44055_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj44055_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_44063();
function runjs_44063() {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = obj44055_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44055").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj44055_droppedInsideTargetActions_runningActionsCount = window.obj44055_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj44055_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj44205 
playAudio_44065();
function playAudio_44065() {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = obj44055_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj44205")[0];
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
		    window.obj44055_droppedInsideTargetActions_runningActionsCount = window.obj44055_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj44055_droppedInsideTargetActions_runningActionsCount = window.obj44055_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj44055_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90550();
function switchText_90550() {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = obj44055_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj44055_droppedInsideTargetActions_runningActionsCount = window.obj44055_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj44055_droppedInsideTargetActions_runningActionsCount = window.obj44055_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj44055_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj44055_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj44055_droppedInsideTargetActions_runningActionsCount == 0) {
	obj44055_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj44055_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj44055").trigger("obj44055_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 44055) {
				console.warn("de-queueing event obj44055." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj44055").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj44055_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj43914_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj43914");
//	action: dragDrop
//	target: obj43914 
dragDrop_43917();
function dragDrop_43917() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj43914_onTouchDown_runningActionsCount = obj43914_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj43914');
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
	  	containerNode = $('#obj44227');
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
    	window.obj43914_onTouchDown_runningActionsCount = window.obj43914_onTouchDown_runningActionsCount - 1;
if (window.obj43914_onTouchDown_runningActionsCount < 0) {
	window.obj43914_onTouchDown_runningActionsCount = 0;
} else if (window.obj43914_onTouchDown_runningActionsCount == 0) {
	obj43914_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj44223","#obj44221","#obj44219","#obj44217","#obj44199");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_43917 = false;
    	var dropped_id_43917;
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
					dropped_43917 = true;
					dropped_id_43917 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_43917) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj43914").trigger('SCActionDragDrop43917_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj43914_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43914_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj43914 
move_92651();
function move_92651() {
	window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_runningActionsCount = obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43914");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 639;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_runningActionsCount = window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj43914_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43968();
function runjs_43968() {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43969();
function runjs_43969() {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("border-color", "#C00000"); $("#obj44199").css("border-width", "2px"); $("#obj44199").css("border-style", "solid"); $("#obj44199").css("border-radius", "10px"); $("#obj44199").css("-webkit-border-radius", "10px"); $("#obj44199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44197 
hide_43970();
function hide_43970() {
	var selector = "#obj44197";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43970(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43914_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43971();
function runjs_43971() {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj43914").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43972();
function switchText_43972() {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj43914_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43914 
move_43973();
function move_43973() {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj43914");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 639;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj43914_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43974();
function runjs_43974() {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43975();
function runjs_43975() {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("border-color", "#000000"); $("#obj44199").css("border-width", "1px"); $("#obj44199").css("border-style", "solid"); $("#obj44199").css("border-radius", "10px"); $("#obj44199").css("-webkit-border-radius", "10px"); $("#obj44199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44197
(function(){
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj44197";
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
					window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43914_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43977();
function runjs_43977() {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj43914").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43978();
function runjs_43978() {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj43914").css("border-color", "rgba(0,0,0,0)"); $("#obj43914").css("border-width", "0px"); $("#obj43914").css("border-style", "solid"); $("#obj43914").css("border-radius", "10px"); $("#obj43914").css("-webkit-border-radius", "10px"); $("#obj43914").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43979();
function playAudio_43979() {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj43914_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43980();
function switchText_43980() {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = obj43914_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43914_droppedInsideTargetActions_5_runningActionsCount = window.obj43914_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj43914_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj43914_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43954();
function runjs_43954() {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43955();
function runjs_43955() {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("border-color", "#C00000"); $("#obj44217").css("border-width", "2px"); $("#obj44217").css("border-style", "solid"); $("#obj44217").css("border-radius", "10px"); $("#obj44217").css("-webkit-border-radius", "10px"); $("#obj44217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44209 
hide_43956();
function hide_43956() {
	var selector = "#obj44209";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43956(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43914_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43957();
function runjs_43957() {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43914").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43958();
function switchText_43958() {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj43914_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43914 
move_43959();
function move_43959() {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj43914");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 639;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj43914_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43960();
function runjs_43960() {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43961();
function runjs_43961() {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("border-color", "#000000"); $("#obj44217").css("border-width", "1px"); $("#obj44217").css("border-style", "solid"); $("#obj44217").css("border-radius", "10px"); $("#obj44217").css("-webkit-border-radius", "10px"); $("#obj44217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44209
(function(){
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj44209";
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
					window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43914_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43963();
function runjs_43963() {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43914").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43964();
function runjs_43964() {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43914").css("border-color", "rgba(0,0,0,0)"); $("#obj43914").css("border-width", "0px"); $("#obj43914").css("border-style", "solid"); $("#obj43914").css("border-radius", "10px"); $("#obj43914").css("-webkit-border-radius", "10px"); $("#obj43914").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43965();
function playAudio_43965() {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj43914_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43966();
function switchText_43966() {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = obj43914_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43914_droppedInsideTargetActions_4_runningActionsCount = window.obj43914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj43914_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj43914_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43940();
function runjs_43940() {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44219").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43941();
function runjs_43941() {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44219").css("border-color", "#C00000"); $("#obj44219").css("border-width", "2px"); $("#obj44219").css("border-style", "solid"); $("#obj44219").css("border-radius", "10px"); $("#obj44219").css("-webkit-border-radius", "10px"); $("#obj44219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44211 
hide_43942();
function hide_43942() {
	var selector = "#obj44211";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43942(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43914_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43943();
function runjs_43943() {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43914").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43944();
function switchText_43944() {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj43914_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43914 
move_43945();
function move_43945() {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj43914");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 639;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj43914_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43946();
function runjs_43946() {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44219").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43947();
function runjs_43947() {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44219").css("border-color", "#000000"); $("#obj44219").css("border-width", "1px"); $("#obj44219").css("border-style", "solid"); $("#obj44219").css("border-radius", "10px"); $("#obj44219").css("-webkit-border-radius", "10px"); $("#obj44219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44211
(function(){
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj44211";
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
					window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43914_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43949();
function runjs_43949() {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43914").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43950();
function runjs_43950() {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43914").css("border-color", "rgba(0,0,0,0)"); $("#obj43914").css("border-width", "0px"); $("#obj43914").css("border-style", "solid"); $("#obj43914").css("border-radius", "10px"); $("#obj43914").css("-webkit-border-radius", "10px"); $("#obj43914").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43951();
function playAudio_43951() {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj43914_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43952();
function switchText_43952() {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = obj43914_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43914_droppedInsideTargetActions_3_runningActionsCount = window.obj43914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj43914_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj43914_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43926();
function runjs_43926() {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44221").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43927();
function runjs_43927() {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44221").css("border-color", "#C00000"); $("#obj44221").css("border-width", "2px"); $("#obj44221").css("border-style", "solid"); $("#obj44221").css("border-radius", "10px"); $("#obj44221").css("-webkit-border-radius", "10px"); $("#obj44221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44213 
hide_43928();
function hide_43928() {
	var selector = "#obj44213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43928(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43914_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43929();
function runjs_43929() {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43914").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43930();
function switchText_43930() {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj43914_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43914 
move_43931();
function move_43931() {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj43914");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 639;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj43914_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43932();
function runjs_43932() {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44221").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43933();
function runjs_43933() {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44221").css("border-color", "#000000"); $("#obj44221").css("border-width", "1px"); $("#obj44221").css("border-style", "solid"); $("#obj44221").css("border-radius", "10px"); $("#obj44221").css("-webkit-border-radius", "10px"); $("#obj44221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44213
(function(){
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj44213";
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
					window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43914_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43935();
function runjs_43935() {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43914").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43936();
function runjs_43936() {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43914").css("border-color", "rgba(0,0,0,0)"); $("#obj43914").css("border-width", "0px"); $("#obj43914").css("border-style", "solid"); $("#obj43914").css("border-radius", "10px"); $("#obj43914").css("-webkit-border-radius", "10px"); $("#obj43914").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43937();
function playAudio_43937() {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj43914_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43938();
function switchText_43938() {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = obj43914_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43914_droppedInsideTargetActions_2_runningActionsCount = window.obj43914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj43914_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj43914_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43919();
function runjs_43919() {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = obj43914_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44223").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_runningActionsCount = window.obj43914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43923();
function switchText_43923() {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = obj43914_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43914_droppedInsideTargetActions_runningActionsCount = window.obj43914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43914_droppedInsideTargetActions_runningActionsCount = window.obj43914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj43914_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43920();
function runjs_43920() {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = obj43914_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44223").css("border-color", "#058E3F"); $("#obj44223").css("border-width", "2px"); $("#obj44223").css("border-style", "solid"); $("#obj44223").css("border-radius", "10px"); $("#obj44223").css("-webkit-border-radius", "10px"); $("#obj44223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_runningActionsCount = window.obj43914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj44215 
hide_43921();
function hide_43921() {
	var selector = "#obj44215";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43914_droppedInsideTargetActions_runningActionsCount = obj43914_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43914_droppedInsideTargetActions_runningActionsCount = window.obj43914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43921(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43914_droppedInsideTargetActions_runningActionsCount = window.obj43914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43914_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43922();
function runjs_43922() {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = obj43914_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43914").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43914_droppedInsideTargetActions_runningActionsCount = window.obj43914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj43914_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj44205 
playAudio_43924();
function playAudio_43924() {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = obj43914_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj44205")[0];
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
		    window.obj43914_droppedInsideTargetActions_runningActionsCount = window.obj43914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43914_droppedInsideTargetActions_runningActionsCount = window.obj43914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj43914_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90549();
function switchText_90549() {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = obj43914_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43914_droppedInsideTargetActions_runningActionsCount = window.obj43914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43914_droppedInsideTargetActions_runningActionsCount = window.obj43914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43914_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj43914_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43914").trigger("obj43914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43914) {
				console.warn("de-queueing event obj43914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43914_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj43847_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj43847");
//	action: dragDrop
//	target: obj43847 
dragDrop_43850();
function dragDrop_43850() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj43847_onTouchDown_runningActionsCount = obj43847_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj43847');
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
	  	containerNode = $('#obj44227');
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
    	window.obj43847_onTouchDown_runningActionsCount = window.obj43847_onTouchDown_runningActionsCount - 1;
if (window.obj43847_onTouchDown_runningActionsCount < 0) {
	window.obj43847_onTouchDown_runningActionsCount = 0;
} else if (window.obj43847_onTouchDown_runningActionsCount == 0) {
	obj43847_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj44199","#obj44223","#obj44221","#obj44219","#obj44217");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_43850 = false;
    	var dropped_id_43850;
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
					dropped_43850 = true;
					dropped_id_43850 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_43850) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj43847").trigger('SCActionDragDrop43850_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj43847_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43847_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj43847 
move_92649();
function move_92649() {
	window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_runningActionsCount = obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43847");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 580;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_runningActionsCount = window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj43847_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43901();
function runjs_43901() {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44217").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43902();
function runjs_43902() {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44217").css("border-color", "#C00000"); $("#obj44217").css("border-width", "2px"); $("#obj44217").css("border-style", "solid"); $("#obj44217").css("border-radius", "10px"); $("#obj44217").css("-webkit-border-radius", "10px"); $("#obj44217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44209 
hide_43903();
function hide_43903() {
	var selector = "#obj44209";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43903(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43847_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43904();
function runjs_43904() {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj43847").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43905();
function switchText_43905() {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj43847_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43847 
move_43906();
function move_43906() {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj43847");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 580;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj43847_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43907();
function runjs_43907() {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44217").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43908();
function runjs_43908() {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44217").css("border-color", "#000000"); $("#obj44217").css("border-width", "1px"); $("#obj44217").css("border-style", "solid"); $("#obj44217").css("border-radius", "10px"); $("#obj44217").css("-webkit-border-radius", "10px"); $("#obj44217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44209
(function(){
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj44209";
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
					window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43847_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43910();
function runjs_43910() {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj43847").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43911();
function runjs_43911() {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj43847").css("border-color", "rgba(0,0,0,0)"); $("#obj43847").css("border-width", "0px"); $("#obj43847").css("border-style", "solid"); $("#obj43847").css("border-radius", "10px"); $("#obj43847").css("-webkit-border-radius", "10px"); $("#obj43847").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43912();
function playAudio_43912() {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj43847_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43913();
function switchText_43913() {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = obj43847_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43847_droppedInsideTargetActions_5_runningActionsCount = window.obj43847_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj43847_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj43847_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43887();
function runjs_43887() {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44219").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43888();
function runjs_43888() {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44219").css("border-color", "#C00000"); $("#obj44219").css("border-width", "2px"); $("#obj44219").css("border-style", "solid"); $("#obj44219").css("border-radius", "10px"); $("#obj44219").css("-webkit-border-radius", "10px"); $("#obj44219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44211 
hide_43889();
function hide_43889() {
	var selector = "#obj44211";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43889(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43847_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43890();
function runjs_43890() {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43847").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43891();
function switchText_43891() {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj43847_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43847 
move_43892();
function move_43892() {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj43847");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 580;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj43847_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43893();
function runjs_43893() {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44219").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43894();
function runjs_43894() {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44219").css("border-color", "#000000"); $("#obj44219").css("border-width", "1px"); $("#obj44219").css("border-style", "solid"); $("#obj44219").css("border-radius", "10px"); $("#obj44219").css("-webkit-border-radius", "10px"); $("#obj44219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44211
(function(){
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj44211";
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
					window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43847_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43896();
function runjs_43896() {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43847").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43897();
function runjs_43897() {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43847").css("border-color", "rgba(0,0,0,0)"); $("#obj43847").css("border-width", "0px"); $("#obj43847").css("border-style", "solid"); $("#obj43847").css("border-radius", "10px"); $("#obj43847").css("-webkit-border-radius", "10px"); $("#obj43847").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43898();
function playAudio_43898() {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj43847_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43899();
function switchText_43899() {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = obj43847_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43847_droppedInsideTargetActions_4_runningActionsCount = window.obj43847_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj43847_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj43847_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43873();
function runjs_43873() {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43874();
function runjs_43874() {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("border-color", "#C00000"); $("#obj44221").css("border-width", "2px"); $("#obj44221").css("border-style", "solid"); $("#obj44221").css("border-radius", "10px"); $("#obj44221").css("-webkit-border-radius", "10px"); $("#obj44221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44213 
hide_43875();
function hide_43875() {
	var selector = "#obj44213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43875(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43847_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43876();
function runjs_43876() {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43847").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43877();
function switchText_43877() {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj43847_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43847 
move_43878();
function move_43878() {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj43847");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 580;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj43847_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43879();
function runjs_43879() {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43880();
function runjs_43880() {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44221").css("border-color", "#000000"); $("#obj44221").css("border-width", "1px"); $("#obj44221").css("border-style", "solid"); $("#obj44221").css("border-radius", "10px"); $("#obj44221").css("-webkit-border-radius", "10px"); $("#obj44221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44213
(function(){
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj44213";
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
					window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43847_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43882();
function runjs_43882() {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43847").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43883();
function runjs_43883() {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43847").css("border-color", "rgba(0,0,0,0)"); $("#obj43847").css("border-width", "0px"); $("#obj43847").css("border-style", "solid"); $("#obj43847").css("border-radius", "10px"); $("#obj43847").css("-webkit-border-radius", "10px"); $("#obj43847").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43884();
function playAudio_43884() {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj43847_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43885();
function switchText_43885() {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = obj43847_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43847_droppedInsideTargetActions_3_runningActionsCount = window.obj43847_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj43847_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj43847_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43859();
function runjs_43859() {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43860();
function runjs_43860() {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("border-color", "#C00000"); $("#obj44223").css("border-width", "2px"); $("#obj44223").css("border-style", "solid"); $("#obj44223").css("border-radius", "10px"); $("#obj44223").css("-webkit-border-radius", "10px"); $("#obj44223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44215 
hide_43861();
function hide_43861() {
	var selector = "#obj44215";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43861(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43847_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43862();
function runjs_43862() {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43847").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43863();
function switchText_43863() {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj43847_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43847 
move_43864();
function move_43864() {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj43847");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 71;
	var moveY = 580;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj43847_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43865();
function runjs_43865() {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43866();
function runjs_43866() {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("border-color", "#000000"); $("#obj44223").css("border-width", "1px"); $("#obj44223").css("border-style", "solid"); $("#obj44223").css("border-radius", "10px"); $("#obj44223").css("-webkit-border-radius", "10px"); $("#obj44223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44215
(function(){
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj44215";
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
					window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43847_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43868();
function runjs_43868() {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43847").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43869();
function runjs_43869() {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43847").css("border-color", "rgba(0,0,0,0)"); $("#obj43847").css("border-width", "0px"); $("#obj43847").css("border-style", "solid"); $("#obj43847").css("border-radius", "10px"); $("#obj43847").css("-webkit-border-radius", "10px"); $("#obj43847").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43870();
function playAudio_43870() {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj43847_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43871();
function switchText_43871() {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = obj43847_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43847_droppedInsideTargetActions_2_runningActionsCount = window.obj43847_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj43847_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj43847_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43852();
function runjs_43852() {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = obj43847_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_runningActionsCount = window.obj43847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43856();
function switchText_43856() {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = obj43847_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43847_droppedInsideTargetActions_runningActionsCount = window.obj43847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43847_droppedInsideTargetActions_runningActionsCount = window.obj43847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj43847_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43853();
function runjs_43853() {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = obj43847_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44199").css("border-color", "#058E3F"); $("#obj44199").css("border-width", "2px"); $("#obj44199").css("border-style", "solid"); $("#obj44199").css("border-radius", "10px"); $("#obj44199").css("-webkit-border-radius", "10px"); $("#obj44199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_runningActionsCount = window.obj43847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj44197 
hide_43854();
function hide_43854() {
	var selector = "#obj44197";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43847_droppedInsideTargetActions_runningActionsCount = obj43847_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43847_droppedInsideTargetActions_runningActionsCount = window.obj43847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43854(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43847_droppedInsideTargetActions_runningActionsCount = window.obj43847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43847_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43855();
function runjs_43855() {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = obj43847_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43847").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43847_droppedInsideTargetActions_runningActionsCount = window.obj43847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj43847_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj44205 
playAudio_43857();
function playAudio_43857() {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = obj43847_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj44205")[0];
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
		    window.obj43847_droppedInsideTargetActions_runningActionsCount = window.obj43847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43847_droppedInsideTargetActions_runningActionsCount = window.obj43847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj43847_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90548();
function switchText_90548() {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = obj43847_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43847_droppedInsideTargetActions_runningActionsCount = window.obj43847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43847_droppedInsideTargetActions_runningActionsCount = window.obj43847_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43847_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43847_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43847_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43847_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj43847_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43847").trigger("obj43847_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43847) {
				console.warn("de-queueing event obj43847." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43847").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43847_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj43780_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj43780");
//	action: dragDrop
//	target: obj43780 
dragDrop_43783();
function dragDrop_43783() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj43780_onTouchDown_runningActionsCount = obj43780_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj43780');
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
	  	containerNode = $('#obj44227');
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
    	window.obj43780_onTouchDown_runningActionsCount = window.obj43780_onTouchDown_runningActionsCount - 1;
if (window.obj43780_onTouchDown_runningActionsCount < 0) {
	window.obj43780_onTouchDown_runningActionsCount = 0;
} else if (window.obj43780_onTouchDown_runningActionsCount == 0) {
	obj43780_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj44221","#obj44223","#obj44219","#obj44217","#obj44199");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_43783 = false;
    	var dropped_id_43783;
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
					dropped_43783 = true;
					dropped_id_43783 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_43783) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj43780").trigger('SCActionDragDrop43783_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj43780_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43780_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj43780 
move_92655();
function move_92655() {
	window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_runningActionsCount = obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43780");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 237;
	var moveY = 640;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_runningActionsCount = window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj43780_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43834();
function runjs_43834() {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43835();
function runjs_43835() {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("border-color", "#C00000"); $("#obj44199").css("border-width", "2px"); $("#obj44199").css("border-style", "solid"); $("#obj44199").css("border-radius", "10px"); $("#obj44199").css("-webkit-border-radius", "10px"); $("#obj44199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44197 
hide_43836();
function hide_43836() {
	var selector = "#obj44197";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43836(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43780_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43837();
function runjs_43837() {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj43780").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43838();
function switchText_43838() {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj43780_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43780 
move_43839();
function move_43839() {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj43780");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 237;
	var moveY = 640;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj43780_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43840();
function runjs_43840() {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43841();
function runjs_43841() {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj44199").css("border-color", "#000000"); $("#obj44199").css("border-width", "1px"); $("#obj44199").css("border-style", "solid"); $("#obj44199").css("border-radius", "10px"); $("#obj44199").css("-webkit-border-radius", "10px"); $("#obj44199").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44197
(function(){
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj44197";
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
					window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43780_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43843();
function runjs_43843() {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj43780").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43844();
function runjs_43844() {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj43780").css("border-color", "rgba(0,0,0,0)"); $("#obj43780").css("border-width", "0px"); $("#obj43780").css("border-style", "solid"); $("#obj43780").css("border-radius", "10px"); $("#obj43780").css("-webkit-border-radius", "10px"); $("#obj43780").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43845();
function playAudio_43845() {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj43780_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43846();
function switchText_43846() {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = obj43780_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43780_droppedInsideTargetActions_5_runningActionsCount = window.obj43780_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj43780_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj43780_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43820();
function runjs_43820() {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43821();
function runjs_43821() {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("border-color", "#C00000"); $("#obj44217").css("border-width", "2px"); $("#obj44217").css("border-style", "solid"); $("#obj44217").css("border-radius", "10px"); $("#obj44217").css("-webkit-border-radius", "10px"); $("#obj44217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44209 
hide_43822();
function hide_43822() {
	var selector = "#obj44209";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43822(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43780_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43823();
function runjs_43823() {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43780").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43824();
function switchText_43824() {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj43780_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43780 
move_43825();
function move_43825() {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj43780");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 237;
	var moveY = 640;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj43780_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43826();
function runjs_43826() {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43827();
function runjs_43827() {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj44217").css("border-color", "#000000"); $("#obj44217").css("border-width", "1px"); $("#obj44217").css("border-style", "solid"); $("#obj44217").css("border-radius", "10px"); $("#obj44217").css("-webkit-border-radius", "10px"); $("#obj44217").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44209
(function(){
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj44209";
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
					window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43780_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43829();
function runjs_43829() {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43780").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43830();
function runjs_43830() {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43780").css("border-color", "rgba(0,0,0,0)"); $("#obj43780").css("border-width", "0px"); $("#obj43780").css("border-style", "solid"); $("#obj43780").css("border-radius", "10px"); $("#obj43780").css("-webkit-border-radius", "10px"); $("#obj43780").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43831();
function playAudio_43831() {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj43780_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43832();
function switchText_43832() {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = obj43780_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43780_droppedInsideTargetActions_4_runningActionsCount = window.obj43780_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj43780_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj43780_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43806();
function runjs_43806() {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44219").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43807();
function runjs_43807() {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44219").css("border-color", "#C00000"); $("#obj44219").css("border-width", "2px"); $("#obj44219").css("border-style", "solid"); $("#obj44219").css("border-radius", "10px"); $("#obj44219").css("-webkit-border-radius", "10px"); $("#obj44219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44211 
hide_43808();
function hide_43808() {
	var selector = "#obj44211";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43808(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43780_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43809();
function runjs_43809() {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43780").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43810();
function switchText_43810() {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj43780_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43780 
move_43811();
function move_43811() {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj43780");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 237;
	var moveY = 640;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj43780_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43812();
function runjs_43812() {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44219").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43813();
function runjs_43813() {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj44219").css("border-color", "#000000"); $("#obj44219").css("border-width", "1px"); $("#obj44219").css("border-style", "solid"); $("#obj44219").css("border-radius", "10px"); $("#obj44219").css("-webkit-border-radius", "10px"); $("#obj44219").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44211
(function(){
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj44211";
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
					window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43780_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43815();
function runjs_43815() {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43780").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43816();
function runjs_43816() {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43780").css("border-color", "rgba(0,0,0,0)"); $("#obj43780").css("border-width", "0px"); $("#obj43780").css("border-style", "solid"); $("#obj43780").css("border-radius", "10px"); $("#obj43780").css("-webkit-border-radius", "10px"); $("#obj43780").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43817();
function playAudio_43817() {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj43780_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43818();
function switchText_43818() {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = obj43780_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43780_droppedInsideTargetActions_3_runningActionsCount = window.obj43780_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj43780_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj43780_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43792();
function runjs_43792() {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43793();
function runjs_43793() {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("border-color", "#C00000"); $("#obj44223").css("border-width", "2px"); $("#obj44223").css("border-style", "solid"); $("#obj44223").css("border-radius", "10px"); $("#obj44223").css("-webkit-border-radius", "10px"); $("#obj44223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj44215 
hide_43794();
function hide_43794() {
	var selector = "#obj44215";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43794(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43780_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43795();
function runjs_43795() {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43780").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43796();
function switchText_43796() {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj43780_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43780 
move_43797();
function move_43797() {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj43780");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 237;
	var moveY = 640;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj43780_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43798();
function runjs_43798() {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43799();
function runjs_43799() {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj44223").css("border-color", "#000000"); $("#obj44223").css("border-width", "1px"); $("#obj44223").css("border-style", "solid"); $("#obj44223").css("border-radius", "10px"); $("#obj44223").css("-webkit-border-radius", "10px"); $("#obj44223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj44215
(function(){
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj44215";
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
					window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43780_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43801();
function runjs_43801() {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43780").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43802();
function runjs_43802() {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43780").css("border-color", "rgba(0,0,0,0)"); $("#obj43780").css("border-width", "0px"); $("#obj43780").css("border-style", "solid"); $("#obj43780").css("border-radius", "10px"); $("#obj43780").css("-webkit-border-radius", "10px"); $("#obj43780").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj44201 
playAudio_43803();
function playAudio_43803() {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj44201")[0];
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
		    window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj43780_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43804();
function switchText_43804() {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = obj43780_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43780_droppedInsideTargetActions_2_runningActionsCount = window.obj43780_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj43780_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj43780_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43785();
function runjs_43785() {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = obj43780_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44221").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_runningActionsCount = window.obj43780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43789();
function switchText_43789() {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = obj43780_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43780_droppedInsideTargetActions_runningActionsCount = window.obj43780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43780_droppedInsideTargetActions_runningActionsCount = window.obj43780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj43780_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43786();
function runjs_43786() {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = obj43780_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj44221").css("border-color", "#058E3F"); $("#obj44221").css("border-width", "2px"); $("#obj44221").css("border-style", "solid"); $("#obj44221").css("border-radius", "10px"); $("#obj44221").css("-webkit-border-radius", "10px"); $("#obj44221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_runningActionsCount = window.obj43780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj44213 
hide_43787();
function hide_43787() {
	var selector = "#obj44213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43780_droppedInsideTargetActions_runningActionsCount = obj43780_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43780_droppedInsideTargetActions_runningActionsCount = window.obj43780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43787(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43780_droppedInsideTargetActions_runningActionsCount = window.obj43780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43780_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43788();
function runjs_43788() {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = obj43780_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43780").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43780_droppedInsideTargetActions_runningActionsCount = window.obj43780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj43780_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj44205 
playAudio_43790();
function playAudio_43790() {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = obj43780_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj44205")[0];
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
		    window.obj43780_droppedInsideTargetActions_runningActionsCount = window.obj43780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43780_droppedInsideTargetActions_runningActionsCount = window.obj43780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj43780_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90551();
function switchText_90551() {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = obj43780_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj44203_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj44203_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj44203").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj44203_content");
			setTimeout(function () {
				window.obj43780_droppedInsideTargetActions_runningActionsCount = window.obj43780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj44203 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43780_droppedInsideTargetActions_runningActionsCount = window.obj43780_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43780_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43780_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43780_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43780_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj43780_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43780").trigger("obj43780_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43780) {
				console.warn("de-queueing event obj43780." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43780").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43780_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67422_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67422_onTap_activeActionGroupIndex = -1;
		$("#obj67422").trigger("obj67422_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67422) {
				console.warn("de-queueing event obj67422." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67422").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67422_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67422 
hide_67425();
function hide_67425() {
	var selector = "#obj67422";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67422_onTap_runningActionsCount = obj67422_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67422_onTap_runningActionsCount = window.obj67422_onTap_runningActionsCount - 1;
if (window.obj67422_onTap_runningActionsCount < 0) {
	window.obj67422_onTap_runningActionsCount = 0;
} else if (window.obj67422_onTap_runningActionsCount == 0) {
	obj67422_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67425(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67422_onTap_runningActionsCount = window.obj67422_onTap_runningActionsCount - 1;
if (window.obj67422_onTap_runningActionsCount < 0) {
	window.obj67422_onTap_runningActionsCount = 0;
} else if (window.obj67422_onTap_runningActionsCount == 0) {
	obj67422_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67428 
stopMovie_67424();
function stopMovie_67424() {
	window.obj67422_onTap_runningActionsCount = obj67422_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67428")[0];
	myVideo.pause();
	window.obj67422_onTap_runningActionsCount = window.obj67422_onTap_runningActionsCount - 1;
if (window.obj67422_onTap_runningActionsCount < 0) {
	window.obj67422_onTap_runningActionsCount = 0;
} else if (window.obj67422_onTap_runningActionsCount == 0) {
	obj67422_onTap_actionGroup1();
}
}
















};
obj67422_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67422_onTap_activeActionGroupIndex = -1;
		$("#obj67422").trigger("obj67422_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67422) {
				console.warn("de-queueing event obj67422." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67422").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67422_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67414
(function(){
	window.obj67422_onTap_runningActionsCount = obj67422_onTap_runningActionsCount + 1;

	var selector = "#obj67414";
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
					window.obj67422_onTap_runningActionsCount = window.obj67422_onTap_runningActionsCount - 1;
if (window.obj67422_onTap_runningActionsCount < 0) {
	window.obj67422_onTap_runningActionsCount = 0;
} else if (window.obj67422_onTap_runningActionsCount == 0) {
	obj67422_onTap_actionGroup2();
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
				window.obj67422_onTap_runningActionsCount = window.obj67422_onTap_runningActionsCount - 1;
if (window.obj67422_onTap_runningActionsCount < 0) {
	window.obj67422_onTap_runningActionsCount = 0;
} else if (window.obj67422_onTap_runningActionsCount == 0) {
	obj67422_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67422_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67422_onTap_activeActionGroupIndex = -1;
		$("#obj67422").trigger("obj67422_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67422) {
				console.warn("de-queueing event obj67422." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67422").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67422_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67428 
move_67427();
function move_67427() {
	window.obj67422_onTap_runningActionsCount = obj67422_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67428");
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
			window.obj67422_onTap_runningActionsCount = window.obj67422_onTap_runningActionsCount - 1;
if (window.obj67422_onTap_runningActionsCount < 0) {
	window.obj67422_onTap_runningActionsCount = 0;
} else if (window.obj67422_onTap_runningActionsCount == 0) {
	obj67422_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67422_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67422_onTap_activeActionGroupIndex = -1;
		$("#obj67422").trigger("obj67422_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67422) {
				console.warn("de-queueing event obj67422." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67422").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67422_onTap_activeActionGroupIndex = 3;
	





















};
obj67414_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67414_onTap_activeActionGroupIndex = -1;
		$("#obj67414").trigger("obj67414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67414) {
				console.warn("de-queueing event obj67414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67414_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67414 
hide_67417();
function hide_67417() {
	var selector = "#obj67414";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67414_onTap_runningActionsCount = obj67414_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67414_onTap_runningActionsCount = window.obj67414_onTap_runningActionsCount - 1;
if (window.obj67414_onTap_runningActionsCount < 0) {
	window.obj67414_onTap_runningActionsCount = 0;
} else if (window.obj67414_onTap_runningActionsCount == 0) {
	obj67414_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67417(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67414_onTap_runningActionsCount = window.obj67414_onTap_runningActionsCount - 1;
if (window.obj67414_onTap_runningActionsCount < 0) {
	window.obj67414_onTap_runningActionsCount = 0;
} else if (window.obj67414_onTap_runningActionsCount == 0) {
	obj67414_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67428 
playPauseMovie_67416();
function playPauseMovie_67416() {
	window.obj67414_onTap_runningActionsCount = obj67414_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67428")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67414_onTap_runningActionsCount = window.obj67414_onTap_runningActionsCount - 1;
if (window.obj67414_onTap_runningActionsCount < 0) {
	window.obj67414_onTap_runningActionsCount = 0;
} else if (window.obj67414_onTap_runningActionsCount == 0) {
	obj67414_onTap_actionGroup1();
}
}

















};
obj67414_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67414_onTap_activeActionGroupIndex = -1;
		$("#obj67414").trigger("obj67414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67414) {
				console.warn("de-queueing event obj67414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67414_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67422
(function(){
	window.obj67414_onTap_runningActionsCount = obj67414_onTap_runningActionsCount + 1;

	var selector = "#obj67422";
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
					window.obj67414_onTap_runningActionsCount = window.obj67414_onTap_runningActionsCount - 1;
if (window.obj67414_onTap_runningActionsCount < 0) {
	window.obj67414_onTap_runningActionsCount = 0;
} else if (window.obj67414_onTap_runningActionsCount == 0) {
	obj67414_onTap_actionGroup2();
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
				window.obj67414_onTap_runningActionsCount = window.obj67414_onTap_runningActionsCount - 1;
if (window.obj67414_onTap_runningActionsCount < 0) {
	window.obj67414_onTap_runningActionsCount = 0;
} else if (window.obj67414_onTap_runningActionsCount == 0) {
	obj67414_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67414_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67414_onTap_activeActionGroupIndex = -1;
		$("#obj67414").trigger("obj67414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67414) {
				console.warn("de-queueing event obj67414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67414_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67428 
move_67419();
function move_67419() {
	window.obj67414_onTap_runningActionsCount = obj67414_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67428");
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
			window.obj67414_onTap_runningActionsCount = window.obj67414_onTap_runningActionsCount - 1;
if (window.obj67414_onTap_runningActionsCount < 0) {
	window.obj67414_onTap_runningActionsCount = 0;
} else if (window.obj67414_onTap_runningActionsCount == 0) {
	obj67414_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67414_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67414_onTap_activeActionGroupIndex = -1;
		$("#obj67414").trigger("obj67414_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67414) {
				console.warn("de-queueing event obj67414." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67414").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67414_onTap_activeActionGroupIndex = 3;
	





















};
obj88693_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88693_onTap_activeActionGroupIndex = -1;
		$("#obj88693").trigger("obj88693_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88693) {
				console.warn("de-queueing event obj88693." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88693").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88693_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88698 
stopAudio_88695();
function stopAudio_88695() {
	window.obj88693_onTap_runningActionsCount = obj88693_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88698")[0];
	myAudio.pause();
	window.obj88693_onTap_runningActionsCount = window.obj88693_onTap_runningActionsCount - 1;
if (window.obj88693_onTap_runningActionsCount < 0) {
	window.obj88693_onTap_runningActionsCount = 0;
} else if (window.obj88693_onTap_runningActionsCount == 0) {
	obj88693_onTap_actionGroup1();
}
}








};
obj88693_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88693_onTap_activeActionGroupIndex = -1;
		$("#obj88693").trigger("obj88693_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88693) {
				console.warn("de-queueing event obj88693." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88693").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88693_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88693 
hide_88696();
function hide_88696() {
	var selector = "#obj88693";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88693_onTap_runningActionsCount = obj88693_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88693_onTap_runningActionsCount = window.obj88693_onTap_runningActionsCount - 1;
if (window.obj88693_onTap_runningActionsCount < 0) {
	window.obj88693_onTap_runningActionsCount = 0;
} else if (window.obj88693_onTap_runningActionsCount == 0) {
	obj88693_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88696(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88693_onTap_runningActionsCount = window.obj88693_onTap_runningActionsCount - 1;
if (window.obj88693_onTap_runningActionsCount < 0) {
	window.obj88693_onTap_runningActionsCount = 0;
} else if (window.obj88693_onTap_runningActionsCount == 0) {
	obj88693_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88693_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88693_onTap_activeActionGroupIndex = -1;
		$("#obj88693").trigger("obj88693_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88693) {
				console.warn("de-queueing event obj88693." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88693").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88693_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88688
(function(){
	window.obj88693_onTap_runningActionsCount = obj88693_onTap_runningActionsCount + 1;

	var selector = "#obj88688";
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
					window.obj88693_onTap_runningActionsCount = window.obj88693_onTap_runningActionsCount - 1;
if (window.obj88693_onTap_runningActionsCount < 0) {
	window.obj88693_onTap_runningActionsCount = 0;
} else if (window.obj88693_onTap_runningActionsCount == 0) {
	obj88693_onTap_actionGroup3();
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
				window.obj88693_onTap_runningActionsCount = window.obj88693_onTap_runningActionsCount - 1;
if (window.obj88693_onTap_runningActionsCount < 0) {
	window.obj88693_onTap_runningActionsCount = 0;
} else if (window.obj88693_onTap_runningActionsCount == 0) {
	obj88693_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88693_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88693_onTap_activeActionGroupIndex = -1;
		$("#obj88693").trigger("obj88693_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88693) {
				console.warn("de-queueing event obj88693." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88693").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88693_onTap_activeActionGroupIndex = 3;
	





















};
obj88688_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88688_onTap_activeActionGroupIndex = -1;
		$("#obj88688").trigger("obj88688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88688) {
				console.warn("de-queueing event obj88688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88688_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88688 
hide_88690();
function hide_88690() {
	var selector = "#obj88688";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88688_onTap_runningActionsCount = obj88688_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88688_onTap_runningActionsCount = window.obj88688_onTap_runningActionsCount - 1;
if (window.obj88688_onTap_runningActionsCount < 0) {
	window.obj88688_onTap_runningActionsCount = 0;
} else if (window.obj88688_onTap_runningActionsCount == 0) {
	obj88688_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88690(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88688_onTap_runningActionsCount = window.obj88688_onTap_runningActionsCount - 1;
if (window.obj88688_onTap_runningActionsCount < 0) {
	window.obj88688_onTap_runningActionsCount = 0;
} else if (window.obj88688_onTap_runningActionsCount == 0) {
	obj88688_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88688_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88688_onTap_activeActionGroupIndex = -1;
		$("#obj88688").trigger("obj88688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88688) {
				console.warn("de-queueing event obj88688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88688_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88693
(function(){
	window.obj88688_onTap_runningActionsCount = obj88688_onTap_runningActionsCount + 1;

	var selector = "#obj88693";
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
					window.obj88688_onTap_runningActionsCount = window.obj88688_onTap_runningActionsCount - 1;
if (window.obj88688_onTap_runningActionsCount < 0) {
	window.obj88688_onTap_runningActionsCount = 0;
} else if (window.obj88688_onTap_runningActionsCount == 0) {
	obj88688_onTap_actionGroup2();
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
				window.obj88688_onTap_runningActionsCount = window.obj88688_onTap_runningActionsCount - 1;
if (window.obj88688_onTap_runningActionsCount < 0) {
	window.obj88688_onTap_runningActionsCount = 0;
} else if (window.obj88688_onTap_runningActionsCount == 0) {
	obj88688_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88688_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88688_onTap_activeActionGroupIndex = -1;
		$("#obj88688").trigger("obj88688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88688) {
				console.warn("de-queueing event obj88688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88688_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88698 
playAudio_88692();
function playAudio_88692() {
	window.obj88688_onTap_runningActionsCount = obj88688_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88698")[0];
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
		    window.obj88688_onTap_runningActionsCount = window.obj88688_onTap_runningActionsCount - 1;
if (window.obj88688_onTap_runningActionsCount < 0) {
	window.obj88688_onTap_runningActionsCount = 0;
} else if (window.obj88688_onTap_runningActionsCount == 0) {
	obj88688_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88688_onTap_runningActionsCount = window.obj88688_onTap_runningActionsCount - 1;
if (window.obj88688_onTap_runningActionsCount < 0) {
	window.obj88688_onTap_runningActionsCount = 0;
} else if (window.obj88688_onTap_runningActionsCount == 0) {
	obj88688_onTap_actionGroup3();
}
	}
}









};
obj88688_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88688_onTap_activeActionGroupIndex = -1;
		$("#obj88688").trigger("obj88688_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88688) {
				console.warn("de-queueing event obj88688." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88688").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88688_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj44244: Event Touch Down
 *
 */
$("#obj44244").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj44244_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44244_onTap is still running");
	return;
}
var obj44244_onTap_runningActionsCount = 0;
var obj44244_onTap_loopCount = 0;
obj44244_onTap_actionGroup0();
});










/*
 *
 *   obj44241: Event Touch Down
 *
 */
$("#obj44241").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj44241_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44241_onTap is still running");
	return;
}
var obj44241_onTap_runningActionsCount = 0;
var obj44241_onTap_loopCount = 0;
obj44241_onTap_actionGroup0();
});










/*
 *
 *   obj44237: Event Touch Down
 *
 */
$("#obj44237").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj44237_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44237_onTap is still running");
	return;
}
var obj44237_onTap_runningActionsCount = 0;
var obj44237_onTap_loopCount = 0;
obj44237_onTap_actionGroup0();
});



























































































































































































































































/*
 *
 *   obj44122: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj44122");
	var winTarget = document.getElementById("obj44122");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj44122").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj44122_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj44122_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj44122_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44122_onTouchDown is still running");
	return;
}
var obj44122_onTouchDown_runningActionsCount = 0;
var obj44122_onTouchDown_loopCount = 0;
obj44122_onTouchDown_actionGroup0();
});



/*
 *
 *   obj44122: Event SCActionDragDrop44125_droppedOutsideTargetActions
 *
 */
$("#obj44122").bind("SCActionDragDrop44125_droppedOutsideTargetActions", function(event) {
	if (window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44122_SCActionDragDrop44125_droppedOutsideTargetActions is still running");
	return;
}
var obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_loopCount = 0;
obj44122_SCActionDragDrop44125_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj44122: Event droppedInsideTargetActions_5
 *
 */
$("#obj44122").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj44122_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44122_droppedInsideTargetActions_5 is still running");
	return;
}
var obj44122_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44122_droppedInsideTargetActions_5_loopCount = 0;
obj44122_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj44122: Event droppedInsideTargetActions_4
 *
 */
$("#obj44122").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj44122_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44122_droppedInsideTargetActions_4 is still running");
	return;
}
var obj44122_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44122_droppedInsideTargetActions_4_loopCount = 0;
obj44122_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj44122: Event droppedInsideTargetActions_3
 *
 */
$("#obj44122").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj44122_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44122_droppedInsideTargetActions_3 is still running");
	return;
}
var obj44122_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44122_droppedInsideTargetActions_3_loopCount = 0;
obj44122_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj44122: Event droppedInsideTargetActions_2
 *
 */
$("#obj44122").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj44122_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44122_droppedInsideTargetActions_2 is still running");
	return;
}
var obj44122_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44122_droppedInsideTargetActions_2_loopCount = 0;
obj44122_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj44122: Event droppedInsideTargetActions
 *
 */
$("#obj44122").bind("droppedInsideTargetActions", function(event) {
	if (window.obj44122_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44122_droppedInsideTargetActions is still running");
	return;
}
var obj44122_droppedInsideTargetActions_runningActionsCount = 0;
var obj44122_droppedInsideTargetActions_loopCount = 0;
obj44122_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj44055: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj44055");
	var winTarget = document.getElementById("obj44055");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj44055").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj44055_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj44055_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj44055_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44055_onTouchDown is still running");
	return;
}
var obj44055_onTouchDown_runningActionsCount = 0;
var obj44055_onTouchDown_loopCount = 0;
obj44055_onTouchDown_actionGroup0();
});



/*
 *
 *   obj44055: Event SCActionDragDrop44058_droppedOutsideTargetActions
 *
 */
$("#obj44055").bind("SCActionDragDrop44058_droppedOutsideTargetActions", function(event) {
	if (window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44055_SCActionDragDrop44058_droppedOutsideTargetActions is still running");
	return;
}
var obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_runningActionsCount = 0;
var obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_loopCount = 0;
obj44055_SCActionDragDrop44058_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj44055: Event droppedInsideTargetActions_5
 *
 */
$("#obj44055").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj44055_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44055_droppedInsideTargetActions_5 is still running");
	return;
}
var obj44055_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj44055_droppedInsideTargetActions_5_loopCount = 0;
obj44055_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj44055: Event droppedInsideTargetActions_4
 *
 */
$("#obj44055").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj44055_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44055_droppedInsideTargetActions_4 is still running");
	return;
}
var obj44055_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj44055_droppedInsideTargetActions_4_loopCount = 0;
obj44055_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj44055: Event droppedInsideTargetActions_3
 *
 */
$("#obj44055").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj44055_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44055_droppedInsideTargetActions_3 is still running");
	return;
}
var obj44055_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj44055_droppedInsideTargetActions_3_loopCount = 0;
obj44055_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj44055: Event droppedInsideTargetActions_2
 *
 */
$("#obj44055").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj44055_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44055_droppedInsideTargetActions_2 is still running");
	return;
}
var obj44055_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj44055_droppedInsideTargetActions_2_loopCount = 0;
obj44055_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj44055: Event droppedInsideTargetActions
 *
 */
$("#obj44055").bind("droppedInsideTargetActions", function(event) {
	if (window.obj44055_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj44055_droppedInsideTargetActions is still running");
	return;
}
var obj44055_droppedInsideTargetActions_runningActionsCount = 0;
var obj44055_droppedInsideTargetActions_loopCount = 0;
obj44055_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj43914: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj43914");
	var winTarget = document.getElementById("obj43914");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj43914").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj43914_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj43914_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj43914_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43914_onTouchDown is still running");
	return;
}
var obj43914_onTouchDown_runningActionsCount = 0;
var obj43914_onTouchDown_loopCount = 0;
obj43914_onTouchDown_actionGroup0();
});



/*
 *
 *   obj43914: Event SCActionDragDrop43917_droppedOutsideTargetActions
 *
 */
$("#obj43914").bind("SCActionDragDrop43917_droppedOutsideTargetActions", function(event) {
	if (window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43914_SCActionDragDrop43917_droppedOutsideTargetActions is still running");
	return;
}
var obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_loopCount = 0;
obj43914_SCActionDragDrop43917_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj43914: Event droppedInsideTargetActions_5
 *
 */
$("#obj43914").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj43914_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43914_droppedInsideTargetActions_5 is still running");
	return;
}
var obj43914_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj43914_droppedInsideTargetActions_5_loopCount = 0;
obj43914_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj43914: Event droppedInsideTargetActions_4
 *
 */
$("#obj43914").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj43914_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43914_droppedInsideTargetActions_4 is still running");
	return;
}
var obj43914_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43914_droppedInsideTargetActions_4_loopCount = 0;
obj43914_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj43914: Event droppedInsideTargetActions_3
 *
 */
$("#obj43914").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj43914_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43914_droppedInsideTargetActions_3 is still running");
	return;
}
var obj43914_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43914_droppedInsideTargetActions_3_loopCount = 0;
obj43914_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj43914: Event droppedInsideTargetActions_2
 *
 */
$("#obj43914").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj43914_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43914_droppedInsideTargetActions_2 is still running");
	return;
}
var obj43914_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43914_droppedInsideTargetActions_2_loopCount = 0;
obj43914_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj43914: Event droppedInsideTargetActions
 *
 */
$("#obj43914").bind("droppedInsideTargetActions", function(event) {
	if (window.obj43914_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43914_droppedInsideTargetActions is still running");
	return;
}
var obj43914_droppedInsideTargetActions_runningActionsCount = 0;
var obj43914_droppedInsideTargetActions_loopCount = 0;
obj43914_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj43847: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj43847");
	var winTarget = document.getElementById("obj43847");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj43847").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj43847_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj43847_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj43847_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43847_onTouchDown is still running");
	return;
}
var obj43847_onTouchDown_runningActionsCount = 0;
var obj43847_onTouchDown_loopCount = 0;
obj43847_onTouchDown_actionGroup0();
});



/*
 *
 *   obj43847: Event SCActionDragDrop43850_droppedOutsideTargetActions
 *
 */
$("#obj43847").bind("SCActionDragDrop43850_droppedOutsideTargetActions", function(event) {
	if (window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43847_SCActionDragDrop43850_droppedOutsideTargetActions is still running");
	return;
}
var obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_loopCount = 0;
obj43847_SCActionDragDrop43850_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj43847: Event droppedInsideTargetActions_5
 *
 */
$("#obj43847").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj43847_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43847_droppedInsideTargetActions_5 is still running");
	return;
}
var obj43847_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj43847_droppedInsideTargetActions_5_loopCount = 0;
obj43847_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj43847: Event droppedInsideTargetActions_4
 *
 */
$("#obj43847").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj43847_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43847_droppedInsideTargetActions_4 is still running");
	return;
}
var obj43847_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43847_droppedInsideTargetActions_4_loopCount = 0;
obj43847_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj43847: Event droppedInsideTargetActions_3
 *
 */
$("#obj43847").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj43847_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43847_droppedInsideTargetActions_3 is still running");
	return;
}
var obj43847_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43847_droppedInsideTargetActions_3_loopCount = 0;
obj43847_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj43847: Event droppedInsideTargetActions_2
 *
 */
$("#obj43847").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj43847_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43847_droppedInsideTargetActions_2 is still running");
	return;
}
var obj43847_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43847_droppedInsideTargetActions_2_loopCount = 0;
obj43847_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj43847: Event droppedInsideTargetActions
 *
 */
$("#obj43847").bind("droppedInsideTargetActions", function(event) {
	if (window.obj43847_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43847_droppedInsideTargetActions is still running");
	return;
}
var obj43847_droppedInsideTargetActions_runningActionsCount = 0;
var obj43847_droppedInsideTargetActions_loopCount = 0;
obj43847_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj43780: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj43780");
	var winTarget = document.getElementById("obj43780");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj43780").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj43780_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj43780_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj43780_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43780_onTouchDown is still running");
	return;
}
var obj43780_onTouchDown_runningActionsCount = 0;
var obj43780_onTouchDown_loopCount = 0;
obj43780_onTouchDown_actionGroup0();
});



/*
 *
 *   obj43780: Event SCActionDragDrop43783_droppedOutsideTargetActions
 *
 */
$("#obj43780").bind("SCActionDragDrop43783_droppedOutsideTargetActions", function(event) {
	if (window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43780_SCActionDragDrop43783_droppedOutsideTargetActions is still running");
	return;
}
var obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_loopCount = 0;
obj43780_SCActionDragDrop43783_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj43780: Event droppedInsideTargetActions_5
 *
 */
$("#obj43780").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj43780_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43780_droppedInsideTargetActions_5 is still running");
	return;
}
var obj43780_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj43780_droppedInsideTargetActions_5_loopCount = 0;
obj43780_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj43780: Event droppedInsideTargetActions_4
 *
 */
$("#obj43780").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj43780_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43780_droppedInsideTargetActions_4 is still running");
	return;
}
var obj43780_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43780_droppedInsideTargetActions_4_loopCount = 0;
obj43780_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj43780: Event droppedInsideTargetActions_3
 *
 */
$("#obj43780").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj43780_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43780_droppedInsideTargetActions_3 is still running");
	return;
}
var obj43780_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43780_droppedInsideTargetActions_3_loopCount = 0;
obj43780_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj43780: Event droppedInsideTargetActions_2
 *
 */
$("#obj43780").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj43780_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43780_droppedInsideTargetActions_2 is still running");
	return;
}
var obj43780_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43780_droppedInsideTargetActions_2_loopCount = 0;
obj43780_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj43780: Event droppedInsideTargetActions
 *
 */
$("#obj43780").bind("droppedInsideTargetActions", function(event) {
	if (window.obj43780_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43780_droppedInsideTargetActions is still running");
	return;
}
var obj43780_droppedInsideTargetActions_runningActionsCount = 0;
var obj43780_droppedInsideTargetActions_loopCount = 0;
obj43780_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67422: Event Touch Down
 *
 */
$("#obj67422").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67422_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67422_onTap is still running");
	return;
}
var obj67422_onTap_runningActionsCount = 0;
var obj67422_onTap_loopCount = 0;
obj67422_onTap_actionGroup0();
});










/*
 *
 *   obj67414: Event Touch Down
 *
 */
$("#obj67414").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67414_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67414_onTap is still running");
	return;
}
var obj67414_onTap_runningActionsCount = 0;
var obj67414_onTap_loopCount = 0;
obj67414_onTap_actionGroup0();
});










/*
 *
 *   obj88693: Event Touch Down
 *
 */
$("#obj88693").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88693_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88693_onTap is still running");
	return;
}
var obj88693_onTap_runningActionsCount = 0;
var obj88693_onTap_loopCount = 0;
obj88693_onTap_actionGroup0();
});










/*
 *
 *   obj88688: Event Touch Down
 *
 */
$("#obj88688").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88688_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88688_onTap is still running");
	return;
}
var obj88688_onTap_runningActionsCount = 0;
var obj88688_onTap_loopCount = 0;
obj88688_onTap_actionGroup0();
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
	
$("#obj44260").trigger('SCEventShow');
$("#obj44244").trigger('SCEventShow');
$("#obj44241").trigger('SCEventShow');
$("#obj44237").trigger('SCEventShow');
$("#obj44235").trigger('SCEventShow');
$("#obj44233").trigger('SCEventShow');
$("#obj44231").trigger('SCEventShow');
$("#obj44229").trigger('SCEventShow');
$("#obj44227").trigger('SCEventShow');
$("#obj44225").trigger('SCEventShow');
$("#obj44223").trigger('SCEventShow');
$("#obj44221").trigger('SCEventShow');
$("#obj44219").trigger('SCEventShow');
$("#obj44217").trigger('SCEventShow');
$("#obj44215").trigger('SCEventShow');
$("#obj44213").trigger('SCEventShow');
$("#obj44211").trigger('SCEventShow');
$("#obj44209").trigger('SCEventShow');
$("#obj44207").trigger('SCEventShow');
$("#obj44205").trigger('SCEventShow');
$("#obj44203").trigger('SCEventShow');
$("#obj44201").trigger('SCEventShow');
$("#obj44199").trigger('SCEventShow');
$("#obj44197").trigger('SCEventShow');
$("#obj44195").trigger('SCEventShow');
$("#obj44193").trigger('SCEventShow');
$("#obj44191").trigger('SCEventShow');
$("#obj44189").trigger('SCEventShow');
$("#obj44122").trigger('SCEventShow');
$("#obj44055").trigger('SCEventShow');
$("#obj43914").trigger('SCEventShow');
$("#obj43847").trigger('SCEventShow');
$("#obj43780").trigger('SCEventShow');
$("#obj67422").trigger('SCEventShow');
$("#obj67414").trigger('SCEventShow');
$("#obj88693").trigger('SCEventShow');
$("#obj88688").trigger('SCEventShow');
$("#obj88698").trigger('SCEventShow');
$("#obj94931").trigger('SCEventShow');
$("#obj67428").trigger('SCEventShow');
	
});