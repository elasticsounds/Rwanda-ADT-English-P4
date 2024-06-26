pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 6071;
pubcoder.page.title = pubcoder.page.title || "32";
pubcoder.page.number = pubcoder.page.number || 32;
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
var obj6117_onTap_activeActionGroupIndex = -1;
var obj6117_onTap_runningActionsCount = 0;
var obj6117_onTap_loopCount = 0;
var obj6114_onTap_activeActionGroupIndex = -1;
var obj6114_onTap_runningActionsCount = 0;
var obj6114_onTap_loopCount = 0;
var obj6120_onTap_activeActionGroupIndex = -1;
var obj6120_onTap_runningActionsCount = 0;
var obj6120_onTap_loopCount = 0;
var obj6137_onDrag_activeActionGroupIndex = -1;
var obj6137_onDrag_runningActionsCount = 0;
var obj6137_onDrag_loopCount = 0;
var obj6137_onTouchDown_activeActionGroupIndex = -1;
var obj6137_onTouchDown_runningActionsCount = 0;
var obj6137_onTouchDown_loopCount = 0;
var obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_loopCount = 0;
var obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6137_droppedInsideTargetActions_4_loopCount = 0;
var obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6137_droppedInsideTargetActions_3_loopCount = 0;
var obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6137_droppedInsideTargetActions_2_loopCount = 0;
var obj6137_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6137_droppedInsideTargetActions_runningActionsCount = 0;
var obj6137_droppedInsideTargetActions_loopCount = 0;
var obj6190_onDrag_activeActionGroupIndex = -1;
var obj6190_onDrag_runningActionsCount = 0;
var obj6190_onDrag_loopCount = 0;
var obj6190_onTouchDown_activeActionGroupIndex = -1;
var obj6190_onTouchDown_runningActionsCount = 0;
var obj6190_onTouchDown_loopCount = 0;
var obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_loopCount = 0;
var obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6190_droppedInsideTargetActions_4_loopCount = 0;
var obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6190_droppedInsideTargetActions_3_loopCount = 0;
var obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6190_droppedInsideTargetActions_2_loopCount = 0;
var obj6190_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6190_droppedInsideTargetActions_runningActionsCount = 0;
var obj6190_droppedInsideTargetActions_loopCount = 0;
var obj6243_onDrag_activeActionGroupIndex = -1;
var obj6243_onDrag_runningActionsCount = 0;
var obj6243_onDrag_loopCount = 0;
var obj6243_onTouchDown_activeActionGroupIndex = -1;
var obj6243_onTouchDown_runningActionsCount = 0;
var obj6243_onTouchDown_loopCount = 0;
var obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_loopCount = 0;
var obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6243_droppedInsideTargetActions_4_loopCount = 0;
var obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6243_droppedInsideTargetActions_3_loopCount = 0;
var obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6243_droppedInsideTargetActions_2_loopCount = 0;
var obj6243_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6243_droppedInsideTargetActions_runningActionsCount = 0;
var obj6243_droppedInsideTargetActions_loopCount = 0;
var obj6296_onDrag_activeActionGroupIndex = -1;
var obj6296_onDrag_runningActionsCount = 0;
var obj6296_onDrag_loopCount = 0;
var obj6296_onTouchDown_activeActionGroupIndex = -1;
var obj6296_onTouchDown_runningActionsCount = 0;
var obj6296_onTouchDown_loopCount = 0;
var obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_loopCount = 0;
var obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6296_droppedInsideTargetActions_4_loopCount = 0;
var obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6296_droppedInsideTargetActions_3_loopCount = 0;
var obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6296_droppedInsideTargetActions_2_loopCount = 0;
var obj6296_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj6296_droppedInsideTargetActions_runningActionsCount = 0;
var obj6296_droppedInsideTargetActions_loopCount = 0;
var obj56736_onTap_activeActionGroupIndex = -1;
var obj56736_onTap_runningActionsCount = 0;
var obj56736_onTap_loopCount = 0;
var obj65470_onTap_activeActionGroupIndex = -1;
var obj65470_onTap_runningActionsCount = 0;
var obj65470_onTap_loopCount = 0;
var obj65462_onTap_activeActionGroupIndex = -1;
var obj65462_onTap_runningActionsCount = 0;
var obj65462_onTap_loopCount = 0;
var obj89874_onTap_activeActionGroupIndex = -1;
var obj89874_onTap_runningActionsCount = 0;
var obj89874_onTap_loopCount = 0;
var obj89869_onTap_activeActionGroupIndex = -1;
var obj89869_onTap_runningActionsCount = 0;
var obj89869_onTap_loopCount = 0;
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
		
