pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 56150;
pubcoder.page.title = pubcoder.page.title || "208";
pubcoder.page.number = pubcoder.page.number || 208;
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
var obj56476_onTap_activeActionGroupIndex = -1;
var obj56476_onTap_runningActionsCount = 0;
var obj56476_onTap_loopCount = 0;
var obj56469_onTap_activeActionGroupIndex = -1;
var obj56469_onTap_runningActionsCount = 0;
var obj56469_onTap_loopCount = 0;
var obj56352_onDrag_activeActionGroupIndex = -1;
var obj56352_onDrag_runningActionsCount = 0;
var obj56352_onDrag_loopCount = 0;
var obj56352_onTouchDown_activeActionGroupIndex = -1;
var obj56352_onTouchDown_runningActionsCount = 0;
var obj56352_onTouchDown_loopCount = 0;
var obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_loopCount = 0;
var obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj56352_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj56352_droppedInsideTargetActions_5_loopCount = 0;
var obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj56352_droppedInsideTargetActions_4_loopCount = 0;
var obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj56352_droppedInsideTargetActions_3_loopCount = 0;
var obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj56352_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj56352_droppedInsideTargetActions_2_loopCount = 0;
var obj56352_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj56352_droppedInsideTargetActions_runningActionsCount = 0;
var obj56352_droppedInsideTargetActions_loopCount = 0;
var obj56285_onDrag_activeActionGroupIndex = -1;
var obj56285_onDrag_runningActionsCount = 0;
var obj56285_onDrag_loopCount = 0;
var obj56285_onTouchDown_activeActionGroupIndex = -1;
var obj56285_onTouchDown_runningActionsCount = 0;
var obj56285_onTouchDown_loopCount = 0;
var obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_loopCount = 0;
var obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj56285_droppedInsideTargetActions_5_loopCount = 0;
var obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj56285_droppedInsideTargetActions_4_loopCount = 0;
var obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj56285_droppedInsideTargetActions_3_loopCount = 0;
var obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj56285_droppedInsideTargetActions_2_loopCount = 0;
var obj56285_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj56285_droppedInsideTargetActions_runningActionsCount = 0;
var obj56285_droppedInsideTargetActions_loopCount = 0;
var obj56218_onDrag_activeActionGroupIndex = -1;
var obj56218_onDrag_runningActionsCount = 0;
var obj56218_onDrag_loopCount = 0;
var obj56218_onTouchDown_activeActionGroupIndex = -1;
var obj56218_onTouchDown_runningActionsCount = 0;
var obj56218_onTouchDown_loopCount = 0;
var obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_loopCount = 0;
var obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj56218_droppedInsideTargetActions_5_loopCount = 0;
var obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj56218_droppedInsideTargetActions_4_loopCount = 0;
var obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj56218_droppedInsideTargetActions_3_loopCount = 0;
var obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj56218_droppedInsideTargetActions_2_loopCount = 0;
var obj56218_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj56218_droppedInsideTargetActions_runningActionsCount = 0;
var obj56218_droppedInsideTargetActions_loopCount = 0;
var obj56151_onDrag_activeActionGroupIndex = -1;
var obj56151_onDrag_runningActionsCount = 0;
var obj56151_onDrag_loopCount = 0;
var obj56151_onTouchDown_activeActionGroupIndex = -1;
var obj56151_onTouchDown_runningActionsCount = 0;
var obj56151_onTouchDown_loopCount = 0;
var obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_loopCount = 0;
var obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj56151_droppedInsideTargetActions_5_loopCount = 0;
var obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj56151_droppedInsideTargetActions_4_loopCount = 0;
var obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj56151_droppedInsideTargetActions_3_loopCount = 0;
var obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj56151_droppedInsideTargetActions_2_loopCount = 0;
var obj56151_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj56151_droppedInsideTargetActions_runningActionsCount = 0;
var obj56151_droppedInsideTargetActions_loopCount = 0;
var obj56579_onDrag_activeActionGroupIndex = -1;
var obj56579_onDrag_runningActionsCount = 0;
var obj56579_onDrag_loopCount = 0;
var obj56579_onTouchDown_activeActionGroupIndex = -1;
var obj56579_onTouchDown_runningActionsCount = 0;
var obj56579_onTouchDown_loopCount = 0;
var obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_loopCount = 0;
var obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj56579_droppedInsideTargetActions_5_loopCount = 0;
var obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj56579_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj56579_droppedInsideTargetActions_4_loopCount = 0;
var obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj56579_droppedInsideTargetActions_3_loopCount = 0;
var obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj56579_droppedInsideTargetActions_2_loopCount = 0;
var obj56579_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj56579_droppedInsideTargetActions_runningActionsCount = 0;
var obj56579_droppedInsideTargetActions_loopCount = 0;
var obj68366_onTap_activeActionGroupIndex = -1;
var obj68366_onTap_runningActionsCount = 0;
var obj68366_onTap_loopCount = 0;
var obj68358_onTap_activeActionGroupIndex = -1;
var obj68358_onTap_runningActionsCount = 0;
var obj68358_onTap_loopCount = 0;
var obj89377_onTap_activeActionGroupIndex = -1;
var obj89377_onTap_runningActionsCount = 0;
var obj89377_onTap_loopCount = 0;
var obj89372_onTap_activeActionGroupIndex = -1;
var obj89372_onTap_runningActionsCount = 0;
var obj89372_onTap_loopCount = 0;
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
		
