pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 42808;
pubcoder.page.title = pubcoder.page.title || "146";
pubcoder.page.number = pubcoder.page.number || 146;
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
var obj43264_onTap_activeActionGroupIndex = -1;
var obj43264_onTap_runningActionsCount = 0;
var obj43264_onTap_loopCount = 0;
var obj43261_onTap_activeActionGroupIndex = -1;
var obj43261_onTap_runningActionsCount = 0;
var obj43261_onTap_loopCount = 0;
var obj43257_onTap_activeActionGroupIndex = -1;
var obj43257_onTap_runningActionsCount = 0;
var obj43257_onTap_loopCount = 0;
var obj43144_onDrag_activeActionGroupIndex = -1;
var obj43144_onDrag_runningActionsCount = 0;
var obj43144_onDrag_loopCount = 0;
var obj43144_onTouchDown_activeActionGroupIndex = -1;
var obj43144_onTouchDown_runningActionsCount = 0;
var obj43144_onTouchDown_loopCount = 0;
var obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_loopCount = 0;
var obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43144_droppedInsideTargetActions_4_loopCount = 0;
var obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43144_droppedInsideTargetActions_3_loopCount = 0;
var obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43144_droppedInsideTargetActions_2_loopCount = 0;
var obj43144_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj43144_droppedInsideTargetActions_runningActionsCount = 0;
var obj43144_droppedInsideTargetActions_loopCount = 0;
var obj42876_onDrag_activeActionGroupIndex = -1;
var obj42876_onDrag_runningActionsCount = 0;
var obj42876_onDrag_loopCount = 0;
var obj42876_onTouchDown_activeActionGroupIndex = -1;
var obj42876_onTouchDown_runningActionsCount = 0;
var obj42876_onTouchDown_loopCount = 0;
var obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_loopCount = 0;
var obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42876_droppedInsideTargetActions_4_loopCount = 0;
var obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42876_droppedInsideTargetActions_3_loopCount = 0;
var obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42876_droppedInsideTargetActions_2_loopCount = 0;
var obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj42876_droppedInsideTargetActions_runningActionsCount = 0;
var obj42876_droppedInsideTargetActions_loopCount = 0;
var obj43344_onDrag_activeActionGroupIndex = -1;
var obj43344_onDrag_runningActionsCount = 0;
var obj43344_onDrag_loopCount = 0;
var obj43344_onTouchDown_activeActionGroupIndex = -1;
var obj43344_onTouchDown_runningActionsCount = 0;
var obj43344_onTouchDown_loopCount = 0;
var obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_loopCount = 0;
var obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43344_droppedInsideTargetActions_4_loopCount = 0;
var obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43344_droppedInsideTargetActions_3_loopCount = 0;
var obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43344_droppedInsideTargetActions_2_loopCount = 0;
var obj43344_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj43344_droppedInsideTargetActions_runningActionsCount = 0;
var obj43344_droppedInsideTargetActions_loopCount = 0;
var obj43376_onDrag_activeActionGroupIndex = -1;
var obj43376_onDrag_runningActionsCount = 0;
var obj43376_onDrag_loopCount = 0;
var obj43376_onTouchDown_activeActionGroupIndex = -1;
var obj43376_onTouchDown_runningActionsCount = 0;
var obj43376_onTouchDown_loopCount = 0;
var obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_loopCount = 0;
var obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43376_droppedInsideTargetActions_4_loopCount = 0;
var obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43376_droppedInsideTargetActions_3_loopCount = 0;
var obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43376_droppedInsideTargetActions_2_loopCount = 0;
var obj43376_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj43376_droppedInsideTargetActions_runningActionsCount = 0;
var obj43376_droppedInsideTargetActions_loopCount = 0;
var obj43408_onDrag_activeActionGroupIndex = -1;
var obj43408_onDrag_runningActionsCount = 0;
var obj43408_onDrag_loopCount = 0;
var obj43408_onTouchDown_activeActionGroupIndex = -1;
var obj43408_onTouchDown_runningActionsCount = 0;
var obj43408_onTouchDown_loopCount = 0;
var obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_loopCount = 0;
var obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43408_droppedInsideTargetActions_4_loopCount = 0;
var obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43408_droppedInsideTargetActions_3_loopCount = 0;
var obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43408_droppedInsideTargetActions_2_loopCount = 0;
var obj43408_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj43408_droppedInsideTargetActions_runningActionsCount = 0;
var obj43408_droppedInsideTargetActions_loopCount = 0;
var obj43440_onDrag_activeActionGroupIndex = -1;
var obj43440_onDrag_runningActionsCount = 0;
var obj43440_onDrag_loopCount = 0;
var obj43440_onTouchDown_activeActionGroupIndex = -1;
var obj43440_onTouchDown_runningActionsCount = 0;
var obj43440_onTouchDown_loopCount = 0;
var obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_loopCount = 0;
var obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43440_droppedInsideTargetActions_4_loopCount = 0;
var obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43440_droppedInsideTargetActions_3_loopCount = 0;
var obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43440_droppedInsideTargetActions_2_loopCount = 0;
var obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj43440_droppedInsideTargetActions_runningActionsCount = 0;
var obj43440_droppedInsideTargetActions_loopCount = 0;
var obj67342_onTap_activeActionGroupIndex = -1;
var obj67342_onTap_runningActionsCount = 0;
var obj67342_onTap_loopCount = 0;
var obj67334_onTap_activeActionGroupIndex = -1;
var obj67334_onTap_runningActionsCount = 0;
var obj67334_onTap_loopCount = 0;
var obj88621_onTap_activeActionGroupIndex = -1;
var obj88621_onTap_runningActionsCount = 0;
var obj88621_onTap_loopCount = 0;
var obj88616_onTap_activeActionGroupIndex = -1;
var obj88616_onTap_runningActionsCount = 0;
var obj88616_onTap_loopCount = 0;
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
		