obj6117_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6117_onTap_activeActionGroupIndex = -1;
		$("#obj6117").trigger("obj6117_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6117) {
				console.warn("de-queueing event obj6117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6117_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68583();
function goToPage_68583() {
	window.obj6117_onTap_runningActionsCount = obj6117_onTap_runningActionsCount + 1;
	$("#anchor194")[0].click();
	window.obj6117_onTap_runningActionsCount = window.obj6117_onTap_runningActionsCount - 1;
if (window.obj6117_onTap_runningActionsCount < 0) {
	window.obj6117_onTap_runningActionsCount = 0;
} else if (window.obj6117_onTap_runningActionsCount == 0) {
	obj6117_onTap_actionGroup1();
}
}





















};
obj6117_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6117_onTap_activeActionGroupIndex = -1;
		$("#obj6117").trigger("obj6117_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6117) {
				console.warn("de-queueing event obj6117." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6117").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6117_onTap_activeActionGroupIndex = 1;
	





















};
obj6114_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6114_onTap_activeActionGroupIndex = -1;
		$("#obj6114").trigger("obj6114_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6114) {
				console.warn("de-queueing event obj6114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6114_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_68581();
function goToPage_68581() {
	window.obj6114_onTap_runningActionsCount = obj6114_onTap_runningActionsCount + 1;
	$("#anchor195")[0].click();
	window.obj6114_onTap_runningActionsCount = window.obj6114_onTap_runningActionsCount - 1;
if (window.obj6114_onTap_runningActionsCount < 0) {
	window.obj6114_onTap_runningActionsCount = 0;
} else if (window.obj6114_onTap_runningActionsCount == 0) {
	obj6114_onTap_actionGroup1();
}
}





















};
obj6114_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6114_onTap_activeActionGroupIndex = -1;
		$("#obj6114").trigger("obj6114_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6114) {
				console.warn("de-queueing event obj6114." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6114").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6114_onTap_activeActionGroupIndex = 1;
	





















};
obj6120_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6120_onTap_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6120) {
				console.warn("de-queueing event obj6120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6120_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_6122();
function goToPage_6122() {
	window.obj6120_onTap_runningActionsCount = obj6120_onTap_runningActionsCount + 1;
	$("#anchor196")[0].click();
	window.obj6120_onTap_runningActionsCount = window.obj6120_onTap_runningActionsCount - 1;
if (window.obj6120_onTap_runningActionsCount < 0) {
	window.obj6120_onTap_runningActionsCount = 0;
} else if (window.obj6120_onTap_runningActionsCount == 0) {
	obj6120_onTap_actionGroup1();
}
}





















};
obj6120_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6120_onTap_activeActionGroupIndex = -1;
		$("#obj6120").trigger("obj6120_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6120) {
				console.warn("de-queueing event obj6120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6120_onTap_activeActionGroupIndex = 1;
	





















};
obj6137_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6137");
//	action: dragDrop
//	target: obj6137 
dragDrop_6140();
function dragDrop_6140() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6137_onTouchDown_runningActionsCount = obj6137_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6137');
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
	  	containerNode = $('#obj6082');
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
    	window.obj6137_onTouchDown_runningActionsCount = window.obj6137_onTouchDown_runningActionsCount - 1;
if (window.obj6137_onTouchDown_runningActionsCount < 0) {
	window.obj6137_onTouchDown_runningActionsCount = 0;
} else if (window.obj6137_onTouchDown_runningActionsCount == 0) {
	obj6137_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6098","#obj6090","#obj6092","#obj6102");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6140 = false;
    	var dropped_id_6140;
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
					dropped_6140 = true;
					dropped_id_6140 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6140) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj6137").trigger('SCActionDragDrop6140_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj6137_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6137_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj6137 
move_92182();
function move_92182() {
	window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_runningActionsCount = obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj6137");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 86;
	var moveY = 671;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_runningActionsCount = window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6137_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6732();
function runjs_6732() {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6733();
function runjs_6733() {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("border-color", "#C00000"); $("#obj6102").css("border-width", "2px"); $("#obj6102").css("border-style", "solid"); $("#obj6102").css("border-radius", "10px"); $("#obj6102").css("-webkit-border-radius", "10px"); $("#obj6102").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6104 
hide_6734();
function hide_6734() {
	var selector = "#obj6104";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6734(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6137_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6735();
function runjs_6735() {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6137").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6736();
function switchText_6736() {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj6137_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6137 
move_6737();
function move_6737() {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj6137");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 86;
	var moveY = 671;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj6137_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6738();
function runjs_6738() {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6739();
function runjs_6739() {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("border-color", "#000000"); $("#obj6102").css("border-width", "1px"); $("#obj6102").css("border-style", "solid"); $("#obj6102").css("border-radius", "10px"); $("#obj6102").css("-webkit-border-radius", "10px"); $("#obj6102").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6104
(function(){
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj6104";
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
					window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6137_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6741();
function runjs_6741() {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6137").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6742();
function runjs_6742() {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6137").css("border-color", "rgba(0,0,0,0)"); $("#obj6137").css("border-width", "0px"); $("#obj6137").css("border-style", "solid"); $("#obj6137").css("border-radius", "10px"); $("#obj6137").css("-webkit-border-radius", "10px"); $("#obj6137").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6743();
function playAudio_6743() {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj6137_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6744();
function switchText_6744() {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = obj6137_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6137_droppedInsideTargetActions_4_runningActionsCount = window.obj6137_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj6137_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj6137_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6718();
function runjs_6718() {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6092").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6719();
function runjs_6719() {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6092").css("border-color", "#C00000"); $("#obj6092").css("border-width", "2px"); $("#obj6092").css("border-style", "solid"); $("#obj6092").css("border-radius", "10px"); $("#obj6092").css("-webkit-border-radius", "10px"); $("#obj6092").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6108 
hide_6720();
function hide_6720() {
	var selector = "#obj6108";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6720(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6137_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6721();
function runjs_6721() {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6137").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6722();
function switchText_6722() {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj6137_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6137 
move_6723();
function move_6723() {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj6137");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 86;
	var moveY = 671;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj6137_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6724();
function runjs_6724() {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6092").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6725();
function runjs_6725() {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6092").css("border-color", "#000000"); $("#obj6092").css("border-width", "1px"); $("#obj6092").css("border-style", "solid"); $("#obj6092").css("border-radius", "10px"); $("#obj6092").css("-webkit-border-radius", "10px"); $("#obj6092").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6108
(function(){
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj6108";
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
					window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6137_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6727();
function runjs_6727() {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6137").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6728();
function runjs_6728() {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6137").css("border-color", "rgba(0,0,0,0)"); $("#obj6137").css("border-width", "0px"); $("#obj6137").css("border-style", "solid"); $("#obj6137").css("border-radius", "10px"); $("#obj6137").css("-webkit-border-radius", "10px"); $("#obj6137").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6729();
function playAudio_6729() {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj6137_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6730();
function switchText_6730() {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = obj6137_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6137_droppedInsideTargetActions_3_runningActionsCount = window.obj6137_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj6137_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj6137_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6384();
function runjs_6384() {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6385();
function runjs_6385() {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("border-color", "#C00000"); $("#obj6090").css("border-width", "2px"); $("#obj6090").css("border-style", "solid"); $("#obj6090").css("border-radius", "10px"); $("#obj6090").css("-webkit-border-radius", "10px"); $("#obj6090").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6110 
hide_6386();
function hide_6386() {
	var selector = "#obj6110";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6386(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6137_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6387();
function runjs_6387() {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6137").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6388();
function switchText_6388() {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj6137_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6137 
move_6389();
function move_6389() {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj6137");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 86;
	var moveY = 671;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj6137_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6390();
function runjs_6390() {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6391();
function runjs_6391() {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("border-color", "#000000"); $("#obj6090").css("border-width", "1px"); $("#obj6090").css("border-style", "solid"); $("#obj6090").css("border-radius", "10px"); $("#obj6090").css("-webkit-border-radius", "10px"); $("#obj6090").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6110
(function(){
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj6110";
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
					window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6137_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6393();
function runjs_6393() {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6137").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6394();
function runjs_6394() {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6137").css("border-color", "rgba(0,0,0,0)"); $("#obj6137").css("border-width", "0px"); $("#obj6137").css("border-style", "solid"); $("#obj6137").css("border-radius", "10px"); $("#obj6137").css("-webkit-border-radius", "10px"); $("#obj6137").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6395();
function playAudio_6395() {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj6137_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6396();
function switchText_6396() {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = obj6137_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6137_droppedInsideTargetActions_2_runningActionsCount = window.obj6137_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj6137_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj6137_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6370();
function runjs_6370() {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = obj6137_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6098").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_runningActionsCount = window.obj6137_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_6374();
function switchText_6374() {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = obj6137_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6137_droppedInsideTargetActions_runningActionsCount = window.obj6137_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6137_droppedInsideTargetActions_runningActionsCount = window.obj6137_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj6137_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_6371();
function runjs_6371() {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = obj6137_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6098").css("border-color", "#058E3F"); $("#obj6098").css("border-width", "2px"); $("#obj6098").css("border-style", "solid"); $("#obj6098").css("border-radius", "10px"); $("#obj6098").css("-webkit-border-radius", "10px"); $("#obj6098").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_runningActionsCount = window.obj6137_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj6106 
hide_6372();
function hide_6372() {
	var selector = "#obj6106";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6137_droppedInsideTargetActions_runningActionsCount = obj6137_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6137_droppedInsideTargetActions_runningActionsCount = window.obj6137_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6372(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6137_droppedInsideTargetActions_runningActionsCount = window.obj6137_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6137_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_6373();
function runjs_6373() {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = obj6137_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6137").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6137_droppedInsideTargetActions_runningActionsCount = window.obj6137_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj6137_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj6361 
playAudio_6375();
function playAudio_6375() {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = obj6137_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj6361")[0];
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
		    window.obj6137_droppedInsideTargetActions_runningActionsCount = window.obj6137_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6137_droppedInsideTargetActions_runningActionsCount = window.obj6137_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj6137_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90123();
function switchText_90123() {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = obj6137_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6137_droppedInsideTargetActions_runningActionsCount = window.obj6137_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6137_droppedInsideTargetActions_runningActionsCount = window.obj6137_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6137_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6137_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6137_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6137_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj6137_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6137").trigger("obj6137_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6137) {
				console.warn("de-queueing event obj6137." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6137").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6137_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj6190_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6190");
//	action: dragDrop
//	target: obj6190 
dragDrop_6193();
function dragDrop_6193() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6190_onTouchDown_runningActionsCount = obj6190_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6190');
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
	  	containerNode = $('#obj6082');
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
    	window.obj6190_onTouchDown_runningActionsCount = window.obj6190_onTouchDown_runningActionsCount - 1;
if (window.obj6190_onTouchDown_runningActionsCount < 0) {
	window.obj6190_onTouchDown_runningActionsCount = 0;
} else if (window.obj6190_onTouchDown_runningActionsCount == 0) {
	obj6190_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6092","#obj6090","#obj6098","#obj6102");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6193 = false;
    	var dropped_id_6193;
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
					dropped_6193 = true;
					dropped_id_6193 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6193) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj6190").trigger('SCActionDragDrop6193_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj6190_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6190_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj6190 
move_92184();
function move_92184() {
	window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_runningActionsCount = obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj6190");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 670;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_runningActionsCount = window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6190_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6774();
function runjs_6774() {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6775();
function runjs_6775() {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("border-color", "#C00000"); $("#obj6102").css("border-width", "2px"); $("#obj6102").css("border-style", "solid"); $("#obj6102").css("border-radius", "10px"); $("#obj6102").css("-webkit-border-radius", "10px"); $("#obj6102").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6104 
hide_6776();
function hide_6776() {
	var selector = "#obj6104";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6776(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6190_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6777();
function runjs_6777() {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6190").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6778();
function switchText_6778() {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj6190_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6190 
move_6779();
function move_6779() {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj6190");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 670;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj6190_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6780();
function runjs_6780() {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6781();
function runjs_6781() {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("border-color", "#000000"); $("#obj6102").css("border-width", "1px"); $("#obj6102").css("border-style", "solid"); $("#obj6102").css("border-radius", "10px"); $("#obj6102").css("-webkit-border-radius", "10px"); $("#obj6102").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6104
(function(){
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj6104";
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
					window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6190_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6783();
function runjs_6783() {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6190").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6784();
function runjs_6784() {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6190").css("border-color", "rgba(0,0,0,0)"); $("#obj6190").css("border-width", "0px"); $("#obj6190").css("border-style", "solid"); $("#obj6190").css("border-radius", "10px"); $("#obj6190").css("-webkit-border-radius", "10px"); $("#obj6190").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6785();
function playAudio_6785() {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj6190_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6786();
function switchText_6786() {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = obj6190_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6190_droppedInsideTargetActions_4_runningActionsCount = window.obj6190_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj6190_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj6190_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6760();
function runjs_6760() {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6098").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6761();
function runjs_6761() {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6098").css("border-color", "#C00000"); $("#obj6098").css("border-width", "2px"); $("#obj6098").css("border-style", "solid"); $("#obj6098").css("border-radius", "10px"); $("#obj6098").css("-webkit-border-radius", "10px"); $("#obj6098").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6106 
hide_6762();
function hide_6762() {
	var selector = "#obj6106";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6762(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6190_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6763();
function runjs_6763() {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6190").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6764();
function switchText_6764() {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj6190_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6190 
move_6765();
function move_6765() {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj6190");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 670;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj6190_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6766();
function runjs_6766() {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6098").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6767();
function runjs_6767() {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6098").css("border-color", "#000000"); $("#obj6098").css("border-width", "1px"); $("#obj6098").css("border-style", "solid"); $("#obj6098").css("border-radius", "10px"); $("#obj6098").css("-webkit-border-radius", "10px"); $("#obj6098").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6106
(function(){
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj6106";
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
					window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6190_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6769();
function runjs_6769() {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6190").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6770();
function runjs_6770() {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6190").css("border-color", "rgba(0,0,0,0)"); $("#obj6190").css("border-width", "0px"); $("#obj6190").css("border-style", "solid"); $("#obj6190").css("border-radius", "10px"); $("#obj6190").css("-webkit-border-radius", "10px"); $("#obj6190").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6771();
function playAudio_6771() {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj6190_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6772();
function switchText_6772() {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = obj6190_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6190_droppedInsideTargetActions_3_runningActionsCount = window.obj6190_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj6190_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj6190_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6746();
function runjs_6746() {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6747();
function runjs_6747() {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("border-color", "#C00000"); $("#obj6090").css("border-width", "2px"); $("#obj6090").css("border-style", "solid"); $("#obj6090").css("border-radius", "10px"); $("#obj6090").css("-webkit-border-radius", "10px"); $("#obj6090").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6110 
hide_6748();
function hide_6748() {
	var selector = "#obj6110";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6748(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6190_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6749();
function runjs_6749() {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6190").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6750();
function switchText_6750() {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj6190_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6190 
move_6751();
function move_6751() {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj6190");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 670;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj6190_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6752();
function runjs_6752() {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6753();
function runjs_6753() {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("border-color", "#000000"); $("#obj6090").css("border-width", "1px"); $("#obj6090").css("border-style", "solid"); $("#obj6090").css("border-radius", "10px"); $("#obj6090").css("-webkit-border-radius", "10px"); $("#obj6090").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6110
(function(){
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj6110";
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
					window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6190_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6755();
function runjs_6755() {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6190").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6756();
function runjs_6756() {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6190").css("border-color", "rgba(0,0,0,0)"); $("#obj6190").css("border-width", "0px"); $("#obj6190").css("border-style", "solid"); $("#obj6190").css("border-radius", "10px"); $("#obj6190").css("-webkit-border-radius", "10px"); $("#obj6190").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6757();
function playAudio_6757() {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj6190_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6758();
function switchText_6758() {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = obj6190_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6190_droppedInsideTargetActions_2_runningActionsCount = window.obj6190_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj6190_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj6190_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6363();
function runjs_6363() {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = obj6190_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6092").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_runningActionsCount = window.obj6190_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_6367();
function switchText_6367() {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = obj6190_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6190_droppedInsideTargetActions_runningActionsCount = window.obj6190_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6190_droppedInsideTargetActions_runningActionsCount = window.obj6190_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj6190_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_6364();
function runjs_6364() {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = obj6190_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6092").css("border-color", "#058E3F"); $("#obj6092").css("border-width", "2px"); $("#obj6092").css("border-style", "solid"); $("#obj6092").css("border-radius", "10px"); $("#obj6092").css("-webkit-border-radius", "10px"); $("#obj6092").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_runningActionsCount = window.obj6190_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj6108 
hide_6365();
function hide_6365() {
	var selector = "#obj6108";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6190_droppedInsideTargetActions_runningActionsCount = obj6190_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6190_droppedInsideTargetActions_runningActionsCount = window.obj6190_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6365(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6190_droppedInsideTargetActions_runningActionsCount = window.obj6190_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6190_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_6366();
function runjs_6366() {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = obj6190_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6190").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6190_droppedInsideTargetActions_runningActionsCount = window.obj6190_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj6190_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj6361 
playAudio_6368();
function playAudio_6368() {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = obj6190_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj6361")[0];
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
		    window.obj6190_droppedInsideTargetActions_runningActionsCount = window.obj6190_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6190_droppedInsideTargetActions_runningActionsCount = window.obj6190_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj6190_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90124();
function switchText_90124() {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = obj6190_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6190_droppedInsideTargetActions_runningActionsCount = window.obj6190_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6190_droppedInsideTargetActions_runningActionsCount = window.obj6190_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6190_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6190_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6190_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6190_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj6190_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6190").trigger("obj6190_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6190) {
				console.warn("de-queueing event obj6190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6190_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj6243_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6243");
//	action: dragDrop
//	target: obj6243 
dragDrop_6246();
function dragDrop_6246() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6243_onTouchDown_runningActionsCount = obj6243_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6243');
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
	  	containerNode = $('#obj6082');
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
    	window.obj6243_onTouchDown_runningActionsCount = window.obj6243_onTouchDown_runningActionsCount - 1;
if (window.obj6243_onTouchDown_runningActionsCount < 0) {
	window.obj6243_onTouchDown_runningActionsCount = 0;
} else if (window.obj6243_onTouchDown_runningActionsCount == 0) {
	obj6243_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6090","#obj6092","#obj6098","#obj6102");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6246 = false;
    	var dropped_id_6246;
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
					dropped_6246 = true;
					dropped_id_6246 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6246) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj6243").trigger('SCActionDragDrop6246_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj6243_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6243_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj6243 
move_92186();
function move_92186() {
	window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_runningActionsCount = obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj6243");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 303;
	var moveY = 669;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_runningActionsCount = window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6243_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6816();
function runjs_6816() {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6817();
function runjs_6817() {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("border-color", "#C00000"); $("#obj6102").css("border-width", "2px"); $("#obj6102").css("border-style", "solid"); $("#obj6102").css("border-radius", "10px"); $("#obj6102").css("-webkit-border-radius", "10px"); $("#obj6102").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6104 
hide_6818();
function hide_6818() {
	var selector = "#obj6104";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6818(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6243_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6819();
function runjs_6819() {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6243").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6820();
function switchText_6820() {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj6243_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6243 
move_6821();
function move_6821() {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj6243");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 303;
	var moveY = 669;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj6243_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6822();
function runjs_6822() {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6823();
function runjs_6823() {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6102").css("border-color", "#000000"); $("#obj6102").css("border-width", "1px"); $("#obj6102").css("border-style", "solid"); $("#obj6102").css("border-radius", "10px"); $("#obj6102").css("-webkit-border-radius", "10px"); $("#obj6102").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6104
(function(){
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj6104";
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
					window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6243_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6825();
function runjs_6825() {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6243").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6826();
function runjs_6826() {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6243").css("border-color", "rgba(0,0,0,0)"); $("#obj6243").css("border-width", "0px"); $("#obj6243").css("border-style", "solid"); $("#obj6243").css("border-radius", "10px"); $("#obj6243").css("-webkit-border-radius", "10px"); $("#obj6243").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6827();
function playAudio_6827() {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj6243_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6828();
function switchText_6828() {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = obj6243_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6243_droppedInsideTargetActions_4_runningActionsCount = window.obj6243_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj6243_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj6243_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6802();
function runjs_6802() {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6098").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6803();
function runjs_6803() {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6098").css("border-color", "#C00000"); $("#obj6098").css("border-width", "2px"); $("#obj6098").css("border-style", "solid"); $("#obj6098").css("border-radius", "10px"); $("#obj6098").css("-webkit-border-radius", "10px"); $("#obj6098").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6106 
hide_6804();
function hide_6804() {
	var selector = "#obj6106";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6804(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6243_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6805();
function runjs_6805() {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6243").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6806();
function switchText_6806() {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj6243_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6243 
move_6807();
function move_6807() {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj6243");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 303;
	var moveY = 669;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj6243_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6808();
function runjs_6808() {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6098").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6809();
function runjs_6809() {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6098").css("border-color", "#000000"); $("#obj6098").css("border-width", "1px"); $("#obj6098").css("border-style", "solid"); $("#obj6098").css("border-radius", "10px"); $("#obj6098").css("-webkit-border-radius", "10px"); $("#obj6098").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6106
(function(){
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj6106";
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
					window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6243_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6811();
function runjs_6811() {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6243").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6812();
function runjs_6812() {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6243").css("border-color", "rgba(0,0,0,0)"); $("#obj6243").css("border-width", "0px"); $("#obj6243").css("border-style", "solid"); $("#obj6243").css("border-radius", "10px"); $("#obj6243").css("-webkit-border-radius", "10px"); $("#obj6243").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6813();
function playAudio_6813() {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj6243_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6814();
function switchText_6814() {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = obj6243_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6243_droppedInsideTargetActions_3_runningActionsCount = window.obj6243_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj6243_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj6243_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6788();
function runjs_6788() {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6092").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6789();
function runjs_6789() {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6092").css("border-color", "#C00000"); $("#obj6092").css("border-width", "2px"); $("#obj6092").css("border-style", "solid"); $("#obj6092").css("border-radius", "10px"); $("#obj6092").css("-webkit-border-radius", "10px"); $("#obj6092").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6108 
hide_6790();
function hide_6790() {
	var selector = "#obj6108";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6790(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6243_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6791();
function runjs_6791() {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6243").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6792();
function switchText_6792() {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj6243_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6243 
move_6793();
function move_6793() {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj6243");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 303;
	var moveY = 669;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj6243_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6794();
function runjs_6794() {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6092").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6795();
function runjs_6795() {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6092").css("border-color", "#000000"); $("#obj6092").css("border-width", "1px"); $("#obj6092").css("border-style", "solid"); $("#obj6092").css("border-radius", "10px"); $("#obj6092").css("-webkit-border-radius", "10px"); $("#obj6092").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6108
(function(){
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj6108";
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
					window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6243_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6797();
function runjs_6797() {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6243").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6798();
function runjs_6798() {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6243").css("border-color", "rgba(0,0,0,0)"); $("#obj6243").css("border-width", "0px"); $("#obj6243").css("border-style", "solid"); $("#obj6243").css("border-radius", "10px"); $("#obj6243").css("-webkit-border-radius", "10px"); $("#obj6243").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6799();
function playAudio_6799() {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj6243_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6800();
function switchText_6800() {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = obj6243_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6243_droppedInsideTargetActions_2_runningActionsCount = window.obj6243_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj6243_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj6243_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6354();
function runjs_6354() {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = obj6243_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6090").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_runningActionsCount = window.obj6243_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_6358();
function switchText_6358() {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = obj6243_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6243_droppedInsideTargetActions_runningActionsCount = window.obj6243_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6243_droppedInsideTargetActions_runningActionsCount = window.obj6243_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj6243_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_6355();
function runjs_6355() {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = obj6243_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6090").css("border-color", "#058E3F"); $("#obj6090").css("border-width", "2px"); $("#obj6090").css("border-style", "solid"); $("#obj6090").css("border-radius", "10px"); $("#obj6090").css("-webkit-border-radius", "10px"); $("#obj6090").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_runningActionsCount = window.obj6243_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj6110 
hide_6356();
function hide_6356() {
	var selector = "#obj6110";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6243_droppedInsideTargetActions_runningActionsCount = obj6243_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6243_droppedInsideTargetActions_runningActionsCount = window.obj6243_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6356(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6243_droppedInsideTargetActions_runningActionsCount = window.obj6243_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6243_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_6357();
function runjs_6357() {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = obj6243_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6243").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6243_droppedInsideTargetActions_runningActionsCount = window.obj6243_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj6243_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj6361 
playAudio_6359();
function playAudio_6359() {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = obj6243_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj6361")[0];
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
		    window.obj6243_droppedInsideTargetActions_runningActionsCount = window.obj6243_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6243_droppedInsideTargetActions_runningActionsCount = window.obj6243_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj6243_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90125();
function switchText_90125() {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = obj6243_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6243_droppedInsideTargetActions_runningActionsCount = window.obj6243_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6243_droppedInsideTargetActions_runningActionsCount = window.obj6243_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6243_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6243_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6243_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6243_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj6243_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6243").trigger("obj6243_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6243) {
				console.warn("de-queueing event obj6243." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6243").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6243_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj6296_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj6296");
//	action: dragDrop
//	target: obj6296 
dragDrop_6299();
function dragDrop_6299() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj6296_onTouchDown_runningActionsCount = obj6296_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj6296');
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
	  	containerNode = $('#obj6082');
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
    	window.obj6296_onTouchDown_runningActionsCount = window.obj6296_onTouchDown_runningActionsCount - 1;
if (window.obj6296_onTouchDown_runningActionsCount < 0) {
	window.obj6296_onTouchDown_runningActionsCount = 0;
} else if (window.obj6296_onTouchDown_runningActionsCount == 0) {
	obj6296_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj6102","#obj6090","#obj6092","#obj6098");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_6299 = false;
    	var dropped_id_6299;
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
					dropped_6299 = true;
					dropped_id_6299 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_6299) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj6296").trigger('SCActionDragDrop6299_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj6296_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6296_onTouchDown_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj6296 
move_92188();
function move_92188() {
	window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_runningActionsCount = obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj6296");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 411;
	var moveY = 668;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_runningActionsCount = window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj6296_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6858();
function runjs_6858() {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6098").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6859();
function runjs_6859() {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6098").css("border-color", "#C00000"); $("#obj6098").css("border-width", "2px"); $("#obj6098").css("border-style", "solid"); $("#obj6098").css("border-radius", "10px"); $("#obj6098").css("-webkit-border-radius", "10px"); $("#obj6098").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6106 
hide_6860();
function hide_6860() {
	var selector = "#obj6106";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6860(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6296_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6861();
function runjs_6861() {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6296").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6862();
function switchText_6862() {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj6296_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6296 
move_6863();
function move_6863() {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj6296");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 411;
	var moveY = 668;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj6296_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6864();
function runjs_6864() {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6098").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6865();
function runjs_6865() {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6098").css("border-color", "#000000"); $("#obj6098").css("border-width", "1px"); $("#obj6098").css("border-style", "solid"); $("#obj6098").css("border-radius", "10px"); $("#obj6098").css("-webkit-border-radius", "10px"); $("#obj6098").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6106
(function(){
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj6106";
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
					window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6296_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6867();
function runjs_6867() {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6296").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6868();
function runjs_6868() {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj6296").css("border-color", "rgba(0,0,0,0)"); $("#obj6296").css("border-width", "0px"); $("#obj6296").css("border-style", "solid"); $("#obj6296").css("border-radius", "10px"); $("#obj6296").css("-webkit-border-radius", "10px"); $("#obj6296").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6869();
function playAudio_6869() {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj6296_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6870();
function switchText_6870() {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = obj6296_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6296_droppedInsideTargetActions_4_runningActionsCount = window.obj6296_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj6296_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj6296_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6844();
function runjs_6844() {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6092").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6845();
function runjs_6845() {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6092").css("border-color", "#C00000"); $("#obj6092").css("border-width", "2px"); $("#obj6092").css("border-style", "solid"); $("#obj6092").css("border-radius", "10px"); $("#obj6092").css("-webkit-border-radius", "10px"); $("#obj6092").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6108 
hide_6846();
function hide_6846() {
	var selector = "#obj6108";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6846(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6296_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6847();
function runjs_6847() {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6296").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6848();
function switchText_6848() {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj6296_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6296 
move_6849();
function move_6849() {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj6296");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 411;
	var moveY = 668;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj6296_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6850();
function runjs_6850() {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6092").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6851();
function runjs_6851() {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6092").css("border-color", "#000000"); $("#obj6092").css("border-width", "1px"); $("#obj6092").css("border-style", "solid"); $("#obj6092").css("border-radius", "10px"); $("#obj6092").css("-webkit-border-radius", "10px"); $("#obj6092").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6108
(function(){
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj6108";
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
					window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6296_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6853();
function runjs_6853() {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6296").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6854();
function runjs_6854() {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj6296").css("border-color", "rgba(0,0,0,0)"); $("#obj6296").css("border-width", "0px"); $("#obj6296").css("border-style", "solid"); $("#obj6296").css("border-radius", "10px"); $("#obj6296").css("-webkit-border-radius", "10px"); $("#obj6296").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6855();
function playAudio_6855() {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj6296_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6856();
function switchText_6856() {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = obj6296_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6296_droppedInsideTargetActions_3_runningActionsCount = window.obj6296_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj6296_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj6296_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6830();
function runjs_6830() {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_6831();
function runjs_6831() {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("border-color", "#C00000"); $("#obj6090").css("border-width", "2px"); $("#obj6090").css("border-style", "solid"); $("#obj6090").css("border-radius", "10px"); $("#obj6090").css("-webkit-border-radius", "10px"); $("#obj6090").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj6110 
hide_6832();
function hide_6832() {
	var selector = "#obj6110";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6832(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6296_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_6833();
function runjs_6833() {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6296").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_6834();
function switchText_6834() {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj6296_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj6296 
move_6835();
function move_6835() {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj6296");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 411;
	var moveY = 668;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj6296_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_6836();
function runjs_6836() {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_6837();
function runjs_6837() {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6090").css("border-color", "#000000"); $("#obj6090").css("border-width", "1px"); $("#obj6090").css("border-style", "solid"); $("#obj6090").css("border-radius", "10px"); $("#obj6090").css("-webkit-border-radius", "10px"); $("#obj6090").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj6110
(function(){
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj6110";
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
					window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj6296_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_6839();
function runjs_6839() {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6296").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_6840();
function runjs_6840() {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj6296").css("border-color", "rgba(0,0,0,0)"); $("#obj6296").css("border-width", "0px"); $("#obj6296").css("border-style", "solid"); $("#obj6296").css("border-radius", "10px"); $("#obj6296").css("-webkit-border-radius", "10px"); $("#obj6296").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj6360 
playAudio_6841();
function playAudio_6841() {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj6360")[0];
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
		    window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj6296_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_6842();
function switchText_6842() {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = obj6296_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6296_droppedInsideTargetActions_2_runningActionsCount = window.obj6296_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj6296_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj6296_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_6377();
function runjs_6377() {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = obj6296_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6102").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_runningActionsCount = window.obj6296_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_6381();
function switchText_6381() {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = obj6296_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6296_droppedInsideTargetActions_runningActionsCount = window.obj6296_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6296_droppedInsideTargetActions_runningActionsCount = window.obj6296_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj6296_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_6378();
function runjs_6378() {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = obj6296_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6102").css("border-color", "#058E3F"); $("#obj6102").css("border-width", "2px"); $("#obj6102").css("border-style", "solid"); $("#obj6102").css("border-radius", "10px"); $("#obj6102").css("-webkit-border-radius", "10px"); $("#obj6102").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_runningActionsCount = window.obj6296_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj6104 
hide_6379();
function hide_6379() {
	var selector = "#obj6104";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj6296_droppedInsideTargetActions_runningActionsCount = obj6296_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj6296_droppedInsideTargetActions_runningActionsCount = window.obj6296_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_6379(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj6296_droppedInsideTargetActions_runningActionsCount = window.obj6296_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj6296_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_6380();
function runjs_6380() {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = obj6296_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj6296").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj6296_droppedInsideTargetActions_runningActionsCount = window.obj6296_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj6296_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj6361 
playAudio_6382();
function playAudio_6382() {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = obj6296_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj6361")[0];
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
		    window.obj6296_droppedInsideTargetActions_runningActionsCount = window.obj6296_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj6296_droppedInsideTargetActions_runningActionsCount = window.obj6296_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj6296_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90126();
function switchText_90126() {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = obj6296_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj6351_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj6351_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj6351").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj6351_content");
			setTimeout(function () {
				window.obj6296_droppedInsideTargetActions_runningActionsCount = window.obj6296_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj6351 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj6296_droppedInsideTargetActions_runningActionsCount = window.obj6296_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj6296_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj6296_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj6296_droppedInsideTargetActions_runningActionsCount == 0) {
	obj6296_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj6296_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj6296").trigger("obj6296_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 6296) {
				console.warn("de-queueing event obj6296." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj6296").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj6296_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj56736_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj56736_onTap_activeActionGroupIndex = -1;
		$("#obj56736").trigger("obj56736_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56736) {
				console.warn("de-queueing event obj56736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56736_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_56738();
function goToPage_56738() {
	window.obj56736_onTap_runningActionsCount = obj56736_onTap_runningActionsCount + 1;
	$("#anchor199")[0].click();
	window.obj56736_onTap_runningActionsCount = window.obj56736_onTap_runningActionsCount - 1;
if (window.obj56736_onTap_runningActionsCount < 0) {
	window.obj56736_onTap_runningActionsCount = 0;
} else if (window.obj56736_onTap_runningActionsCount == 0) {
	obj56736_onTap_actionGroup1();
}
}





















};
obj56736_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj56736_onTap_activeActionGroupIndex = -1;
		$("#obj56736").trigger("obj56736_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 56736) {
				console.warn("de-queueing event obj56736." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj56736").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj56736_onTap_activeActionGroupIndex = 1;
	





















};
obj65470_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65470_onTap_activeActionGroupIndex = -1;
		$("#obj65470").trigger("obj65470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65470) {
				console.warn("de-queueing event obj65470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65470_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65470 
hide_65473();
function hide_65473() {
	var selector = "#obj65470";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65470_onTap_runningActionsCount = obj65470_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65470_onTap_runningActionsCount = window.obj65470_onTap_runningActionsCount - 1;
if (window.obj65470_onTap_runningActionsCount < 0) {
	window.obj65470_onTap_runningActionsCount = 0;
} else if (window.obj65470_onTap_runningActionsCount == 0) {
	obj65470_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65473(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65470_onTap_runningActionsCount = window.obj65470_onTap_runningActionsCount - 1;
if (window.obj65470_onTap_runningActionsCount < 0) {
	window.obj65470_onTap_runningActionsCount = 0;
} else if (window.obj65470_onTap_runningActionsCount == 0) {
	obj65470_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65476 
stopMovie_65472();
function stopMovie_65472() {
	window.obj65470_onTap_runningActionsCount = obj65470_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65476")[0];
	myVideo.pause();
	window.obj65470_onTap_runningActionsCount = window.obj65470_onTap_runningActionsCount - 1;
if (window.obj65470_onTap_runningActionsCount < 0) {
	window.obj65470_onTap_runningActionsCount = 0;
} else if (window.obj65470_onTap_runningActionsCount == 0) {
	obj65470_onTap_actionGroup1();
}
}
















};
obj65470_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65470_onTap_activeActionGroupIndex = -1;
		$("#obj65470").trigger("obj65470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65470) {
				console.warn("de-queueing event obj65470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65470_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65462
(function(){
	window.obj65470_onTap_runningActionsCount = obj65470_onTap_runningActionsCount + 1;

	var selector = "#obj65462";
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
					window.obj65470_onTap_runningActionsCount = window.obj65470_onTap_runningActionsCount - 1;
if (window.obj65470_onTap_runningActionsCount < 0) {
	window.obj65470_onTap_runningActionsCount = 0;
} else if (window.obj65470_onTap_runningActionsCount == 0) {
	obj65470_onTap_actionGroup2();
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
				window.obj65470_onTap_runningActionsCount = window.obj65470_onTap_runningActionsCount - 1;
if (window.obj65470_onTap_runningActionsCount < 0) {
	window.obj65470_onTap_runningActionsCount = 0;
} else if (window.obj65470_onTap_runningActionsCount == 0) {
	obj65470_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65470_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65470_onTap_activeActionGroupIndex = -1;
		$("#obj65470").trigger("obj65470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65470) {
				console.warn("de-queueing event obj65470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65470_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65476 
move_65475();
function move_65475() {
	window.obj65470_onTap_runningActionsCount = obj65470_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65476");
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
			window.obj65470_onTap_runningActionsCount = window.obj65470_onTap_runningActionsCount - 1;
if (window.obj65470_onTap_runningActionsCount < 0) {
	window.obj65470_onTap_runningActionsCount = 0;
} else if (window.obj65470_onTap_runningActionsCount == 0) {
	obj65470_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65470_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65470_onTap_activeActionGroupIndex = -1;
		$("#obj65470").trigger("obj65470_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65470) {
				console.warn("de-queueing event obj65470." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65470").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65470_onTap_activeActionGroupIndex = 3;
	





















};
obj65462_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65462_onTap_activeActionGroupIndex = -1;
		$("#obj65462").trigger("obj65462_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65462) {
				console.warn("de-queueing event obj65462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65462_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65462 
hide_65465();
function hide_65465() {
	var selector = "#obj65462";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65462_onTap_runningActionsCount = obj65462_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65462_onTap_runningActionsCount = window.obj65462_onTap_runningActionsCount - 1;
if (window.obj65462_onTap_runningActionsCount < 0) {
	window.obj65462_onTap_runningActionsCount = 0;
} else if (window.obj65462_onTap_runningActionsCount == 0) {
	obj65462_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65465(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65462_onTap_runningActionsCount = window.obj65462_onTap_runningActionsCount - 1;
if (window.obj65462_onTap_runningActionsCount < 0) {
	window.obj65462_onTap_runningActionsCount = 0;
} else if (window.obj65462_onTap_runningActionsCount == 0) {
	obj65462_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65476 
playPauseMovie_65464();
function playPauseMovie_65464() {
	window.obj65462_onTap_runningActionsCount = obj65462_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65476")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65462_onTap_runningActionsCount = window.obj65462_onTap_runningActionsCount - 1;
if (window.obj65462_onTap_runningActionsCount < 0) {
	window.obj65462_onTap_runningActionsCount = 0;
} else if (window.obj65462_onTap_runningActionsCount == 0) {
	obj65462_onTap_actionGroup1();
}
}

















};
obj65462_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65462_onTap_activeActionGroupIndex = -1;
		$("#obj65462").trigger("obj65462_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65462) {
				console.warn("de-queueing event obj65462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65462_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65470
(function(){
	window.obj65462_onTap_runningActionsCount = obj65462_onTap_runningActionsCount + 1;

	var selector = "#obj65470";
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
					window.obj65462_onTap_runningActionsCount = window.obj65462_onTap_runningActionsCount - 1;
if (window.obj65462_onTap_runningActionsCount < 0) {
	window.obj65462_onTap_runningActionsCount = 0;
} else if (window.obj65462_onTap_runningActionsCount == 0) {
	obj65462_onTap_actionGroup2();
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
				window.obj65462_onTap_runningActionsCount = window.obj65462_onTap_runningActionsCount - 1;
if (window.obj65462_onTap_runningActionsCount < 0) {
	window.obj65462_onTap_runningActionsCount = 0;
} else if (window.obj65462_onTap_runningActionsCount == 0) {
	obj65462_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65462_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65462_onTap_activeActionGroupIndex = -1;
		$("#obj65462").trigger("obj65462_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65462) {
				console.warn("de-queueing event obj65462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65462_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65476 
move_65467();
function move_65467() {
	window.obj65462_onTap_runningActionsCount = obj65462_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65476");
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
			window.obj65462_onTap_runningActionsCount = window.obj65462_onTap_runningActionsCount - 1;
if (window.obj65462_onTap_runningActionsCount < 0) {
	window.obj65462_onTap_runningActionsCount = 0;
} else if (window.obj65462_onTap_runningActionsCount == 0) {
	obj65462_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65462_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65462_onTap_activeActionGroupIndex = -1;
		$("#obj65462").trigger("obj65462_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65462) {
				console.warn("de-queueing event obj65462." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65462").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65462_onTap_activeActionGroupIndex = 3;
	





















};
obj89874_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89874_onTap_activeActionGroupIndex = -1;
		$("#obj89874").trigger("obj89874_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89874) {
				console.warn("de-queueing event obj89874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89874_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89879 
stopAudio_89876();
function stopAudio_89876() {
	window.obj89874_onTap_runningActionsCount = obj89874_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89879")[0];
	myAudio.pause();
	window.obj89874_onTap_runningActionsCount = window.obj89874_onTap_runningActionsCount - 1;
if (window.obj89874_onTap_runningActionsCount < 0) {
	window.obj89874_onTap_runningActionsCount = 0;
} else if (window.obj89874_onTap_runningActionsCount == 0) {
	obj89874_onTap_actionGroup1();
}
}








};
obj89874_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89874_onTap_activeActionGroupIndex = -1;
		$("#obj89874").trigger("obj89874_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89874) {
				console.warn("de-queueing event obj89874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89874_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89874 
hide_89877();
function hide_89877() {
	var selector = "#obj89874";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89874_onTap_runningActionsCount = obj89874_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89874_onTap_runningActionsCount = window.obj89874_onTap_runningActionsCount - 1;
if (window.obj89874_onTap_runningActionsCount < 0) {
	window.obj89874_onTap_runningActionsCount = 0;
} else if (window.obj89874_onTap_runningActionsCount == 0) {
	obj89874_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89877(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89874_onTap_runningActionsCount = window.obj89874_onTap_runningActionsCount - 1;
if (window.obj89874_onTap_runningActionsCount < 0) {
	window.obj89874_onTap_runningActionsCount = 0;
} else if (window.obj89874_onTap_runningActionsCount == 0) {
	obj89874_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89874_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89874_onTap_activeActionGroupIndex = -1;
		$("#obj89874").trigger("obj89874_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89874) {
				console.warn("de-queueing event obj89874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89874_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89869
(function(){
	window.obj89874_onTap_runningActionsCount = obj89874_onTap_runningActionsCount + 1;

	var selector = "#obj89869";
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
					window.obj89874_onTap_runningActionsCount = window.obj89874_onTap_runningActionsCount - 1;
if (window.obj89874_onTap_runningActionsCount < 0) {
	window.obj89874_onTap_runningActionsCount = 0;
} else if (window.obj89874_onTap_runningActionsCount == 0) {
	obj89874_onTap_actionGroup3();
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
				window.obj89874_onTap_runningActionsCount = window.obj89874_onTap_runningActionsCount - 1;
if (window.obj89874_onTap_runningActionsCount < 0) {
	window.obj89874_onTap_runningActionsCount = 0;
} else if (window.obj89874_onTap_runningActionsCount == 0) {
	obj89874_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89874_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89874_onTap_activeActionGroupIndex = -1;
		$("#obj89874").trigger("obj89874_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89874) {
				console.warn("de-queueing event obj89874." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89874").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89874_onTap_activeActionGroupIndex = 3;
	





















};
obj89869_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89869_onTap_activeActionGroupIndex = -1;
		$("#obj89869").trigger("obj89869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89869) {
				console.warn("de-queueing event obj89869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89869_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89869 
hide_89871();
function hide_89871() {
	var selector = "#obj89869";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89869_onTap_runningActionsCount = obj89869_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89869_onTap_runningActionsCount = window.obj89869_onTap_runningActionsCount - 1;
if (window.obj89869_onTap_runningActionsCount < 0) {
	window.obj89869_onTap_runningActionsCount = 0;
} else if (window.obj89869_onTap_runningActionsCount == 0) {
	obj89869_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89871(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89869_onTap_runningActionsCount = window.obj89869_onTap_runningActionsCount - 1;
if (window.obj89869_onTap_runningActionsCount < 0) {
	window.obj89869_onTap_runningActionsCount = 0;
} else if (window.obj89869_onTap_runningActionsCount == 0) {
	obj89869_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89869_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89869_onTap_activeActionGroupIndex = -1;
		$("#obj89869").trigger("obj89869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89869) {
				console.warn("de-queueing event obj89869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89869_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89874
(function(){
	window.obj89869_onTap_runningActionsCount = obj89869_onTap_runningActionsCount + 1;

	var selector = "#obj89874";
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
					window.obj89869_onTap_runningActionsCount = window.obj89869_onTap_runningActionsCount - 1;
if (window.obj89869_onTap_runningActionsCount < 0) {
	window.obj89869_onTap_runningActionsCount = 0;
} else if (window.obj89869_onTap_runningActionsCount == 0) {
	obj89869_onTap_actionGroup2();
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
				window.obj89869_onTap_runningActionsCount = window.obj89869_onTap_runningActionsCount - 1;
if (window.obj89869_onTap_runningActionsCount < 0) {
	window.obj89869_onTap_runningActionsCount = 0;
} else if (window.obj89869_onTap_runningActionsCount == 0) {
	obj89869_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89869_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89869_onTap_activeActionGroupIndex = -1;
		$("#obj89869").trigger("obj89869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89869) {
				console.warn("de-queueing event obj89869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89869_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89879 
playAudio_89873();
function playAudio_89873() {
	window.obj89869_onTap_runningActionsCount = obj89869_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89879")[0];
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
		    window.obj89869_onTap_runningActionsCount = window.obj89869_onTap_runningActionsCount - 1;
if (window.obj89869_onTap_runningActionsCount < 0) {
	window.obj89869_onTap_runningActionsCount = 0;
} else if (window.obj89869_onTap_runningActionsCount == 0) {
	obj89869_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89869_onTap_runningActionsCount = window.obj89869_onTap_runningActionsCount - 1;
if (window.obj89869_onTap_runningActionsCount < 0) {
	window.obj89869_onTap_runningActionsCount = 0;
} else if (window.obj89869_onTap_runningActionsCount == 0) {
	obj89869_onTap_actionGroup3();
}
	}
}









};
obj89869_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89869_onTap_activeActionGroupIndex = -1;
		$("#obj89869").trigger("obj89869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89869) {
				console.warn("de-queueing event obj89869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89869_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj6117: Event Touch Down
 *
 */
$("#obj6117").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6117_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6117_onTap is still running");
	return;
}
var obj6117_onTap_runningActionsCount = 0;
var obj6117_onTap_loopCount = 0;
obj6117_onTap_actionGroup0();
});










/*
 *
 *   obj6114: Event Touch Down
 *
 */
$("#obj6114").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6114_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6114_onTap is still running");
	return;
}
var obj6114_onTap_runningActionsCount = 0;
var obj6114_onTap_loopCount = 0;
obj6114_onTap_actionGroup0();
});










/*
 *
 *   obj6120: Event Touch Down
 *
 */
$("#obj6120").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj6120_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6120_onTap is still running");
	return;
}
var obj6120_onTap_runningActionsCount = 0;
var obj6120_onTap_loopCount = 0;
obj6120_onTap_actionGroup0();
});



























































































































































































































































/*
 *
 *   obj6137: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6137");
	var winTarget = document.getElementById("obj6137");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6137").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6137_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6137_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6137_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6137_onTouchDown is still running");
	return;
}
var obj6137_onTouchDown_runningActionsCount = 0;
var obj6137_onTouchDown_loopCount = 0;
obj6137_onTouchDown_actionGroup0();
});



/*
 *
 *   obj6137: Event SCActionDragDrop6140_droppedOutsideTargetActions
 *
 */
$("#obj6137").bind("SCActionDragDrop6140_droppedOutsideTargetActions", function(event) {
	if (window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6137_SCActionDragDrop6140_droppedOutsideTargetActions is still running");
	return;
}
var obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_loopCount = 0;
obj6137_SCActionDragDrop6140_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj6137: Event droppedInsideTargetActions_4
 *
 */
$("#obj6137").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj6137_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6137_droppedInsideTargetActions_4 is still running");
	return;
}
var obj6137_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6137_droppedInsideTargetActions_4_loopCount = 0;
obj6137_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj6137: Event droppedInsideTargetActions_3
 *
 */
$("#obj6137").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj6137_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6137_droppedInsideTargetActions_3 is still running");
	return;
}
var obj6137_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6137_droppedInsideTargetActions_3_loopCount = 0;
obj6137_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj6137: Event droppedInsideTargetActions_2
 *
 */
$("#obj6137").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj6137_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6137_droppedInsideTargetActions_2 is still running");
	return;
}
var obj6137_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6137_droppedInsideTargetActions_2_loopCount = 0;
obj6137_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj6137: Event droppedInsideTargetActions
 *
 */
$("#obj6137").bind("droppedInsideTargetActions", function(event) {
	if (window.obj6137_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6137_droppedInsideTargetActions is still running");
	return;
}
var obj6137_droppedInsideTargetActions_runningActionsCount = 0;
var obj6137_droppedInsideTargetActions_loopCount = 0;
obj6137_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj6190: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6190");
	var winTarget = document.getElementById("obj6190");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6190").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6190_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6190_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6190_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6190_onTouchDown is still running");
	return;
}
var obj6190_onTouchDown_runningActionsCount = 0;
var obj6190_onTouchDown_loopCount = 0;
obj6190_onTouchDown_actionGroup0();
});



/*
 *
 *   obj6190: Event SCActionDragDrop6193_droppedOutsideTargetActions
 *
 */
$("#obj6190").bind("SCActionDragDrop6193_droppedOutsideTargetActions", function(event) {
	if (window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6190_SCActionDragDrop6193_droppedOutsideTargetActions is still running");
	return;
}
var obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_loopCount = 0;
obj6190_SCActionDragDrop6193_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj6190: Event droppedInsideTargetActions_4
 *
 */
$("#obj6190").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj6190_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6190_droppedInsideTargetActions_4 is still running");
	return;
}
var obj6190_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6190_droppedInsideTargetActions_4_loopCount = 0;
obj6190_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj6190: Event droppedInsideTargetActions_3
 *
 */
$("#obj6190").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj6190_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6190_droppedInsideTargetActions_3 is still running");
	return;
}
var obj6190_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6190_droppedInsideTargetActions_3_loopCount = 0;
obj6190_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj6190: Event droppedInsideTargetActions_2
 *
 */
$("#obj6190").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj6190_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6190_droppedInsideTargetActions_2 is still running");
	return;
}
var obj6190_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6190_droppedInsideTargetActions_2_loopCount = 0;
obj6190_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj6190: Event droppedInsideTargetActions
 *
 */
$("#obj6190").bind("droppedInsideTargetActions", function(event) {
	if (window.obj6190_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6190_droppedInsideTargetActions is still running");
	return;
}
var obj6190_droppedInsideTargetActions_runningActionsCount = 0;
var obj6190_droppedInsideTargetActions_loopCount = 0;
obj6190_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj6243: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6243");
	var winTarget = document.getElementById("obj6243");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6243").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6243_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6243_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6243_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6243_onTouchDown is still running");
	return;
}
var obj6243_onTouchDown_runningActionsCount = 0;
var obj6243_onTouchDown_loopCount = 0;
obj6243_onTouchDown_actionGroup0();
});



/*
 *
 *   obj6243: Event SCActionDragDrop6246_droppedOutsideTargetActions
 *
 */
$("#obj6243").bind("SCActionDragDrop6246_droppedOutsideTargetActions", function(event) {
	if (window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6243_SCActionDragDrop6246_droppedOutsideTargetActions is still running");
	return;
}
var obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_loopCount = 0;
obj6243_SCActionDragDrop6246_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj6243: Event droppedInsideTargetActions_4
 *
 */
$("#obj6243").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj6243_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6243_droppedInsideTargetActions_4 is still running");
	return;
}
var obj6243_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6243_droppedInsideTargetActions_4_loopCount = 0;
obj6243_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj6243: Event droppedInsideTargetActions_3
 *
 */
$("#obj6243").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj6243_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6243_droppedInsideTargetActions_3 is still running");
	return;
}
var obj6243_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6243_droppedInsideTargetActions_3_loopCount = 0;
obj6243_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj6243: Event droppedInsideTargetActions_2
 *
 */
$("#obj6243").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj6243_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6243_droppedInsideTargetActions_2 is still running");
	return;
}
var obj6243_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6243_droppedInsideTargetActions_2_loopCount = 0;
obj6243_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj6243: Event droppedInsideTargetActions
 *
 */
$("#obj6243").bind("droppedInsideTargetActions", function(event) {
	if (window.obj6243_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6243_droppedInsideTargetActions is still running");
	return;
}
var obj6243_droppedInsideTargetActions_runningActionsCount = 0;
var obj6243_droppedInsideTargetActions_loopCount = 0;
obj6243_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj6296: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj6296");
	var winTarget = document.getElementById("obj6296");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj6296").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj6296_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj6296_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj6296_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6296_onTouchDown is still running");
	return;
}
var obj6296_onTouchDown_runningActionsCount = 0;
var obj6296_onTouchDown_loopCount = 0;
obj6296_onTouchDown_actionGroup0();
});



/*
 *
 *   obj6296: Event SCActionDragDrop6299_droppedOutsideTargetActions
 *
 */
$("#obj6296").bind("SCActionDragDrop6299_droppedOutsideTargetActions", function(event) {
	if (window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6296_SCActionDragDrop6299_droppedOutsideTargetActions is still running");
	return;
}
var obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_runningActionsCount = 0;
var obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_loopCount = 0;
obj6296_SCActionDragDrop6299_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj6296: Event droppedInsideTargetActions_4
 *
 */
$("#obj6296").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj6296_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6296_droppedInsideTargetActions_4 is still running");
	return;
}
var obj6296_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj6296_droppedInsideTargetActions_4_loopCount = 0;
obj6296_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj6296: Event droppedInsideTargetActions_3
 *
 */
$("#obj6296").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj6296_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6296_droppedInsideTargetActions_3 is still running");
	return;
}
var obj6296_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj6296_droppedInsideTargetActions_3_loopCount = 0;
obj6296_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj6296: Event droppedInsideTargetActions_2
 *
 */
$("#obj6296").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj6296_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6296_droppedInsideTargetActions_2 is still running");
	return;
}
var obj6296_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj6296_droppedInsideTargetActions_2_loopCount = 0;
obj6296_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj6296: Event droppedInsideTargetActions
 *
 */
$("#obj6296").bind("droppedInsideTargetActions", function(event) {
	if (window.obj6296_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj6296_droppedInsideTargetActions is still running");
	return;
}
var obj6296_droppedInsideTargetActions_runningActionsCount = 0;
var obj6296_droppedInsideTargetActions_loopCount = 0;
obj6296_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj56736: Event Touch Down
 *
 */
$("#obj56736").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj56736_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj56736_onTap is still running");
	return;
}
var obj56736_onTap_runningActionsCount = 0;
var obj56736_onTap_loopCount = 0;
obj56736_onTap_actionGroup0();
});










/*
 *
 *   obj65470: Event Touch Down
 *
 */
$("#obj65470").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65470_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65470_onTap is still running");
	return;
}
var obj65470_onTap_runningActionsCount = 0;
var obj65470_onTap_loopCount = 0;
obj65470_onTap_actionGroup0();
});










/*
 *
 *   obj65462: Event Touch Down
 *
 */
$("#obj65462").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65462_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65462_onTap is still running");
	return;
}
var obj65462_onTap_runningActionsCount = 0;
var obj65462_onTap_loopCount = 0;
obj65462_onTap_actionGroup0();
});










/*
 *
 *   obj89874: Event Touch Down
 *
 */
$("#obj89874").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89874_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89874_onTap is still running");
	return;
}
var obj89874_onTap_runningActionsCount = 0;
var obj89874_onTap_loopCount = 0;
obj89874_onTap_actionGroup0();
});










/*
 *
 *   obj89869: Event Touch Down
 *
 */
$("#obj89869").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89869_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89869_onTap is still running");
	return;
}
var obj89869_onTap_runningActionsCount = 0;
var obj89869_onTap_loopCount = 0;
obj89869_onTap_actionGroup0();
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
	
$("#obj6112").trigger('SCEventShow');
$("#obj6117").trigger('SCEventShow');
$("#obj6114").trigger('SCEventShow');
$("#obj6120").trigger('SCEventShow');
$("#obj6072").trigger('SCEventShow');
$("#obj6076").trigger('SCEventShow');
$("#obj6074").trigger('SCEventShow');
$("#obj6082").trigger('SCEventShow');
$("#obj6078").trigger('SCEventShow');
$("#obj6080").trigger('SCEventShow');
$("#obj6094").trigger('SCEventShow');
$("#obj6100").trigger('SCEventShow');
$("#obj6088").trigger('SCEventShow');
$("#obj6090").trigger('SCEventShow');
$("#obj6110").trigger('SCEventShow');
$("#obj6086").trigger('SCEventShow');
$("#obj6092").trigger('SCEventShow');
$("#obj6108").trigger('SCEventShow');
$("#obj6096").trigger('SCEventShow');
$("#obj6098").trigger('SCEventShow');
$("#obj6106").trigger('SCEventShow');
$("#obj6084").trigger('SCEventShow');
$("#obj6102").trigger('SCEventShow');
$("#obj6104").trigger('SCEventShow');
$("#obj6349").trigger('SCEventShow');
$("#obj6351").trigger('SCEventShow');
$("#obj6360").trigger('SCEventShow');
$("#obj6361").trigger('SCEventShow');
$("#obj6137").trigger('SCEventShow');
$("#obj6190").trigger('SCEventShow');
$("#obj6243").trigger('SCEventShow');
$("#obj6296").trigger('SCEventShow');
$("#obj56736").trigger('SCEventShow');
$("#obj65470").trigger('SCEventShow');
$("#obj65462").trigger('SCEventShow');
$("#obj89874").trigger('SCEventShow');
$("#obj89869").trigger('SCEventShow');
$("#obj89879").trigger('SCEventShow');
$("#obj94693").trigger('SCEventShow');
$("#obj65476").trigger('SCEventShow');
	
});