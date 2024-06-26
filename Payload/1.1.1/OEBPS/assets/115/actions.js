pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 33182;
pubcoder.page.title = pubcoder.page.title || "115";
pubcoder.page.number = pubcoder.page.number || 115;
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
var obj85672_onTap_activeActionGroupIndex = -1;
var obj85672_onTap_runningActionsCount = 0;
var obj85672_onTap_loopCount = 0;
var obj85669_onTap_activeActionGroupIndex = -1;
var obj85669_onTap_runningActionsCount = 0;
var obj85669_onTap_loopCount = 0;
var obj85665_onTap_activeActionGroupIndex = -1;
var obj85665_onTap_runningActionsCount = 0;
var obj85665_onTap_loopCount = 0;
var obj85540_onDrag_activeActionGroupIndex = -1;
var obj85540_onDrag_runningActionsCount = 0;
var obj85540_onDrag_loopCount = 0;
var obj85540_onTouchDown_activeActionGroupIndex = -1;
var obj85540_onTouchDown_runningActionsCount = 0;
var obj85540_onTouchDown_loopCount = 0;
var obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_loopCount = 0;
var obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj85540_droppedInsideTargetActions_5_loopCount = 0;
var obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85540_droppedInsideTargetActions_4_loopCount = 0;
var obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85540_droppedInsideTargetActions_3_loopCount = 0;
var obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85540_droppedInsideTargetActions_2_loopCount = 0;
var obj85540_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj85540_droppedInsideTargetActions_runningActionsCount = 0;
var obj85540_droppedInsideTargetActions_loopCount = 0;
var obj85473_onDrag_activeActionGroupIndex = -1;
var obj85473_onDrag_runningActionsCount = 0;
var obj85473_onDrag_loopCount = 0;
var obj85473_onTouchDown_activeActionGroupIndex = -1;
var obj85473_onTouchDown_runningActionsCount = 0;
var obj85473_onTouchDown_loopCount = 0;
var obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_loopCount = 0;
var obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj85473_droppedInsideTargetActions_5_loopCount = 0;
var obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85473_droppedInsideTargetActions_4_loopCount = 0;
var obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85473_droppedInsideTargetActions_3_loopCount = 0;
var obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85473_droppedInsideTargetActions_2_loopCount = 0;
var obj85473_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj85473_droppedInsideTargetActions_runningActionsCount = 0;
var obj85473_droppedInsideTargetActions_loopCount = 0;
var obj85406_onDrag_activeActionGroupIndex = -1;
var obj85406_onDrag_runningActionsCount = 0;
var obj85406_onDrag_loopCount = 0;
var obj85406_onTouchDown_activeActionGroupIndex = -1;
var obj85406_onTouchDown_runningActionsCount = 0;
var obj85406_onTouchDown_loopCount = 0;
var obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_loopCount = 0;
var obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj85406_droppedInsideTargetActions_5_loopCount = 0;
var obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85406_droppedInsideTargetActions_4_loopCount = 0;
var obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85406_droppedInsideTargetActions_3_loopCount = 0;
var obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85406_droppedInsideTargetActions_2_loopCount = 0;
var obj85406_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj85406_droppedInsideTargetActions_runningActionsCount = 0;
var obj85406_droppedInsideTargetActions_loopCount = 0;
var obj85339_onDrag_activeActionGroupIndex = -1;
var obj85339_onDrag_runningActionsCount = 0;
var obj85339_onDrag_loopCount = 0;
var obj85339_onTouchDown_activeActionGroupIndex = -1;
var obj85339_onTouchDown_runningActionsCount = 0;
var obj85339_onTouchDown_loopCount = 0;
var obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_loopCount = 0;
var obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj85339_droppedInsideTargetActions_5_loopCount = 0;
var obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85339_droppedInsideTargetActions_4_loopCount = 0;
var obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85339_droppedInsideTargetActions_3_loopCount = 0;
var obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85339_droppedInsideTargetActions_2_loopCount = 0;
var obj85339_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj85339_droppedInsideTargetActions_runningActionsCount = 0;
var obj85339_droppedInsideTargetActions_loopCount = 0;
var obj85272_onDrag_activeActionGroupIndex = -1;
var obj85272_onDrag_runningActionsCount = 0;
var obj85272_onDrag_loopCount = 0;
var obj85272_onTouchDown_activeActionGroupIndex = -1;
var obj85272_onTouchDown_runningActionsCount = 0;
var obj85272_onTouchDown_loopCount = 0;
var obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_loopCount = 0;
var obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj85272_droppedInsideTargetActions_5_loopCount = 0;
var obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85272_droppedInsideTargetActions_4_loopCount = 0;
var obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85272_droppedInsideTargetActions_3_loopCount = 0;
var obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85272_droppedInsideTargetActions_2_loopCount = 0;
var obj85272_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj85272_droppedInsideTargetActions_runningActionsCount = 0;
var obj85272_droppedInsideTargetActions_loopCount = 0;
var obj85254_onTap_activeActionGroupIndex = -1;
var obj85254_onTap_runningActionsCount = 0;
var obj85254_onTap_loopCount = 0;
var obj85246_onTap_activeActionGroupIndex = -1;
var obj85246_onTap_runningActionsCount = 0;
var obj85246_onTap_loopCount = 0;
var obj88249_onTap_activeActionGroupIndex = -1;
var obj88249_onTap_runningActionsCount = 0;
var obj88249_onTap_loopCount = 0;
var obj88244_onTap_activeActionGroupIndex = -1;
var obj88244_onTap_runningActionsCount = 0;
var obj88244_onTap_loopCount = 0;
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
		