obj43264_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43264_onTap_activeActionGroupIndex = -1;
		$("#obj43264").trigger("obj43264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43264) {
				console.warn("de-queueing event obj43264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43264_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43266();
function goToPage_43266() {
	window.obj43264_onTap_runningActionsCount = obj43264_onTap_runningActionsCount + 1;
	$("#anchor864")[0].click();
	window.obj43264_onTap_runningActionsCount = window.obj43264_onTap_runningActionsCount - 1;
if (window.obj43264_onTap_runningActionsCount < 0) {
	window.obj43264_onTap_runningActionsCount = 0;
} else if (window.obj43264_onTap_runningActionsCount == 0) {
	obj43264_onTap_actionGroup1();
}
}





















};
obj43264_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43264_onTap_activeActionGroupIndex = -1;
		$("#obj43264").trigger("obj43264_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43264) {
				console.warn("de-queueing event obj43264." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43264").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43264_onTap_activeActionGroupIndex = 1;
	





















};
obj43261_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43261_onTap_activeActionGroupIndex = -1;
		$("#obj43261").trigger("obj43261_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43261) {
				console.warn("de-queueing event obj43261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43261_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43263();
function goToPage_43263() {
	window.obj43261_onTap_runningActionsCount = obj43261_onTap_runningActionsCount + 1;
	$("#anchor865")[0].click();
	window.obj43261_onTap_runningActionsCount = window.obj43261_onTap_runningActionsCount - 1;
if (window.obj43261_onTap_runningActionsCount < 0) {
	window.obj43261_onTap_runningActionsCount = 0;
} else if (window.obj43261_onTap_runningActionsCount == 0) {
	obj43261_onTap_actionGroup1();
}
}





















};
obj43261_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43261_onTap_activeActionGroupIndex = -1;
		$("#obj43261").trigger("obj43261_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43261) {
				console.warn("de-queueing event obj43261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43261_onTap_activeActionGroupIndex = 1;
	





















};
obj43257_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43257_onTap_activeActionGroupIndex = -1;
		$("#obj43257").trigger("obj43257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43257) {
				console.warn("de-queueing event obj43257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43257_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43259();
function goToPage_43259() {
	window.obj43257_onTap_runningActionsCount = obj43257_onTap_runningActionsCount + 1;
	$("#anchor866")[0].click();
	window.obj43257_onTap_runningActionsCount = window.obj43257_onTap_runningActionsCount - 1;
if (window.obj43257_onTap_runningActionsCount < 0) {
	window.obj43257_onTap_runningActionsCount = 0;
} else if (window.obj43257_onTap_runningActionsCount == 0) {
	obj43257_onTap_actionGroup1();
}
}





















};
obj43257_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43257_onTap_activeActionGroupIndex = -1;
		$("#obj43257").trigger("obj43257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43257) {
				console.warn("de-queueing event obj43257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43257_onTap_activeActionGroupIndex = 1;
	





















};
obj43144_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj43144");
//	action: dragDrop
//	target: obj43144 
dragDrop_43147();
function dragDrop_43147() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj43144_onTouchDown_runningActionsCount = obj43144_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj43144');
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
	  	containerNode = $('#obj43247');
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
    	window.obj43144_onTouchDown_runningActionsCount = window.obj43144_onTouchDown_runningActionsCount - 1;
if (window.obj43144_onTouchDown_runningActionsCount < 0) {
	window.obj43144_onTouchDown_runningActionsCount = 0;
} else if (window.obj43144_onTouchDown_runningActionsCount == 0) {
	obj43144_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj43243","#obj43229","#obj43225","#obj43221");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_43147 = false;
    	var dropped_id_43147;
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
					dropped_43147 = true;
					dropped_id_43147 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_43147) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj43144").trigger('SCActionDragDrop43147_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj43144_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43144_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj43144 
move_92631();
function move_92631() {
	window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_runningActionsCount = obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43144");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_runningActionsCount = window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj43144_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43299();
function runjs_43299() {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = obj43144_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_4_runningActionsCount = window.obj43144_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43303();
function switchText_43303() {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = obj43144_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43144_droppedInsideTargetActions_4_runningActionsCount = window.obj43144_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_4_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43144_droppedInsideTargetActions_4_runningActionsCount = window.obj43144_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
	}
}






};
obj43144_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43300();
function runjs_43300() {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = obj43144_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("border-color", "#058E3F"); $("#obj43221").css("border-width", "2px"); $("#obj43221").css("border-style", "solid"); $("#obj43221").css("border-radius", "10px"); $("#obj43221").css("-webkit-border-radius", "10px"); $("#obj43221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_4_runningActionsCount = window.obj43144_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43219 
hide_43301();
function hide_43301() {
	var selector = "#obj43219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = obj43144_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43144_droppedInsideTargetActions_4_runningActionsCount = window.obj43144_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43301(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43144_droppedInsideTargetActions_4_runningActionsCount = window.obj43144_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43144_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43302();
function runjs_43302() {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = obj43144_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43144").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_4_runningActionsCount = window.obj43144_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43304();
function playAudio_43304() {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = obj43144_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43144_droppedInsideTargetActions_4_runningActionsCount = window.obj43144_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_4_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43144_droppedInsideTargetActions_4_runningActionsCount = window.obj43144_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_4_actionGroup6();
}
	}
}









};
obj43144_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90532();
function switchText_90532() {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = obj43144_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43144_droppedInsideTargetActions_4_runningActionsCount = window.obj43144_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_4_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43144_droppedInsideTargetActions_4_runningActionsCount = window.obj43144_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_4_actionGroup7();
}
		}, 1);
	}
}






};
obj43144_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	





















};
obj43144_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43163();
function runjs_43163() {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = obj43144_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_3_runningActionsCount = window.obj43144_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43167();
function switchText_43167() {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = obj43144_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43144_droppedInsideTargetActions_3_runningActionsCount = window.obj43144_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43144_droppedInsideTargetActions_3_runningActionsCount = window.obj43144_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj43144_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43164();
function runjs_43164() {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = obj43144_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("border-color", "#058E3F"); $("#obj43225").css("border-width", "2px"); $("#obj43225").css("border-style", "solid"); $("#obj43225").css("border-radius", "10px"); $("#obj43225").css("-webkit-border-radius", "10px"); $("#obj43225").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_3_runningActionsCount = window.obj43144_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43223 
hide_43165();
function hide_43165() {
	var selector = "#obj43223";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = obj43144_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43144_droppedInsideTargetActions_3_runningActionsCount = window.obj43144_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43165(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43144_droppedInsideTargetActions_3_runningActionsCount = window.obj43144_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43144_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43166();
function runjs_43166() {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = obj43144_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43144").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_3_runningActionsCount = window.obj43144_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43168();
function playAudio_43168() {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = obj43144_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43144_droppedInsideTargetActions_3_runningActionsCount = window.obj43144_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43144_droppedInsideTargetActions_3_runningActionsCount = window.obj43144_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj43144_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90531();
function switchText_90531() {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = obj43144_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43144_droppedInsideTargetActions_3_runningActionsCount = window.obj43144_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43144_droppedInsideTargetActions_3_runningActionsCount = window.obj43144_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj43144_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj43144_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43156();
function runjs_43156() {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = obj43144_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_2_runningActionsCount = window.obj43144_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43160();
function switchText_43160() {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = obj43144_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43144_droppedInsideTargetActions_2_runningActionsCount = window.obj43144_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43144_droppedInsideTargetActions_2_runningActionsCount = window.obj43144_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj43144_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43157();
function runjs_43157() {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = obj43144_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("border-color", "#058E3F"); $("#obj43229").css("border-width", "2px"); $("#obj43229").css("border-style", "solid"); $("#obj43229").css("border-radius", "10px"); $("#obj43229").css("-webkit-border-radius", "10px"); $("#obj43229").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_2_runningActionsCount = window.obj43144_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43227 
hide_43158();
function hide_43158() {
	var selector = "#obj43227";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = obj43144_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43144_droppedInsideTargetActions_2_runningActionsCount = window.obj43144_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43158(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43144_droppedInsideTargetActions_2_runningActionsCount = window.obj43144_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43144_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43159();
function runjs_43159() {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = obj43144_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43144").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_2_runningActionsCount = window.obj43144_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43161();
function playAudio_43161() {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = obj43144_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43144_droppedInsideTargetActions_2_runningActionsCount = window.obj43144_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43144_droppedInsideTargetActions_2_runningActionsCount = window.obj43144_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj43144_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90530();
function switchText_90530() {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = obj43144_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43144_droppedInsideTargetActions_2_runningActionsCount = window.obj43144_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43144_droppedInsideTargetActions_2_runningActionsCount = window.obj43144_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj43144_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj43144_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43149();
function runjs_43149() {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = obj43144_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_runningActionsCount = window.obj43144_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43153();
function switchText_43153() {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = obj43144_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43144_droppedInsideTargetActions_runningActionsCount = window.obj43144_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43144_droppedInsideTargetActions_runningActionsCount = window.obj43144_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj43144_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43150();
function runjs_43150() {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = obj43144_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("border-color", "#058E3F"); $("#obj43243").css("border-width", "2px"); $("#obj43243").css("border-style", "solid"); $("#obj43243").css("border-radius", "10px"); $("#obj43243").css("-webkit-border-radius", "10px"); $("#obj43243").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_runningActionsCount = window.obj43144_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43241 
hide_43151();
function hide_43151() {
	var selector = "#obj43241";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43144_droppedInsideTargetActions_runningActionsCount = obj43144_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43144_droppedInsideTargetActions_runningActionsCount = window.obj43144_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43151(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43144_droppedInsideTargetActions_runningActionsCount = window.obj43144_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43144_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43152();
function runjs_43152() {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = obj43144_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43144").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43144_droppedInsideTargetActions_runningActionsCount = window.obj43144_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj43144_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43154();
function playAudio_43154() {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = obj43144_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43144_droppedInsideTargetActions_runningActionsCount = window.obj43144_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43144_droppedInsideTargetActions_runningActionsCount = window.obj43144_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj43144_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90529();
function switchText_90529() {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = obj43144_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43144_droppedInsideTargetActions_runningActionsCount = window.obj43144_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43144_droppedInsideTargetActions_runningActionsCount = window.obj43144_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43144_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43144_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43144_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43144_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj43144_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43144").trigger("obj43144_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43144) {
				console.warn("de-queueing event obj43144." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43144").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43144_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj42876_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj42876");
//	action: dragDrop
//	target: obj42876 
dragDrop_42879();
function dragDrop_42879() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj42876_onTouchDown_runningActionsCount = obj42876_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj42876');
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
	  	containerNode = $('#obj43247');
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
    	window.obj42876_onTouchDown_runningActionsCount = window.obj42876_onTouchDown_runningActionsCount - 1;
if (window.obj42876_onTouchDown_runningActionsCount < 0) {
	window.obj42876_onTouchDown_runningActionsCount = 0;
} else if (window.obj42876_onTouchDown_runningActionsCount == 0) {
	obj42876_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj43243","#obj43229","#obj43225","#obj43221");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_42879 = false;
    	var dropped_id_42879;
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
					dropped_42879 = true;
					dropped_id_42879 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_42879) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj42876").trigger('SCActionDragDrop42879_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj42876_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42876_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj42876 
move_92633();
function move_92633() {
	window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_runningActionsCount = obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj42876");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 246;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_runningActionsCount = window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj42876_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42902();
function runjs_42902() {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_42903();
function runjs_42903() {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("border-color", "#C00000"); $("#obj43221").css("border-width", "2px"); $("#obj43221").css("border-style", "solid"); $("#obj43221").css("border-radius", "10px"); $("#obj43221").css("-webkit-border-radius", "10px"); $("#obj43221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43219 
hide_42904();
function hide_42904() {
	var selector = "#obj43219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42904(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42876_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_42905();
function runjs_42905() {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42876").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_42906();
function switchText_42906() {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj42876_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj42876 
move_42907();
function move_42907() {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj42876");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 246;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj42876_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_42908();
function runjs_42908() {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_42909();
function runjs_42909() {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("border-color", "#000000"); $("#obj43221").css("border-width", "1px"); $("#obj43221").css("border-style", "solid"); $("#obj43221").css("border-radius", "10px"); $("#obj43221").css("-webkit-border-radius", "10px"); $("#obj43221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43219
(function(){
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj43219";
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
					window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42876_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_42911();
function runjs_42911() {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42876").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_42912();
function runjs_42912() {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42876").css("border-color", "rgba(0,0,0,0)"); $("#obj42876").css("border-width", "0px"); $("#obj42876").css("border-style", "solid"); $("#obj42876").css("border-radius", "10px"); $("#obj42876").css("-webkit-border-radius", "10px"); $("#obj42876").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43233 
playAudio_42913();
function playAudio_42913() {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj43233")[0];
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
		    window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj42876_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_42914();
function switchText_42914() {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = obj42876_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42876_droppedInsideTargetActions_4_runningActionsCount = window.obj42876_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj42876_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj42876_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43318();
function runjs_43318() {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43319();
function runjs_43319() {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("border-color", "#C00000"); $("#obj43225").css("border-width", "2px"); $("#obj43225").css("border-style", "solid"); $("#obj43225").css("border-radius", "10px"); $("#obj43225").css("-webkit-border-radius", "10px"); $("#obj43225").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43223 
hide_43320();
function hide_43320() {
	var selector = "#obj43223";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43320(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42876_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43321();
function runjs_43321() {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj42876").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43322();
function switchText_43322() {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj42876_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj42876 
move_43323();
function move_43323() {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj42876");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 246;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj42876_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43324();
function runjs_43324() {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43325();
function runjs_43325() {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("border-color", "#000000"); $("#obj43225").css("border-width", "1px"); $("#obj43225").css("border-style", "solid"); $("#obj43225").css("border-radius", "10px"); $("#obj43225").css("-webkit-border-radius", "10px"); $("#obj43225").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43223
(function(){
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj43223";
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
					window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42876_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43327();
function runjs_43327() {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj42876").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43328();
function runjs_43328() {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj42876").css("border-color", "rgba(0,0,0,0)"); $("#obj42876").css("border-width", "0px"); $("#obj42876").css("border-style", "solid"); $("#obj42876").css("border-radius", "10px"); $("#obj42876").css("-webkit-border-radius", "10px"); $("#obj42876").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43233 
playAudio_43329();
function playAudio_43329() {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj43233")[0];
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
		    window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj42876_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43330();
function switchText_43330() {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = obj42876_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42876_droppedInsideTargetActions_3_runningActionsCount = window.obj42876_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj42876_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj42876_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43305();
function runjs_43305() {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43306();
function runjs_43306() {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("border-color", "#C00000"); $("#obj43229").css("border-width", "2px"); $("#obj43229").css("border-style", "solid"); $("#obj43229").css("border-radius", "10px"); $("#obj43229").css("-webkit-border-radius", "10px"); $("#obj43229").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43227 
hide_43307();
function hide_43307() {
	var selector = "#obj43227";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43307(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42876_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43308();
function runjs_43308() {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj42876").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43309();
function switchText_43309() {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj42876_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj42876 
move_43310();
function move_43310() {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj42876");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 246;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj42876_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43311();
function runjs_43311() {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43312();
function runjs_43312() {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("border-color", "#000000"); $("#obj43229").css("border-width", "1px"); $("#obj43229").css("border-style", "solid"); $("#obj43229").css("border-radius", "10px"); $("#obj43229").css("-webkit-border-radius", "10px"); $("#obj43229").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43227
(function(){
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj43227";
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
					window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42876_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43314();
function runjs_43314() {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj42876").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43315();
function runjs_43315() {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj42876").css("border-color", "rgba(0,0,0,0)"); $("#obj42876").css("border-width", "0px"); $("#obj42876").css("border-style", "solid"); $("#obj42876").css("border-radius", "10px"); $("#obj42876").css("-webkit-border-radius", "10px"); $("#obj42876").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43233 
playAudio_43316();
function playAudio_43316() {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj43233")[0];
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
		    window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj42876_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43317();
function switchText_43317() {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = obj42876_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42876_droppedInsideTargetActions_2_runningActionsCount = window.obj42876_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj42876_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj42876_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43286();
function runjs_43286() {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43287();
function runjs_43287() {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("border-color", "#C00000"); $("#obj43243").css("border-width", "2px"); $("#obj43243").css("border-style", "solid"); $("#obj43243").css("border-radius", "10px"); $("#obj43243").css("-webkit-border-radius", "10px"); $("#obj43243").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43241 
hide_43288();
function hide_43288() {
	var selector = "#obj43241";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43288(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42876_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43289();
function runjs_43289() {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj42876").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43290();
function switchText_43290() {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj42876_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj42876 
move_43291();
function move_43291() {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj42876");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 246;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj42876_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43292();
function runjs_43292() {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43293();
function runjs_43293() {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("border-color", "#000000"); $("#obj43243").css("border-width", "1px"); $("#obj43243").css("border-style", "solid"); $("#obj43243").css("border-radius", "10px"); $("#obj43243").css("-webkit-border-radius", "10px"); $("#obj43243").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43241
(function(){
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj43241";
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
					window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup9();
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
				window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42876_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43295();
function runjs_43295() {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj42876").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43296();
function runjs_43296() {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj42876").css("border-color", "rgba(0,0,0,0)"); $("#obj42876").css("border-width", "0px"); $("#obj42876").css("border-style", "solid"); $("#obj42876").css("border-radius", "10px"); $("#obj42876").css("-webkit-border-radius", "10px"); $("#obj42876").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj42876_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43233 
playAudio_43297();
function playAudio_43297() {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj43233")[0];
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
		    window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj42876_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43298();
function switchText_43298() {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = obj42876_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42876_droppedInsideTargetActions_runningActionsCount = window.obj42876_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42876_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42876_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42876_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42876_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj42876_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42876").trigger("obj42876_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42876) {
				console.warn("de-queueing event obj42876." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42876").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42876_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj43344_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj43344");
//	action: dragDrop
//	target: obj43344 
dragDrop_43347();
function dragDrop_43347() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj43344_onTouchDown_runningActionsCount = obj43344_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj43344');
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
	  	containerNode = $('#obj43247');
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
    	window.obj43344_onTouchDown_runningActionsCount = window.obj43344_onTouchDown_runningActionsCount - 1;
if (window.obj43344_onTouchDown_runningActionsCount < 0) {
	window.obj43344_onTouchDown_runningActionsCount = 0;
} else if (window.obj43344_onTouchDown_runningActionsCount == 0) {
	obj43344_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj43243","#obj43229","#obj43225","#obj43221");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_43347 = false;
    	var dropped_id_43347;
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
					dropped_43347 = true;
					dropped_id_43347 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_43347) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj43344").trigger('SCActionDragDrop43347_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj43344_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43344_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj43344 
move_92641();
function move_92641() {
	window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_runningActionsCount = obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43344");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 403;
	var moveY = 649;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_runningActionsCount = window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj43344_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43370();
function runjs_43370() {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = obj43344_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_4_runningActionsCount = window.obj43344_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43374();
function switchText_43374() {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = obj43344_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43344_droppedInsideTargetActions_4_runningActionsCount = window.obj43344_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_4_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43344_droppedInsideTargetActions_4_runningActionsCount = window.obj43344_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
	}
}






};
obj43344_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43371();
function runjs_43371() {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = obj43344_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("border-color", "#058E3F"); $("#obj43221").css("border-width", "2px"); $("#obj43221").css("border-style", "solid"); $("#obj43221").css("border-radius", "10px"); $("#obj43221").css("-webkit-border-radius", "10px"); $("#obj43221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_4_runningActionsCount = window.obj43344_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43219 
hide_43372();
function hide_43372() {
	var selector = "#obj43219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = obj43344_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43344_droppedInsideTargetActions_4_runningActionsCount = window.obj43344_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43372(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43344_droppedInsideTargetActions_4_runningActionsCount = window.obj43344_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43344_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43373();
function runjs_43373() {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = obj43344_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43344").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_4_runningActionsCount = window.obj43344_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43375();
function playAudio_43375() {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = obj43344_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43344_droppedInsideTargetActions_4_runningActionsCount = window.obj43344_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_4_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43344_droppedInsideTargetActions_4_runningActionsCount = window.obj43344_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_4_actionGroup6();
}
	}
}









};
obj43344_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90544();
function switchText_90544() {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = obj43344_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43344_droppedInsideTargetActions_4_runningActionsCount = window.obj43344_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_4_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43344_droppedInsideTargetActions_4_runningActionsCount = window.obj43344_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_4_actionGroup7();
}
		}, 1);
	}
}






};
obj43344_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	





















};
obj43344_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43363();
function runjs_43363() {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = obj43344_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_3_runningActionsCount = window.obj43344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43367();
function switchText_43367() {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = obj43344_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43344_droppedInsideTargetActions_3_runningActionsCount = window.obj43344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43344_droppedInsideTargetActions_3_runningActionsCount = window.obj43344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj43344_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43364();
function runjs_43364() {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = obj43344_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("border-color", "#058E3F"); $("#obj43225").css("border-width", "2px"); $("#obj43225").css("border-style", "solid"); $("#obj43225").css("border-radius", "10px"); $("#obj43225").css("-webkit-border-radius", "10px"); $("#obj43225").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_3_runningActionsCount = window.obj43344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43223 
hide_43365();
function hide_43365() {
	var selector = "#obj43223";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = obj43344_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43344_droppedInsideTargetActions_3_runningActionsCount = window.obj43344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43365(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43344_droppedInsideTargetActions_3_runningActionsCount = window.obj43344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43344_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43366();
function runjs_43366() {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = obj43344_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43344").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_3_runningActionsCount = window.obj43344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43368();
function playAudio_43368() {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = obj43344_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43344_droppedInsideTargetActions_3_runningActionsCount = window.obj43344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43344_droppedInsideTargetActions_3_runningActionsCount = window.obj43344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj43344_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90543();
function switchText_90543() {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = obj43344_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43344_droppedInsideTargetActions_3_runningActionsCount = window.obj43344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43344_droppedInsideTargetActions_3_runningActionsCount = window.obj43344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj43344_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj43344_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43356();
function runjs_43356() {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = obj43344_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_2_runningActionsCount = window.obj43344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43360();
function switchText_43360() {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = obj43344_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43344_droppedInsideTargetActions_2_runningActionsCount = window.obj43344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43344_droppedInsideTargetActions_2_runningActionsCount = window.obj43344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj43344_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43357();
function runjs_43357() {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = obj43344_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("border-color", "#058E3F"); $("#obj43229").css("border-width", "2px"); $("#obj43229").css("border-style", "solid"); $("#obj43229").css("border-radius", "10px"); $("#obj43229").css("-webkit-border-radius", "10px"); $("#obj43229").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_2_runningActionsCount = window.obj43344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43227 
hide_43358();
function hide_43358() {
	var selector = "#obj43227";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = obj43344_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43344_droppedInsideTargetActions_2_runningActionsCount = window.obj43344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43358(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43344_droppedInsideTargetActions_2_runningActionsCount = window.obj43344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43344_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43359();
function runjs_43359() {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = obj43344_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43344").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_2_runningActionsCount = window.obj43344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43361();
function playAudio_43361() {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = obj43344_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43344_droppedInsideTargetActions_2_runningActionsCount = window.obj43344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43344_droppedInsideTargetActions_2_runningActionsCount = window.obj43344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj43344_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90542();
function switchText_90542() {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = obj43344_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43344_droppedInsideTargetActions_2_runningActionsCount = window.obj43344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43344_droppedInsideTargetActions_2_runningActionsCount = window.obj43344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj43344_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj43344_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43349();
function runjs_43349() {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = obj43344_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_runningActionsCount = window.obj43344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43353();
function switchText_43353() {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = obj43344_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43344_droppedInsideTargetActions_runningActionsCount = window.obj43344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43344_droppedInsideTargetActions_runningActionsCount = window.obj43344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj43344_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43350();
function runjs_43350() {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = obj43344_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("border-color", "#058E3F"); $("#obj43243").css("border-width", "2px"); $("#obj43243").css("border-style", "solid"); $("#obj43243").css("border-radius", "10px"); $("#obj43243").css("-webkit-border-radius", "10px"); $("#obj43243").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_runningActionsCount = window.obj43344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43241 
hide_43351();
function hide_43351() {
	var selector = "#obj43241";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43344_droppedInsideTargetActions_runningActionsCount = obj43344_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43344_droppedInsideTargetActions_runningActionsCount = window.obj43344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43351(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43344_droppedInsideTargetActions_runningActionsCount = window.obj43344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43344_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43352();
function runjs_43352() {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = obj43344_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43344").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43344_droppedInsideTargetActions_runningActionsCount = window.obj43344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj43344_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43354();
function playAudio_43354() {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = obj43344_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43344_droppedInsideTargetActions_runningActionsCount = window.obj43344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43344_droppedInsideTargetActions_runningActionsCount = window.obj43344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj43344_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90541();
function switchText_90541() {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = obj43344_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43344_droppedInsideTargetActions_runningActionsCount = window.obj43344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43344_droppedInsideTargetActions_runningActionsCount = window.obj43344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43344_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj43344_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43344").trigger("obj43344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43344) {
				console.warn("de-queueing event obj43344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43344_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj43376_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj43376");
//	action: dragDrop
//	target: obj43376 
dragDrop_43379();
function dragDrop_43379() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj43376_onTouchDown_runningActionsCount = obj43376_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj43376');
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
	  	containerNode = $('#obj43247');
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
    	window.obj43376_onTouchDown_runningActionsCount = window.obj43376_onTouchDown_runningActionsCount - 1;
if (window.obj43376_onTouchDown_runningActionsCount < 0) {
	window.obj43376_onTouchDown_runningActionsCount = 0;
} else if (window.obj43376_onTouchDown_runningActionsCount == 0) {
	obj43376_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj43243","#obj43229","#obj43225","#obj43221");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_43379 = false;
    	var dropped_id_43379;
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
					dropped_43379 = true;
					dropped_id_43379 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_43379) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj43376").trigger('SCActionDragDrop43379_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj43376_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43376_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj43376 
move_92637();
function move_92637() {
	window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_runningActionsCount = obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43376");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 89;
	var moveY = 650;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_runningActionsCount = window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj43376_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43402();
function runjs_43402() {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = obj43376_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_4_runningActionsCount = window.obj43376_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43406();
function switchText_43406() {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = obj43376_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43376_droppedInsideTargetActions_4_runningActionsCount = window.obj43376_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_4_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43376_droppedInsideTargetActions_4_runningActionsCount = window.obj43376_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
	}
}






};
obj43376_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43403();
function runjs_43403() {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = obj43376_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("border-color", "#058E3F"); $("#obj43221").css("border-width", "2px"); $("#obj43221").css("border-style", "solid"); $("#obj43221").css("border-radius", "10px"); $("#obj43221").css("-webkit-border-radius", "10px"); $("#obj43221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_4_runningActionsCount = window.obj43376_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43219 
hide_43404();
function hide_43404() {
	var selector = "#obj43219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = obj43376_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43376_droppedInsideTargetActions_4_runningActionsCount = window.obj43376_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43404(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43376_droppedInsideTargetActions_4_runningActionsCount = window.obj43376_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43376_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43405();
function runjs_43405() {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = obj43376_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43376").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_4_runningActionsCount = window.obj43376_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43407();
function playAudio_43407() {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = obj43376_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43376_droppedInsideTargetActions_4_runningActionsCount = window.obj43376_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_4_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43376_droppedInsideTargetActions_4_runningActionsCount = window.obj43376_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_4_actionGroup6();
}
	}
}









};
obj43376_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90536();
function switchText_90536() {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = obj43376_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43376_droppedInsideTargetActions_4_runningActionsCount = window.obj43376_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_4_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43376_droppedInsideTargetActions_4_runningActionsCount = window.obj43376_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_4_actionGroup7();
}
		}, 1);
	}
}






};
obj43376_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	





















};
obj43376_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43395();
function runjs_43395() {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = obj43376_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_3_runningActionsCount = window.obj43376_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43399();
function switchText_43399() {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = obj43376_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43376_droppedInsideTargetActions_3_runningActionsCount = window.obj43376_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43376_droppedInsideTargetActions_3_runningActionsCount = window.obj43376_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj43376_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43396();
function runjs_43396() {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = obj43376_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("border-color", "#058E3F"); $("#obj43225").css("border-width", "2px"); $("#obj43225").css("border-style", "solid"); $("#obj43225").css("border-radius", "10px"); $("#obj43225").css("-webkit-border-radius", "10px"); $("#obj43225").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_3_runningActionsCount = window.obj43376_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43223 
hide_43397();
function hide_43397() {
	var selector = "#obj43223";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = obj43376_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43376_droppedInsideTargetActions_3_runningActionsCount = window.obj43376_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43397(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43376_droppedInsideTargetActions_3_runningActionsCount = window.obj43376_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43376_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43398();
function runjs_43398() {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = obj43376_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43376").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_3_runningActionsCount = window.obj43376_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43400();
function playAudio_43400() {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = obj43376_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43376_droppedInsideTargetActions_3_runningActionsCount = window.obj43376_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43376_droppedInsideTargetActions_3_runningActionsCount = window.obj43376_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj43376_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90535();
function switchText_90535() {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = obj43376_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43376_droppedInsideTargetActions_3_runningActionsCount = window.obj43376_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43376_droppedInsideTargetActions_3_runningActionsCount = window.obj43376_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj43376_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj43376_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43388();
function runjs_43388() {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = obj43376_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_2_runningActionsCount = window.obj43376_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43392();
function switchText_43392() {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = obj43376_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43376_droppedInsideTargetActions_2_runningActionsCount = window.obj43376_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43376_droppedInsideTargetActions_2_runningActionsCount = window.obj43376_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj43376_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43389();
function runjs_43389() {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = obj43376_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("border-color", "#058E3F"); $("#obj43229").css("border-width", "2px"); $("#obj43229").css("border-style", "solid"); $("#obj43229").css("border-radius", "10px"); $("#obj43229").css("-webkit-border-radius", "10px"); $("#obj43229").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_2_runningActionsCount = window.obj43376_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43227 
hide_43390();
function hide_43390() {
	var selector = "#obj43227";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = obj43376_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43376_droppedInsideTargetActions_2_runningActionsCount = window.obj43376_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43390(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43376_droppedInsideTargetActions_2_runningActionsCount = window.obj43376_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43376_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43391();
function runjs_43391() {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = obj43376_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43376").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_2_runningActionsCount = window.obj43376_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43393();
function playAudio_43393() {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = obj43376_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43376_droppedInsideTargetActions_2_runningActionsCount = window.obj43376_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43376_droppedInsideTargetActions_2_runningActionsCount = window.obj43376_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj43376_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90534();
function switchText_90534() {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = obj43376_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43376_droppedInsideTargetActions_2_runningActionsCount = window.obj43376_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43376_droppedInsideTargetActions_2_runningActionsCount = window.obj43376_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj43376_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj43376_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43381();
function runjs_43381() {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = obj43376_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_runningActionsCount = window.obj43376_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43385();
function switchText_43385() {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = obj43376_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43376_droppedInsideTargetActions_runningActionsCount = window.obj43376_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43376_droppedInsideTargetActions_runningActionsCount = window.obj43376_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj43376_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43382();
function runjs_43382() {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = obj43376_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("border-color", "#058E3F"); $("#obj43243").css("border-width", "2px"); $("#obj43243").css("border-style", "solid"); $("#obj43243").css("border-radius", "10px"); $("#obj43243").css("-webkit-border-radius", "10px"); $("#obj43243").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_runningActionsCount = window.obj43376_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43241 
hide_43383();
function hide_43383() {
	var selector = "#obj43241";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43376_droppedInsideTargetActions_runningActionsCount = obj43376_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43376_droppedInsideTargetActions_runningActionsCount = window.obj43376_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43383(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43376_droppedInsideTargetActions_runningActionsCount = window.obj43376_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43376_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43384();
function runjs_43384() {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = obj43376_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43376").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43376_droppedInsideTargetActions_runningActionsCount = window.obj43376_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj43376_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43386();
function playAudio_43386() {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = obj43376_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43376_droppedInsideTargetActions_runningActionsCount = window.obj43376_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43376_droppedInsideTargetActions_runningActionsCount = window.obj43376_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj43376_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90533();
function switchText_90533() {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = obj43376_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43376_droppedInsideTargetActions_runningActionsCount = window.obj43376_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43376_droppedInsideTargetActions_runningActionsCount = window.obj43376_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43376_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43376_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43376_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43376_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj43376_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43376").trigger("obj43376_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43376) {
				console.warn("de-queueing event obj43376." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43376").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43376_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj43408_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj43408");
//	action: dragDrop
//	target: obj43408 
dragDrop_43411();
function dragDrop_43411() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj43408_onTouchDown_runningActionsCount = obj43408_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj43408');
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
	  	containerNode = $('#obj43247');
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
    	window.obj43408_onTouchDown_runningActionsCount = window.obj43408_onTouchDown_runningActionsCount - 1;
if (window.obj43408_onTouchDown_runningActionsCount < 0) {
	window.obj43408_onTouchDown_runningActionsCount = 0;
} else if (window.obj43408_onTouchDown_runningActionsCount == 0) {
	obj43408_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj43243","#obj43229","#obj43225","#obj43221");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_43411 = false;
    	var dropped_id_43411;
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
					dropped_43411 = true;
					dropped_id_43411 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_43411) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj43408").trigger('SCActionDragDrop43411_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj43408_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43408_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj43408 
move_92639();
function move_92639() {
	window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_runningActionsCount = obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43408");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 247;
	var moveY = 650;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_runningActionsCount = window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj43408_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43434();
function runjs_43434() {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = obj43408_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_4_runningActionsCount = window.obj43408_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43438();
function switchText_43438() {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = obj43408_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43408_droppedInsideTargetActions_4_runningActionsCount = window.obj43408_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_4_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43408_droppedInsideTargetActions_4_runningActionsCount = window.obj43408_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
	}
}






};
obj43408_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43435();
function runjs_43435() {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = obj43408_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("border-color", "#058E3F"); $("#obj43221").css("border-width", "2px"); $("#obj43221").css("border-style", "solid"); $("#obj43221").css("border-radius", "10px"); $("#obj43221").css("-webkit-border-radius", "10px"); $("#obj43221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_4_runningActionsCount = window.obj43408_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43219 
hide_43436();
function hide_43436() {
	var selector = "#obj43219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = obj43408_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43408_droppedInsideTargetActions_4_runningActionsCount = window.obj43408_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43436(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43408_droppedInsideTargetActions_4_runningActionsCount = window.obj43408_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43408_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43437();
function runjs_43437() {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = obj43408_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43408").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_4_runningActionsCount = window.obj43408_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43439();
function playAudio_43439() {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = obj43408_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43408_droppedInsideTargetActions_4_runningActionsCount = window.obj43408_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_4_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43408_droppedInsideTargetActions_4_runningActionsCount = window.obj43408_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_4_actionGroup6();
}
	}
}









};
obj43408_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90540();
function switchText_90540() {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = obj43408_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43408_droppedInsideTargetActions_4_runningActionsCount = window.obj43408_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_4_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43408_droppedInsideTargetActions_4_runningActionsCount = window.obj43408_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_4_actionGroup7();
}
		}, 1);
	}
}






};
obj43408_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	





















};
obj43408_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43427();
function runjs_43427() {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = obj43408_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_3_runningActionsCount = window.obj43408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43431();
function switchText_43431() {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = obj43408_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43408_droppedInsideTargetActions_3_runningActionsCount = window.obj43408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43408_droppedInsideTargetActions_3_runningActionsCount = window.obj43408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj43408_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43428();
function runjs_43428() {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = obj43408_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("border-color", "#058E3F"); $("#obj43225").css("border-width", "2px"); $("#obj43225").css("border-style", "solid"); $("#obj43225").css("border-radius", "10px"); $("#obj43225").css("-webkit-border-radius", "10px"); $("#obj43225").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_3_runningActionsCount = window.obj43408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43223 
hide_43429();
function hide_43429() {
	var selector = "#obj43223";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = obj43408_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43408_droppedInsideTargetActions_3_runningActionsCount = window.obj43408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43429(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43408_droppedInsideTargetActions_3_runningActionsCount = window.obj43408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43408_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43430();
function runjs_43430() {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = obj43408_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43408").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_3_runningActionsCount = window.obj43408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43432();
function playAudio_43432() {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = obj43408_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43408_droppedInsideTargetActions_3_runningActionsCount = window.obj43408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_3_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43408_droppedInsideTargetActions_3_runningActionsCount = window.obj43408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_3_actionGroup6();
}
	}
}









};
obj43408_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90539();
function switchText_90539() {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = obj43408_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43408_droppedInsideTargetActions_3_runningActionsCount = window.obj43408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_3_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43408_droppedInsideTargetActions_3_runningActionsCount = window.obj43408_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_3_actionGroup7();
}
		}, 1);
	}
}






};
obj43408_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	





















};
obj43408_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43420();
function runjs_43420() {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = obj43408_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_2_runningActionsCount = window.obj43408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43424();
function switchText_43424() {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = obj43408_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43408_droppedInsideTargetActions_2_runningActionsCount = window.obj43408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43408_droppedInsideTargetActions_2_runningActionsCount = window.obj43408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj43408_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43421();
function runjs_43421() {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = obj43408_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("border-color", "#058E3F"); $("#obj43229").css("border-width", "2px"); $("#obj43229").css("border-style", "solid"); $("#obj43229").css("border-radius", "10px"); $("#obj43229").css("-webkit-border-radius", "10px"); $("#obj43229").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_2_runningActionsCount = window.obj43408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43227 
hide_43422();
function hide_43422() {
	var selector = "#obj43227";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = obj43408_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43408_droppedInsideTargetActions_2_runningActionsCount = window.obj43408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43422(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43408_droppedInsideTargetActions_2_runningActionsCount = window.obj43408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43408_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43423();
function runjs_43423() {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = obj43408_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43408").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_2_runningActionsCount = window.obj43408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43425();
function playAudio_43425() {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = obj43408_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43408_droppedInsideTargetActions_2_runningActionsCount = window.obj43408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43408_droppedInsideTargetActions_2_runningActionsCount = window.obj43408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj43408_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90538();
function switchText_90538() {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = obj43408_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43408_droppedInsideTargetActions_2_runningActionsCount = window.obj43408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_2_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43408_droppedInsideTargetActions_2_runningActionsCount = window.obj43408_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_2_actionGroup7();
}
		}, 1);
	}
}






};
obj43408_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	





















};
obj43408_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43413();
function runjs_43413() {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = obj43408_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_runningActionsCount = window.obj43408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43417();
function switchText_43417() {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = obj43408_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43408_droppedInsideTargetActions_runningActionsCount = window.obj43408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43408_droppedInsideTargetActions_runningActionsCount = window.obj43408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj43408_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43414();
function runjs_43414() {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = obj43408_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("border-color", "#058E3F"); $("#obj43243").css("border-width", "2px"); $("#obj43243").css("border-style", "solid"); $("#obj43243").css("border-radius", "10px"); $("#obj43243").css("-webkit-border-radius", "10px"); $("#obj43243").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_runningActionsCount = window.obj43408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43241 
hide_43415();
function hide_43415() {
	var selector = "#obj43241";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43408_droppedInsideTargetActions_runningActionsCount = obj43408_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43408_droppedInsideTargetActions_runningActionsCount = window.obj43408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43415(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43408_droppedInsideTargetActions_runningActionsCount = window.obj43408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43408_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43416();
function runjs_43416() {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = obj43408_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43408").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43408_droppedInsideTargetActions_runningActionsCount = window.obj43408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj43408_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43237 
playAudio_43418();
function playAudio_43418() {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = obj43408_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj43237")[0];
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
		    window.obj43408_droppedInsideTargetActions_runningActionsCount = window.obj43408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43408_droppedInsideTargetActions_runningActionsCount = window.obj43408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj43408_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90537();
function switchText_90537() {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = obj43408_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43408_droppedInsideTargetActions_runningActionsCount = window.obj43408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43408_droppedInsideTargetActions_runningActionsCount = window.obj43408_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43408_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43408_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43408_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43408_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj43408_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43408").trigger("obj43408_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43408) {
				console.warn("de-queueing event obj43408." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43408").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43408_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj43440_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj43440");
//	action: dragDrop
//	target: obj43440 
dragDrop_43443();
function dragDrop_43443() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj43440_onTouchDown_runningActionsCount = obj43440_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj43440');
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
	  	containerNode = $('#obj43247');
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
    	window.obj43440_onTouchDown_runningActionsCount = window.obj43440_onTouchDown_runningActionsCount - 1;
if (window.obj43440_onTouchDown_runningActionsCount < 0) {
	window.obj43440_onTouchDown_runningActionsCount = 0;
} else if (window.obj43440_onTouchDown_runningActionsCount == 0) {
	obj43440_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj43243","#obj43229","#obj43225","#obj43221");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_43443 = false;
    	var dropped_id_43443;
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
					dropped_43443 = true;
					dropped_id_43443 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_43443) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj43440").trigger('SCActionDragDrop43443_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj43440_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43440_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj43440 
move_92635();
function move_92635() {
	window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_runningActionsCount = obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43440");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 403;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_runningActionsCount = window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj43440_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43487();
function runjs_43487() {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43488();
function runjs_43488() {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("border-color", "#C00000"); $("#obj43221").css("border-width", "2px"); $("#obj43221").css("border-style", "solid"); $("#obj43221").css("border-radius", "10px"); $("#obj43221").css("-webkit-border-radius", "10px"); $("#obj43221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43219 
hide_43489();
function hide_43489() {
	var selector = "#obj43219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43489(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43440_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43490();
function runjs_43490() {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43440").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43491();
function switchText_43491() {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj43440_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43440 
move_43492();
function move_43492() {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj43440");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 403;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj43440_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43493();
function runjs_43493() {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43494();
function runjs_43494() {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43221").css("border-color", "#000000"); $("#obj43221").css("border-width", "1px"); $("#obj43221").css("border-style", "solid"); $("#obj43221").css("border-radius", "10px"); $("#obj43221").css("-webkit-border-radius", "10px"); $("#obj43221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43219
(function(){
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj43219";
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
					window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43440_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43496();
function runjs_43496() {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43440").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43497();
function runjs_43497() {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj43440").css("border-color", "rgba(0,0,0,0)"); $("#obj43440").css("border-width", "0px"); $("#obj43440").css("border-style", "solid"); $("#obj43440").css("border-radius", "10px"); $("#obj43440").css("-webkit-border-radius", "10px"); $("#obj43440").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43233 
playAudio_43498();
function playAudio_43498() {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj43233")[0];
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
		    window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj43440_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43499();
function switchText_43499() {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = obj43440_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43440_droppedInsideTargetActions_4_runningActionsCount = window.obj43440_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj43440_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj43440_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43473();
function runjs_43473() {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43474();
function runjs_43474() {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("border-color", "#C00000"); $("#obj43225").css("border-width", "2px"); $("#obj43225").css("border-style", "solid"); $("#obj43225").css("border-radius", "10px"); $("#obj43225").css("-webkit-border-radius", "10px"); $("#obj43225").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43223 
hide_43475();
function hide_43475() {
	var selector = "#obj43223";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43475(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43440_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43476();
function runjs_43476() {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43440").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43477();
function switchText_43477() {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj43440_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43440 
move_43478();
function move_43478() {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj43440");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 403;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj43440_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43479();
function runjs_43479() {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43480();
function runjs_43480() {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43225").css("border-color", "#000000"); $("#obj43225").css("border-width", "1px"); $("#obj43225").css("border-style", "solid"); $("#obj43225").css("border-radius", "10px"); $("#obj43225").css("-webkit-border-radius", "10px"); $("#obj43225").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43223
(function(){
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj43223";
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
					window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43440_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43482();
function runjs_43482() {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43440").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43483();
function runjs_43483() {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43440").css("border-color", "rgba(0,0,0,0)"); $("#obj43440").css("border-width", "0px"); $("#obj43440").css("border-style", "solid"); $("#obj43440").css("border-radius", "10px"); $("#obj43440").css("-webkit-border-radius", "10px"); $("#obj43440").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43233 
playAudio_43484();
function playAudio_43484() {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj43233")[0];
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
		    window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj43440_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43485();
function switchText_43485() {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = obj43440_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43440_droppedInsideTargetActions_3_runningActionsCount = window.obj43440_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj43440_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj43440_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43459();
function runjs_43459() {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43460();
function runjs_43460() {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("border-color", "#C00000"); $("#obj43229").css("border-width", "2px"); $("#obj43229").css("border-style", "solid"); $("#obj43229").css("border-radius", "10px"); $("#obj43229").css("-webkit-border-radius", "10px"); $("#obj43229").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43227 
hide_43461();
function hide_43461() {
	var selector = "#obj43227";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43461(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43440_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43462();
function runjs_43462() {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43440").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43463();
function switchText_43463() {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj43440_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43440 
move_43464();
function move_43464() {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj43440");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 403;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj43440_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43465();
function runjs_43465() {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43466();
function runjs_43466() {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43229").css("border-color", "#000000"); $("#obj43229").css("border-width", "1px"); $("#obj43229").css("border-style", "solid"); $("#obj43229").css("border-radius", "10px"); $("#obj43229").css("-webkit-border-radius", "10px"); $("#obj43229").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43227
(function(){
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj43227";
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
					window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43440_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43468();
function runjs_43468() {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43440").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43469();
function runjs_43469() {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43440").css("border-color", "rgba(0,0,0,0)"); $("#obj43440").css("border-width", "0px"); $("#obj43440").css("border-style", "solid"); $("#obj43440").css("border-radius", "10px"); $("#obj43440").css("-webkit-border-radius", "10px"); $("#obj43440").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43233 
playAudio_43470();
function playAudio_43470() {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj43233")[0];
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
		    window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj43440_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43471();
function switchText_43471() {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = obj43440_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43440_droppedInsideTargetActions_2_runningActionsCount = window.obj43440_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj43440_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj43440_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43445();
function runjs_43445() {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43446();
function runjs_43446() {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("border-color", "#C00000"); $("#obj43243").css("border-width", "2px"); $("#obj43243").css("border-style", "solid"); $("#obj43243").css("border-radius", "10px"); $("#obj43243").css("-webkit-border-radius", "10px"); $("#obj43243").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43241 
hide_43447();
function hide_43447() {
	var selector = "#obj43241";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43447(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43440_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43448();
function runjs_43448() {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43440").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43449();
function switchText_43449() {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj43440_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43440 
move_43450();
function move_43450() {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43440");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 403;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj43440_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43451();
function runjs_43451() {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43452();
function runjs_43452() {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43243").css("border-color", "#000000"); $("#obj43243").css("border-width", "1px"); $("#obj43243").css("border-style", "solid"); $("#obj43243").css("border-radius", "10px"); $("#obj43243").css("-webkit-border-radius", "10px"); $("#obj43243").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43241
(function(){
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj43241";
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
					window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup9();
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
				window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43440_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43454();
function runjs_43454() {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43440").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43455();
function runjs_43455() {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43440").css("border-color", "rgba(0,0,0,0)"); $("#obj43440").css("border-width", "0px"); $("#obj43440").css("border-style", "solid"); $("#obj43440").css("border-radius", "10px"); $("#obj43440").css("-webkit-border-radius", "10px"); $("#obj43440").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj43440_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43233 
playAudio_43456();
function playAudio_43456() {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj43233")[0];
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
		    window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj43440_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43457();
function switchText_43457() {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = obj43440_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43235_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43235_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43235").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43235_content");
			setTimeout(function () {
				window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43235 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43440_droppedInsideTargetActions_runningActionsCount = window.obj43440_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43440_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43440_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43440_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43440_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj43440_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43440").trigger("obj43440_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43440) {
				console.warn("de-queueing event obj43440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43440_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj67342_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67342_onTap_activeActionGroupIndex = -1;
		$("#obj67342").trigger("obj67342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67342) {
				console.warn("de-queueing event obj67342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67342_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67342 
hide_67345();
function hide_67345() {
	var selector = "#obj67342";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67342_onTap_runningActionsCount = obj67342_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67342_onTap_runningActionsCount = window.obj67342_onTap_runningActionsCount - 1;
if (window.obj67342_onTap_runningActionsCount < 0) {
	window.obj67342_onTap_runningActionsCount = 0;
} else if (window.obj67342_onTap_runningActionsCount == 0) {
	obj67342_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67345(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67342_onTap_runningActionsCount = window.obj67342_onTap_runningActionsCount - 1;
if (window.obj67342_onTap_runningActionsCount < 0) {
	window.obj67342_onTap_runningActionsCount = 0;
} else if (window.obj67342_onTap_runningActionsCount == 0) {
	obj67342_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67348 
stopMovie_67344();
function stopMovie_67344() {
	window.obj67342_onTap_runningActionsCount = obj67342_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67348")[0];
	myVideo.pause();
	window.obj67342_onTap_runningActionsCount = window.obj67342_onTap_runningActionsCount - 1;
if (window.obj67342_onTap_runningActionsCount < 0) {
	window.obj67342_onTap_runningActionsCount = 0;
} else if (window.obj67342_onTap_runningActionsCount == 0) {
	obj67342_onTap_actionGroup1();
}
}
















};
obj67342_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67342_onTap_activeActionGroupIndex = -1;
		$("#obj67342").trigger("obj67342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67342) {
				console.warn("de-queueing event obj67342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67342_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67334
(function(){
	window.obj67342_onTap_runningActionsCount = obj67342_onTap_runningActionsCount + 1;

	var selector = "#obj67334";
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
					window.obj67342_onTap_runningActionsCount = window.obj67342_onTap_runningActionsCount - 1;
if (window.obj67342_onTap_runningActionsCount < 0) {
	window.obj67342_onTap_runningActionsCount = 0;
} else if (window.obj67342_onTap_runningActionsCount == 0) {
	obj67342_onTap_actionGroup2();
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
				window.obj67342_onTap_runningActionsCount = window.obj67342_onTap_runningActionsCount - 1;
if (window.obj67342_onTap_runningActionsCount < 0) {
	window.obj67342_onTap_runningActionsCount = 0;
} else if (window.obj67342_onTap_runningActionsCount == 0) {
	obj67342_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67342_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67342_onTap_activeActionGroupIndex = -1;
		$("#obj67342").trigger("obj67342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67342) {
				console.warn("de-queueing event obj67342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67342_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67348 
move_67347();
function move_67347() {
	window.obj67342_onTap_runningActionsCount = obj67342_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67348");
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
			window.obj67342_onTap_runningActionsCount = window.obj67342_onTap_runningActionsCount - 1;
if (window.obj67342_onTap_runningActionsCount < 0) {
	window.obj67342_onTap_runningActionsCount = 0;
} else if (window.obj67342_onTap_runningActionsCount == 0) {
	obj67342_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67342_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67342_onTap_activeActionGroupIndex = -1;
		$("#obj67342").trigger("obj67342_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67342) {
				console.warn("de-queueing event obj67342." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67342").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67342_onTap_activeActionGroupIndex = 3;
	





















};
obj67334_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67334_onTap_activeActionGroupIndex = -1;
		$("#obj67334").trigger("obj67334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67334) {
				console.warn("de-queueing event obj67334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67334_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67334 
hide_67337();
function hide_67337() {
	var selector = "#obj67334";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67334_onTap_runningActionsCount = obj67334_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67334_onTap_runningActionsCount = window.obj67334_onTap_runningActionsCount - 1;
if (window.obj67334_onTap_runningActionsCount < 0) {
	window.obj67334_onTap_runningActionsCount = 0;
} else if (window.obj67334_onTap_runningActionsCount == 0) {
	obj67334_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67337(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67334_onTap_runningActionsCount = window.obj67334_onTap_runningActionsCount - 1;
if (window.obj67334_onTap_runningActionsCount < 0) {
	window.obj67334_onTap_runningActionsCount = 0;
} else if (window.obj67334_onTap_runningActionsCount == 0) {
	obj67334_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67348 
playPauseMovie_67336();
function playPauseMovie_67336() {
	window.obj67334_onTap_runningActionsCount = obj67334_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67348")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67334_onTap_runningActionsCount = window.obj67334_onTap_runningActionsCount - 1;
if (window.obj67334_onTap_runningActionsCount < 0) {
	window.obj67334_onTap_runningActionsCount = 0;
} else if (window.obj67334_onTap_runningActionsCount == 0) {
	obj67334_onTap_actionGroup1();
}
}

















};
obj67334_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67334_onTap_activeActionGroupIndex = -1;
		$("#obj67334").trigger("obj67334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67334) {
				console.warn("de-queueing event obj67334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67334_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67342
(function(){
	window.obj67334_onTap_runningActionsCount = obj67334_onTap_runningActionsCount + 1;

	var selector = "#obj67342";
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
					window.obj67334_onTap_runningActionsCount = window.obj67334_onTap_runningActionsCount - 1;
if (window.obj67334_onTap_runningActionsCount < 0) {
	window.obj67334_onTap_runningActionsCount = 0;
} else if (window.obj67334_onTap_runningActionsCount == 0) {
	obj67334_onTap_actionGroup2();
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
				window.obj67334_onTap_runningActionsCount = window.obj67334_onTap_runningActionsCount - 1;
if (window.obj67334_onTap_runningActionsCount < 0) {
	window.obj67334_onTap_runningActionsCount = 0;
} else if (window.obj67334_onTap_runningActionsCount == 0) {
	obj67334_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67334_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67334_onTap_activeActionGroupIndex = -1;
		$("#obj67334").trigger("obj67334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67334) {
				console.warn("de-queueing event obj67334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67334_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67348 
move_67339();
function move_67339() {
	window.obj67334_onTap_runningActionsCount = obj67334_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67348");
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
			window.obj67334_onTap_runningActionsCount = window.obj67334_onTap_runningActionsCount - 1;
if (window.obj67334_onTap_runningActionsCount < 0) {
	window.obj67334_onTap_runningActionsCount = 0;
} else if (window.obj67334_onTap_runningActionsCount == 0) {
	obj67334_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67334_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67334_onTap_activeActionGroupIndex = -1;
		$("#obj67334").trigger("obj67334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67334) {
				console.warn("de-queueing event obj67334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67334_onTap_activeActionGroupIndex = 3;
	





















};
obj88621_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88621_onTap_activeActionGroupIndex = -1;
		$("#obj88621").trigger("obj88621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88621) {
				console.warn("de-queueing event obj88621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88621_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88626 
stopAudio_88623();
function stopAudio_88623() {
	window.obj88621_onTap_runningActionsCount = obj88621_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88626")[0];
	myAudio.pause();
	window.obj88621_onTap_runningActionsCount = window.obj88621_onTap_runningActionsCount - 1;
if (window.obj88621_onTap_runningActionsCount < 0) {
	window.obj88621_onTap_runningActionsCount = 0;
} else if (window.obj88621_onTap_runningActionsCount == 0) {
	obj88621_onTap_actionGroup1();
}
}








};
obj88621_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88621_onTap_activeActionGroupIndex = -1;
		$("#obj88621").trigger("obj88621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88621) {
				console.warn("de-queueing event obj88621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88621_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88621 
hide_88624();
function hide_88624() {
	var selector = "#obj88621";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88621_onTap_runningActionsCount = obj88621_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88621_onTap_runningActionsCount = window.obj88621_onTap_runningActionsCount - 1;
if (window.obj88621_onTap_runningActionsCount < 0) {
	window.obj88621_onTap_runningActionsCount = 0;
} else if (window.obj88621_onTap_runningActionsCount == 0) {
	obj88621_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88624(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88621_onTap_runningActionsCount = window.obj88621_onTap_runningActionsCount - 1;
if (window.obj88621_onTap_runningActionsCount < 0) {
	window.obj88621_onTap_runningActionsCount = 0;
} else if (window.obj88621_onTap_runningActionsCount == 0) {
	obj88621_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88621_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88621_onTap_activeActionGroupIndex = -1;
		$("#obj88621").trigger("obj88621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88621) {
				console.warn("de-queueing event obj88621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88621_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88616
(function(){
	window.obj88621_onTap_runningActionsCount = obj88621_onTap_runningActionsCount + 1;

	var selector = "#obj88616";
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
					window.obj88621_onTap_runningActionsCount = window.obj88621_onTap_runningActionsCount - 1;
if (window.obj88621_onTap_runningActionsCount < 0) {
	window.obj88621_onTap_runningActionsCount = 0;
} else if (window.obj88621_onTap_runningActionsCount == 0) {
	obj88621_onTap_actionGroup3();
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
				window.obj88621_onTap_runningActionsCount = window.obj88621_onTap_runningActionsCount - 1;
if (window.obj88621_onTap_runningActionsCount < 0) {
	window.obj88621_onTap_runningActionsCount = 0;
} else if (window.obj88621_onTap_runningActionsCount == 0) {
	obj88621_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88621_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88621_onTap_activeActionGroupIndex = -1;
		$("#obj88621").trigger("obj88621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88621) {
				console.warn("de-queueing event obj88621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88621_onTap_activeActionGroupIndex = 3;
	





















};
obj88616_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88616_onTap_activeActionGroupIndex = -1;
		$("#obj88616").trigger("obj88616_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88616) {
				console.warn("de-queueing event obj88616." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88616").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88616_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88616 
hide_88618();
function hide_88618() {
	var selector = "#obj88616";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88616_onTap_runningActionsCount = obj88616_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88616_onTap_runningActionsCount = window.obj88616_onTap_runningActionsCount - 1;
if (window.obj88616_onTap_runningActionsCount < 0) {
	window.obj88616_onTap_runningActionsCount = 0;
} else if (window.obj88616_onTap_runningActionsCount == 0) {
	obj88616_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88618(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88616_onTap_runningActionsCount = window.obj88616_onTap_runningActionsCount - 1;
if (window.obj88616_onTap_runningActionsCount < 0) {
	window.obj88616_onTap_runningActionsCount = 0;
} else if (window.obj88616_onTap_runningActionsCount == 0) {
	obj88616_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88616_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88616_onTap_activeActionGroupIndex = -1;
		$("#obj88616").trigger("obj88616_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88616) {
				console.warn("de-queueing event obj88616." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88616").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88616_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88621
(function(){
	window.obj88616_onTap_runningActionsCount = obj88616_onTap_runningActionsCount + 1;

	var selector = "#obj88621";
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
					window.obj88616_onTap_runningActionsCount = window.obj88616_onTap_runningActionsCount - 1;
if (window.obj88616_onTap_runningActionsCount < 0) {
	window.obj88616_onTap_runningActionsCount = 0;
} else if (window.obj88616_onTap_runningActionsCount == 0) {
	obj88616_onTap_actionGroup2();
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
				window.obj88616_onTap_runningActionsCount = window.obj88616_onTap_runningActionsCount - 1;
if (window.obj88616_onTap_runningActionsCount < 0) {
	window.obj88616_onTap_runningActionsCount = 0;
} else if (window.obj88616_onTap_runningActionsCount == 0) {
	obj88616_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88616_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88616_onTap_activeActionGroupIndex = -1;
		$("#obj88616").trigger("obj88616_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88616) {
				console.warn("de-queueing event obj88616." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88616").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88616_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88626 
playAudio_88620();
function playAudio_88620() {
	window.obj88616_onTap_runningActionsCount = obj88616_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88626")[0];
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
		    window.obj88616_onTap_runningActionsCount = window.obj88616_onTap_runningActionsCount - 1;
if (window.obj88616_onTap_runningActionsCount < 0) {
	window.obj88616_onTap_runningActionsCount = 0;
} else if (window.obj88616_onTap_runningActionsCount == 0) {
	obj88616_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88616_onTap_runningActionsCount = window.obj88616_onTap_runningActionsCount - 1;
if (window.obj88616_onTap_runningActionsCount < 0) {
	window.obj88616_onTap_runningActionsCount = 0;
} else if (window.obj88616_onTap_runningActionsCount == 0) {
	obj88616_onTap_actionGroup3();
}
	}
}









};
obj88616_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88616_onTap_activeActionGroupIndex = -1;
		$("#obj88616").trigger("obj88616_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88616) {
				console.warn("de-queueing event obj88616." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88616").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88616_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj43264: Event Touch Down
 *
 */
$("#obj43264").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43264_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43264_onTap is still running");
	return;
}
var obj43264_onTap_runningActionsCount = 0;
var obj43264_onTap_loopCount = 0;
obj43264_onTap_actionGroup0();
});










/*
 *
 *   obj43261: Event Touch Down
 *
 */
$("#obj43261").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43261_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43261_onTap is still running");
	return;
}
var obj43261_onTap_runningActionsCount = 0;
var obj43261_onTap_loopCount = 0;
obj43261_onTap_actionGroup0();
});










/*
 *
 *   obj43257: Event Touch Down
 *
 */
$("#obj43257").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43257_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43257_onTap is still running");
	return;
}
var obj43257_onTap_runningActionsCount = 0;
var obj43257_onTap_loopCount = 0;
obj43257_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj43144: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj43144");
	var winTarget = document.getElementById("obj43144");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj43144").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj43144_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj43144_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj43144_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43144_onTouchDown is still running");
	return;
}
var obj43144_onTouchDown_runningActionsCount = 0;
var obj43144_onTouchDown_loopCount = 0;
obj43144_onTouchDown_actionGroup0();
});



/*
 *
 *   obj43144: Event SCActionDragDrop43147_droppedOutsideTargetActions
 *
 */
$("#obj43144").bind("SCActionDragDrop43147_droppedOutsideTargetActions", function(event) {
	if (window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43144_SCActionDragDrop43147_droppedOutsideTargetActions is still running");
	return;
}
var obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_loopCount = 0;
obj43144_SCActionDragDrop43147_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj43144: Event droppedInsideTargetActions_4
 *
 */
$("#obj43144").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj43144_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43144_droppedInsideTargetActions_4 is still running");
	return;
}
var obj43144_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43144_droppedInsideTargetActions_4_loopCount = 0;
obj43144_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj43144: Event droppedInsideTargetActions_3
 *
 */
$("#obj43144").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj43144_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43144_droppedInsideTargetActions_3 is still running");
	return;
}
var obj43144_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43144_droppedInsideTargetActions_3_loopCount = 0;
obj43144_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj43144: Event droppedInsideTargetActions_2
 *
 */
$("#obj43144").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj43144_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43144_droppedInsideTargetActions_2 is still running");
	return;
}
var obj43144_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43144_droppedInsideTargetActions_2_loopCount = 0;
obj43144_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj43144: Event droppedInsideTargetActions
 *
 */
$("#obj43144").bind("droppedInsideTargetActions", function(event) {
	if (window.obj43144_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43144_droppedInsideTargetActions is still running");
	return;
}
var obj43144_droppedInsideTargetActions_runningActionsCount = 0;
var obj43144_droppedInsideTargetActions_loopCount = 0;
obj43144_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj42876: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj42876");
	var winTarget = document.getElementById("obj42876");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj42876").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj42876_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj42876_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj42876_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42876_onTouchDown is still running");
	return;
}
var obj42876_onTouchDown_runningActionsCount = 0;
var obj42876_onTouchDown_loopCount = 0;
obj42876_onTouchDown_actionGroup0();
});



/*
 *
 *   obj42876: Event SCActionDragDrop42879_droppedOutsideTargetActions
 *
 */
$("#obj42876").bind("SCActionDragDrop42879_droppedOutsideTargetActions", function(event) {
	if (window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42876_SCActionDragDrop42879_droppedOutsideTargetActions is still running");
	return;
}
var obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_loopCount = 0;
obj42876_SCActionDragDrop42879_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj42876: Event droppedInsideTargetActions_4
 *
 */
$("#obj42876").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj42876_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42876_droppedInsideTargetActions_4 is still running");
	return;
}
var obj42876_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42876_droppedInsideTargetActions_4_loopCount = 0;
obj42876_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj42876: Event droppedInsideTargetActions_3
 *
 */
$("#obj42876").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj42876_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42876_droppedInsideTargetActions_3 is still running");
	return;
}
var obj42876_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42876_droppedInsideTargetActions_3_loopCount = 0;
obj42876_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj42876: Event droppedInsideTargetActions_2
 *
 */
$("#obj42876").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj42876_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42876_droppedInsideTargetActions_2 is still running");
	return;
}
var obj42876_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42876_droppedInsideTargetActions_2_loopCount = 0;
obj42876_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj42876: Event droppedInsideTargetActions
 *
 */
$("#obj42876").bind("droppedInsideTargetActions", function(event) {
	if (window.obj42876_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42876_droppedInsideTargetActions is still running");
	return;
}
var obj42876_droppedInsideTargetActions_runningActionsCount = 0;
var obj42876_droppedInsideTargetActions_loopCount = 0;
obj42876_droppedInsideTargetActions_actionGroup0();
});


























/*
 *
 *   obj43344: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj43344");
	var winTarget = document.getElementById("obj43344");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj43344").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj43344_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj43344_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj43344_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43344_onTouchDown is still running");
	return;
}
var obj43344_onTouchDown_runningActionsCount = 0;
var obj43344_onTouchDown_loopCount = 0;
obj43344_onTouchDown_actionGroup0();
});



/*
 *
 *   obj43344: Event SCActionDragDrop43347_droppedOutsideTargetActions
 *
 */
$("#obj43344").bind("SCActionDragDrop43347_droppedOutsideTargetActions", function(event) {
	if (window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43344_SCActionDragDrop43347_droppedOutsideTargetActions is still running");
	return;
}
var obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_loopCount = 0;
obj43344_SCActionDragDrop43347_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj43344: Event droppedInsideTargetActions_4
 *
 */
$("#obj43344").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj43344_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43344_droppedInsideTargetActions_4 is still running");
	return;
}
var obj43344_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43344_droppedInsideTargetActions_4_loopCount = 0;
obj43344_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj43344: Event droppedInsideTargetActions_3
 *
 */
$("#obj43344").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj43344_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43344_droppedInsideTargetActions_3 is still running");
	return;
}
var obj43344_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43344_droppedInsideTargetActions_3_loopCount = 0;
obj43344_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj43344: Event droppedInsideTargetActions_2
 *
 */
$("#obj43344").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj43344_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43344_droppedInsideTargetActions_2 is still running");
	return;
}
var obj43344_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43344_droppedInsideTargetActions_2_loopCount = 0;
obj43344_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj43344: Event droppedInsideTargetActions
 *
 */
$("#obj43344").bind("droppedInsideTargetActions", function(event) {
	if (window.obj43344_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43344_droppedInsideTargetActions is still running");
	return;
}
var obj43344_droppedInsideTargetActions_runningActionsCount = 0;
var obj43344_droppedInsideTargetActions_loopCount = 0;
obj43344_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj43376: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj43376");
	var winTarget = document.getElementById("obj43376");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj43376").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj43376_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj43376_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj43376_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43376_onTouchDown is still running");
	return;
}
var obj43376_onTouchDown_runningActionsCount = 0;
var obj43376_onTouchDown_loopCount = 0;
obj43376_onTouchDown_actionGroup0();
});



/*
 *
 *   obj43376: Event SCActionDragDrop43379_droppedOutsideTargetActions
 *
 */
$("#obj43376").bind("SCActionDragDrop43379_droppedOutsideTargetActions", function(event) {
	if (window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43376_SCActionDragDrop43379_droppedOutsideTargetActions is still running");
	return;
}
var obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_loopCount = 0;
obj43376_SCActionDragDrop43379_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj43376: Event droppedInsideTargetActions_4
 *
 */
$("#obj43376").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj43376_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43376_droppedInsideTargetActions_4 is still running");
	return;
}
var obj43376_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43376_droppedInsideTargetActions_4_loopCount = 0;
obj43376_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj43376: Event droppedInsideTargetActions_3
 *
 */
$("#obj43376").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj43376_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43376_droppedInsideTargetActions_3 is still running");
	return;
}
var obj43376_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43376_droppedInsideTargetActions_3_loopCount = 0;
obj43376_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj43376: Event droppedInsideTargetActions_2
 *
 */
$("#obj43376").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj43376_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43376_droppedInsideTargetActions_2 is still running");
	return;
}
var obj43376_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43376_droppedInsideTargetActions_2_loopCount = 0;
obj43376_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj43376: Event droppedInsideTargetActions
 *
 */
$("#obj43376").bind("droppedInsideTargetActions", function(event) {
	if (window.obj43376_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43376_droppedInsideTargetActions is still running");
	return;
}
var obj43376_droppedInsideTargetActions_runningActionsCount = 0;
var obj43376_droppedInsideTargetActions_loopCount = 0;
obj43376_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj43408: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj43408");
	var winTarget = document.getElementById("obj43408");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj43408").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj43408_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj43408_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj43408_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43408_onTouchDown is still running");
	return;
}
var obj43408_onTouchDown_runningActionsCount = 0;
var obj43408_onTouchDown_loopCount = 0;
obj43408_onTouchDown_actionGroup0();
});



/*
 *
 *   obj43408: Event SCActionDragDrop43411_droppedOutsideTargetActions
 *
 */
$("#obj43408").bind("SCActionDragDrop43411_droppedOutsideTargetActions", function(event) {
	if (window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43408_SCActionDragDrop43411_droppedOutsideTargetActions is still running");
	return;
}
var obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_loopCount = 0;
obj43408_SCActionDragDrop43411_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj43408: Event droppedInsideTargetActions_4
 *
 */
$("#obj43408").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj43408_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43408_droppedInsideTargetActions_4 is still running");
	return;
}
var obj43408_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43408_droppedInsideTargetActions_4_loopCount = 0;
obj43408_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj43408: Event droppedInsideTargetActions_3
 *
 */
$("#obj43408").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj43408_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43408_droppedInsideTargetActions_3 is still running");
	return;
}
var obj43408_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43408_droppedInsideTargetActions_3_loopCount = 0;
obj43408_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj43408: Event droppedInsideTargetActions_2
 *
 */
$("#obj43408").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj43408_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43408_droppedInsideTargetActions_2 is still running");
	return;
}
var obj43408_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43408_droppedInsideTargetActions_2_loopCount = 0;
obj43408_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj43408: Event droppedInsideTargetActions
 *
 */
$("#obj43408").bind("droppedInsideTargetActions", function(event) {
	if (window.obj43408_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43408_droppedInsideTargetActions is still running");
	return;
}
var obj43408_droppedInsideTargetActions_runningActionsCount = 0;
var obj43408_droppedInsideTargetActions_loopCount = 0;
obj43408_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj43440: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj43440");
	var winTarget = document.getElementById("obj43440");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj43440").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj43440_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj43440_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj43440_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43440_onTouchDown is still running");
	return;
}
var obj43440_onTouchDown_runningActionsCount = 0;
var obj43440_onTouchDown_loopCount = 0;
obj43440_onTouchDown_actionGroup0();
});



/*
 *
 *   obj43440: Event SCActionDragDrop43443_droppedOutsideTargetActions
 *
 */
$("#obj43440").bind("SCActionDragDrop43443_droppedOutsideTargetActions", function(event) {
	if (window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43440_SCActionDragDrop43443_droppedOutsideTargetActions is still running");
	return;
}
var obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_loopCount = 0;
obj43440_SCActionDragDrop43443_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj43440: Event droppedInsideTargetActions_4
 *
 */
$("#obj43440").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj43440_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43440_droppedInsideTargetActions_4 is still running");
	return;
}
var obj43440_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj43440_droppedInsideTargetActions_4_loopCount = 0;
obj43440_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj43440: Event droppedInsideTargetActions_3
 *
 */
$("#obj43440").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj43440_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43440_droppedInsideTargetActions_3 is still running");
	return;
}
var obj43440_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43440_droppedInsideTargetActions_3_loopCount = 0;
obj43440_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj43440: Event droppedInsideTargetActions_2
 *
 */
$("#obj43440").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj43440_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43440_droppedInsideTargetActions_2 is still running");
	return;
}
var obj43440_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43440_droppedInsideTargetActions_2_loopCount = 0;
obj43440_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj43440: Event droppedInsideTargetActions
 *
 */
$("#obj43440").bind("droppedInsideTargetActions", function(event) {
	if (window.obj43440_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43440_droppedInsideTargetActions is still running");
	return;
}
var obj43440_droppedInsideTargetActions_runningActionsCount = 0;
var obj43440_droppedInsideTargetActions_loopCount = 0;
obj43440_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67342: Event Touch Down
 *
 */
$("#obj67342").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67342_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67342_onTap is still running");
	return;
}
var obj67342_onTap_runningActionsCount = 0;
var obj67342_onTap_loopCount = 0;
obj67342_onTap_actionGroup0();
});










/*
 *
 *   obj67334: Event Touch Down
 *
 */
$("#obj67334").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67334_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67334_onTap is still running");
	return;
}
var obj67334_onTap_runningActionsCount = 0;
var obj67334_onTap_loopCount = 0;
obj67334_onTap_actionGroup0();
});










/*
 *
 *   obj88621: Event Touch Down
 *
 */
$("#obj88621").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88621_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88621_onTap is still running");
	return;
}
var obj88621_onTap_runningActionsCount = 0;
var obj88621_onTap_loopCount = 0;
obj88621_onTap_actionGroup0();
});










/*
 *
 *   obj88616: Event Touch Down
 *
 */
$("#obj88616").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88616_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88616_onTap is still running");
	return;
}
var obj88616_onTap_runningActionsCount = 0;
var obj88616_onTap_loopCount = 0;
obj88616_onTap_actionGroup0();
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
	
$("#obj43280").trigger('SCEventShow');
$("#obj43264").trigger('SCEventShow');
$("#obj43261").trigger('SCEventShow');
$("#obj43257").trigger('SCEventShow');
$("#obj43255").trigger('SCEventShow');
$("#obj43253").trigger('SCEventShow');
$("#obj43251").trigger('SCEventShow');
$("#obj43249").trigger('SCEventShow');
$("#obj43247").trigger('SCEventShow');
$("#obj43245").trigger('SCEventShow');
$("#obj43243").trigger('SCEventShow');
$("#obj43241").trigger('SCEventShow');
$("#obj43239").trigger('SCEventShow');
$("#obj43237").trigger('SCEventShow');
$("#obj43235").trigger('SCEventShow');
$("#obj43233").trigger('SCEventShow');
$("#obj43229").trigger('SCEventShow');
$("#obj43227").trigger('SCEventShow');
$("#obj43225").trigger('SCEventShow');
$("#obj43223").trigger('SCEventShow');
$("#obj43221").trigger('SCEventShow');
$("#obj43219").trigger('SCEventShow');
$("#obj43144").trigger('SCEventShow');
$("#obj42876").trigger('SCEventShow');
$("#obj43284").trigger('SCEventShow');
$("#obj43282").trigger('SCEventShow');
$("#obj43344").trigger('SCEventShow');
$("#obj43376").trigger('SCEventShow');
$("#obj43408").trigger('SCEventShow');
$("#obj43440").trigger('SCEventShow');
$("#obj67342").trigger('SCEventShow');
$("#obj67334").trigger('SCEventShow');
$("#obj88621").trigger('SCEventShow');
$("#obj88616").trigger('SCEventShow');
$("#obj88626").trigger('SCEventShow');
$("#obj94921").trigger('SCEventShow');
$("#obj67348").trigger('SCEventShow');
	
});