obj56476_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56476_onTap_activeActionGroupIndex = -1;
		$("#obj56476").trigger("obj56476_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56476) {
				console.warn("de-queueing event obj56476." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56476").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56476_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_56478();
function goToPage_56478() {
	window.obj56476_onTap_runningActionsCount = obj56476_onTap_runningActionsCount + 1;
	$("#anchor1223")[0].click();
	window.obj56476_onTap_runningActionsCount = window.obj56476_onTap_runningActionsCount - 1;
if (window.obj56476_onTap_runningActionsCount < 0) {
	window.obj56476_onTap_runningActionsCount = 0;
} else if (window.obj56476_onTap_runningActionsCount == 0) {
	obj56476_onTap_actionGroup1();
}
}





















};
obj56476_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56476_onTap_activeActionGroupIndex = -1;
		$("#obj56476").trigger("obj56476_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56476) {
				console.warn("de-queueing event obj56476." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56476").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56476_onTap_activeActionGroupIndex = 1;
	





















};
obj56469_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56469_onTap_activeActionGroupIndex = -1;
		$("#obj56469").trigger("obj56469_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56469) {
				console.warn("de-queueing event obj56469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56469_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_56471();
function goToPage_56471() {
	window.obj56469_onTap_runningActionsCount = obj56469_onTap_runningActionsCount + 1;
	$("#anchor1224")[0].click();
	window.obj56469_onTap_runningActionsCount = window.obj56469_onTap_runningActionsCount - 1;
if (window.obj56469_onTap_runningActionsCount < 0) {
	window.obj56469_onTap_runningActionsCount = 0;
} else if (window.obj56469_onTap_runningActionsCount == 0) {
	obj56469_onTap_actionGroup1();
}
}





















};
obj56469_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56469_onTap_activeActionGroupIndex = -1;
		$("#obj56469").trigger("obj56469_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56469) {
				console.warn("de-queueing event obj56469." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56469").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56469_onTap_activeActionGroupIndex = 1;
	





















};
obj56352_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj56352");
//	action: dragDrop
//	target: obj56352 
dragDrop_56355();
function dragDrop_56355() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj56352_onTouchDown_runningActionsCount = obj56352_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj56352');
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
	  	containerNode = $('#obj56461');
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
    	window.obj56352_onTouchDown_runningActionsCount = window.obj56352_onTouchDown_runningActionsCount - 1;
if (window.obj56352_onTouchDown_runningActionsCount < 0) {
	window.obj56352_onTouchDown_runningActionsCount = 0;
} else if (window.obj56352_onTouchDown_runningActionsCount == 0) {
	obj56352_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj56427","#obj56445","#obj56439","#obj56451","#obj56502");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_56355 = false;
    	var dropped_id_56355;
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
					dropped_56355 = true;
					dropped_id_56355 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_56355) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj56352").trigger('SCActionDragDrop56355_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj56352_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56352_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj56352 
move_92857();
function move_92857() {
	window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_runningActionsCount = obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj56352");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 198;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_runningActionsCount = window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj56352_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56573();
function runjs_56573() {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = obj56352_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_5_runningActionsCount = window.obj56352_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56574();
function runjs_56574() {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = obj56352_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("border-color", "#058E3F"); $("#obj56502").css("border-width", "2px"); $("#obj56502").css("border-style", "solid"); $("#obj56502").css("border-radius", "10px"); $("#obj56502").css("-webkit-border-radius", "10px"); $("#obj56502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_5_runningActionsCount = window.obj56352_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56504 
hide_56575();
function hide_56575() {
	var selector = "#obj56504";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = obj56352_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56352_droppedInsideTargetActions_5_runningActionsCount = window.obj56352_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56575(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56352_droppedInsideTargetActions_5_runningActionsCount = window.obj56352_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56352_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56576();
function runjs_56576() {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = obj56352_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56352").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_5_runningActionsCount = window.obj56352_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56577();
function switchText_56577() {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = obj56352_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56352_droppedInsideTargetActions_5_runningActionsCount = window.obj56352_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56352_droppedInsideTargetActions_5_runningActionsCount = window.obj56352_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj56352_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj56421 
playAudio_56578();
function playAudio_56578() {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = obj56352_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj56421")[0];
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
		    window.obj56352_droppedInsideTargetActions_5_runningActionsCount = window.obj56352_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_5_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56352_droppedInsideTargetActions_5_runningActionsCount = window.obj56352_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_5_actionGroup6();
}
	}
}









};
obj56352_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	





















};
obj56352_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56392();
function runjs_56392() {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56451").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56393();
function runjs_56393() {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56451").css("border-color", "#C00000"); $("#obj56451").css("border-width", "2px"); $("#obj56451").css("border-style", "solid"); $("#obj56451").css("border-radius", "10px"); $("#obj56451").css("-webkit-border-radius", "10px"); $("#obj56451").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56449 
hide_56394();
function hide_56394() {
	var selector = "#obj56449";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56394(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56352_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56395();
function runjs_56395() {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56352").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56396();
function switchText_56396() {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj56352_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56352 
move_56397();
function move_56397() {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj56352");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 198;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj56352_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56398();
function runjs_56398() {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56451").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56399();
function runjs_56399() {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56451").css("border-color", "#000000"); $("#obj56451").css("border-width", "1px"); $("#obj56451").css("border-style", "solid"); $("#obj56451").css("border-radius", "10px"); $("#obj56451").css("-webkit-border-radius", "10px"); $("#obj56451").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56449
(function(){
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj56449";
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
					window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56352_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56401();
function runjs_56401() {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56352").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56402();
function runjs_56402() {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56352").css("border-color", "rgba(0,0,0,0)"); $("#obj56352").css("border-width", "0px"); $("#obj56352").css("border-style", "solid"); $("#obj56352").css("border-radius", "10px"); $("#obj56352").css("-webkit-border-radius", "10px"); $("#obj56352").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_56403();
function playAudio_56403() {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj56352_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56404();
function switchText_56404() {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = obj56352_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56352_droppedInsideTargetActions_4_runningActionsCount = window.obj56352_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj56352_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj56352_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56378();
function runjs_56378() {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56379();
function runjs_56379() {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("border-color", "#C00000"); $("#obj56439").css("border-width", "2px"); $("#obj56439").css("border-style", "solid"); $("#obj56439").css("border-radius", "10px"); $("#obj56439").css("-webkit-border-radius", "10px"); $("#obj56439").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56437 
hide_56380();
function hide_56380() {
	var selector = "#obj56437";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56380(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56352_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56381();
function runjs_56381() {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56352").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56382();
function switchText_56382() {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj56352_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56352 
move_56383();
function move_56383() {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj56352");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 198;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj56352_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56384();
function runjs_56384() {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56385();
function runjs_56385() {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("border-color", "#000000"); $("#obj56439").css("border-width", "1px"); $("#obj56439").css("border-style", "solid"); $("#obj56439").css("border-radius", "10px"); $("#obj56439").css("-webkit-border-radius", "10px"); $("#obj56439").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56437
(function(){
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj56437";
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
					window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56352_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56387();
function runjs_56387() {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56352").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56388();
function runjs_56388() {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56352").css("border-color", "rgba(0,0,0,0)"); $("#obj56352").css("border-width", "0px"); $("#obj56352").css("border-style", "solid"); $("#obj56352").css("border-radius", "10px"); $("#obj56352").css("-webkit-border-radius", "10px"); $("#obj56352").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_56389();
function playAudio_56389() {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj56352_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56390();
function switchText_56390() {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = obj56352_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56352_droppedInsideTargetActions_3_runningActionsCount = window.obj56352_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj56352_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj56352_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_90825();
function runjs_90825() {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = obj56352_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_2_runningActionsCount = window.obj56352_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_90826();
function runjs_90826() {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = obj56352_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("border-color", "#058E3F"); $("#obj56445").css("border-width", "2px"); $("#obj56445").css("border-style", "solid"); $("#obj56445").css("border-radius", "10px"); $("#obj56445").css("-webkit-border-radius", "10px"); $("#obj56445").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_2_runningActionsCount = window.obj56352_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56443 
hide_90827();
function hide_90827() {
	var selector = "#obj56443";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = obj56352_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56352_droppedInsideTargetActions_2_runningActionsCount = window.obj56352_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90827(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56352_droppedInsideTargetActions_2_runningActionsCount = window.obj56352_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56352_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_90828();
function runjs_90828() {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = obj56352_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56352").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_2_runningActionsCount = window.obj56352_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90829();
function switchText_90829() {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = obj56352_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56352_droppedInsideTargetActions_2_runningActionsCount = window.obj56352_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56352_droppedInsideTargetActions_2_runningActionsCount = window.obj56352_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj56352_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj56421 
playAudio_90830();
function playAudio_90830() {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = obj56352_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj56421")[0];
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
		    window.obj56352_droppedInsideTargetActions_2_runningActionsCount = window.obj56352_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_2_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56352_droppedInsideTargetActions_2_runningActionsCount = window.obj56352_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_2_actionGroup6();
}
	}
}









};
obj56352_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	





















};
obj56352_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56357();
function runjs_56357() {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = obj56352_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56427").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_runningActionsCount = window.obj56352_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56358();
function runjs_56358() {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = obj56352_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56427").css("border-color", "#058E3F"); $("#obj56427").css("border-width", "2px"); $("#obj56427").css("border-style", "solid"); $("#obj56427").css("border-radius", "10px"); $("#obj56427").css("-webkit-border-radius", "10px"); $("#obj56427").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_runningActionsCount = window.obj56352_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56425 
hide_56359();
function hide_56359() {
	var selector = "#obj56425";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56352_droppedInsideTargetActions_runningActionsCount = obj56352_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56352_droppedInsideTargetActions_runningActionsCount = window.obj56352_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56359(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56352_droppedInsideTargetActions_runningActionsCount = window.obj56352_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56352_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56360();
function runjs_56360() {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = obj56352_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56352").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56352_droppedInsideTargetActions_runningActionsCount = window.obj56352_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj56352_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56361();
function switchText_56361() {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = obj56352_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56352_droppedInsideTargetActions_runningActionsCount = window.obj56352_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56352_droppedInsideTargetActions_runningActionsCount = window.obj56352_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj56352_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj56421 
playAudio_56362();
function playAudio_56362() {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = obj56352_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj56421")[0];
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
		    window.obj56352_droppedInsideTargetActions_runningActionsCount = window.obj56352_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56352_droppedInsideTargetActions_runningActionsCount = window.obj56352_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56352_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56352_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56352_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56352_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj56352_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56352").trigger("obj56352_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56352) {
				console.warn("de-queueing event obj56352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56352_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj56285_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj56285");
//	action: dragDrop
//	target: obj56285 
dragDrop_56288();
function dragDrop_56288() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj56285_onTouchDown_runningActionsCount = obj56285_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj56285');
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
	  	containerNode = $('#obj56461');
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
    	window.obj56285_onTouchDown_runningActionsCount = window.obj56285_onTouchDown_runningActionsCount - 1;
if (window.obj56285_onTouchDown_runningActionsCount < 0) {
	window.obj56285_onTouchDown_runningActionsCount = 0;
} else if (window.obj56285_onTouchDown_runningActionsCount == 0) {
	obj56285_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj56439","#obj56445","#obj56451","#obj56427","#obj56502");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_56288 = false;
    	var dropped_id_56288;
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
					dropped_56288 = true;
					dropped_id_56288 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_56288) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj56285").trigger('SCActionDragDrop56288_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj56285_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56285_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj56285 
move_92859();
function move_92859() {
	window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_runningActionsCount = obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj56285");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 196;
	var moveY = 681;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_runningActionsCount = window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj56285_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56339();
function runjs_56339() {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56340();
function runjs_56340() {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("border-color", "#C00000"); $("#obj56502").css("border-width", "2px"); $("#obj56502").css("border-style", "solid"); $("#obj56502").css("border-radius", "10px"); $("#obj56502").css("-webkit-border-radius", "10px"); $("#obj56502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56504 
hide_56341();
function hide_56341() {
	var selector = "#obj56504";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56341(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56285_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56342();
function runjs_56342() {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56285").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56343();
function switchText_56343() {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj56285_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56285 
move_56344();
function move_56344() {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj56285");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 196;
	var moveY = 681;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj56285_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56345();
function runjs_56345() {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56346();
function runjs_56346() {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("border-color", "#000000"); $("#obj56502").css("border-width", "1px"); $("#obj56502").css("border-style", "solid"); $("#obj56502").css("border-radius", "10px"); $("#obj56502").css("-webkit-border-radius", "10px"); $("#obj56502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56504
(function(){
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj56504";
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
					window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56285_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56348();
function runjs_56348() {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56285").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56349();
function runjs_56349() {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56285").css("border-color", "rgba(0,0,0,0)"); $("#obj56285").css("border-width", "0px"); $("#obj56285").css("border-style", "solid"); $("#obj56285").css("border-radius", "10px"); $("#obj56285").css("-webkit-border-radius", "10px"); $("#obj56285").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_56350();
function playAudio_56350() {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj56285_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56351();
function switchText_56351() {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = obj56285_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56285_droppedInsideTargetActions_5_runningActionsCount = window.obj56285_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj56285_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj56285_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56325();
function runjs_56325() {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56427").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56326();
function runjs_56326() {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56427").css("border-color", "#C00000"); $("#obj56427").css("border-width", "2px"); $("#obj56427").css("border-style", "solid"); $("#obj56427").css("border-radius", "10px"); $("#obj56427").css("-webkit-border-radius", "10px"); $("#obj56427").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56425 
hide_56327();
function hide_56327() {
	var selector = "#obj56425";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56327(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56285_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56328();
function runjs_56328() {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56285").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56329();
function switchText_56329() {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj56285_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56285 
move_56330();
function move_56330() {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj56285");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 196;
	var moveY = 681;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj56285_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56331();
function runjs_56331() {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56427").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56332();
function runjs_56332() {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56427").css("border-color", "#000000"); $("#obj56427").css("border-width", "1px"); $("#obj56427").css("border-style", "solid"); $("#obj56427").css("border-radius", "10px"); $("#obj56427").css("-webkit-border-radius", "10px"); $("#obj56427").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56425
(function(){
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj56425";
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
					window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56285_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56334();
function runjs_56334() {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56285").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56335();
function runjs_56335() {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56285").css("border-color", "rgba(0,0,0,0)"); $("#obj56285").css("border-width", "0px"); $("#obj56285").css("border-style", "solid"); $("#obj56285").css("border-radius", "10px"); $("#obj56285").css("-webkit-border-radius", "10px"); $("#obj56285").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_56336();
function playAudio_56336() {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj56285_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56337();
function switchText_56337() {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = obj56285_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56285_droppedInsideTargetActions_4_runningActionsCount = window.obj56285_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj56285_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj56285_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56311();
function runjs_56311() {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56451").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56312();
function runjs_56312() {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56451").css("border-color", "#C00000"); $("#obj56451").css("border-width", "2px"); $("#obj56451").css("border-style", "solid"); $("#obj56451").css("border-radius", "10px"); $("#obj56451").css("-webkit-border-radius", "10px"); $("#obj56451").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56449 
hide_56313();
function hide_56313() {
	var selector = "#obj56449";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56313(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56285_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56314();
function runjs_56314() {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56285").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56315();
function switchText_56315() {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj56285_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56285 
move_56316();
function move_56316() {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj56285");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 196;
	var moveY = 681;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj56285_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56317();
function runjs_56317() {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56451").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56318();
function runjs_56318() {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56451").css("border-color", "#000000"); $("#obj56451").css("border-width", "1px"); $("#obj56451").css("border-style", "solid"); $("#obj56451").css("border-radius", "10px"); $("#obj56451").css("-webkit-border-radius", "10px"); $("#obj56451").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56449
(function(){
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj56449";
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
					window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56285_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56320();
function runjs_56320() {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56285").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56321();
function runjs_56321() {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56285").css("border-color", "rgba(0,0,0,0)"); $("#obj56285").css("border-width", "0px"); $("#obj56285").css("border-style", "solid"); $("#obj56285").css("border-radius", "10px"); $("#obj56285").css("-webkit-border-radius", "10px"); $("#obj56285").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_56322();
function playAudio_56322() {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj56285_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56323();
function switchText_56323() {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = obj56285_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56285_droppedInsideTargetActions_3_runningActionsCount = window.obj56285_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj56285_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj56285_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56297();
function runjs_56297() {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56298();
function runjs_56298() {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("border-color", "#C00000"); $("#obj56445").css("border-width", "2px"); $("#obj56445").css("border-style", "solid"); $("#obj56445").css("border-radius", "10px"); $("#obj56445").css("-webkit-border-radius", "10px"); $("#obj56445").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56443 
hide_56299();
function hide_56299() {
	var selector = "#obj56443";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56299(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56285_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56300();
function runjs_56300() {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56285").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56301();
function switchText_56301() {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj56285_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56285 
move_56302();
function move_56302() {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj56285");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 196;
	var moveY = 681;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj56285_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56303();
function runjs_56303() {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56304();
function runjs_56304() {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("border-color", "#000000"); $("#obj56445").css("border-width", "1px"); $("#obj56445").css("border-style", "solid"); $("#obj56445").css("border-radius", "10px"); $("#obj56445").css("-webkit-border-radius", "10px"); $("#obj56445").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56443
(function(){
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj56443";
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
					window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56285_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56306();
function runjs_56306() {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56285").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56307();
function runjs_56307() {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56285").css("border-color", "rgba(0,0,0,0)"); $("#obj56285").css("border-width", "0px"); $("#obj56285").css("border-style", "solid"); $("#obj56285").css("border-radius", "10px"); $("#obj56285").css("-webkit-border-radius", "10px"); $("#obj56285").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_56308();
function playAudio_56308() {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj56285_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56309();
function switchText_56309() {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = obj56285_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56285_droppedInsideTargetActions_2_runningActionsCount = window.obj56285_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj56285_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj56285_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56290();
function runjs_56290() {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = obj56285_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56439").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_runningActionsCount = window.obj56285_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56291();
function runjs_56291() {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = obj56285_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56439").css("border-color", "#058E3F"); $("#obj56439").css("border-width", "2px"); $("#obj56439").css("border-style", "solid"); $("#obj56439").css("border-radius", "10px"); $("#obj56439").css("-webkit-border-radius", "10px"); $("#obj56439").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_runningActionsCount = window.obj56285_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56437 
hide_56292();
function hide_56292() {
	var selector = "#obj56437";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56285_droppedInsideTargetActions_runningActionsCount = obj56285_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56285_droppedInsideTargetActions_runningActionsCount = window.obj56285_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56292(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56285_droppedInsideTargetActions_runningActionsCount = window.obj56285_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56285_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56293();
function runjs_56293() {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = obj56285_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56285").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56285_droppedInsideTargetActions_runningActionsCount = window.obj56285_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj56285_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56294();
function switchText_56294() {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = obj56285_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56285_droppedInsideTargetActions_runningActionsCount = window.obj56285_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56285_droppedInsideTargetActions_runningActionsCount = window.obj56285_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj56285_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj56421 
playAudio_56295();
function playAudio_56295() {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = obj56285_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj56421")[0];
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
		    window.obj56285_droppedInsideTargetActions_runningActionsCount = window.obj56285_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56285_droppedInsideTargetActions_runningActionsCount = window.obj56285_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56285_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56285_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56285_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56285_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj56285_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56285").trigger("obj56285_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56285) {
				console.warn("de-queueing event obj56285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56285_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj56218_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj56218");
//	action: dragDrop
//	target: obj56218 
dragDrop_56221();
function dragDrop_56221() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj56218_onTouchDown_runningActionsCount = obj56218_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj56218');
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
	  	containerNode = $('#obj56461');
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
    	window.obj56218_onTouchDown_runningActionsCount = window.obj56218_onTouchDown_runningActionsCount - 1;
if (window.obj56218_onTouchDown_runningActionsCount < 0) {
	window.obj56218_onTouchDown_runningActionsCount = 0;
} else if (window.obj56218_onTouchDown_runningActionsCount == 0) {
	obj56218_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj56451","#obj56445","#obj56439","#obj56427","#obj56502");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_56221 = false;
    	var dropped_id_56221;
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
					dropped_56221 = true;
					dropped_id_56221 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_56221) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj56218").trigger('SCActionDragDrop56221_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj56218_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56218_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj56218 
move_92861();
function move_92861() {
	window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_runningActionsCount = obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj56218");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_runningActionsCount = window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj56218_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56272();
function runjs_56272() {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56273();
function runjs_56273() {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("border-color", "#C00000"); $("#obj56502").css("border-width", "2px"); $("#obj56502").css("border-style", "solid"); $("#obj56502").css("border-radius", "10px"); $("#obj56502").css("-webkit-border-radius", "10px"); $("#obj56502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56504 
hide_56274();
function hide_56274() {
	var selector = "#obj56504";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56274(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56218_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56275();
function runjs_56275() {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56218").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56276();
function switchText_56276() {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj56218_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56218 
move_56277();
function move_56277() {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj56218");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj56218_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56278();
function runjs_56278() {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56279();
function runjs_56279() {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("border-color", "#000000"); $("#obj56502").css("border-width", "1px"); $("#obj56502").css("border-style", "solid"); $("#obj56502").css("border-radius", "10px"); $("#obj56502").css("-webkit-border-radius", "10px"); $("#obj56502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56504
(function(){
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj56504";
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
					window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56218_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56281();
function runjs_56281() {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56218").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56282();
function runjs_56282() {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56218").css("border-color", "rgba(0,0,0,0)"); $("#obj56218").css("border-width", "0px"); $("#obj56218").css("border-style", "solid"); $("#obj56218").css("border-radius", "10px"); $("#obj56218").css("-webkit-border-radius", "10px"); $("#obj56218").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_56283();
function playAudio_56283() {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj56218_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56284();
function switchText_56284() {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = obj56218_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56218_droppedInsideTargetActions_5_runningActionsCount = window.obj56218_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj56218_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj56218_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56258();
function runjs_56258() {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56427").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56259();
function runjs_56259() {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56427").css("border-color", "#C00000"); $("#obj56427").css("border-width", "2px"); $("#obj56427").css("border-style", "solid"); $("#obj56427").css("border-radius", "10px"); $("#obj56427").css("-webkit-border-radius", "10px"); $("#obj56427").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56425 
hide_56260();
function hide_56260() {
	var selector = "#obj56425";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56260(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56218_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56261();
function runjs_56261() {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56218").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56262();
function switchText_56262() {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj56218_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56218 
move_56263();
function move_56263() {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj56218");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj56218_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56264();
function runjs_56264() {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56427").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56265();
function runjs_56265() {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56427").css("border-color", "#000000"); $("#obj56427").css("border-width", "1px"); $("#obj56427").css("border-style", "solid"); $("#obj56427").css("border-radius", "10px"); $("#obj56427").css("-webkit-border-radius", "10px"); $("#obj56427").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56425
(function(){
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj56425";
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
					window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56218_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56267();
function runjs_56267() {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56218").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56268();
function runjs_56268() {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56218").css("border-color", "rgba(0,0,0,0)"); $("#obj56218").css("border-width", "0px"); $("#obj56218").css("border-style", "solid"); $("#obj56218").css("border-radius", "10px"); $("#obj56218").css("-webkit-border-radius", "10px"); $("#obj56218").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_56269();
function playAudio_56269() {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj56218_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56270();
function switchText_56270() {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = obj56218_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56218_droppedInsideTargetActions_4_runningActionsCount = window.obj56218_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj56218_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj56218_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56244();
function runjs_56244() {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56245();
function runjs_56245() {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("border-color", "#C00000"); $("#obj56439").css("border-width", "2px"); $("#obj56439").css("border-style", "solid"); $("#obj56439").css("border-radius", "10px"); $("#obj56439").css("-webkit-border-radius", "10px"); $("#obj56439").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56437 
hide_56246();
function hide_56246() {
	var selector = "#obj56437";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56246(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56218_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56247();
function runjs_56247() {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56218").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56248();
function switchText_56248() {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj56218_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56218 
move_56249();
function move_56249() {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj56218");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj56218_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56250();
function runjs_56250() {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56251();
function runjs_56251() {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("border-color", "#000000"); $("#obj56439").css("border-width", "1px"); $("#obj56439").css("border-style", "solid"); $("#obj56439").css("border-radius", "10px"); $("#obj56439").css("-webkit-border-radius", "10px"); $("#obj56439").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56437
(function(){
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj56437";
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
					window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56218_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56253();
function runjs_56253() {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56218").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56254();
function runjs_56254() {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56218").css("border-color", "rgba(0,0,0,0)"); $("#obj56218").css("border-width", "0px"); $("#obj56218").css("border-style", "solid"); $("#obj56218").css("border-radius", "10px"); $("#obj56218").css("-webkit-border-radius", "10px"); $("#obj56218").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_56255();
function playAudio_56255() {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj56218_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56256();
function switchText_56256() {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = obj56218_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56218_droppedInsideTargetActions_3_runningActionsCount = window.obj56218_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj56218_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj56218_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56230();
function runjs_56230() {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56231();
function runjs_56231() {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("border-color", "#C00000"); $("#obj56445").css("border-width", "2px"); $("#obj56445").css("border-style", "solid"); $("#obj56445").css("border-radius", "10px"); $("#obj56445").css("-webkit-border-radius", "10px"); $("#obj56445").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56443 
hide_56232();
function hide_56232() {
	var selector = "#obj56443";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56232(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56218_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56233();
function runjs_56233() {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56218").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56234();
function switchText_56234() {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj56218_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56218 
move_56235();
function move_56235() {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj56218");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj56218_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_56236();
function runjs_56236() {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_56237();
function runjs_56237() {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("border-color", "#000000"); $("#obj56445").css("border-width", "1px"); $("#obj56445").css("border-style", "solid"); $("#obj56445").css("border-radius", "10px"); $("#obj56445").css("-webkit-border-radius", "10px"); $("#obj56445").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56443
(function(){
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj56443";
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
					window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56218_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_56239();
function runjs_56239() {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56218").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_56240();
function runjs_56240() {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56218").css("border-color", "rgba(0,0,0,0)"); $("#obj56218").css("border-width", "0px"); $("#obj56218").css("border-style", "solid"); $("#obj56218").css("border-radius", "10px"); $("#obj56218").css("-webkit-border-radius", "10px"); $("#obj56218").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_56241();
function playAudio_56241() {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj56218_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_56242();
function switchText_56242() {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = obj56218_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56218_droppedInsideTargetActions_2_runningActionsCount = window.obj56218_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj56218_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj56218_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_56223();
function runjs_56223() {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = obj56218_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56451").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_runningActionsCount = window.obj56218_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_56224();
function runjs_56224() {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = obj56218_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56451").css("border-color", "#058E3F"); $("#obj56451").css("border-width", "2px"); $("#obj56451").css("border-style", "solid"); $("#obj56451").css("border-radius", "10px"); $("#obj56451").css("-webkit-border-radius", "10px"); $("#obj56451").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_runningActionsCount = window.obj56218_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56449 
hide_56225();
function hide_56225() {
	var selector = "#obj56449";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56218_droppedInsideTargetActions_runningActionsCount = obj56218_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56218_droppedInsideTargetActions_runningActionsCount = window.obj56218_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_56225(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56218_droppedInsideTargetActions_runningActionsCount = window.obj56218_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56218_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_56226();
function runjs_56226() {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = obj56218_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56218").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56218_droppedInsideTargetActions_runningActionsCount = window.obj56218_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj56218_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_56227();
function switchText_56227() {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = obj56218_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56218_droppedInsideTargetActions_runningActionsCount = window.obj56218_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56218_droppedInsideTargetActions_runningActionsCount = window.obj56218_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj56218_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj56421 
playAudio_56228();
function playAudio_56228() {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = obj56218_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj56421")[0];
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
		    window.obj56218_droppedInsideTargetActions_runningActionsCount = window.obj56218_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56218_droppedInsideTargetActions_runningActionsCount = window.obj56218_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56218_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56218_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56218_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56218_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj56218_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56218").trigger("obj56218_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56218) {
				console.warn("de-queueing event obj56218." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56218").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56218_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj56151_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj56151");
//	action: dragDrop
//	target: obj56151 
dragDrop_90737();
function dragDrop_90737() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj56151_onTouchDown_runningActionsCount = obj56151_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj56151');
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
	  	containerNode = $('#obj56461');
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
    	window.obj56151_onTouchDown_runningActionsCount = window.obj56151_onTouchDown_runningActionsCount - 1;
if (window.obj56151_onTouchDown_runningActionsCount < 0) {
	window.obj56151_onTouchDown_runningActionsCount = 0;
} else if (window.obj56151_onTouchDown_runningActionsCount == 0) {
	obj56151_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj56427","#obj56445","#obj56439","#obj56451","#obj56502");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_90737 = false;
    	var dropped_id_90737;
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
					dropped_90737 = true;
					dropped_id_90737 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_90737) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj56151").trigger('SCActionDragDrop90737_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj56151_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56151_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj56151 
move_92863();
function move_92863() {
	window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_runningActionsCount = obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj56151");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 681;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_runningActionsCount = window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj56151_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_90806();
function runjs_90806() {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_90807();
function runjs_90807() {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("border-color", "#C00000"); $("#obj56502").css("border-width", "2px"); $("#obj56502").css("border-style", "solid"); $("#obj56502").css("border-radius", "10px"); $("#obj56502").css("-webkit-border-radius", "10px"); $("#obj56502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56504 
hide_90808();
function hide_90808() {
	var selector = "#obj56504";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90808(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56151_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_90809();
function runjs_90809() {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56151").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90810();
function switchText_90810() {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj56151_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56151 
move_90811();
function move_90811() {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj56151");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 681;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj56151_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_90812();
function runjs_90812() {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_90813();
function runjs_90813() {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("border-color", "#000000"); $("#obj56502").css("border-width", "1px"); $("#obj56502").css("border-style", "solid"); $("#obj56502").css("border-radius", "10px"); $("#obj56502").css("-webkit-border-radius", "10px"); $("#obj56502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56504
(function(){
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj56504";
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
					window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56151_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_90815();
function runjs_90815() {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56151").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_90816();
function runjs_90816() {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56151").css("border-color", "rgba(0,0,0,0)"); $("#obj56151").css("border-width", "0px"); $("#obj56151").css("border-style", "solid"); $("#obj56151").css("border-radius", "10px"); $("#obj56151").css("-webkit-border-radius", "10px"); $("#obj56151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_90817();
function playAudio_90817() {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj56151_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_90818();
function switchText_90818() {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = obj56151_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56151_droppedInsideTargetActions_5_runningActionsCount = window.obj56151_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj56151_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj56151_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_90774();
function runjs_90774() {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56451").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_90775();
function runjs_90775() {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56451").css("border-color", "#C00000"); $("#obj56451").css("border-width", "2px"); $("#obj56451").css("border-style", "solid"); $("#obj56451").css("border-radius", "10px"); $("#obj56451").css("-webkit-border-radius", "10px"); $("#obj56451").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56449 
hide_90776();
function hide_90776() {
	var selector = "#obj56449";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90776(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56151_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_90777();
function runjs_90777() {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56151").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90778();
function switchText_90778() {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj56151_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56151 
move_90779();
function move_90779() {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj56151");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 681;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj56151_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_90780();
function runjs_90780() {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56451").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_90781();
function runjs_90781() {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56451").css("border-color", "#000000"); $("#obj56451").css("border-width", "1px"); $("#obj56451").css("border-style", "solid"); $("#obj56451").css("border-radius", "10px"); $("#obj56451").css("-webkit-border-radius", "10px"); $("#obj56451").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56449
(function(){
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj56449";
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
					window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56151_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_90783();
function runjs_90783() {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56151").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_90784();
function runjs_90784() {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56151").css("border-color", "rgba(0,0,0,0)"); $("#obj56151").css("border-width", "0px"); $("#obj56151").css("border-style", "solid"); $("#obj56151").css("border-radius", "10px"); $("#obj56151").css("-webkit-border-radius", "10px"); $("#obj56151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_90785();
function playAudio_90785() {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj56151_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_90786();
function switchText_90786() {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = obj56151_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56151_droppedInsideTargetActions_4_runningActionsCount = window.obj56151_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj56151_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj56151_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_90760();
function runjs_90760() {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_90761();
function runjs_90761() {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("border-color", "#C00000"); $("#obj56439").css("border-width", "2px"); $("#obj56439").css("border-style", "solid"); $("#obj56439").css("border-radius", "10px"); $("#obj56439").css("-webkit-border-radius", "10px"); $("#obj56439").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56437 
hide_90762();
function hide_90762() {
	var selector = "#obj56437";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90762(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56151_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_90763();
function runjs_90763() {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56151").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90764();
function switchText_90764() {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj56151_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56151 
move_90765();
function move_90765() {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj56151");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 681;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj56151_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_90766();
function runjs_90766() {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_90767();
function runjs_90767() {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("border-color", "#000000"); $("#obj56439").css("border-width", "1px"); $("#obj56439").css("border-style", "solid"); $("#obj56439").css("border-radius", "10px"); $("#obj56439").css("-webkit-border-radius", "10px"); $("#obj56439").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56437
(function(){
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj56437";
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
					window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56151_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_90769();
function runjs_90769() {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56151").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_90770();
function runjs_90770() {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56151").css("border-color", "rgba(0,0,0,0)"); $("#obj56151").css("border-width", "0px"); $("#obj56151").css("border-style", "solid"); $("#obj56151").css("border-radius", "10px"); $("#obj56151").css("-webkit-border-radius", "10px"); $("#obj56151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_90771();
function playAudio_90771() {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj56151_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_90772();
function switchText_90772() {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = obj56151_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56151_droppedInsideTargetActions_3_runningActionsCount = window.obj56151_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj56151_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj56151_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_90746();
function runjs_90746() {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_90747();
function runjs_90747() {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("border-color", "#C00000"); $("#obj56445").css("border-width", "2px"); $("#obj56445").css("border-style", "solid"); $("#obj56445").css("border-radius", "10px"); $("#obj56445").css("-webkit-border-radius", "10px"); $("#obj56445").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56443 
hide_90748();
function hide_90748() {
	var selector = "#obj56443";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90748(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56151_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_90749();
function runjs_90749() {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56151").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90750();
function switchText_90750() {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj56151_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56151 
move_90751();
function move_90751() {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj56151");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 340;
	var moveY = 681;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj56151_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_90752();
function runjs_90752() {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_90753();
function runjs_90753() {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56445").css("border-color", "#000000"); $("#obj56445").css("border-width", "1px"); $("#obj56445").css("border-style", "solid"); $("#obj56445").css("border-radius", "10px"); $("#obj56445").css("-webkit-border-radius", "10px"); $("#obj56445").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56443
(function(){
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj56443";
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
					window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56151_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_90755();
function runjs_90755() {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56151").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_90756();
function runjs_90756() {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56151").css("border-color", "rgba(0,0,0,0)"); $("#obj56151").css("border-width", "0px"); $("#obj56151").css("border-style", "solid"); $("#obj56151").css("border-radius", "10px"); $("#obj56151").css("-webkit-border-radius", "10px"); $("#obj56151").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_90757();
function playAudio_90757() {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj56151_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_90758();
function switchText_90758() {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = obj56151_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56151_droppedInsideTargetActions_2_runningActionsCount = window.obj56151_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj56151_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj56151_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_90739();
function runjs_90739() {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = obj56151_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56427").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_runningActionsCount = window.obj56151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_90740();
function runjs_90740() {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = obj56151_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56427").css("border-color", "#058E3F"); $("#obj56427").css("border-width", "2px"); $("#obj56427").css("border-style", "solid"); $("#obj56427").css("border-radius", "10px"); $("#obj56427").css("-webkit-border-radius", "10px"); $("#obj56427").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_runningActionsCount = window.obj56151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56425 
hide_90741();
function hide_90741() {
	var selector = "#obj56425";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56151_droppedInsideTargetActions_runningActionsCount = obj56151_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56151_droppedInsideTargetActions_runningActionsCount = window.obj56151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90741(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56151_droppedInsideTargetActions_runningActionsCount = window.obj56151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56151_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_90742();
function runjs_90742() {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = obj56151_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56151").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56151_droppedInsideTargetActions_runningActionsCount = window.obj56151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj56151_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90743();
function switchText_90743() {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = obj56151_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56151_droppedInsideTargetActions_runningActionsCount = window.obj56151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56151_droppedInsideTargetActions_runningActionsCount = window.obj56151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj56151_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj56421 
playAudio_90744();
function playAudio_90744() {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = obj56151_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj56421")[0];
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
		    window.obj56151_droppedInsideTargetActions_runningActionsCount = window.obj56151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56151_droppedInsideTargetActions_runningActionsCount = window.obj56151_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56151_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56151_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56151_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56151_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj56151_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56151").trigger("obj56151_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56151) {
				console.warn("de-queueing event obj56151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56151_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj56579_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj56579");
//	action: dragDrop
//	target: obj56579 
dragDrop_90673();
function dragDrop_90673() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj56579_onTouchDown_runningActionsCount = obj56579_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj56579');
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
	  	containerNode = $('#obj56461');
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
    	window.obj56579_onTouchDown_runningActionsCount = window.obj56579_onTouchDown_runningActionsCount - 1;
if (window.obj56579_onTouchDown_runningActionsCount < 0) {
	window.obj56579_onTouchDown_runningActionsCount = 0;
} else if (window.obj56579_onTouchDown_runningActionsCount == 0) {
	obj56579_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj56445","#obj56451","#obj56439","#obj56427","#obj56502");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_90673 = false;
    	var dropped_id_90673;
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
					dropped_90673 = true;
					dropped_id_90673 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_90673) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj56579").trigger('SCActionDragDrop90673_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj56579_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56579_onTouchDown_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj56579 
move_92855();
function move_92855() {
	window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_runningActionsCount = obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj56579");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 659;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_runningActionsCount = window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj56579_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_90724();
function runjs_90724() {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_90725();
function runjs_90725() {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("border-color", "#C00000"); $("#obj56502").css("border-width", "2px"); $("#obj56502").css("border-style", "solid"); $("#obj56502").css("border-radius", "10px"); $("#obj56502").css("-webkit-border-radius", "10px"); $("#obj56502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56504 
hide_90726();
function hide_90726() {
	var selector = "#obj56504";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90726(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56579_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_90727();
function runjs_90727() {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56579").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90728();
function switchText_90728() {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj56579_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56579 
move_90729();
function move_90729() {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj56579");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 659;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj56579_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_90730();
function runjs_90730() {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_90731();
function runjs_90731() {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56502").css("border-color", "#000000"); $("#obj56502").css("border-width", "1px"); $("#obj56502").css("border-style", "solid"); $("#obj56502").css("border-radius", "10px"); $("#obj56502").css("-webkit-border-radius", "10px"); $("#obj56502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56504
(function(){
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj56504";
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
					window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56579_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_90733();
function runjs_90733() {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56579").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_90734();
function runjs_90734() {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj56579").css("border-color", "rgba(0,0,0,0)"); $("#obj56579").css("border-width", "0px"); $("#obj56579").css("border-style", "solid"); $("#obj56579").css("border-radius", "10px"); $("#obj56579").css("-webkit-border-radius", "10px"); $("#obj56579").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_90735();
function playAudio_90735() {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj56579_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_90736();
function switchText_90736() {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = obj56579_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56579_droppedInsideTargetActions_5_runningActionsCount = window.obj56579_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj56579_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj56579_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_90800();
function runjs_90800() {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = obj56579_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56427").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_4_runningActionsCount = window.obj56579_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_90801();
function runjs_90801() {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = obj56579_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56427").css("border-color", "#058E3F"); $("#obj56427").css("border-width", "2px"); $("#obj56427").css("border-style", "solid"); $("#obj56427").css("border-radius", "10px"); $("#obj56427").css("-webkit-border-radius", "10px"); $("#obj56427").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_4_runningActionsCount = window.obj56579_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56425 
hide_90802();
function hide_90802() {
	var selector = "#obj56425";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = obj56579_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56579_droppedInsideTargetActions_4_runningActionsCount = window.obj56579_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90802(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56579_droppedInsideTargetActions_4_runningActionsCount = window.obj56579_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56579_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_90803();
function runjs_90803() {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = obj56579_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj56579").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_4_runningActionsCount = window.obj56579_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90804();
function switchText_90804() {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = obj56579_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56579_droppedInsideTargetActions_4_runningActionsCount = window.obj56579_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56579_droppedInsideTargetActions_4_runningActionsCount = window.obj56579_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj56579_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj56421 
playAudio_90805();
function playAudio_90805() {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = obj56579_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj56421")[0];
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
		    window.obj56579_droppedInsideTargetActions_4_runningActionsCount = window.obj56579_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_4_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56579_droppedInsideTargetActions_4_runningActionsCount = window.obj56579_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_4_actionGroup6();
}
	}
}









};
obj56579_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	





















};
obj56579_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_90696();
function runjs_90696() {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_90697();
function runjs_90697() {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("border-color", "#C00000"); $("#obj56439").css("border-width", "2px"); $("#obj56439").css("border-style", "solid"); $("#obj56439").css("border-radius", "10px"); $("#obj56439").css("-webkit-border-radius", "10px"); $("#obj56439").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56437 
hide_90698();
function hide_90698() {
	var selector = "#obj56437";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90698(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56579_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_90699();
function runjs_90699() {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56579").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90700();
function switchText_90700() {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj56579_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56579 
move_90701();
function move_90701() {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj56579");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 659;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj56579_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_90702();
function runjs_90702() {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_90703();
function runjs_90703() {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56439").css("border-color", "#000000"); $("#obj56439").css("border-width", "1px"); $("#obj56439").css("border-style", "solid"); $("#obj56439").css("border-radius", "10px"); $("#obj56439").css("-webkit-border-radius", "10px"); $("#obj56439").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56437
(function(){
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj56437";
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
					window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56579_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_90705();
function runjs_90705() {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56579").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_90706();
function runjs_90706() {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj56579").css("border-color", "rgba(0,0,0,0)"); $("#obj56579").css("border-width", "0px"); $("#obj56579").css("border-style", "solid"); $("#obj56579").css("border-radius", "10px"); $("#obj56579").css("-webkit-border-radius", "10px"); $("#obj56579").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_90707();
function playAudio_90707() {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj56579_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_90708();
function switchText_90708() {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = obj56579_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56579_droppedInsideTargetActions_3_runningActionsCount = window.obj56579_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj56579_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj56579_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_90682();
function runjs_90682() {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56451").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_90683();
function runjs_90683() {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56451").css("border-color", "#C00000"); $("#obj56451").css("border-width", "2px"); $("#obj56451").css("border-style", "solid"); $("#obj56451").css("border-radius", "10px"); $("#obj56451").css("-webkit-border-radius", "10px"); $("#obj56451").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56449 
hide_90684();
function hide_90684() {
	var selector = "#obj56449";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90684(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56579_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_90685();
function runjs_90685() {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56579").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90686();
function switchText_90686() {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj56579_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj56579 
move_90687();
function move_90687() {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj56579");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 91;
	var moveY = 659;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj56579_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_90688();
function runjs_90688() {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56451").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_90689();
function runjs_90689() {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56451").css("border-color", "#000000"); $("#obj56451").css("border-width", "1px"); $("#obj56451").css("border-style", "solid"); $("#obj56451").css("border-radius", "10px"); $("#obj56451").css("-webkit-border-radius", "10px"); $("#obj56451").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj56449
(function(){
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj56449";
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
					window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj56579_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_90691();
function runjs_90691() {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56579").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_90692();
function runjs_90692() {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj56579").css("border-color", "rgba(0,0,0,0)"); $("#obj56579").css("border-width", "0px"); $("#obj56579").css("border-style", "solid"); $("#obj56579").css("border-radius", "10px"); $("#obj56579").css("-webkit-border-radius", "10px"); $("#obj56579").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj56419 
playAudio_90693();
function playAudio_90693() {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj56419")[0];
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
		    window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj56579_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_90694();
function switchText_90694() {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = obj56579_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56579_droppedInsideTargetActions_2_runningActionsCount = window.obj56579_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj56579_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj56579_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_90675();
function runjs_90675() {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = obj56579_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56445").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_runningActionsCount = window.obj56579_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_90676();
function runjs_90676() {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = obj56579_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56445").css("border-color", "#058E3F"); $("#obj56445").css("border-width", "2px"); $("#obj56445").css("border-style", "solid"); $("#obj56445").css("border-radius", "10px"); $("#obj56445").css("-webkit-border-radius", "10px"); $("#obj56445").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_runningActionsCount = window.obj56579_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj56443 
hide_90677();
function hide_90677() {
	var selector = "#obj56443";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj56579_droppedInsideTargetActions_runningActionsCount = obj56579_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj56579_droppedInsideTargetActions_runningActionsCount = window.obj56579_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_90677(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj56579_droppedInsideTargetActions_runningActionsCount = window.obj56579_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj56579_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_90678();
function runjs_90678() {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = obj56579_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj56579").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj56579_droppedInsideTargetActions_runningActionsCount = window.obj56579_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj56579_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90679();
function switchText_90679() {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = obj56579_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj56435_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj56435_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj56435").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj56435_content");
			setTimeout(function () {
				window.obj56579_droppedInsideTargetActions_runningActionsCount = window.obj56579_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj56435 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj56579_droppedInsideTargetActions_runningActionsCount = window.obj56579_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj56579_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj56421 
playAudio_90680();
function playAudio_90680() {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = obj56579_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj56421")[0];
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
		    window.obj56579_droppedInsideTargetActions_runningActionsCount = window.obj56579_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj56579_droppedInsideTargetActions_runningActionsCount = window.obj56579_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj56579_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj56579_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj56579_droppedInsideTargetActions_runningActionsCount == 0) {
	obj56579_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj56579_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj56579").trigger("obj56579_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56579) {
				console.warn("de-queueing event obj56579." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56579").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56579_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68366_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68366_onTap_activeActionGroupIndex = -1;
		$("#obj68366").trigger("obj68366_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68366) {
				console.warn("de-queueing event obj68366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68366_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68366 
hide_68369();
function hide_68369() {
	var selector = "#obj68366";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68366_onTap_runningActionsCount = obj68366_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68366_onTap_runningActionsCount = window.obj68366_onTap_runningActionsCount - 1;
if (window.obj68366_onTap_runningActionsCount < 0) {
	window.obj68366_onTap_runningActionsCount = 0;
} else if (window.obj68366_onTap_runningActionsCount == 0) {
	obj68366_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68369(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68366_onTap_runningActionsCount = window.obj68366_onTap_runningActionsCount - 1;
if (window.obj68366_onTap_runningActionsCount < 0) {
	window.obj68366_onTap_runningActionsCount = 0;
} else if (window.obj68366_onTap_runningActionsCount == 0) {
	obj68366_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68372 
stopMovie_68368();
function stopMovie_68368() {
	window.obj68366_onTap_runningActionsCount = obj68366_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68372")[0];
	myVideo.pause();
	window.obj68366_onTap_runningActionsCount = window.obj68366_onTap_runningActionsCount - 1;
if (window.obj68366_onTap_runningActionsCount < 0) {
	window.obj68366_onTap_runningActionsCount = 0;
} else if (window.obj68366_onTap_runningActionsCount == 0) {
	obj68366_onTap_actionGroup1();
}
}
















};
obj68366_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68366_onTap_activeActionGroupIndex = -1;
		$("#obj68366").trigger("obj68366_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68366) {
				console.warn("de-queueing event obj68366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68366_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68358
(function(){
	window.obj68366_onTap_runningActionsCount = obj68366_onTap_runningActionsCount + 1;

	var selector = "#obj68358";
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
					window.obj68366_onTap_runningActionsCount = window.obj68366_onTap_runningActionsCount - 1;
if (window.obj68366_onTap_runningActionsCount < 0) {
	window.obj68366_onTap_runningActionsCount = 0;
} else if (window.obj68366_onTap_runningActionsCount == 0) {
	obj68366_onTap_actionGroup2();
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
				window.obj68366_onTap_runningActionsCount = window.obj68366_onTap_runningActionsCount - 1;
if (window.obj68366_onTap_runningActionsCount < 0) {
	window.obj68366_onTap_runningActionsCount = 0;
} else if (window.obj68366_onTap_runningActionsCount == 0) {
	obj68366_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68366_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68366_onTap_activeActionGroupIndex = -1;
		$("#obj68366").trigger("obj68366_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68366) {
				console.warn("de-queueing event obj68366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68366_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68372 
move_68371();
function move_68371() {
	window.obj68366_onTap_runningActionsCount = obj68366_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68372");
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
			window.obj68366_onTap_runningActionsCount = window.obj68366_onTap_runningActionsCount - 1;
if (window.obj68366_onTap_runningActionsCount < 0) {
	window.obj68366_onTap_runningActionsCount = 0;
} else if (window.obj68366_onTap_runningActionsCount == 0) {
	obj68366_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68366_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68366_onTap_activeActionGroupIndex = -1;
		$("#obj68366").trigger("obj68366_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68366) {
				console.warn("de-queueing event obj68366." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68366").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68366_onTap_activeActionGroupIndex = 3;
	





















};
obj68358_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68358_onTap_activeActionGroupIndex = -1;
		$("#obj68358").trigger("obj68358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68358) {
				console.warn("de-queueing event obj68358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68358_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68358 
hide_68361();
function hide_68361() {
	var selector = "#obj68358";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68358_onTap_runningActionsCount = obj68358_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68358_onTap_runningActionsCount = window.obj68358_onTap_runningActionsCount - 1;
if (window.obj68358_onTap_runningActionsCount < 0) {
	window.obj68358_onTap_runningActionsCount = 0;
} else if (window.obj68358_onTap_runningActionsCount == 0) {
	obj68358_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68361(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68358_onTap_runningActionsCount = window.obj68358_onTap_runningActionsCount - 1;
if (window.obj68358_onTap_runningActionsCount < 0) {
	window.obj68358_onTap_runningActionsCount = 0;
} else if (window.obj68358_onTap_runningActionsCount == 0) {
	obj68358_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68372 
playPauseMovie_68360();
function playPauseMovie_68360() {
	window.obj68358_onTap_runningActionsCount = obj68358_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68372")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68358_onTap_runningActionsCount = window.obj68358_onTap_runningActionsCount - 1;
if (window.obj68358_onTap_runningActionsCount < 0) {
	window.obj68358_onTap_runningActionsCount = 0;
} else if (window.obj68358_onTap_runningActionsCount == 0) {
	obj68358_onTap_actionGroup1();
}
}

















};
obj68358_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68358_onTap_activeActionGroupIndex = -1;
		$("#obj68358").trigger("obj68358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68358) {
				console.warn("de-queueing event obj68358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68358_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68366
(function(){
	window.obj68358_onTap_runningActionsCount = obj68358_onTap_runningActionsCount + 1;

	var selector = "#obj68366";
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
					window.obj68358_onTap_runningActionsCount = window.obj68358_onTap_runningActionsCount - 1;
if (window.obj68358_onTap_runningActionsCount < 0) {
	window.obj68358_onTap_runningActionsCount = 0;
} else if (window.obj68358_onTap_runningActionsCount == 0) {
	obj68358_onTap_actionGroup2();
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
				window.obj68358_onTap_runningActionsCount = window.obj68358_onTap_runningActionsCount - 1;
if (window.obj68358_onTap_runningActionsCount < 0) {
	window.obj68358_onTap_runningActionsCount = 0;
} else if (window.obj68358_onTap_runningActionsCount == 0) {
	obj68358_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68358_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68358_onTap_activeActionGroupIndex = -1;
		$("#obj68358").trigger("obj68358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68358) {
				console.warn("de-queueing event obj68358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68358_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68372 
move_68363();
function move_68363() {
	window.obj68358_onTap_runningActionsCount = obj68358_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68372");
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
			window.obj68358_onTap_runningActionsCount = window.obj68358_onTap_runningActionsCount - 1;
if (window.obj68358_onTap_runningActionsCount < 0) {
	window.obj68358_onTap_runningActionsCount = 0;
} else if (window.obj68358_onTap_runningActionsCount == 0) {
	obj68358_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68358_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68358_onTap_activeActionGroupIndex = -1;
		$("#obj68358").trigger("obj68358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68358) {
				console.warn("de-queueing event obj68358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68358_onTap_activeActionGroupIndex = 3;
	





















};
obj89377_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89377_onTap_activeActionGroupIndex = -1;
		$("#obj89377").trigger("obj89377_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89377) {
				console.warn("de-queueing event obj89377." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89377").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89377_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89382 
stopAudio_89379();
function stopAudio_89379() {
	window.obj89377_onTap_runningActionsCount = obj89377_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89382")[0];
	myAudio.pause();
	window.obj89377_onTap_runningActionsCount = window.obj89377_onTap_runningActionsCount - 1;
if (window.obj89377_onTap_runningActionsCount < 0) {
	window.obj89377_onTap_runningActionsCount = 0;
} else if (window.obj89377_onTap_runningActionsCount == 0) {
	obj89377_onTap_actionGroup1();
}
}








};
obj89377_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89377_onTap_activeActionGroupIndex = -1;
		$("#obj89377").trigger("obj89377_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89377) {
				console.warn("de-queueing event obj89377." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89377").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89377_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89377 
hide_89380();
function hide_89380() {
	var selector = "#obj89377";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89377_onTap_runningActionsCount = obj89377_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89377_onTap_runningActionsCount = window.obj89377_onTap_runningActionsCount - 1;
if (window.obj89377_onTap_runningActionsCount < 0) {
	window.obj89377_onTap_runningActionsCount = 0;
} else if (window.obj89377_onTap_runningActionsCount == 0) {
	obj89377_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89380(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89377_onTap_runningActionsCount = window.obj89377_onTap_runningActionsCount - 1;
if (window.obj89377_onTap_runningActionsCount < 0) {
	window.obj89377_onTap_runningActionsCount = 0;
} else if (window.obj89377_onTap_runningActionsCount == 0) {
	obj89377_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89377_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89377_onTap_activeActionGroupIndex = -1;
		$("#obj89377").trigger("obj89377_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89377) {
				console.warn("de-queueing event obj89377." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89377").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89377_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89372
(function(){
	window.obj89377_onTap_runningActionsCount = obj89377_onTap_runningActionsCount + 1;

	var selector = "#obj89372";
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
					window.obj89377_onTap_runningActionsCount = window.obj89377_onTap_runningActionsCount - 1;
if (window.obj89377_onTap_runningActionsCount < 0) {
	window.obj89377_onTap_runningActionsCount = 0;
} else if (window.obj89377_onTap_runningActionsCount == 0) {
	obj89377_onTap_actionGroup3();
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
				window.obj89377_onTap_runningActionsCount = window.obj89377_onTap_runningActionsCount - 1;
if (window.obj89377_onTap_runningActionsCount < 0) {
	window.obj89377_onTap_runningActionsCount = 0;
} else if (window.obj89377_onTap_runningActionsCount == 0) {
	obj89377_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89377_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89377_onTap_activeActionGroupIndex = -1;
		$("#obj89377").trigger("obj89377_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89377) {
				console.warn("de-queueing event obj89377." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89377").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89377_onTap_activeActionGroupIndex = 3;
	





















};
obj89372_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89372_onTap_activeActionGroupIndex = -1;
		$("#obj89372").trigger("obj89372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89372) {
				console.warn("de-queueing event obj89372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89372_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89372 
hide_89374();
function hide_89374() {
	var selector = "#obj89372";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89372_onTap_runningActionsCount = obj89372_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89372_onTap_runningActionsCount = window.obj89372_onTap_runningActionsCount - 1;
if (window.obj89372_onTap_runningActionsCount < 0) {
	window.obj89372_onTap_runningActionsCount = 0;
} else if (window.obj89372_onTap_runningActionsCount == 0) {
	obj89372_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89374(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89372_onTap_runningActionsCount = window.obj89372_onTap_runningActionsCount - 1;
if (window.obj89372_onTap_runningActionsCount < 0) {
	window.obj89372_onTap_runningActionsCount = 0;
} else if (window.obj89372_onTap_runningActionsCount == 0) {
	obj89372_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89372_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89372_onTap_activeActionGroupIndex = -1;
		$("#obj89372").trigger("obj89372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89372) {
				console.warn("de-queueing event obj89372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89372_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89377
(function(){
	window.obj89372_onTap_runningActionsCount = obj89372_onTap_runningActionsCount + 1;

	var selector = "#obj89377";
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
					window.obj89372_onTap_runningActionsCount = window.obj89372_onTap_runningActionsCount - 1;
if (window.obj89372_onTap_runningActionsCount < 0) {
	window.obj89372_onTap_runningActionsCount = 0;
} else if (window.obj89372_onTap_runningActionsCount == 0) {
	obj89372_onTap_actionGroup2();
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
				window.obj89372_onTap_runningActionsCount = window.obj89372_onTap_runningActionsCount - 1;
if (window.obj89372_onTap_runningActionsCount < 0) {
	window.obj89372_onTap_runningActionsCount = 0;
} else if (window.obj89372_onTap_runningActionsCount == 0) {
	obj89372_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89372_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89372_onTap_activeActionGroupIndex = -1;
		$("#obj89372").trigger("obj89372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89372) {
				console.warn("de-queueing event obj89372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89372_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89382 
playAudio_89376();
function playAudio_89376() {
	window.obj89372_onTap_runningActionsCount = obj89372_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89382")[0];
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
		    window.obj89372_onTap_runningActionsCount = window.obj89372_onTap_runningActionsCount - 1;
if (window.obj89372_onTap_runningActionsCount < 0) {
	window.obj89372_onTap_runningActionsCount = 0;
} else if (window.obj89372_onTap_runningActionsCount == 0) {
	obj89372_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89372_onTap_runningActionsCount = window.obj89372_onTap_runningActionsCount - 1;
if (window.obj89372_onTap_runningActionsCount < 0) {
	window.obj89372_onTap_runningActionsCount = 0;
} else if (window.obj89372_onTap_runningActionsCount == 0) {
	obj89372_onTap_actionGroup3();
}
	}
}









};
obj89372_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89372_onTap_activeActionGroupIndex = -1;
		$("#obj89372").trigger("obj89372_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89372) {
				console.warn("de-queueing event obj89372." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89372").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89372_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj56476: Event Touch Down
 *
 */
$("#obj56476").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj56476_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56476_onTap is still running");
	return;
}
var obj56476_onTap_runningActionsCount = 0;
var obj56476_onTap_loopCount = 0;
obj56476_onTap_actionGroup0();
});










/*
 *
 *   obj56469: Event Touch Down
 *
 */
$("#obj56469").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj56469_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56469_onTap is still running");
	return;
}
var obj56469_onTap_runningActionsCount = 0;
var obj56469_onTap_loopCount = 0;
obj56469_onTap_actionGroup0();
});























































































































































































































































































































/*
 *
 *   obj56352: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj56352");
	var winTarget = document.getElementById("obj56352");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj56352").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj56352_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj56352_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj56352_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56352_onTouchDown is still running");
	return;
}
var obj56352_onTouchDown_runningActionsCount = 0;
var obj56352_onTouchDown_loopCount = 0;
obj56352_onTouchDown_actionGroup0();
});



/*
 *
 *   obj56352: Event SCActionDragDrop56355_droppedOutsideTargetActions
 *
 */
$("#obj56352").bind("SCActionDragDrop56355_droppedOutsideTargetActions", function(event) {
	if (window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56352_SCActionDragDrop56355_droppedOutsideTargetActions is still running");
	return;
}
var obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_loopCount = 0;
obj56352_SCActionDragDrop56355_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj56352: Event droppedInsideTargetActions_5
 *
 */
$("#obj56352").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj56352_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56352_droppedInsideTargetActions_5 is still running");
	return;
}
var obj56352_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj56352_droppedInsideTargetActions_5_loopCount = 0;
obj56352_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj56352: Event droppedInsideTargetActions_4
 *
 */
$("#obj56352").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj56352_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56352_droppedInsideTargetActions_4 is still running");
	return;
}
var obj56352_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj56352_droppedInsideTargetActions_4_loopCount = 0;
obj56352_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj56352: Event droppedInsideTargetActions_3
 *
 */
$("#obj56352").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj56352_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56352_droppedInsideTargetActions_3 is still running");
	return;
}
var obj56352_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj56352_droppedInsideTargetActions_3_loopCount = 0;
obj56352_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj56352: Event droppedInsideTargetActions_2
 *
 */
$("#obj56352").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj56352_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56352_droppedInsideTargetActions_2 is still running");
	return;
}
var obj56352_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj56352_droppedInsideTargetActions_2_loopCount = 0;
obj56352_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj56352: Event droppedInsideTargetActions
 *
 */
$("#obj56352").bind("droppedInsideTargetActions", function(event) {
	if (window.obj56352_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56352_droppedInsideTargetActions is still running");
	return;
}
var obj56352_droppedInsideTargetActions_runningActionsCount = 0;
var obj56352_droppedInsideTargetActions_loopCount = 0;
obj56352_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj56285: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj56285");
	var winTarget = document.getElementById("obj56285");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj56285").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj56285_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj56285_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj56285_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56285_onTouchDown is still running");
	return;
}
var obj56285_onTouchDown_runningActionsCount = 0;
var obj56285_onTouchDown_loopCount = 0;
obj56285_onTouchDown_actionGroup0();
});



/*
 *
 *   obj56285: Event SCActionDragDrop56288_droppedOutsideTargetActions
 *
 */
$("#obj56285").bind("SCActionDragDrop56288_droppedOutsideTargetActions", function(event) {
	if (window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56285_SCActionDragDrop56288_droppedOutsideTargetActions is still running");
	return;
}
var obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_loopCount = 0;
obj56285_SCActionDragDrop56288_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj56285: Event droppedInsideTargetActions_5
 *
 */
$("#obj56285").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj56285_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56285_droppedInsideTargetActions_5 is still running");
	return;
}
var obj56285_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj56285_droppedInsideTargetActions_5_loopCount = 0;
obj56285_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj56285: Event droppedInsideTargetActions_4
 *
 */
$("#obj56285").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj56285_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56285_droppedInsideTargetActions_4 is still running");
	return;
}
var obj56285_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj56285_droppedInsideTargetActions_4_loopCount = 0;
obj56285_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj56285: Event droppedInsideTargetActions_3
 *
 */
$("#obj56285").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj56285_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56285_droppedInsideTargetActions_3 is still running");
	return;
}
var obj56285_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj56285_droppedInsideTargetActions_3_loopCount = 0;
obj56285_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj56285: Event droppedInsideTargetActions_2
 *
 */
$("#obj56285").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj56285_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56285_droppedInsideTargetActions_2 is still running");
	return;
}
var obj56285_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj56285_droppedInsideTargetActions_2_loopCount = 0;
obj56285_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj56285: Event droppedInsideTargetActions
 *
 */
$("#obj56285").bind("droppedInsideTargetActions", function(event) {
	if (window.obj56285_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56285_droppedInsideTargetActions is still running");
	return;
}
var obj56285_droppedInsideTargetActions_runningActionsCount = 0;
var obj56285_droppedInsideTargetActions_loopCount = 0;
obj56285_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj56218: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj56218");
	var winTarget = document.getElementById("obj56218");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj56218").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj56218_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj56218_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj56218_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56218_onTouchDown is still running");
	return;
}
var obj56218_onTouchDown_runningActionsCount = 0;
var obj56218_onTouchDown_loopCount = 0;
obj56218_onTouchDown_actionGroup0();
});



/*
 *
 *   obj56218: Event SCActionDragDrop56221_droppedOutsideTargetActions
 *
 */
$("#obj56218").bind("SCActionDragDrop56221_droppedOutsideTargetActions", function(event) {
	if (window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56218_SCActionDragDrop56221_droppedOutsideTargetActions is still running");
	return;
}
var obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_loopCount = 0;
obj56218_SCActionDragDrop56221_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj56218: Event droppedInsideTargetActions_5
 *
 */
$("#obj56218").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj56218_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56218_droppedInsideTargetActions_5 is still running");
	return;
}
var obj56218_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj56218_droppedInsideTargetActions_5_loopCount = 0;
obj56218_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj56218: Event droppedInsideTargetActions_4
 *
 */
$("#obj56218").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj56218_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56218_droppedInsideTargetActions_4 is still running");
	return;
}
var obj56218_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj56218_droppedInsideTargetActions_4_loopCount = 0;
obj56218_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj56218: Event droppedInsideTargetActions_3
 *
 */
$("#obj56218").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj56218_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56218_droppedInsideTargetActions_3 is still running");
	return;
}
var obj56218_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj56218_droppedInsideTargetActions_3_loopCount = 0;
obj56218_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj56218: Event droppedInsideTargetActions_2
 *
 */
$("#obj56218").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj56218_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56218_droppedInsideTargetActions_2 is still running");
	return;
}
var obj56218_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj56218_droppedInsideTargetActions_2_loopCount = 0;
obj56218_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj56218: Event droppedInsideTargetActions
 *
 */
$("#obj56218").bind("droppedInsideTargetActions", function(event) {
	if (window.obj56218_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56218_droppedInsideTargetActions is still running");
	return;
}
var obj56218_droppedInsideTargetActions_runningActionsCount = 0;
var obj56218_droppedInsideTargetActions_loopCount = 0;
obj56218_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj56151: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj56151");
	var winTarget = document.getElementById("obj56151");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj56151").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj56151_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj56151_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj56151_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56151_onTouchDown is still running");
	return;
}
var obj56151_onTouchDown_runningActionsCount = 0;
var obj56151_onTouchDown_loopCount = 0;
obj56151_onTouchDown_actionGroup0();
});



/*
 *
 *   obj56151: Event SCActionDragDrop90737_droppedOutsideTargetActions
 *
 */
$("#obj56151").bind("SCActionDragDrop90737_droppedOutsideTargetActions", function(event) {
	if (window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56151_SCActionDragDrop90737_droppedOutsideTargetActions is still running");
	return;
}
var obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_loopCount = 0;
obj56151_SCActionDragDrop90737_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj56151: Event droppedInsideTargetActions_5
 *
 */
$("#obj56151").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj56151_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56151_droppedInsideTargetActions_5 is still running");
	return;
}
var obj56151_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj56151_droppedInsideTargetActions_5_loopCount = 0;
obj56151_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj56151: Event droppedInsideTargetActions_4
 *
 */
$("#obj56151").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj56151_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56151_droppedInsideTargetActions_4 is still running");
	return;
}
var obj56151_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj56151_droppedInsideTargetActions_4_loopCount = 0;
obj56151_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj56151: Event droppedInsideTargetActions_3
 *
 */
$("#obj56151").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj56151_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56151_droppedInsideTargetActions_3 is still running");
	return;
}
var obj56151_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj56151_droppedInsideTargetActions_3_loopCount = 0;
obj56151_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj56151: Event droppedInsideTargetActions_2
 *
 */
$("#obj56151").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj56151_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56151_droppedInsideTargetActions_2 is still running");
	return;
}
var obj56151_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj56151_droppedInsideTargetActions_2_loopCount = 0;
obj56151_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj56151: Event droppedInsideTargetActions
 *
 */
$("#obj56151").bind("droppedInsideTargetActions", function(event) {
	if (window.obj56151_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56151_droppedInsideTargetActions is still running");
	return;
}
var obj56151_droppedInsideTargetActions_runningActionsCount = 0;
var obj56151_droppedInsideTargetActions_loopCount = 0;
obj56151_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj56579: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj56579");
	var winTarget = document.getElementById("obj56579");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj56579").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj56579_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj56579_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj56579_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56579_onTouchDown is still running");
	return;
}
var obj56579_onTouchDown_runningActionsCount = 0;
var obj56579_onTouchDown_loopCount = 0;
obj56579_onTouchDown_actionGroup0();
});



/*
 *
 *   obj56579: Event SCActionDragDrop90673_droppedOutsideTargetActions
 *
 */
$("#obj56579").bind("SCActionDragDrop90673_droppedOutsideTargetActions", function(event) {
	if (window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56579_SCActionDragDrop90673_droppedOutsideTargetActions is still running");
	return;
}
var obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_runningActionsCount = 0;
var obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_loopCount = 0;
obj56579_SCActionDragDrop90673_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj56579: Event droppedInsideTargetActions_5
 *
 */
$("#obj56579").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj56579_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56579_droppedInsideTargetActions_5 is still running");
	return;
}
var obj56579_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj56579_droppedInsideTargetActions_5_loopCount = 0;
obj56579_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj56579: Event droppedInsideTargetActions_4
 *
 */
$("#obj56579").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj56579_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56579_droppedInsideTargetActions_4 is still running");
	return;
}
var obj56579_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj56579_droppedInsideTargetActions_4_loopCount = 0;
obj56579_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj56579: Event droppedInsideTargetActions_3
 *
 */
$("#obj56579").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj56579_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56579_droppedInsideTargetActions_3 is still running");
	return;
}
var obj56579_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj56579_droppedInsideTargetActions_3_loopCount = 0;
obj56579_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj56579: Event droppedInsideTargetActions_2
 *
 */
$("#obj56579").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj56579_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56579_droppedInsideTargetActions_2 is still running");
	return;
}
var obj56579_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj56579_droppedInsideTargetActions_2_loopCount = 0;
obj56579_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj56579: Event droppedInsideTargetActions
 *
 */
$("#obj56579").bind("droppedInsideTargetActions", function(event) {
	if (window.obj56579_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56579_droppedInsideTargetActions is still running");
	return;
}
var obj56579_droppedInsideTargetActions_runningActionsCount = 0;
var obj56579_droppedInsideTargetActions_loopCount = 0;
obj56579_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68366: Event Touch Down
 *
 */
$("#obj68366").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68366_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68366_onTap is still running");
	return;
}
var obj68366_onTap_runningActionsCount = 0;
var obj68366_onTap_loopCount = 0;
obj68366_onTap_actionGroup0();
});










/*
 *
 *   obj68358: Event Touch Down
 *
 */
$("#obj68358").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68358_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68358_onTap is still running");
	return;
}
var obj68358_onTap_runningActionsCount = 0;
var obj68358_onTap_loopCount = 0;
obj68358_onTap_actionGroup0();
});










/*
 *
 *   obj89377: Event Touch Down
 *
 */
$("#obj89377").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89377_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89377_onTap is still running");
	return;
}
var obj89377_onTap_runningActionsCount = 0;
var obj89377_onTap_loopCount = 0;
obj89377_onTap_actionGroup0();
});










/*
 *
 *   obj89372: Event Touch Down
 *
 */
$("#obj89372").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89372_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89372_onTap is still running");
	return;
}
var obj89372_onTap_runningActionsCount = 0;
var obj89372_onTap_loopCount = 0;
obj89372_onTap_actionGroup0();
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
	
$("#obj56492").trigger('SCEventShow');
$("#obj56476").trigger('SCEventShow');
$("#obj56469").trigger('SCEventShow');
$("#obj56467").trigger('SCEventShow');
$("#obj56465").trigger('SCEventShow');
$("#obj56463").trigger('SCEventShow');
$("#obj56461").trigger('SCEventShow');
$("#obj56459").trigger('SCEventShow');
$("#obj56457").trigger('SCEventShow');
$("#obj56455").trigger('SCEventShow');
$("#obj56453").trigger('SCEventShow');
$("#obj56451").trigger('SCEventShow');
$("#obj56449").trigger('SCEventShow');
$("#obj56447").trigger('SCEventShow');
$("#obj56445").trigger('SCEventShow');
$("#obj56443").trigger('SCEventShow');
$("#obj56441").trigger('SCEventShow');
$("#obj56439").trigger('SCEventShow');
$("#obj56437").trigger('SCEventShow');
$("#obj56435").trigger('SCEventShow');
$("#obj56431").trigger('SCEventShow');
$("#obj56429").trigger('SCEventShow');
$("#obj56427").trigger('SCEventShow');
$("#obj56425").trigger('SCEventShow');
$("#obj56423").trigger('SCEventShow');
$("#obj56421").trigger('SCEventShow');
$("#obj56419").trigger('SCEventShow');
$("#obj56496").trigger('SCEventShow');
$("#obj56494").trigger('SCEventShow');
$("#obj56498").trigger('SCEventShow');
$("#obj56500").trigger('SCEventShow');
$("#obj56502").trigger('SCEventShow');
$("#obj56504").trigger('SCEventShow');
$("#obj56352").trigger('SCEventShow');
$("#obj56285").trigger('SCEventShow');
$("#obj56218").trigger('SCEventShow');
$("#obj56151").trigger('SCEventShow');
$("#obj56579").trigger('SCEventShow');
$("#obj68366").trigger('SCEventShow');
$("#obj68358").trigger('SCEventShow');
$("#obj89377").trigger('SCEventShow');
$("#obj89372").trigger('SCEventShow');
$("#obj89382").trigger('SCEventShow');
$("#obj95045").trigger('SCEventShow');
$("#obj68372").trigger('SCEventShow');
	
});