obj85672_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85672_onTap_activeActionGroupIndex = -1;
		$("#obj85672").trigger("obj85672_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85672) {
				console.warn("de-queueing event obj85672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85672_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_85674();
function goToPage_85674() {
	window.obj85672_onTap_runningActionsCount = obj85672_onTap_runningActionsCount + 1;
	$("#anchor689")[0].click();
	window.obj85672_onTap_runningActionsCount = window.obj85672_onTap_runningActionsCount - 1;
if (window.obj85672_onTap_runningActionsCount < 0) {
	window.obj85672_onTap_runningActionsCount = 0;
} else if (window.obj85672_onTap_runningActionsCount == 0) {
	obj85672_onTap_actionGroup1();
}
}





















};
obj85672_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85672_onTap_activeActionGroupIndex = -1;
		$("#obj85672").trigger("obj85672_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85672) {
				console.warn("de-queueing event obj85672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85672_onTap_activeActionGroupIndex = 1;
	





















};
obj85669_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85669_onTap_activeActionGroupIndex = -1;
		$("#obj85669").trigger("obj85669_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85669) {
				console.warn("de-queueing event obj85669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85669_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_85671();
function goToPage_85671() {
	window.obj85669_onTap_runningActionsCount = obj85669_onTap_runningActionsCount + 1;
	$("#anchor690")[0].click();
	window.obj85669_onTap_runningActionsCount = window.obj85669_onTap_runningActionsCount - 1;
if (window.obj85669_onTap_runningActionsCount < 0) {
	window.obj85669_onTap_runningActionsCount = 0;
} else if (window.obj85669_onTap_runningActionsCount == 0) {
	obj85669_onTap_actionGroup1();
}
}





















};
obj85669_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85669_onTap_activeActionGroupIndex = -1;
		$("#obj85669").trigger("obj85669_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85669) {
				console.warn("de-queueing event obj85669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85669_onTap_activeActionGroupIndex = 1;
	





















};
obj85665_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85665_onTap_activeActionGroupIndex = -1;
		$("#obj85665").trigger("obj85665_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85665) {
				console.warn("de-queueing event obj85665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85665_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_85667();
function goToPage_85667() {
	window.obj85665_onTap_runningActionsCount = obj85665_onTap_runningActionsCount + 1;
	$("#anchor691")[0].click();
	window.obj85665_onTap_runningActionsCount = window.obj85665_onTap_runningActionsCount - 1;
if (window.obj85665_onTap_runningActionsCount < 0) {
	window.obj85665_onTap_runningActionsCount = 0;
} else if (window.obj85665_onTap_runningActionsCount == 0) {
	obj85665_onTap_actionGroup1();
}
}





















};
obj85665_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85665_onTap_activeActionGroupIndex = -1;
		$("#obj85665").trigger("obj85665_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85665) {
				console.warn("de-queueing event obj85665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85665_onTap_activeActionGroupIndex = 1;
	





















};
obj85540_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj85540");
//	action: dragDrop
//	target: obj85540 
dragDrop_85543();
function dragDrop_85543() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj85540_onTouchDown_runningActionsCount = obj85540_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj85540');
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
	  	containerNode = $('#obj85657');
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
    	window.obj85540_onTouchDown_runningActionsCount = window.obj85540_onTouchDown_runningActionsCount - 1;
if (window.obj85540_onTouchDown_runningActionsCount < 0) {
	window.obj85540_onTouchDown_runningActionsCount = 0;
} else if (window.obj85540_onTouchDown_runningActionsCount == 0) {
	obj85540_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85623","#obj85641","#obj85635","#obj85647","#obj85609");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_85543 = false;
    	var dropped_id_85543;
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
					dropped_85543 = true;
					dropped_id_85543 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_85543) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj85540").trigger('SCActionDragDrop85543_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj85540_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85540_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj85540 
move_92507();
function move_92507() {
	window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_runningActionsCount = obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj85540");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 109;
	var moveY = 660;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_runningActionsCount = window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj85540_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85594();
function runjs_85594() {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85595();
function runjs_85595() {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("border-color", "#C00000"); $("#obj85609").css("border-width", "2px"); $("#obj85609").css("border-style", "solid"); $("#obj85609").css("border-radius", "10px"); $("#obj85609").css("-webkit-border-radius", "10px"); $("#obj85609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85607 
hide_85596();
function hide_85596() {
	var selector = "#obj85607";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85596(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85540_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85597();
function runjs_85597() {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85598();
function switchText_85598() {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj85540_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85540 
move_85599();
function move_85599() {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj85540");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 109;
	var moveY = 660;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj85540_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85600();
function runjs_85600() {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85601();
function runjs_85601() {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("border-color", "#000000"); $("#obj85609").css("border-width", "1px"); $("#obj85609").css("border-style", "solid"); $("#obj85609").css("border-radius", "10px"); $("#obj85609").css("-webkit-border-radius", "10px"); $("#obj85609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85607
(function(){
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj85607";
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
					window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85540_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85603();
function runjs_85603() {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85540").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85604();
function runjs_85604() {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85540").css("border-color", "rgba(0,0,0,0)"); $("#obj85540").css("border-width", "0px"); $("#obj85540").css("border-style", "solid"); $("#obj85540").css("border-radius", "10px"); $("#obj85540").css("-webkit-border-radius", "10px"); $("#obj85540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85605();
function playAudio_85605() {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj85540_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85606();
function switchText_85606() {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = obj85540_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85540_droppedInsideTargetActions_5_runningActionsCount = window.obj85540_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj85540_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj85540_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85580();
function runjs_85580() {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85647").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85581();
function runjs_85581() {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85647").css("border-color", "#C00000"); $("#obj85647").css("border-width", "2px"); $("#obj85647").css("border-style", "solid"); $("#obj85647").css("border-radius", "10px"); $("#obj85647").css("-webkit-border-radius", "10px"); $("#obj85647").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85645 
hide_85582();
function hide_85582() {
	var selector = "#obj85645";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85582(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85540_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85583();
function runjs_85583() {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85584();
function switchText_85584() {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj85540_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85540 
move_85585();
function move_85585() {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj85540");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 109;
	var moveY = 660;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj85540_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85586();
function runjs_85586() {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85647").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85587();
function runjs_85587() {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85647").css("border-color", "#000000"); $("#obj85647").css("border-width", "1px"); $("#obj85647").css("border-style", "solid"); $("#obj85647").css("border-radius", "10px"); $("#obj85647").css("-webkit-border-radius", "10px"); $("#obj85647").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85645
(function(){
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj85645";
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
					window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85540_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85589();
function runjs_85589() {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85540").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85590();
function runjs_85590() {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85540").css("border-color", "rgba(0,0,0,0)"); $("#obj85540").css("border-width", "0px"); $("#obj85540").css("border-style", "solid"); $("#obj85540").css("border-radius", "10px"); $("#obj85540").css("-webkit-border-radius", "10px"); $("#obj85540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85591();
function playAudio_85591() {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj85540_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85592();
function switchText_85592() {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = obj85540_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85540_droppedInsideTargetActions_4_runningActionsCount = window.obj85540_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj85540_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj85540_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85566();
function runjs_85566() {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85567();
function runjs_85567() {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("border-color", "#C00000"); $("#obj85635").css("border-width", "2px"); $("#obj85635").css("border-style", "solid"); $("#obj85635").css("border-radius", "10px"); $("#obj85635").css("-webkit-border-radius", "10px"); $("#obj85635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85633 
hide_85568();
function hide_85568() {
	var selector = "#obj85633";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85568(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85540_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85569();
function runjs_85569() {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85570();
function switchText_85570() {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj85540_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85540 
move_85571();
function move_85571() {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj85540");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 109;
	var moveY = 660;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj85540_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85572();
function runjs_85572() {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85573();
function runjs_85573() {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("border-color", "#000000"); $("#obj85635").css("border-width", "1px"); $("#obj85635").css("border-style", "solid"); $("#obj85635").css("border-radius", "10px"); $("#obj85635").css("-webkit-border-radius", "10px"); $("#obj85635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85633
(function(){
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85633";
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
					window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85540_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85575();
function runjs_85575() {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85540").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85576();
function runjs_85576() {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85540").css("border-color", "rgba(0,0,0,0)"); $("#obj85540").css("border-width", "0px"); $("#obj85540").css("border-style", "solid"); $("#obj85540").css("border-radius", "10px"); $("#obj85540").css("-webkit-border-radius", "10px"); $("#obj85540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85577();
function playAudio_85577() {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj85540_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85578();
function switchText_85578() {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = obj85540_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85540_droppedInsideTargetActions_3_runningActionsCount = window.obj85540_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj85540_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj85540_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85552();
function runjs_85552() {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85553();
function runjs_85553() {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("border-color", "#C00000"); $("#obj85641").css("border-width", "2px"); $("#obj85641").css("border-style", "solid"); $("#obj85641").css("border-radius", "10px"); $("#obj85641").css("-webkit-border-radius", "10px"); $("#obj85641").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85639 
hide_85554();
function hide_85554() {
	var selector = "#obj85639";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85554(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85540_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85555();
function runjs_85555() {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85556();
function switchText_85556() {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj85540_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85540 
move_85557();
function move_85557() {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj85540");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 109;
	var moveY = 660;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj85540_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85558();
function runjs_85558() {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85559();
function runjs_85559() {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("border-color", "#000000"); $("#obj85641").css("border-width", "1px"); $("#obj85641").css("border-style", "solid"); $("#obj85641").css("border-radius", "10px"); $("#obj85641").css("-webkit-border-radius", "10px"); $("#obj85641").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85639
(function(){
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85639";
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
					window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85540_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85561();
function runjs_85561() {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85540").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85562();
function runjs_85562() {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85540").css("border-color", "rgba(0,0,0,0)"); $("#obj85540").css("border-width", "0px"); $("#obj85540").css("border-style", "solid"); $("#obj85540").css("border-radius", "10px"); $("#obj85540").css("-webkit-border-radius", "10px"); $("#obj85540").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85563();
function playAudio_85563() {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj85540_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85564();
function switchText_85564() {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = obj85540_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85540_droppedInsideTargetActions_2_runningActionsCount = window.obj85540_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj85540_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj85540_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85545();
function runjs_85545() {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = obj85540_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85623").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_runningActionsCount = window.obj85540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_85549();
function switchText_85549() {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = obj85540_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85540_droppedInsideTargetActions_runningActionsCount = window.obj85540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85540_droppedInsideTargetActions_runningActionsCount = window.obj85540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj85540_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_85546();
function runjs_85546() {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = obj85540_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85623").css("border-color", "#058E3F"); $("#obj85623").css("border-width", "2px"); $("#obj85623").css("border-style", "solid"); $("#obj85623").css("border-radius", "10px"); $("#obj85623").css("-webkit-border-radius", "10px"); $("#obj85623").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_runningActionsCount = window.obj85540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85621 
hide_85547();
function hide_85547() {
	var selector = "#obj85621";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85540_droppedInsideTargetActions_runningActionsCount = obj85540_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85540_droppedInsideTargetActions_runningActionsCount = window.obj85540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85547(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85540_droppedInsideTargetActions_runningActionsCount = window.obj85540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85540_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_85548();
function runjs_85548() {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = obj85540_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85540").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85540_droppedInsideTargetActions_runningActionsCount = window.obj85540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj85540_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj85617 
playAudio_85550();
function playAudio_85550() {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = obj85540_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj85617")[0];
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
		    window.obj85540_droppedInsideTargetActions_runningActionsCount = window.obj85540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85540_droppedInsideTargetActions_runningActionsCount = window.obj85540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj85540_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90411();
function switchText_90411() {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = obj85540_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85540_droppedInsideTargetActions_runningActionsCount = window.obj85540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85540_droppedInsideTargetActions_runningActionsCount = window.obj85540_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85540_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85540_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85540_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85540_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj85540_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85540").trigger("obj85540_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85540) {
				console.warn("de-queueing event obj85540." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85540").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85540_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj85473_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj85473");
//	action: dragDrop
//	target: obj85473 
dragDrop_85476();
function dragDrop_85476() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj85473_onTouchDown_runningActionsCount = obj85473_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj85473');
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
	  	containerNode = $('#obj85657');
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
    	window.obj85473_onTouchDown_runningActionsCount = window.obj85473_onTouchDown_runningActionsCount - 1;
if (window.obj85473_onTouchDown_runningActionsCount < 0) {
	window.obj85473_onTouchDown_runningActionsCount = 0;
} else if (window.obj85473_onTouchDown_runningActionsCount == 0) {
	obj85473_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85635","#obj85641","#obj85647","#obj85623","#obj85609");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_85476 = false;
    	var dropped_id_85476;
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
					dropped_85476 = true;
					dropped_id_85476 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_85476) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj85473").trigger('SCActionDragDrop85476_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj85473_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85473_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj85473 
move_92509();
function move_92509() {
	window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_runningActionsCount = obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj85473");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_runningActionsCount = window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj85473_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85527();
function runjs_85527() {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85528();
function runjs_85528() {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("border-color", "#C00000"); $("#obj85609").css("border-width", "2px"); $("#obj85609").css("border-style", "solid"); $("#obj85609").css("border-radius", "10px"); $("#obj85609").css("-webkit-border-radius", "10px"); $("#obj85609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85607 
hide_85529();
function hide_85529() {
	var selector = "#obj85607";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85529(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85473_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85530();
function runjs_85530() {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85473").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85531();
function switchText_85531() {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj85473_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85473 
move_85532();
function move_85532() {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj85473");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj85473_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85533();
function runjs_85533() {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85534();
function runjs_85534() {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("border-color", "#000000"); $("#obj85609").css("border-width", "1px"); $("#obj85609").css("border-style", "solid"); $("#obj85609").css("border-radius", "10px"); $("#obj85609").css("-webkit-border-radius", "10px"); $("#obj85609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85607
(function(){
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj85607";
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
					window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85473_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85536();
function runjs_85536() {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85473").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85537();
function runjs_85537() {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85473").css("border-color", "rgba(0,0,0,0)"); $("#obj85473").css("border-width", "0px"); $("#obj85473").css("border-style", "solid"); $("#obj85473").css("border-radius", "10px"); $("#obj85473").css("-webkit-border-radius", "10px"); $("#obj85473").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85538();
function playAudio_85538() {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj85473_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85539();
function switchText_85539() {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = obj85473_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85473_droppedInsideTargetActions_5_runningActionsCount = window.obj85473_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj85473_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj85473_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85513();
function runjs_85513() {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85514();
function runjs_85514() {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("border-color", "#C00000"); $("#obj85623").css("border-width", "2px"); $("#obj85623").css("border-style", "solid"); $("#obj85623").css("border-radius", "10px"); $("#obj85623").css("-webkit-border-radius", "10px"); $("#obj85623").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85621 
hide_85515();
function hide_85515() {
	var selector = "#obj85621";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85515(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85473_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85516();
function runjs_85516() {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85473").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85517();
function switchText_85517() {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj85473_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85473 
move_85518();
function move_85518() {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj85473");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj85473_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85519();
function runjs_85519() {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85520();
function runjs_85520() {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("border-color", "#000000"); $("#obj85623").css("border-width", "1px"); $("#obj85623").css("border-style", "solid"); $("#obj85623").css("border-radius", "10px"); $("#obj85623").css("-webkit-border-radius", "10px"); $("#obj85623").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85621
(function(){
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj85621";
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
					window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85473_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85522();
function runjs_85522() {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85473").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85523();
function runjs_85523() {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85473").css("border-color", "rgba(0,0,0,0)"); $("#obj85473").css("border-width", "0px"); $("#obj85473").css("border-style", "solid"); $("#obj85473").css("border-radius", "10px"); $("#obj85473").css("-webkit-border-radius", "10px"); $("#obj85473").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85524();
function playAudio_85524() {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj85473_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85525();
function switchText_85525() {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = obj85473_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85473_droppedInsideTargetActions_4_runningActionsCount = window.obj85473_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj85473_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj85473_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85499();
function runjs_85499() {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85647").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85500();
function runjs_85500() {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85647").css("border-color", "#C00000"); $("#obj85647").css("border-width", "2px"); $("#obj85647").css("border-style", "solid"); $("#obj85647").css("border-radius", "10px"); $("#obj85647").css("-webkit-border-radius", "10px"); $("#obj85647").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85645 
hide_85501();
function hide_85501() {
	var selector = "#obj85645";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85501(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85473_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85502();
function runjs_85502() {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85473").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85503();
function switchText_85503() {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj85473_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85473 
move_85504();
function move_85504() {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj85473");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj85473_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85505();
function runjs_85505() {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85647").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85506();
function runjs_85506() {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85647").css("border-color", "#000000"); $("#obj85647").css("border-width", "1px"); $("#obj85647").css("border-style", "solid"); $("#obj85647").css("border-radius", "10px"); $("#obj85647").css("-webkit-border-radius", "10px"); $("#obj85647").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85645
(function(){
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85645";
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
					window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85473_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85508();
function runjs_85508() {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85473").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85509();
function runjs_85509() {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85473").css("border-color", "rgba(0,0,0,0)"); $("#obj85473").css("border-width", "0px"); $("#obj85473").css("border-style", "solid"); $("#obj85473").css("border-radius", "10px"); $("#obj85473").css("-webkit-border-radius", "10px"); $("#obj85473").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85510();
function playAudio_85510() {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj85473_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85511();
function switchText_85511() {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = obj85473_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85473_droppedInsideTargetActions_3_runningActionsCount = window.obj85473_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj85473_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj85473_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85485();
function runjs_85485() {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85486();
function runjs_85486() {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("border-color", "#C00000"); $("#obj85641").css("border-width", "2px"); $("#obj85641").css("border-style", "solid"); $("#obj85641").css("border-radius", "10px"); $("#obj85641").css("-webkit-border-radius", "10px"); $("#obj85641").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85639 
hide_85487();
function hide_85487() {
	var selector = "#obj85639";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85487(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85473_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85488();
function runjs_85488() {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85473").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85489();
function switchText_85489() {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj85473_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85473 
move_85490();
function move_85490() {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj85473");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj85473_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85491();
function runjs_85491() {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85492();
function runjs_85492() {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("border-color", "#000000"); $("#obj85641").css("border-width", "1px"); $("#obj85641").css("border-style", "solid"); $("#obj85641").css("border-radius", "10px"); $("#obj85641").css("-webkit-border-radius", "10px"); $("#obj85641").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85639
(function(){
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85639";
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
					window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85473_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85494();
function runjs_85494() {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85473").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85495();
function runjs_85495() {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85473").css("border-color", "rgba(0,0,0,0)"); $("#obj85473").css("border-width", "0px"); $("#obj85473").css("border-style", "solid"); $("#obj85473").css("border-radius", "10px"); $("#obj85473").css("-webkit-border-radius", "10px"); $("#obj85473").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85496();
function playAudio_85496() {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj85473_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85497();
function switchText_85497() {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = obj85473_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85473_droppedInsideTargetActions_2_runningActionsCount = window.obj85473_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj85473_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj85473_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85478();
function runjs_85478() {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = obj85473_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85635").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_runningActionsCount = window.obj85473_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_85482();
function switchText_85482() {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = obj85473_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85473_droppedInsideTargetActions_runningActionsCount = window.obj85473_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85473_droppedInsideTargetActions_runningActionsCount = window.obj85473_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj85473_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_85479();
function runjs_85479() {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = obj85473_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85635").css("border-color", "#058E3F"); $("#obj85635").css("border-width", "2px"); $("#obj85635").css("border-style", "solid"); $("#obj85635").css("border-radius", "10px"); $("#obj85635").css("-webkit-border-radius", "10px"); $("#obj85635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_runningActionsCount = window.obj85473_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85633 
hide_85480();
function hide_85480() {
	var selector = "#obj85633";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85473_droppedInsideTargetActions_runningActionsCount = obj85473_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85473_droppedInsideTargetActions_runningActionsCount = window.obj85473_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85480(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85473_droppedInsideTargetActions_runningActionsCount = window.obj85473_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85473_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_85481();
function runjs_85481() {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = obj85473_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85473").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85473_droppedInsideTargetActions_runningActionsCount = window.obj85473_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj85473_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj85617 
playAudio_85483();
function playAudio_85483() {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = obj85473_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj85617")[0];
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
		    window.obj85473_droppedInsideTargetActions_runningActionsCount = window.obj85473_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85473_droppedInsideTargetActions_runningActionsCount = window.obj85473_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj85473_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90412();
function switchText_90412() {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = obj85473_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85473_droppedInsideTargetActions_runningActionsCount = window.obj85473_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85473_droppedInsideTargetActions_runningActionsCount = window.obj85473_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85473_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85473_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85473_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85473_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj85473_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85473").trigger("obj85473_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85473) {
				console.warn("de-queueing event obj85473." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85473").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85473_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj85406_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj85406");
//	action: dragDrop
//	target: obj85406 
dragDrop_85409();
function dragDrop_85409() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj85406_onTouchDown_runningActionsCount = obj85406_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj85406');
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
	  	containerNode = $('#obj85657');
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
    	window.obj85406_onTouchDown_runningActionsCount = window.obj85406_onTouchDown_runningActionsCount - 1;
if (window.obj85406_onTouchDown_runningActionsCount < 0) {
	window.obj85406_onTouchDown_runningActionsCount = 0;
} else if (window.obj85406_onTouchDown_runningActionsCount == 0) {
	obj85406_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85647","#obj85641","#obj85635","#obj85623","#obj85609");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_85409 = false;
    	var dropped_id_85409;
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
					dropped_85409 = true;
					dropped_id_85409 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_85409) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj85406").trigger('SCActionDragDrop85409_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj85406_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85406_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj85406 
move_92511();
function move_92511() {
	window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_runningActionsCount = obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj85406");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_runningActionsCount = window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj85406_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85460();
function runjs_85460() {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85461();
function runjs_85461() {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("border-color", "#C00000"); $("#obj85609").css("border-width", "2px"); $("#obj85609").css("border-style", "solid"); $("#obj85609").css("border-radius", "10px"); $("#obj85609").css("-webkit-border-radius", "10px"); $("#obj85609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85607 
hide_85462();
function hide_85462() {
	var selector = "#obj85607";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85462(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85406_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85463();
function runjs_85463() {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85406").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85464();
function switchText_85464() {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj85406_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85406 
move_85465();
function move_85465() {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj85406");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj85406_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85466();
function runjs_85466() {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85467();
function runjs_85467() {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("border-color", "#000000"); $("#obj85609").css("border-width", "1px"); $("#obj85609").css("border-style", "solid"); $("#obj85609").css("border-radius", "10px"); $("#obj85609").css("-webkit-border-radius", "10px"); $("#obj85609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85607
(function(){
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj85607";
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
					window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85406_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85469();
function runjs_85469() {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85406").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85470();
function runjs_85470() {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85406").css("border-color", "rgba(0,0,0,0)"); $("#obj85406").css("border-width", "0px"); $("#obj85406").css("border-style", "solid"); $("#obj85406").css("border-radius", "10px"); $("#obj85406").css("-webkit-border-radius", "10px"); $("#obj85406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85471();
function playAudio_85471() {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj85406_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85472();
function switchText_85472() {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = obj85406_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85406_droppedInsideTargetActions_5_runningActionsCount = window.obj85406_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj85406_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj85406_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85446();
function runjs_85446() {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85447();
function runjs_85447() {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("border-color", "#C00000"); $("#obj85623").css("border-width", "2px"); $("#obj85623").css("border-style", "solid"); $("#obj85623").css("border-radius", "10px"); $("#obj85623").css("-webkit-border-radius", "10px"); $("#obj85623").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85621 
hide_85448();
function hide_85448() {
	var selector = "#obj85621";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85448(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85406_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85449();
function runjs_85449() {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85406").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85450();
function switchText_85450() {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj85406_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85406 
move_85451();
function move_85451() {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj85406");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj85406_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85452();
function runjs_85452() {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85453();
function runjs_85453() {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("border-color", "#000000"); $("#obj85623").css("border-width", "1px"); $("#obj85623").css("border-style", "solid"); $("#obj85623").css("border-radius", "10px"); $("#obj85623").css("-webkit-border-radius", "10px"); $("#obj85623").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85621
(function(){
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj85621";
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
					window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85406_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85455();
function runjs_85455() {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85406").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85456();
function runjs_85456() {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85406").css("border-color", "rgba(0,0,0,0)"); $("#obj85406").css("border-width", "0px"); $("#obj85406").css("border-style", "solid"); $("#obj85406").css("border-radius", "10px"); $("#obj85406").css("-webkit-border-radius", "10px"); $("#obj85406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85457();
function playAudio_85457() {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj85406_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85458();
function switchText_85458() {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = obj85406_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85406_droppedInsideTargetActions_4_runningActionsCount = window.obj85406_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj85406_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj85406_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85432();
function runjs_85432() {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85433();
function runjs_85433() {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("border-color", "#C00000"); $("#obj85635").css("border-width", "2px"); $("#obj85635").css("border-style", "solid"); $("#obj85635").css("border-radius", "10px"); $("#obj85635").css("-webkit-border-radius", "10px"); $("#obj85635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85633 
hide_85434();
function hide_85434() {
	var selector = "#obj85633";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85434(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85406_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85435();
function runjs_85435() {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85406").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85436();
function switchText_85436() {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj85406_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85406 
move_85437();
function move_85437() {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj85406");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj85406_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85438();
function runjs_85438() {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85439();
function runjs_85439() {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("border-color", "#000000"); $("#obj85635").css("border-width", "1px"); $("#obj85635").css("border-style", "solid"); $("#obj85635").css("border-radius", "10px"); $("#obj85635").css("-webkit-border-radius", "10px"); $("#obj85635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85633
(function(){
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85633";
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
					window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85406_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85441();
function runjs_85441() {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85406").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85442();
function runjs_85442() {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85406").css("border-color", "rgba(0,0,0,0)"); $("#obj85406").css("border-width", "0px"); $("#obj85406").css("border-style", "solid"); $("#obj85406").css("border-radius", "10px"); $("#obj85406").css("-webkit-border-radius", "10px"); $("#obj85406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85443();
function playAudio_85443() {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj85406_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85444();
function switchText_85444() {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = obj85406_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85406_droppedInsideTargetActions_3_runningActionsCount = window.obj85406_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj85406_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj85406_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85418();
function runjs_85418() {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85419();
function runjs_85419() {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("border-color", "#C00000"); $("#obj85641").css("border-width", "2px"); $("#obj85641").css("border-style", "solid"); $("#obj85641").css("border-radius", "10px"); $("#obj85641").css("-webkit-border-radius", "10px"); $("#obj85641").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85639 
hide_85420();
function hide_85420() {
	var selector = "#obj85639";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85420(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85406_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85421();
function runjs_85421() {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85406").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85422();
function switchText_85422() {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj85406_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85406 
move_85423();
function move_85423() {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj85406");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj85406_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85424();
function runjs_85424() {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85425();
function runjs_85425() {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("border-color", "#000000"); $("#obj85641").css("border-width", "1px"); $("#obj85641").css("border-style", "solid"); $("#obj85641").css("border-radius", "10px"); $("#obj85641").css("-webkit-border-radius", "10px"); $("#obj85641").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85639
(function(){
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85639";
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
					window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85406_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85427();
function runjs_85427() {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85406").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85428();
function runjs_85428() {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85406").css("border-color", "rgba(0,0,0,0)"); $("#obj85406").css("border-width", "0px"); $("#obj85406").css("border-style", "solid"); $("#obj85406").css("border-radius", "10px"); $("#obj85406").css("-webkit-border-radius", "10px"); $("#obj85406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85429();
function playAudio_85429() {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj85406_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85430();
function switchText_85430() {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = obj85406_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85406_droppedInsideTargetActions_2_runningActionsCount = window.obj85406_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj85406_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj85406_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85411();
function runjs_85411() {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = obj85406_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85647").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_runningActionsCount = window.obj85406_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_85415();
function switchText_85415() {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = obj85406_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85406_droppedInsideTargetActions_runningActionsCount = window.obj85406_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85406_droppedInsideTargetActions_runningActionsCount = window.obj85406_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj85406_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_85412();
function runjs_85412() {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = obj85406_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85647").css("border-color", "#058E3F"); $("#obj85647").css("border-width", "2px"); $("#obj85647").css("border-style", "solid"); $("#obj85647").css("border-radius", "10px"); $("#obj85647").css("-webkit-border-radius", "10px"); $("#obj85647").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_runningActionsCount = window.obj85406_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85645 
hide_85413();
function hide_85413() {
	var selector = "#obj85645";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85406_droppedInsideTargetActions_runningActionsCount = obj85406_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85406_droppedInsideTargetActions_runningActionsCount = window.obj85406_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85413(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85406_droppedInsideTargetActions_runningActionsCount = window.obj85406_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85406_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_85414();
function runjs_85414() {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = obj85406_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85406").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85406_droppedInsideTargetActions_runningActionsCount = window.obj85406_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj85406_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj85617 
playAudio_85416();
function playAudio_85416() {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = obj85406_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj85617")[0];
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
		    window.obj85406_droppedInsideTargetActions_runningActionsCount = window.obj85406_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85406_droppedInsideTargetActions_runningActionsCount = window.obj85406_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj85406_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90413();
function switchText_90413() {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = obj85406_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85406_droppedInsideTargetActions_runningActionsCount = window.obj85406_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85406_droppedInsideTargetActions_runningActionsCount = window.obj85406_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85406_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85406_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85406_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85406_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj85406_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85406").trigger("obj85406_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85406) {
				console.warn("de-queueing event obj85406." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85406").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85406_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj85339_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj85339");
//	action: dragDrop
//	target: obj85339 
dragDrop_85342();
function dragDrop_85342() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj85339_onTouchDown_runningActionsCount = obj85339_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj85339');
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
	  	containerNode = $('#obj85657');
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
    	window.obj85339_onTouchDown_runningActionsCount = window.obj85339_onTouchDown_runningActionsCount - 1;
if (window.obj85339_onTouchDown_runningActionsCount < 0) {
	window.obj85339_onTouchDown_runningActionsCount = 0;
} else if (window.obj85339_onTouchDown_runningActionsCount == 0) {
	obj85339_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85609","#obj85641","#obj85635","#obj85623","#obj85647");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_85342 = false;
    	var dropped_id_85342;
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
					dropped_85342 = true;
					dropped_id_85342 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_85342) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj85339").trigger('SCActionDragDrop85342_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj85339_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85339_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj85339 
move_92513();
function move_92513() {
	window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_runningActionsCount = obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj85339");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 374;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_runningActionsCount = window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj85339_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85393();
function runjs_85393() {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85647").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85394();
function runjs_85394() {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85647").css("border-color", "#C00000"); $("#obj85647").css("border-width", "2px"); $("#obj85647").css("border-style", "solid"); $("#obj85647").css("border-radius", "10px"); $("#obj85647").css("-webkit-border-radius", "10px"); $("#obj85647").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85645 
hide_85395();
function hide_85395() {
	var selector = "#obj85645";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85395(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85339_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85396();
function runjs_85396() {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85339").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85397();
function switchText_85397() {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj85339_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85339 
move_85398();
function move_85398() {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj85339");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 374;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj85339_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85399();
function runjs_85399() {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85647").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85400();
function runjs_85400() {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85647").css("border-color", "#000000"); $("#obj85647").css("border-width", "1px"); $("#obj85647").css("border-style", "solid"); $("#obj85647").css("border-radius", "10px"); $("#obj85647").css("-webkit-border-radius", "10px"); $("#obj85647").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85645
(function(){
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj85645";
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
					window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85339_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85402();
function runjs_85402() {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85339").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85403();
function runjs_85403() {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85339").css("border-color", "rgba(0,0,0,0)"); $("#obj85339").css("border-width", "0px"); $("#obj85339").css("border-style", "solid"); $("#obj85339").css("border-radius", "10px"); $("#obj85339").css("-webkit-border-radius", "10px"); $("#obj85339").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85404();
function playAudio_85404() {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj85339_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85405();
function switchText_85405() {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = obj85339_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85339_droppedInsideTargetActions_5_runningActionsCount = window.obj85339_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj85339_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj85339_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85379();
function runjs_85379() {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85380();
function runjs_85380() {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("border-color", "#C00000"); $("#obj85623").css("border-width", "2px"); $("#obj85623").css("border-style", "solid"); $("#obj85623").css("border-radius", "10px"); $("#obj85623").css("-webkit-border-radius", "10px"); $("#obj85623").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85621 
hide_85381();
function hide_85381() {
	var selector = "#obj85621";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85381(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85339_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85382();
function runjs_85382() {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85339").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85383();
function switchText_85383() {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj85339_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85339 
move_85384();
function move_85384() {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj85339");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 374;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj85339_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85385();
function runjs_85385() {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85386();
function runjs_85386() {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("border-color", "#000000"); $("#obj85623").css("border-width", "1px"); $("#obj85623").css("border-style", "solid"); $("#obj85623").css("border-radius", "10px"); $("#obj85623").css("-webkit-border-radius", "10px"); $("#obj85623").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85621
(function(){
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj85621";
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
					window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85339_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85388();
function runjs_85388() {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85339").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85389();
function runjs_85389() {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85339").css("border-color", "rgba(0,0,0,0)"); $("#obj85339").css("border-width", "0px"); $("#obj85339").css("border-style", "solid"); $("#obj85339").css("border-radius", "10px"); $("#obj85339").css("-webkit-border-radius", "10px"); $("#obj85339").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85390();
function playAudio_85390() {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj85339_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85391();
function switchText_85391() {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = obj85339_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85339_droppedInsideTargetActions_4_runningActionsCount = window.obj85339_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj85339_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj85339_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85365();
function runjs_85365() {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85366();
function runjs_85366() {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("border-color", "#C00000"); $("#obj85635").css("border-width", "2px"); $("#obj85635").css("border-style", "solid"); $("#obj85635").css("border-radius", "10px"); $("#obj85635").css("-webkit-border-radius", "10px"); $("#obj85635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85633 
hide_85367();
function hide_85367() {
	var selector = "#obj85633";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85367(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85339_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85368();
function runjs_85368() {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85339").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85369();
function switchText_85369() {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj85339_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85339 
move_85370();
function move_85370() {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj85339");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 374;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj85339_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85371();
function runjs_85371() {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85372();
function runjs_85372() {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("border-color", "#000000"); $("#obj85635").css("border-width", "1px"); $("#obj85635").css("border-style", "solid"); $("#obj85635").css("border-radius", "10px"); $("#obj85635").css("-webkit-border-radius", "10px"); $("#obj85635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85633
(function(){
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85633";
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
					window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85339_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85374();
function runjs_85374() {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85339").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85375();
function runjs_85375() {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85339").css("border-color", "rgba(0,0,0,0)"); $("#obj85339").css("border-width", "0px"); $("#obj85339").css("border-style", "solid"); $("#obj85339").css("border-radius", "10px"); $("#obj85339").css("-webkit-border-radius", "10px"); $("#obj85339").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85376();
function playAudio_85376() {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj85339_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85377();
function switchText_85377() {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = obj85339_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85339_droppedInsideTargetActions_3_runningActionsCount = window.obj85339_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj85339_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj85339_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85351();
function runjs_85351() {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85352();
function runjs_85352() {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("border-color", "#C00000"); $("#obj85641").css("border-width", "2px"); $("#obj85641").css("border-style", "solid"); $("#obj85641").css("border-radius", "10px"); $("#obj85641").css("-webkit-border-radius", "10px"); $("#obj85641").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85639 
hide_85353();
function hide_85353() {
	var selector = "#obj85639";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85353(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85339_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85354();
function runjs_85354() {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85339").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85355();
function switchText_85355() {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj85339_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85339 
move_85356();
function move_85356() {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj85339");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 374;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj85339_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85357();
function runjs_85357() {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85358();
function runjs_85358() {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85641").css("border-color", "#000000"); $("#obj85641").css("border-width", "1px"); $("#obj85641").css("border-style", "solid"); $("#obj85641").css("border-radius", "10px"); $("#obj85641").css("-webkit-border-radius", "10px"); $("#obj85641").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85639
(function(){
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85639";
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
					window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85339_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85360();
function runjs_85360() {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85339").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85361();
function runjs_85361() {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85339").css("border-color", "rgba(0,0,0,0)"); $("#obj85339").css("border-width", "0px"); $("#obj85339").css("border-style", "solid"); $("#obj85339").css("border-radius", "10px"); $("#obj85339").css("-webkit-border-radius", "10px"); $("#obj85339").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85362();
function playAudio_85362() {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj85339_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85363();
function switchText_85363() {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = obj85339_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85339_droppedInsideTargetActions_2_runningActionsCount = window.obj85339_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj85339_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj85339_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85344();
function runjs_85344() {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = obj85339_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85609").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_runningActionsCount = window.obj85339_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_85348();
function switchText_85348() {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = obj85339_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85339_droppedInsideTargetActions_runningActionsCount = window.obj85339_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85339_droppedInsideTargetActions_runningActionsCount = window.obj85339_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj85339_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_85345();
function runjs_85345() {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = obj85339_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85609").css("border-color", "#058E3F"); $("#obj85609").css("border-width", "2px"); $("#obj85609").css("border-style", "solid"); $("#obj85609").css("border-radius", "10px"); $("#obj85609").css("-webkit-border-radius", "10px"); $("#obj85609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_runningActionsCount = window.obj85339_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85607 
hide_85346();
function hide_85346() {
	var selector = "#obj85607";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85339_droppedInsideTargetActions_runningActionsCount = obj85339_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85339_droppedInsideTargetActions_runningActionsCount = window.obj85339_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85346(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85339_droppedInsideTargetActions_runningActionsCount = window.obj85339_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85339_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_85347();
function runjs_85347() {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = obj85339_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85339").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85339_droppedInsideTargetActions_runningActionsCount = window.obj85339_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj85339_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj85617 
playAudio_85349();
function playAudio_85349() {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = obj85339_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj85617")[0];
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
		    window.obj85339_droppedInsideTargetActions_runningActionsCount = window.obj85339_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85339_droppedInsideTargetActions_runningActionsCount = window.obj85339_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj85339_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90414();
function switchText_90414() {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = obj85339_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85339_droppedInsideTargetActions_runningActionsCount = window.obj85339_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85339_droppedInsideTargetActions_runningActionsCount = window.obj85339_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85339_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85339_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85339_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85339_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj85339_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85339").trigger("obj85339_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85339) {
				console.warn("de-queueing event obj85339." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85339").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85339_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj85272_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj85272");
//	action: dragDrop
//	target: obj85272 
dragDrop_85275();
function dragDrop_85275() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj85272_onTouchDown_runningActionsCount = obj85272_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj85272');
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
	  	containerNode = $('#obj85657');
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
    	window.obj85272_onTouchDown_runningActionsCount = window.obj85272_onTouchDown_runningActionsCount - 1;
if (window.obj85272_onTouchDown_runningActionsCount < 0) {
	window.obj85272_onTouchDown_runningActionsCount = 0;
} else if (window.obj85272_onTouchDown_runningActionsCount == 0) {
	obj85272_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85641","#obj85647","#obj85635","#obj85623","#obj85609");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_85275 = false;
    	var dropped_id_85275;
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
					dropped_85275 = true;
					dropped_id_85275 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_85275) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj85272").trigger('SCActionDragDrop85275_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj85272_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85272_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj85272 
move_92515();
function move_92515() {
	window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_runningActionsCount = obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj85272");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 374;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_runningActionsCount = window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj85272_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85326();
function runjs_85326() {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85327();
function runjs_85327() {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("border-color", "#C00000"); $("#obj85609").css("border-width", "2px"); $("#obj85609").css("border-style", "solid"); $("#obj85609").css("border-radius", "10px"); $("#obj85609").css("-webkit-border-radius", "10px"); $("#obj85609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85607 
hide_85328();
function hide_85328() {
	var selector = "#obj85607";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85328(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85272_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85329();
function runjs_85329() {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85272").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85330();
function switchText_85330() {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj85272_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85272 
move_85331();
function move_85331() {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj85272");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 374;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj85272_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85332();
function runjs_85332() {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85333();
function runjs_85333() {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85609").css("border-color", "#000000"); $("#obj85609").css("border-width", "1px"); $("#obj85609").css("border-style", "solid"); $("#obj85609").css("border-radius", "10px"); $("#obj85609").css("-webkit-border-radius", "10px"); $("#obj85609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85607
(function(){
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj85607";
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
					window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85272_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85335();
function runjs_85335() {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85272").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85336();
function runjs_85336() {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj85272").css("border-color", "rgba(0,0,0,0)"); $("#obj85272").css("border-width", "0px"); $("#obj85272").css("border-style", "solid"); $("#obj85272").css("border-radius", "10px"); $("#obj85272").css("-webkit-border-radius", "10px"); $("#obj85272").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85337();
function playAudio_85337() {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj85272_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85338();
function switchText_85338() {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = obj85272_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85272_droppedInsideTargetActions_5_runningActionsCount = window.obj85272_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj85272_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj85272_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85312();
function runjs_85312() {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85313();
function runjs_85313() {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("border-color", "#C00000"); $("#obj85623").css("border-width", "2px"); $("#obj85623").css("border-style", "solid"); $("#obj85623").css("border-radius", "10px"); $("#obj85623").css("-webkit-border-radius", "10px"); $("#obj85623").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85621 
hide_85314();
function hide_85314() {
	var selector = "#obj85621";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85314(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85272_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85315();
function runjs_85315() {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85272").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85316();
function switchText_85316() {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj85272_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85272 
move_85317();
function move_85317() {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj85272");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 374;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj85272_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85318();
function runjs_85318() {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85319();
function runjs_85319() {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85623").css("border-color", "#000000"); $("#obj85623").css("border-width", "1px"); $("#obj85623").css("border-style", "solid"); $("#obj85623").css("border-radius", "10px"); $("#obj85623").css("-webkit-border-radius", "10px"); $("#obj85623").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85621
(function(){
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj85621";
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
					window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85272_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85321();
function runjs_85321() {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85272").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85322();
function runjs_85322() {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj85272").css("border-color", "rgba(0,0,0,0)"); $("#obj85272").css("border-width", "0px"); $("#obj85272").css("border-style", "solid"); $("#obj85272").css("border-radius", "10px"); $("#obj85272").css("-webkit-border-radius", "10px"); $("#obj85272").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85323();
function playAudio_85323() {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj85272_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85324();
function switchText_85324() {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = obj85272_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85272_droppedInsideTargetActions_4_runningActionsCount = window.obj85272_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj85272_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj85272_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85298();
function runjs_85298() {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85299();
function runjs_85299() {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("border-color", "#C00000"); $("#obj85635").css("border-width", "2px"); $("#obj85635").css("border-style", "solid"); $("#obj85635").css("border-radius", "10px"); $("#obj85635").css("-webkit-border-radius", "10px"); $("#obj85635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85633 
hide_85300();
function hide_85300() {
	var selector = "#obj85633";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85300(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85272_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85301();
function runjs_85301() {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85272").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85302();
function switchText_85302() {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj85272_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85272 
move_85303();
function move_85303() {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj85272");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 374;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj85272_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85304();
function runjs_85304() {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85305();
function runjs_85305() {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85635").css("border-color", "#000000"); $("#obj85635").css("border-width", "1px"); $("#obj85635").css("border-style", "solid"); $("#obj85635").css("border-radius", "10px"); $("#obj85635").css("-webkit-border-radius", "10px"); $("#obj85635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85633
(function(){
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85633";
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
					window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85272_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85307();
function runjs_85307() {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85272").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85308();
function runjs_85308() {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85272").css("border-color", "rgba(0,0,0,0)"); $("#obj85272").css("border-width", "0px"); $("#obj85272").css("border-style", "solid"); $("#obj85272").css("border-radius", "10px"); $("#obj85272").css("-webkit-border-radius", "10px"); $("#obj85272").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85309();
function playAudio_85309() {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj85272_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85310();
function switchText_85310() {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = obj85272_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85272_droppedInsideTargetActions_3_runningActionsCount = window.obj85272_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj85272_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj85272_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85284();
function runjs_85284() {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85647").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85285();
function runjs_85285() {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85647").css("border-color", "#C00000"); $("#obj85647").css("border-width", "2px"); $("#obj85647").css("border-style", "solid"); $("#obj85647").css("border-radius", "10px"); $("#obj85647").css("-webkit-border-radius", "10px"); $("#obj85647").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85645 
hide_85286();
function hide_85286() {
	var selector = "#obj85645";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85286(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85272_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85287();
function runjs_85287() {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85272").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85288();
function switchText_85288() {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj85272_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85272 
move_85289();
function move_85289() {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj85272");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 374;
	var moveY = 679;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj85272_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85290();
function runjs_85290() {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85647").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85291();
function runjs_85291() {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85647").css("border-color", "#000000"); $("#obj85647").css("border-width", "1px"); $("#obj85647").css("border-style", "solid"); $("#obj85647").css("border-radius", "10px"); $("#obj85647").css("-webkit-border-radius", "10px"); $("#obj85647").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85645
(function(){
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85645";
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
					window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85272_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85293();
function runjs_85293() {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85272").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85294();
function runjs_85294() {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85272").css("border-color", "rgba(0,0,0,0)"); $("#obj85272").css("border-width", "0px"); $("#obj85272").css("border-style", "solid"); $("#obj85272").css("border-radius", "10px"); $("#obj85272").css("-webkit-border-radius", "10px"); $("#obj85272").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85615 
playAudio_85295();
function playAudio_85295() {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj85615")[0];
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
		    window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj85272_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85296();
function switchText_85296() {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = obj85272_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85272_droppedInsideTargetActions_2_runningActionsCount = window.obj85272_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj85272_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj85272_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85277();
function runjs_85277() {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = obj85272_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85641").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_runningActionsCount = window.obj85272_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_85281();
function switchText_85281() {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = obj85272_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85272_droppedInsideTargetActions_runningActionsCount = window.obj85272_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85272_droppedInsideTargetActions_runningActionsCount = window.obj85272_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj85272_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_85278();
function runjs_85278() {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = obj85272_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85641").css("border-color", "#058E3F"); $("#obj85641").css("border-width", "2px"); $("#obj85641").css("border-style", "solid"); $("#obj85641").css("border-radius", "10px"); $("#obj85641").css("-webkit-border-radius", "10px"); $("#obj85641").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_runningActionsCount = window.obj85272_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85639 
hide_85279();
function hide_85279() {
	var selector = "#obj85639";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85272_droppedInsideTargetActions_runningActionsCount = obj85272_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85272_droppedInsideTargetActions_runningActionsCount = window.obj85272_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85279(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85272_droppedInsideTargetActions_runningActionsCount = window.obj85272_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85272_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_85280();
function runjs_85280() {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = obj85272_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85272").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85272_droppedInsideTargetActions_runningActionsCount = window.obj85272_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj85272_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj85617 
playAudio_85282();
function playAudio_85282() {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = obj85272_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj85617")[0];
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
		    window.obj85272_droppedInsideTargetActions_runningActionsCount = window.obj85272_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85272_droppedInsideTargetActions_runningActionsCount = window.obj85272_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj85272_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90415();
function switchText_90415() {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = obj85272_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85631_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85631_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85631").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85631_content");
			setTimeout(function () {
				window.obj85272_droppedInsideTargetActions_runningActionsCount = window.obj85272_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85631 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85272_droppedInsideTargetActions_runningActionsCount = window.obj85272_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85272_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85272_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85272_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85272_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj85272_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85272").trigger("obj85272_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85272) {
				console.warn("de-queueing event obj85272." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85272").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85272_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj85254_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85254_onTap_activeActionGroupIndex = -1;
		$("#obj85254").trigger("obj85254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85254) {
				console.warn("de-queueing event obj85254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85254_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj85254 
hide_85257();
function hide_85257() {
	var selector = "#obj85254";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85254_onTap_runningActionsCount = obj85254_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85254_onTap_runningActionsCount = window.obj85254_onTap_runningActionsCount - 1;
if (window.obj85254_onTap_runningActionsCount < 0) {
	window.obj85254_onTap_runningActionsCount = 0;
} else if (window.obj85254_onTap_runningActionsCount == 0) {
	obj85254_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85257(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85254_onTap_runningActionsCount = window.obj85254_onTap_runningActionsCount - 1;
if (window.obj85254_onTap_runningActionsCount < 0) {
	window.obj85254_onTap_runningActionsCount = 0;
} else if (window.obj85254_onTap_runningActionsCount == 0) {
	obj85254_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj85244 
stopMovie_85256();
function stopMovie_85256() {
	window.obj85254_onTap_runningActionsCount = obj85254_onTap_runningActionsCount + 1;
	var myVideo = $("#obj85244")[0];
	myVideo.pause();
	window.obj85254_onTap_runningActionsCount = window.obj85254_onTap_runningActionsCount - 1;
if (window.obj85254_onTap_runningActionsCount < 0) {
	window.obj85254_onTap_runningActionsCount = 0;
} else if (window.obj85254_onTap_runningActionsCount == 0) {
	obj85254_onTap_actionGroup1();
}
}
















};
obj85254_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85254_onTap_activeActionGroupIndex = -1;
		$("#obj85254").trigger("obj85254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85254) {
				console.warn("de-queueing event obj85254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85254_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj85246
(function(){
	window.obj85254_onTap_runningActionsCount = obj85254_onTap_runningActionsCount + 1;

	var selector = "#obj85246";
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
					window.obj85254_onTap_runningActionsCount = window.obj85254_onTap_runningActionsCount - 1;
if (window.obj85254_onTap_runningActionsCount < 0) {
	window.obj85254_onTap_runningActionsCount = 0;
} else if (window.obj85254_onTap_runningActionsCount == 0) {
	obj85254_onTap_actionGroup2();
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
				window.obj85254_onTap_runningActionsCount = window.obj85254_onTap_runningActionsCount - 1;
if (window.obj85254_onTap_runningActionsCount < 0) {
	window.obj85254_onTap_runningActionsCount = 0;
} else if (window.obj85254_onTap_runningActionsCount == 0) {
	obj85254_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85254_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85254_onTap_activeActionGroupIndex = -1;
		$("#obj85254").trigger("obj85254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85254) {
				console.warn("de-queueing event obj85254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85254_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj85244 
move_85259();
function move_85259() {
	window.obj85254_onTap_runningActionsCount = obj85254_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj85244");
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
			window.obj85254_onTap_runningActionsCount = window.obj85254_onTap_runningActionsCount - 1;
if (window.obj85254_onTap_runningActionsCount < 0) {
	window.obj85254_onTap_runningActionsCount = 0;
} else if (window.obj85254_onTap_runningActionsCount == 0) {
	obj85254_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj85254_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85254_onTap_activeActionGroupIndex = -1;
		$("#obj85254").trigger("obj85254_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85254) {
				console.warn("de-queueing event obj85254." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85254").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85254_onTap_activeActionGroupIndex = 3;
	





















};
obj85246_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85246_onTap_activeActionGroupIndex = -1;
		$("#obj85246").trigger("obj85246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85246) {
				console.warn("de-queueing event obj85246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85246_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj85246 
hide_85249();
function hide_85249() {
	var selector = "#obj85246";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85246_onTap_runningActionsCount = obj85246_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85246_onTap_runningActionsCount = window.obj85246_onTap_runningActionsCount - 1;
if (window.obj85246_onTap_runningActionsCount < 0) {
	window.obj85246_onTap_runningActionsCount = 0;
} else if (window.obj85246_onTap_runningActionsCount == 0) {
	obj85246_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85249(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85246_onTap_runningActionsCount = window.obj85246_onTap_runningActionsCount - 1;
if (window.obj85246_onTap_runningActionsCount < 0) {
	window.obj85246_onTap_runningActionsCount = 0;
} else if (window.obj85246_onTap_runningActionsCount == 0) {
	obj85246_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj85244 
playPauseMovie_85248();
function playPauseMovie_85248() {
	window.obj85246_onTap_runningActionsCount = obj85246_onTap_runningActionsCount + 1;
	var myVideo = $("#obj85244")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj85246_onTap_runningActionsCount = window.obj85246_onTap_runningActionsCount - 1;
if (window.obj85246_onTap_runningActionsCount < 0) {
	window.obj85246_onTap_runningActionsCount = 0;
} else if (window.obj85246_onTap_runningActionsCount == 0) {
	obj85246_onTap_actionGroup1();
}
}

















};
obj85246_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85246_onTap_activeActionGroupIndex = -1;
		$("#obj85246").trigger("obj85246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85246) {
				console.warn("de-queueing event obj85246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85246_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj85254
(function(){
	window.obj85246_onTap_runningActionsCount = obj85246_onTap_runningActionsCount + 1;

	var selector = "#obj85254";
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
					window.obj85246_onTap_runningActionsCount = window.obj85246_onTap_runningActionsCount - 1;
if (window.obj85246_onTap_runningActionsCount < 0) {
	window.obj85246_onTap_runningActionsCount = 0;
} else if (window.obj85246_onTap_runningActionsCount == 0) {
	obj85246_onTap_actionGroup2();
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
				window.obj85246_onTap_runningActionsCount = window.obj85246_onTap_runningActionsCount - 1;
if (window.obj85246_onTap_runningActionsCount < 0) {
	window.obj85246_onTap_runningActionsCount = 0;
} else if (window.obj85246_onTap_runningActionsCount == 0) {
	obj85246_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85246_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85246_onTap_activeActionGroupIndex = -1;
		$("#obj85246").trigger("obj85246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85246) {
				console.warn("de-queueing event obj85246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85246_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj85244 
move_85251();
function move_85251() {
	window.obj85246_onTap_runningActionsCount = obj85246_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj85244");
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
			window.obj85246_onTap_runningActionsCount = window.obj85246_onTap_runningActionsCount - 1;
if (window.obj85246_onTap_runningActionsCount < 0) {
	window.obj85246_onTap_runningActionsCount = 0;
} else if (window.obj85246_onTap_runningActionsCount == 0) {
	obj85246_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj85246_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85246_onTap_activeActionGroupIndex = -1;
		$("#obj85246").trigger("obj85246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85246) {
				console.warn("de-queueing event obj85246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85246_onTap_activeActionGroupIndex = 3;
	





















};
obj88249_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88249_onTap_activeActionGroupIndex = -1;
		$("#obj88249").trigger("obj88249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88249) {
				console.warn("de-queueing event obj88249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88249_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88254 
stopAudio_88251();
function stopAudio_88251() {
	window.obj88249_onTap_runningActionsCount = obj88249_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88254")[0];
	myAudio.pause();
	window.obj88249_onTap_runningActionsCount = window.obj88249_onTap_runningActionsCount - 1;
if (window.obj88249_onTap_runningActionsCount < 0) {
	window.obj88249_onTap_runningActionsCount = 0;
} else if (window.obj88249_onTap_runningActionsCount == 0) {
	obj88249_onTap_actionGroup1();
}
}








};
obj88249_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88249_onTap_activeActionGroupIndex = -1;
		$("#obj88249").trigger("obj88249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88249) {
				console.warn("de-queueing event obj88249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88249_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88249 
hide_88252();
function hide_88252() {
	var selector = "#obj88249";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88249_onTap_runningActionsCount = obj88249_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88249_onTap_runningActionsCount = window.obj88249_onTap_runningActionsCount - 1;
if (window.obj88249_onTap_runningActionsCount < 0) {
	window.obj88249_onTap_runningActionsCount = 0;
} else if (window.obj88249_onTap_runningActionsCount == 0) {
	obj88249_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88252(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88249_onTap_runningActionsCount = window.obj88249_onTap_runningActionsCount - 1;
if (window.obj88249_onTap_runningActionsCount < 0) {
	window.obj88249_onTap_runningActionsCount = 0;
} else if (window.obj88249_onTap_runningActionsCount == 0) {
	obj88249_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88249_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88249_onTap_activeActionGroupIndex = -1;
		$("#obj88249").trigger("obj88249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88249) {
				console.warn("de-queueing event obj88249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88249_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88244
(function(){
	window.obj88249_onTap_runningActionsCount = obj88249_onTap_runningActionsCount + 1;

	var selector = "#obj88244";
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
					window.obj88249_onTap_runningActionsCount = window.obj88249_onTap_runningActionsCount - 1;
if (window.obj88249_onTap_runningActionsCount < 0) {
	window.obj88249_onTap_runningActionsCount = 0;
} else if (window.obj88249_onTap_runningActionsCount == 0) {
	obj88249_onTap_actionGroup3();
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
				window.obj88249_onTap_runningActionsCount = window.obj88249_onTap_runningActionsCount - 1;
if (window.obj88249_onTap_runningActionsCount < 0) {
	window.obj88249_onTap_runningActionsCount = 0;
} else if (window.obj88249_onTap_runningActionsCount == 0) {
	obj88249_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88249_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88249_onTap_activeActionGroupIndex = -1;
		$("#obj88249").trigger("obj88249_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88249) {
				console.warn("de-queueing event obj88249." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88249").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88249_onTap_activeActionGroupIndex = 3;
	





















};
obj88244_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88244_onTap_activeActionGroupIndex = -1;
		$("#obj88244").trigger("obj88244_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88244) {
				console.warn("de-queueing event obj88244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88244_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88244 
hide_88246();
function hide_88246() {
	var selector = "#obj88244";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88244_onTap_runningActionsCount = obj88244_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88244_onTap_runningActionsCount = window.obj88244_onTap_runningActionsCount - 1;
if (window.obj88244_onTap_runningActionsCount < 0) {
	window.obj88244_onTap_runningActionsCount = 0;
} else if (window.obj88244_onTap_runningActionsCount == 0) {
	obj88244_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88246(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88244_onTap_runningActionsCount = window.obj88244_onTap_runningActionsCount - 1;
if (window.obj88244_onTap_runningActionsCount < 0) {
	window.obj88244_onTap_runningActionsCount = 0;
} else if (window.obj88244_onTap_runningActionsCount == 0) {
	obj88244_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88244_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88244_onTap_activeActionGroupIndex = -1;
		$("#obj88244").trigger("obj88244_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88244) {
				console.warn("de-queueing event obj88244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88244_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88249
(function(){
	window.obj88244_onTap_runningActionsCount = obj88244_onTap_runningActionsCount + 1;

	var selector = "#obj88249";
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
					window.obj88244_onTap_runningActionsCount = window.obj88244_onTap_runningActionsCount - 1;
if (window.obj88244_onTap_runningActionsCount < 0) {
	window.obj88244_onTap_runningActionsCount = 0;
} else if (window.obj88244_onTap_runningActionsCount == 0) {
	obj88244_onTap_actionGroup2();
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
				window.obj88244_onTap_runningActionsCount = window.obj88244_onTap_runningActionsCount - 1;
if (window.obj88244_onTap_runningActionsCount < 0) {
	window.obj88244_onTap_runningActionsCount = 0;
} else if (window.obj88244_onTap_runningActionsCount == 0) {
	obj88244_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88244_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88244_onTap_activeActionGroupIndex = -1;
		$("#obj88244").trigger("obj88244_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88244) {
				console.warn("de-queueing event obj88244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88244_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88254 
playAudio_88248();
function playAudio_88248() {
	window.obj88244_onTap_runningActionsCount = obj88244_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88254")[0];
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
		    window.obj88244_onTap_runningActionsCount = window.obj88244_onTap_runningActionsCount - 1;
if (window.obj88244_onTap_runningActionsCount < 0) {
	window.obj88244_onTap_runningActionsCount = 0;
} else if (window.obj88244_onTap_runningActionsCount == 0) {
	obj88244_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88244_onTap_runningActionsCount = window.obj88244_onTap_runningActionsCount - 1;
if (window.obj88244_onTap_runningActionsCount < 0) {
	window.obj88244_onTap_runningActionsCount = 0;
} else if (window.obj88244_onTap_runningActionsCount == 0) {
	obj88244_onTap_actionGroup3();
}
	}
}









};
obj88244_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88244_onTap_activeActionGroupIndex = -1;
		$("#obj88244").trigger("obj88244_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88244) {
				console.warn("de-queueing event obj88244." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88244").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88244_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj85672: Event Touch Down
 *
 */
$("#obj85672").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85672_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85672_onTap is still running");
	return;
}
var obj85672_onTap_runningActionsCount = 0;
var obj85672_onTap_loopCount = 0;
obj85672_onTap_actionGroup0();
});










/*
 *
 *   obj85669: Event Touch Down
 *
 */
$("#obj85669").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85669_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85669_onTap is still running");
	return;
}
var obj85669_onTap_runningActionsCount = 0;
var obj85669_onTap_loopCount = 0;
obj85669_onTap_actionGroup0();
});










/*
 *
 *   obj85665: Event Touch Down
 *
 */
$("#obj85665").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85665_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85665_onTap is still running");
	return;
}
var obj85665_onTap_runningActionsCount = 0;
var obj85665_onTap_loopCount = 0;
obj85665_onTap_actionGroup0();
});













































































































































































































































































































/*
 *
 *   obj85540: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj85540");
	var winTarget = document.getElementById("obj85540");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj85540").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj85540_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj85540_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj85540_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85540_onTouchDown is still running");
	return;
}
var obj85540_onTouchDown_runningActionsCount = 0;
var obj85540_onTouchDown_loopCount = 0;
obj85540_onTouchDown_actionGroup0();
});



/*
 *
 *   obj85540: Event SCActionDragDrop85543_droppedOutsideTargetActions
 *
 */
$("#obj85540").bind("SCActionDragDrop85543_droppedOutsideTargetActions", function(event) {
	if (window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85540_SCActionDragDrop85543_droppedOutsideTargetActions is still running");
	return;
}
var obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_loopCount = 0;
obj85540_SCActionDragDrop85543_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj85540: Event droppedInsideTargetActions_5
 *
 */
$("#obj85540").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj85540_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85540_droppedInsideTargetActions_5 is still running");
	return;
}
var obj85540_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj85540_droppedInsideTargetActions_5_loopCount = 0;
obj85540_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj85540: Event droppedInsideTargetActions_4
 *
 */
$("#obj85540").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj85540_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85540_droppedInsideTargetActions_4 is still running");
	return;
}
var obj85540_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85540_droppedInsideTargetActions_4_loopCount = 0;
obj85540_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj85540: Event droppedInsideTargetActions_3
 *
 */
$("#obj85540").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj85540_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85540_droppedInsideTargetActions_3 is still running");
	return;
}
var obj85540_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85540_droppedInsideTargetActions_3_loopCount = 0;
obj85540_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj85540: Event droppedInsideTargetActions_2
 *
 */
$("#obj85540").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj85540_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85540_droppedInsideTargetActions_2 is still running");
	return;
}
var obj85540_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85540_droppedInsideTargetActions_2_loopCount = 0;
obj85540_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj85540: Event droppedInsideTargetActions
 *
 */
$("#obj85540").bind("droppedInsideTargetActions", function(event) {
	if (window.obj85540_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85540_droppedInsideTargetActions is still running");
	return;
}
var obj85540_droppedInsideTargetActions_runningActionsCount = 0;
var obj85540_droppedInsideTargetActions_loopCount = 0;
obj85540_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj85473: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj85473");
	var winTarget = document.getElementById("obj85473");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj85473").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj85473_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj85473_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj85473_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85473_onTouchDown is still running");
	return;
}
var obj85473_onTouchDown_runningActionsCount = 0;
var obj85473_onTouchDown_loopCount = 0;
obj85473_onTouchDown_actionGroup0();
});



/*
 *
 *   obj85473: Event SCActionDragDrop85476_droppedOutsideTargetActions
 *
 */
$("#obj85473").bind("SCActionDragDrop85476_droppedOutsideTargetActions", function(event) {
	if (window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85473_SCActionDragDrop85476_droppedOutsideTargetActions is still running");
	return;
}
var obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_loopCount = 0;
obj85473_SCActionDragDrop85476_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj85473: Event droppedInsideTargetActions_5
 *
 */
$("#obj85473").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj85473_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85473_droppedInsideTargetActions_5 is still running");
	return;
}
var obj85473_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj85473_droppedInsideTargetActions_5_loopCount = 0;
obj85473_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj85473: Event droppedInsideTargetActions_4
 *
 */
$("#obj85473").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj85473_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85473_droppedInsideTargetActions_4 is still running");
	return;
}
var obj85473_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85473_droppedInsideTargetActions_4_loopCount = 0;
obj85473_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj85473: Event droppedInsideTargetActions_3
 *
 */
$("#obj85473").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj85473_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85473_droppedInsideTargetActions_3 is still running");
	return;
}
var obj85473_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85473_droppedInsideTargetActions_3_loopCount = 0;
obj85473_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj85473: Event droppedInsideTargetActions_2
 *
 */
$("#obj85473").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj85473_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85473_droppedInsideTargetActions_2 is still running");
	return;
}
var obj85473_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85473_droppedInsideTargetActions_2_loopCount = 0;
obj85473_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj85473: Event droppedInsideTargetActions
 *
 */
$("#obj85473").bind("droppedInsideTargetActions", function(event) {
	if (window.obj85473_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85473_droppedInsideTargetActions is still running");
	return;
}
var obj85473_droppedInsideTargetActions_runningActionsCount = 0;
var obj85473_droppedInsideTargetActions_loopCount = 0;
obj85473_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj85406: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj85406");
	var winTarget = document.getElementById("obj85406");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj85406").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj85406_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj85406_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj85406_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85406_onTouchDown is still running");
	return;
}
var obj85406_onTouchDown_runningActionsCount = 0;
var obj85406_onTouchDown_loopCount = 0;
obj85406_onTouchDown_actionGroup0();
});



/*
 *
 *   obj85406: Event SCActionDragDrop85409_droppedOutsideTargetActions
 *
 */
$("#obj85406").bind("SCActionDragDrop85409_droppedOutsideTargetActions", function(event) {
	if (window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85406_SCActionDragDrop85409_droppedOutsideTargetActions is still running");
	return;
}
var obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_loopCount = 0;
obj85406_SCActionDragDrop85409_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj85406: Event droppedInsideTargetActions_5
 *
 */
$("#obj85406").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj85406_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85406_droppedInsideTargetActions_5 is still running");
	return;
}
var obj85406_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj85406_droppedInsideTargetActions_5_loopCount = 0;
obj85406_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj85406: Event droppedInsideTargetActions_4
 *
 */
$("#obj85406").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj85406_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85406_droppedInsideTargetActions_4 is still running");
	return;
}
var obj85406_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85406_droppedInsideTargetActions_4_loopCount = 0;
obj85406_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj85406: Event droppedInsideTargetActions_3
 *
 */
$("#obj85406").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj85406_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85406_droppedInsideTargetActions_3 is still running");
	return;
}
var obj85406_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85406_droppedInsideTargetActions_3_loopCount = 0;
obj85406_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj85406: Event droppedInsideTargetActions_2
 *
 */
$("#obj85406").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj85406_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85406_droppedInsideTargetActions_2 is still running");
	return;
}
var obj85406_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85406_droppedInsideTargetActions_2_loopCount = 0;
obj85406_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj85406: Event droppedInsideTargetActions
 *
 */
$("#obj85406").bind("droppedInsideTargetActions", function(event) {
	if (window.obj85406_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85406_droppedInsideTargetActions is still running");
	return;
}
var obj85406_droppedInsideTargetActions_runningActionsCount = 0;
var obj85406_droppedInsideTargetActions_loopCount = 0;
obj85406_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj85339: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj85339");
	var winTarget = document.getElementById("obj85339");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj85339").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj85339_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj85339_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj85339_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85339_onTouchDown is still running");
	return;
}
var obj85339_onTouchDown_runningActionsCount = 0;
var obj85339_onTouchDown_loopCount = 0;
obj85339_onTouchDown_actionGroup0();
});



/*
 *
 *   obj85339: Event SCActionDragDrop85342_droppedOutsideTargetActions
 *
 */
$("#obj85339").bind("SCActionDragDrop85342_droppedOutsideTargetActions", function(event) {
	if (window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85339_SCActionDragDrop85342_droppedOutsideTargetActions is still running");
	return;
}
var obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_loopCount = 0;
obj85339_SCActionDragDrop85342_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj85339: Event droppedInsideTargetActions_5
 *
 */
$("#obj85339").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj85339_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85339_droppedInsideTargetActions_5 is still running");
	return;
}
var obj85339_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj85339_droppedInsideTargetActions_5_loopCount = 0;
obj85339_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj85339: Event droppedInsideTargetActions_4
 *
 */
$("#obj85339").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj85339_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85339_droppedInsideTargetActions_4 is still running");
	return;
}
var obj85339_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85339_droppedInsideTargetActions_4_loopCount = 0;
obj85339_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj85339: Event droppedInsideTargetActions_3
 *
 */
$("#obj85339").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj85339_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85339_droppedInsideTargetActions_3 is still running");
	return;
}
var obj85339_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85339_droppedInsideTargetActions_3_loopCount = 0;
obj85339_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj85339: Event droppedInsideTargetActions_2
 *
 */
$("#obj85339").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj85339_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85339_droppedInsideTargetActions_2 is still running");
	return;
}
var obj85339_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85339_droppedInsideTargetActions_2_loopCount = 0;
obj85339_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj85339: Event droppedInsideTargetActions
 *
 */
$("#obj85339").bind("droppedInsideTargetActions", function(event) {
	if (window.obj85339_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85339_droppedInsideTargetActions is still running");
	return;
}
var obj85339_droppedInsideTargetActions_runningActionsCount = 0;
var obj85339_droppedInsideTargetActions_loopCount = 0;
obj85339_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj85272: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj85272");
	var winTarget = document.getElementById("obj85272");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj85272").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj85272_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj85272_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj85272_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85272_onTouchDown is still running");
	return;
}
var obj85272_onTouchDown_runningActionsCount = 0;
var obj85272_onTouchDown_loopCount = 0;
obj85272_onTouchDown_actionGroup0();
});



/*
 *
 *   obj85272: Event SCActionDragDrop85275_droppedOutsideTargetActions
 *
 */
$("#obj85272").bind("SCActionDragDrop85275_droppedOutsideTargetActions", function(event) {
	if (window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85272_SCActionDragDrop85275_droppedOutsideTargetActions is still running");
	return;
}
var obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_loopCount = 0;
obj85272_SCActionDragDrop85275_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj85272: Event droppedInsideTargetActions_5
 *
 */
$("#obj85272").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj85272_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85272_droppedInsideTargetActions_5 is still running");
	return;
}
var obj85272_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj85272_droppedInsideTargetActions_5_loopCount = 0;
obj85272_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj85272: Event droppedInsideTargetActions_4
 *
 */
$("#obj85272").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj85272_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85272_droppedInsideTargetActions_4 is still running");
	return;
}
var obj85272_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj85272_droppedInsideTargetActions_4_loopCount = 0;
obj85272_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj85272: Event droppedInsideTargetActions_3
 *
 */
$("#obj85272").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj85272_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85272_droppedInsideTargetActions_3 is still running");
	return;
}
var obj85272_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85272_droppedInsideTargetActions_3_loopCount = 0;
obj85272_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj85272: Event droppedInsideTargetActions_2
 *
 */
$("#obj85272").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj85272_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85272_droppedInsideTargetActions_2 is still running");
	return;
}
var obj85272_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85272_droppedInsideTargetActions_2_loopCount = 0;
obj85272_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj85272: Event droppedInsideTargetActions
 *
 */
$("#obj85272").bind("droppedInsideTargetActions", function(event) {
	if (window.obj85272_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85272_droppedInsideTargetActions is still running");
	return;
}
var obj85272_droppedInsideTargetActions_runningActionsCount = 0;
var obj85272_droppedInsideTargetActions_loopCount = 0;
obj85272_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj85254: Event Touch Down
 *
 */
$("#obj85254").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85254_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85254_onTap is still running");
	return;
}
var obj85254_onTap_runningActionsCount = 0;
var obj85254_onTap_loopCount = 0;
obj85254_onTap_actionGroup0();
});










/*
 *
 *   obj85246: Event Touch Down
 *
 */
$("#obj85246").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85246_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85246_onTap is still running");
	return;
}
var obj85246_onTap_runningActionsCount = 0;
var obj85246_onTap_loopCount = 0;
obj85246_onTap_actionGroup0();
});










/*
 *
 *   obj88249: Event Touch Down
 *
 */
$("#obj88249").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88249_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88249_onTap is still running");
	return;
}
var obj88249_onTap_runningActionsCount = 0;
var obj88249_onTap_loopCount = 0;
obj88249_onTap_actionGroup0();
});










/*
 *
 *   obj88244: Event Touch Down
 *
 */
$("#obj88244").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88244_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88244_onTap is still running");
	return;
}
var obj88244_onTap_runningActionsCount = 0;
var obj88244_onTap_loopCount = 0;
obj88244_onTap_actionGroup0();
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
	
$("#obj85675").trigger('SCEventShow');
$("#obj85672").trigger('SCEventShow');
$("#obj85669").trigger('SCEventShow');
$("#obj85665").trigger('SCEventShow');
$("#obj85663").trigger('SCEventShow');
$("#obj85661").trigger('SCEventShow');
$("#obj85659").trigger('SCEventShow');
$("#obj85657").trigger('SCEventShow');
$("#obj85655").trigger('SCEventShow');
$("#obj85653").trigger('SCEventShow');
$("#obj85651").trigger('SCEventShow');
$("#obj85649").trigger('SCEventShow');
$("#obj85647").trigger('SCEventShow');
$("#obj85645").trigger('SCEventShow');
$("#obj85643").trigger('SCEventShow');
$("#obj85641").trigger('SCEventShow');
$("#obj85639").trigger('SCEventShow');
$("#obj85637").trigger('SCEventShow');
$("#obj85635").trigger('SCEventShow');
$("#obj85633").trigger('SCEventShow');
$("#obj85631").trigger('SCEventShow');
$("#obj85629").trigger('SCEventShow');
$("#obj85627").trigger('SCEventShow');
$("#obj85625").trigger('SCEventShow');
$("#obj85623").trigger('SCEventShow');
$("#obj85621").trigger('SCEventShow');
$("#obj85619").trigger('SCEventShow');
$("#obj85617").trigger('SCEventShow');
$("#obj85615").trigger('SCEventShow');
$("#obj85613").trigger('SCEventShow');
$("#obj85611").trigger('SCEventShow');
$("#obj85609").trigger('SCEventShow');
$("#obj85607").trigger('SCEventShow');
$("#obj85540").trigger('SCEventShow');
$("#obj85473").trigger('SCEventShow');
$("#obj85406").trigger('SCEventShow');
$("#obj85339").trigger('SCEventShow');
$("#obj85272").trigger('SCEventShow');
$("#obj85254").trigger('SCEventShow');
$("#obj85246").trigger('SCEventShow');
$("#obj88249").trigger('SCEventShow');
$("#obj88244").trigger('SCEventShow');
$("#obj88254").trigger('SCEventShow');
$("#obj94859").trigger('SCEventShow');
$("#obj85244").trigger('SCEventShow');
	
});