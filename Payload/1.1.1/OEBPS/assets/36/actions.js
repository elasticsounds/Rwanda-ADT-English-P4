pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 7472;
pubcoder.page.title = pubcoder.page.title || "36";
pubcoder.page.number = pubcoder.page.number || 36;
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
var obj69052_onTap_activeActionGroupIndex = -1;
var obj69052_onTap_runningActionsCount = 0;
var obj69052_onTap_loopCount = 0;
var obj69049_onTap_activeActionGroupIndex = -1;
var obj69049_onTap_runningActionsCount = 0;
var obj69049_onTap_loopCount = 0;
var obj69045_onTap_activeActionGroupIndex = -1;
var obj69045_onTap_runningActionsCount = 0;
var obj69045_onTap_loopCount = 0;
var obj68957_onDrag_activeActionGroupIndex = -1;
var obj68957_onDrag_runningActionsCount = 0;
var obj68957_onDrag_loopCount = 0;
var obj68957_onTouchDown_activeActionGroupIndex = -1;
var obj68957_onTouchDown_runningActionsCount = 0;
var obj68957_onTouchDown_loopCount = 0;
var obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_loopCount = 0;
var obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj68957_droppedInsideTargetActions_4_loopCount = 0;
var obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68957_droppedInsideTargetActions_3_loopCount = 0;
var obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68957_droppedInsideTargetActions_2_loopCount = 0;
var obj68957_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj68957_droppedInsideTargetActions_runningActionsCount = 0;
var obj68957_droppedInsideTargetActions_loopCount = 0;
var obj68914_onDrag_activeActionGroupIndex = -1;
var obj68914_onDrag_runningActionsCount = 0;
var obj68914_onDrag_loopCount = 0;
var obj68914_onTouchDown_activeActionGroupIndex = -1;
var obj68914_onTouchDown_runningActionsCount = 0;
var obj68914_onTouchDown_loopCount = 0;
var obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_loopCount = 0;
var obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj68914_droppedInsideTargetActions_4_loopCount = 0;
var obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68914_droppedInsideTargetActions_3_loopCount = 0;
var obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68914_droppedInsideTargetActions_2_loopCount = 0;
var obj68914_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj68914_droppedInsideTargetActions_runningActionsCount = 0;
var obj68914_droppedInsideTargetActions_loopCount = 0;
var obj68871_onDrag_activeActionGroupIndex = -1;
var obj68871_onDrag_runningActionsCount = 0;
var obj68871_onDrag_loopCount = 0;
var obj68871_onTouchDown_activeActionGroupIndex = -1;
var obj68871_onTouchDown_runningActionsCount = 0;
var obj68871_onTouchDown_loopCount = 0;
var obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_loopCount = 0;
var obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj68871_droppedInsideTargetActions_4_loopCount = 0;
var obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68871_droppedInsideTargetActions_3_loopCount = 0;
var obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68871_droppedInsideTargetActions_2_loopCount = 0;
var obj68871_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj68871_droppedInsideTargetActions_runningActionsCount = 0;
var obj68871_droppedInsideTargetActions_loopCount = 0;
var obj68828_onDrag_activeActionGroupIndex = -1;
var obj68828_onDrag_runningActionsCount = 0;
var obj68828_onDrag_loopCount = 0;
var obj68828_onTouchDown_activeActionGroupIndex = -1;
var obj68828_onTouchDown_runningActionsCount = 0;
var obj68828_onTouchDown_loopCount = 0;
var obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_loopCount = 0;
var obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj68828_droppedInsideTargetActions_4_loopCount = 0;
var obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68828_droppedInsideTargetActions_3_loopCount = 0;
var obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68828_droppedInsideTargetActions_2_loopCount = 0;
var obj68828_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj68828_droppedInsideTargetActions_runningActionsCount = 0;
var obj68828_droppedInsideTargetActions_loopCount = 0;
var obj68810_onTap_activeActionGroupIndex = -1;
var obj68810_onTap_runningActionsCount = 0;
var obj68810_onTap_loopCount = 0;
var obj68802_onTap_activeActionGroupIndex = -1;
var obj68802_onTap_runningActionsCount = 0;
var obj68802_onTap_loopCount = 0;
var obj87162_onTap_activeActionGroupIndex = -1;
var obj87162_onTap_runningActionsCount = 0;
var obj87162_onTap_loopCount = 0;
var obj87157_onTap_activeActionGroupIndex = -1;
var obj87157_onTap_runningActionsCount = 0;
var obj87157_onTap_loopCount = 0;
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
		
obj69052_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69052_onTap_activeActionGroupIndex = -1;
		$("#obj69052").trigger("obj69052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69052) {
				console.warn("de-queueing event obj69052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69052_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69054();
function goToPage_69054() {
	window.obj69052_onTap_runningActionsCount = obj69052_onTap_runningActionsCount + 1;
	$("#anchor221")[0].click();
	window.obj69052_onTap_runningActionsCount = window.obj69052_onTap_runningActionsCount - 1;
if (window.obj69052_onTap_runningActionsCount < 0) {
	window.obj69052_onTap_runningActionsCount = 0;
} else if (window.obj69052_onTap_runningActionsCount == 0) {
	obj69052_onTap_actionGroup1();
}
}





















};
obj69052_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69052_onTap_activeActionGroupIndex = -1;
		$("#obj69052").trigger("obj69052_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69052) {
				console.warn("de-queueing event obj69052." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69052").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69052_onTap_activeActionGroupIndex = 1;
	





















};
obj69049_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69049_onTap_activeActionGroupIndex = -1;
		$("#obj69049").trigger("obj69049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69049) {
				console.warn("de-queueing event obj69049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69049_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69051();
function goToPage_69051() {
	window.obj69049_onTap_runningActionsCount = obj69049_onTap_runningActionsCount + 1;
	$("#anchor222")[0].click();
	window.obj69049_onTap_runningActionsCount = window.obj69049_onTap_runningActionsCount - 1;
if (window.obj69049_onTap_runningActionsCount < 0) {
	window.obj69049_onTap_runningActionsCount = 0;
} else if (window.obj69049_onTap_runningActionsCount == 0) {
	obj69049_onTap_actionGroup1();
}
}





















};
obj69049_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69049_onTap_activeActionGroupIndex = -1;
		$("#obj69049").trigger("obj69049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69049) {
				console.warn("de-queueing event obj69049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69049_onTap_activeActionGroupIndex = 1;
	





















};
obj69045_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj69045_onTap_activeActionGroupIndex = -1;
		$("#obj69045").trigger("obj69045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69045) {
				console.warn("de-queueing event obj69045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69045_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_69047();
function goToPage_69047() {
	window.obj69045_onTap_runningActionsCount = obj69045_onTap_runningActionsCount + 1;
	$("#anchor223")[0].click();
	window.obj69045_onTap_runningActionsCount = window.obj69045_onTap_runningActionsCount - 1;
if (window.obj69045_onTap_runningActionsCount < 0) {
	window.obj69045_onTap_runningActionsCount = 0;
} else if (window.obj69045_onTap_runningActionsCount == 0) {
	obj69045_onTap_actionGroup1();
}
}





















};
obj69045_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj69045_onTap_activeActionGroupIndex = -1;
		$("#obj69045").trigger("obj69045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 69045) {
				console.warn("de-queueing event obj69045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj69045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj69045_onTap_activeActionGroupIndex = 1;
	





















};
obj68957_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj68957");
//	action: dragDrop
//	target: obj68957 
dragDrop_68960();
function dragDrop_68960() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj68957_onTouchDown_runningActionsCount = obj68957_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj68957');
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
	  	containerNode = $('#obj69031');
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
    	window.obj68957_onTouchDown_runningActionsCount = window.obj68957_onTouchDown_runningActionsCount - 1;
if (window.obj68957_onTouchDown_runningActionsCount < 0) {
	window.obj68957_onTouchDown_runningActionsCount = 0;
} else if (window.obj68957_onTouchDown_runningActionsCount == 0) {
	obj68957_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj69027","#obj69010","#obj69006","#obj69002");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_68960 = false;
    	var dropped_id_68960;
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
					dropped_68960 = true;
					dropped_id_68960 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_68960) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj68957").trigger('SCActionDragDrop68960_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj68957_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68957_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj68957 
move_92204();
function move_92204() {
	window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_runningActionsCount = obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj68957");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_runningActionsCount = window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj68957_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68990();
function runjs_68990() {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = obj68957_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68991();
function runjs_68991() {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = obj68957_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("border-color", "#C00000"); $("#obj69002").css("border-width", "2px"); $("#obj69002").css("border-style", "solid"); $("#obj69002").css("border-radius", "10px"); $("#obj69002").css("-webkit-border-radius", "10px"); $("#obj69002").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69000 
hide_68992();
function hide_68992() {
	var selector = "#obj69000";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = obj68957_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68992(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68957_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68993();
function switchText_68993() {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = obj68957_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj68957_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68957 
move_68994();
function move_68994() {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = obj68957_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj68957");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj68957_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68995();
function runjs_68995() {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = obj68957_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68996();
function runjs_68996() {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = obj68957_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("border-color", "#000000"); $("#obj69002").css("border-width", "1px"); $("#obj69002").css("border-style", "solid"); $("#obj69002").css("border-radius", "10px"); $("#obj69002").css("-webkit-border-radius", "10px"); $("#obj69002").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69000
(function(){
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = obj68957_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj69000";
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
					window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup8();
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
				window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68957_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68998();
function playAudio_68998() {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = obj68957_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj68957_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68999();
function switchText_68999() {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = obj68957_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68957_droppedInsideTargetActions_4_runningActionsCount = window.obj68957_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_4_actionGroup10();
}
		}, 1);
	}
}






};
obj68957_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	





















};
obj68957_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68979();
function runjs_68979() {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = obj68957_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69006").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68980();
function runjs_68980() {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = obj68957_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69006").css("border-color", "#C00000"); $("#obj69006").css("border-width", "2px"); $("#obj69006").css("border-style", "solid"); $("#obj69006").css("border-radius", "10px"); $("#obj69006").css("-webkit-border-radius", "10px"); $("#obj69006").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69004 
hide_68981();
function hide_68981() {
	var selector = "#obj69004";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = obj68957_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68981(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68957_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68982();
function switchText_68982() {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = obj68957_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj68957_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68957 
move_68983();
function move_68983() {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = obj68957_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj68957");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj68957_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68984();
function runjs_68984() {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = obj68957_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69006").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68985();
function runjs_68985() {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = obj68957_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69006").css("border-color", "#000000"); $("#obj69006").css("border-width", "1px"); $("#obj69006").css("border-style", "solid"); $("#obj69006").css("border-radius", "10px"); $("#obj69006").css("-webkit-border-radius", "10px"); $("#obj69006").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69004
(function(){
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = obj68957_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj69004";
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
					window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup8();
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
				window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68957_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68987();
function playAudio_68987() {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = obj68957_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj68957_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68988();
function switchText_68988() {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = obj68957_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68957_droppedInsideTargetActions_3_runningActionsCount = window.obj68957_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj68957_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj68957_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68968();
function runjs_68968() {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = obj68957_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69010").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68969();
function runjs_68969() {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = obj68957_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69010").css("border-color", "#C00000"); $("#obj69010").css("border-width", "2px"); $("#obj69010").css("border-style", "solid"); $("#obj69010").css("border-radius", "10px"); $("#obj69010").css("-webkit-border-radius", "10px"); $("#obj69010").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69008 
hide_68970();
function hide_68970() {
	var selector = "#obj69008";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = obj68957_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68970(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68957_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68971();
function switchText_68971() {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = obj68957_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj68957_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68957 
move_68972();
function move_68972() {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = obj68957_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj68957");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj68957_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68973();
function runjs_68973() {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = obj68957_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69010").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68974();
function runjs_68974() {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = obj68957_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69010").css("border-color", "#000000"); $("#obj69010").css("border-width", "1px"); $("#obj69010").css("border-style", "solid"); $("#obj69010").css("border-radius", "10px"); $("#obj69010").css("-webkit-border-radius", "10px"); $("#obj69010").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69008
(function(){
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = obj68957_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj69008";
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
					window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup8();
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
				window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68957_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68976();
function playAudio_68976() {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = obj68957_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj68957_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68977();
function switchText_68977() {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = obj68957_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68957_droppedInsideTargetActions_2_runningActionsCount = window.obj68957_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_2_actionGroup10();
}
		}, 1);
	}
}






};
obj68957_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	





















};
obj68957_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68962();
function runjs_68962() {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = obj68957_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69027").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_runningActionsCount = window.obj68957_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_68965();
function switchText_68965() {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = obj68957_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68957_droppedInsideTargetActions_runningActionsCount = window.obj68957_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68957_droppedInsideTargetActions_runningActionsCount = window.obj68957_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj68957_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_68963();
function runjs_68963() {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = obj68957_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69027").css("border-color", "#058E3F"); $("#obj69027").css("border-width", "2px"); $("#obj69027").css("border-style", "solid"); $("#obj69027").css("border-radius", "10px"); $("#obj69027").css("-webkit-border-radius", "10px"); $("#obj69027").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68957_droppedInsideTargetActions_runningActionsCount = window.obj68957_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj68957_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj69025 
hide_68964();
function hide_68964() {
	var selector = "#obj69025";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68957_droppedInsideTargetActions_runningActionsCount = obj68957_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68957_droppedInsideTargetActions_runningActionsCount = window.obj68957_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68964(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68957_droppedInsideTargetActions_runningActionsCount = window.obj68957_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68957_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj69018 
playAudio_68966();
function playAudio_68966() {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = obj68957_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj69018")[0];
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
		    window.obj68957_droppedInsideTargetActions_runningActionsCount = window.obj68957_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68957_droppedInsideTargetActions_runningActionsCount = window.obj68957_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj68957_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90134();
function switchText_90134() {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = obj68957_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68957_droppedInsideTargetActions_runningActionsCount = window.obj68957_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68957_droppedInsideTargetActions_runningActionsCount = window.obj68957_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68957_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68957_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68957_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68957_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj68957_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68957").trigger("obj68957_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68957) {
				console.warn("de-queueing event obj68957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68957_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68914_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj68914");
//	action: dragDrop
//	target: obj68914 
dragDrop_68917();
function dragDrop_68917() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj68914_onTouchDown_runningActionsCount = obj68914_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj68914');
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
	  	containerNode = $('#obj69031');
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
    	window.obj68914_onTouchDown_runningActionsCount = window.obj68914_onTouchDown_runningActionsCount - 1;
if (window.obj68914_onTouchDown_runningActionsCount < 0) {
	window.obj68914_onTouchDown_runningActionsCount = 0;
} else if (window.obj68914_onTouchDown_runningActionsCount == 0) {
	obj68914_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj69010","#obj69027","#obj69006","#obj69002");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_68917 = false;
    	var dropped_id_68917;
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
					dropped_68917 = true;
					dropped_id_68917 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_68917) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj68914").trigger('SCActionDragDrop68917_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj68914_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68914_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj68914 
move_92202();
function move_92202() {
	window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_runningActionsCount = obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj68914");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 94;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_runningActionsCount = window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj68914_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68947();
function runjs_68947() {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = obj68914_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68948();
function runjs_68948() {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = obj68914_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("border-color", "#C00000"); $("#obj69002").css("border-width", "2px"); $("#obj69002").css("border-style", "solid"); $("#obj69002").css("border-radius", "10px"); $("#obj69002").css("-webkit-border-radius", "10px"); $("#obj69002").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69000 
hide_68949();
function hide_68949() {
	var selector = "#obj69000";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = obj68914_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68949(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68914_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68950();
function switchText_68950() {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = obj68914_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj68914_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68914 
move_68951();
function move_68951() {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = obj68914_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj68914");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 94;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj68914_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68952();
function runjs_68952() {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = obj68914_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68953();
function runjs_68953() {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = obj68914_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("border-color", "#000000"); $("#obj69002").css("border-width", "1px"); $("#obj69002").css("border-style", "solid"); $("#obj69002").css("border-radius", "10px"); $("#obj69002").css("-webkit-border-radius", "10px"); $("#obj69002").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69000
(function(){
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = obj68914_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj69000";
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
					window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup8();
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
				window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68914_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68955();
function playAudio_68955() {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = obj68914_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj68914_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68956();
function switchText_68956() {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = obj68914_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68914_droppedInsideTargetActions_4_runningActionsCount = window.obj68914_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_4_actionGroup10();
}
		}, 1);
	}
}






};
obj68914_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	





















};
obj68914_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68936();
function runjs_68936() {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = obj68914_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69006").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68937();
function runjs_68937() {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = obj68914_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69006").css("border-color", "#C00000"); $("#obj69006").css("border-width", "2px"); $("#obj69006").css("border-style", "solid"); $("#obj69006").css("border-radius", "10px"); $("#obj69006").css("-webkit-border-radius", "10px"); $("#obj69006").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69004 
hide_68938();
function hide_68938() {
	var selector = "#obj69004";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = obj68914_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68938(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68914_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68939();
function switchText_68939() {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = obj68914_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj68914_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68914 
move_68940();
function move_68940() {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = obj68914_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj68914");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 94;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj68914_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68941();
function runjs_68941() {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = obj68914_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69006").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68942();
function runjs_68942() {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = obj68914_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69006").css("border-color", "#000000"); $("#obj69006").css("border-width", "1px"); $("#obj69006").css("border-style", "solid"); $("#obj69006").css("border-radius", "10px"); $("#obj69006").css("-webkit-border-radius", "10px"); $("#obj69006").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69004
(function(){
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = obj68914_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj69004";
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
					window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup8();
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
				window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68914_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68944();
function playAudio_68944() {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = obj68914_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj68914_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68945();
function switchText_68945() {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = obj68914_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68914_droppedInsideTargetActions_3_runningActionsCount = window.obj68914_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj68914_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj68914_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68925();
function runjs_68925() {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = obj68914_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68926();
function runjs_68926() {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = obj68914_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("border-color", "#C00000"); $("#obj69027").css("border-width", "2px"); $("#obj69027").css("border-style", "solid"); $("#obj69027").css("border-radius", "10px"); $("#obj69027").css("-webkit-border-radius", "10px"); $("#obj69027").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69025 
hide_68927();
function hide_68927() {
	var selector = "#obj69025";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = obj68914_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68927(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68914_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68928();
function switchText_68928() {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = obj68914_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj68914_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68914 
move_68929();
function move_68929() {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = obj68914_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj68914");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 94;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj68914_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68930();
function runjs_68930() {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = obj68914_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68931();
function runjs_68931() {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = obj68914_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("border-color", "#000000"); $("#obj69027").css("border-width", "1px"); $("#obj69027").css("border-style", "solid"); $("#obj69027").css("border-radius", "10px"); $("#obj69027").css("-webkit-border-radius", "10px"); $("#obj69027").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69025
(function(){
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = obj68914_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj69025";
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
					window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup8();
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
				window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68914_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68933();
function playAudio_68933() {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = obj68914_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj68914_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68934();
function switchText_68934() {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = obj68914_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68914_droppedInsideTargetActions_2_runningActionsCount = window.obj68914_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_2_actionGroup10();
}
		}, 1);
	}
}






};
obj68914_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	





















};
obj68914_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68919();
function runjs_68919() {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = obj68914_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69010").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_runningActionsCount = window.obj68914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_68922();
function switchText_68922() {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = obj68914_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68914_droppedInsideTargetActions_runningActionsCount = window.obj68914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68914_droppedInsideTargetActions_runningActionsCount = window.obj68914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj68914_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_68920();
function runjs_68920() {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = obj68914_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69010").css("border-color", "#058E3F"); $("#obj69010").css("border-width", "2px"); $("#obj69010").css("border-style", "solid"); $("#obj69010").css("border-radius", "10px"); $("#obj69010").css("-webkit-border-radius", "10px"); $("#obj69010").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68914_droppedInsideTargetActions_runningActionsCount = window.obj68914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj68914_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj69008 
hide_68921();
function hide_68921() {
	var selector = "#obj69008";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68914_droppedInsideTargetActions_runningActionsCount = obj68914_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68914_droppedInsideTargetActions_runningActionsCount = window.obj68914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68921(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68914_droppedInsideTargetActions_runningActionsCount = window.obj68914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68914_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj69018 
playAudio_68923();
function playAudio_68923() {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = obj68914_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj69018")[0];
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
		    window.obj68914_droppedInsideTargetActions_runningActionsCount = window.obj68914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68914_droppedInsideTargetActions_runningActionsCount = window.obj68914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj68914_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90133();
function switchText_90133() {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = obj68914_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68914_droppedInsideTargetActions_runningActionsCount = window.obj68914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68914_droppedInsideTargetActions_runningActionsCount = window.obj68914_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68914_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68914_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68914_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68914_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj68914_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68914").trigger("obj68914_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68914) {
				console.warn("de-queueing event obj68914." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68914").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68914_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68871_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj68871");
//	action: dragDrop
//	target: obj68871 
dragDrop_68874();
function dragDrop_68874() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj68871_onTouchDown_runningActionsCount = obj68871_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj68871');
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
	  	containerNode = $('#obj69031');
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
    	window.obj68871_onTouchDown_runningActionsCount = window.obj68871_onTouchDown_runningActionsCount - 1;
if (window.obj68871_onTouchDown_runningActionsCount < 0) {
	window.obj68871_onTouchDown_runningActionsCount = 0;
} else if (window.obj68871_onTouchDown_runningActionsCount == 0) {
	obj68871_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj69006","#obj69027","#obj69010","#obj69002");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_68874 = false;
    	var dropped_id_68874;
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
					dropped_68874 = true;
					dropped_id_68874 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_68874) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj68871").trigger('SCActionDragDrop68874_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj68871_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68871_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj68871 
move_92206();
function move_92206() {
	window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_runningActionsCount = obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj68871");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 305;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_runningActionsCount = window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj68871_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68904();
function runjs_68904() {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = obj68871_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68905();
function runjs_68905() {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = obj68871_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("border-color", "#C00000"); $("#obj69002").css("border-width", "2px"); $("#obj69002").css("border-style", "solid"); $("#obj69002").css("border-radius", "10px"); $("#obj69002").css("-webkit-border-radius", "10px"); $("#obj69002").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69000 
hide_68906();
function hide_68906() {
	var selector = "#obj69000";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = obj68871_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68906(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68871_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68907();
function switchText_68907() {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = obj68871_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj68871_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68871 
move_68908();
function move_68908() {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = obj68871_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj68871");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 305;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj68871_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68909();
function runjs_68909() {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = obj68871_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68910();
function runjs_68910() {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = obj68871_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69002").css("border-color", "#000000"); $("#obj69002").css("border-width", "1px"); $("#obj69002").css("border-style", "solid"); $("#obj69002").css("border-radius", "10px"); $("#obj69002").css("-webkit-border-radius", "10px"); $("#obj69002").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69000
(function(){
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = obj68871_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj69000";
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
					window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup8();
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
				window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68871_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68912();
function playAudio_68912() {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = obj68871_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj68871_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68913();
function switchText_68913() {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = obj68871_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68871_droppedInsideTargetActions_4_runningActionsCount = window.obj68871_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_4_actionGroup10();
}
		}, 1);
	}
}






};
obj68871_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	





















};
obj68871_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68893();
function runjs_68893() {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = obj68871_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69010").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68894();
function runjs_68894() {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = obj68871_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69010").css("border-color", "#C00000"); $("#obj69010").css("border-width", "2px"); $("#obj69010").css("border-style", "solid"); $("#obj69010").css("border-radius", "10px"); $("#obj69010").css("-webkit-border-radius", "10px"); $("#obj69010").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69008 
hide_68895();
function hide_68895() {
	var selector = "#obj69008";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = obj68871_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68895(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68871_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68896();
function switchText_68896() {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = obj68871_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj68871_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68871 
move_68897();
function move_68897() {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = obj68871_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj68871");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 305;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj68871_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68898();
function runjs_68898() {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = obj68871_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69010").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68899();
function runjs_68899() {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = obj68871_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69010").css("border-color", "#000000"); $("#obj69010").css("border-width", "1px"); $("#obj69010").css("border-style", "solid"); $("#obj69010").css("border-radius", "10px"); $("#obj69010").css("-webkit-border-radius", "10px"); $("#obj69010").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69008
(function(){
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = obj68871_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj69008";
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
					window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup8();
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
				window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68871_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68901();
function playAudio_68901() {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = obj68871_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj68871_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68902();
function switchText_68902() {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = obj68871_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68871_droppedInsideTargetActions_3_runningActionsCount = window.obj68871_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj68871_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj68871_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68882();
function runjs_68882() {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = obj68871_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68883();
function runjs_68883() {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = obj68871_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("border-color", "#C00000"); $("#obj69027").css("border-width", "2px"); $("#obj69027").css("border-style", "solid"); $("#obj69027").css("border-radius", "10px"); $("#obj69027").css("-webkit-border-radius", "10px"); $("#obj69027").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69025 
hide_68884();
function hide_68884() {
	var selector = "#obj69025";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = obj68871_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68884(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68871_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68885();
function switchText_68885() {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = obj68871_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj68871_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68871 
move_68886();
function move_68886() {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = obj68871_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj68871");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 305;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj68871_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68887();
function runjs_68887() {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = obj68871_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68888();
function runjs_68888() {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = obj68871_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("border-color", "#000000"); $("#obj69027").css("border-width", "1px"); $("#obj69027").css("border-style", "solid"); $("#obj69027").css("border-radius", "10px"); $("#obj69027").css("-webkit-border-radius", "10px"); $("#obj69027").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69025
(function(){
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = obj68871_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj69025";
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
					window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup8();
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
				window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68871_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68890();
function playAudio_68890() {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = obj68871_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj68871_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68891();
function switchText_68891() {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = obj68871_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68871_droppedInsideTargetActions_2_runningActionsCount = window.obj68871_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_2_actionGroup10();
}
		}, 1);
	}
}






};
obj68871_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	





















};
obj68871_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68876();
function runjs_68876() {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = obj68871_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69006").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_runningActionsCount = window.obj68871_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_68879();
function switchText_68879() {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = obj68871_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68871_droppedInsideTargetActions_runningActionsCount = window.obj68871_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68871_droppedInsideTargetActions_runningActionsCount = window.obj68871_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj68871_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_68877();
function runjs_68877() {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = obj68871_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69006").css("border-color", "#058E3F"); $("#obj69006").css("border-width", "2px"); $("#obj69006").css("border-style", "solid"); $("#obj69006").css("border-radius", "10px"); $("#obj69006").css("-webkit-border-radius", "10px"); $("#obj69006").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68871_droppedInsideTargetActions_runningActionsCount = window.obj68871_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj68871_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj69004 
hide_68878();
function hide_68878() {
	var selector = "#obj69004";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68871_droppedInsideTargetActions_runningActionsCount = obj68871_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68871_droppedInsideTargetActions_runningActionsCount = window.obj68871_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68878(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68871_droppedInsideTargetActions_runningActionsCount = window.obj68871_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68871_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj69018 
playAudio_68880();
function playAudio_68880() {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = obj68871_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj69018")[0];
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
		    window.obj68871_droppedInsideTargetActions_runningActionsCount = window.obj68871_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68871_droppedInsideTargetActions_runningActionsCount = window.obj68871_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj68871_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90135();
function switchText_90135() {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = obj68871_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68871_droppedInsideTargetActions_runningActionsCount = window.obj68871_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68871_droppedInsideTargetActions_runningActionsCount = window.obj68871_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68871_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68871_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68871_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68871_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj68871_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68871").trigger("obj68871_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68871) {
				console.warn("de-queueing event obj68871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68871_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68828_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj68828");
//	action: dragDrop
//	target: obj68828 
dragDrop_68831();
function dragDrop_68831() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj68828_onTouchDown_runningActionsCount = obj68828_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj68828');
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
	  	containerNode = $('#obj69031');
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
    	window.obj68828_onTouchDown_runningActionsCount = window.obj68828_onTouchDown_runningActionsCount - 1;
if (window.obj68828_onTouchDown_runningActionsCount < 0) {
	window.obj68828_onTouchDown_runningActionsCount = 0;
} else if (window.obj68828_onTouchDown_runningActionsCount == 0) {
	obj68828_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj69002","#obj69027","#obj69010","#obj69006");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_68831 = false;
    	var dropped_id_68831;
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
					dropped_68831 = true;
					dropped_id_68831 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_68831) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj68828").trigger('SCActionDragDrop68831_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj68828_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68828_onTouchDown_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj68828 
move_92208();
function move_92208() {
	window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_runningActionsCount = obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj68828");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 414;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_runningActionsCount = window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj68828_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68861();
function runjs_68861() {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = obj68828_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69006").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68862();
function runjs_68862() {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = obj68828_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69006").css("border-color", "#C00000"); $("#obj69006").css("border-width", "2px"); $("#obj69006").css("border-style", "solid"); $("#obj69006").css("border-radius", "10px"); $("#obj69006").css("-webkit-border-radius", "10px"); $("#obj69006").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69004 
hide_68863();
function hide_68863() {
	var selector = "#obj69004";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = obj68828_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68863(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68828_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68864();
function switchText_68864() {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = obj68828_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	}
}






};
obj68828_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68828 
move_68865();
function move_68865() {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = obj68828_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj68828");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 414;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	});
}



















};
obj68828_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68866();
function runjs_68866() {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = obj68828_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69006").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68867();
function runjs_68867() {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = obj68828_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj69006").css("border-color", "#000000"); $("#obj69006").css("border-width", "1px"); $("#obj69006").css("border-style", "solid"); $("#obj69006").css("border-radius", "10px"); $("#obj69006").css("-webkit-border-radius", "10px"); $("#obj69006").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69004
(function(){
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = obj68828_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj69004";
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
					window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup8();
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
				window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68828_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68869();
function playAudio_68869() {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = obj68828_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj68828_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68870();
function switchText_68870() {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = obj68828_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68828_droppedInsideTargetActions_4_runningActionsCount = window.obj68828_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_4_actionGroup10();
}
		}, 1);
	}
}






};
obj68828_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	





















};
obj68828_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68850();
function runjs_68850() {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = obj68828_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69010").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68851();
function runjs_68851() {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = obj68828_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69010").css("border-color", "#C00000"); $("#obj69010").css("border-width", "2px"); $("#obj69010").css("border-style", "solid"); $("#obj69010").css("border-radius", "10px"); $("#obj69010").css("-webkit-border-radius", "10px"); $("#obj69010").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69008 
hide_68852();
function hide_68852() {
	var selector = "#obj69008";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = obj68828_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68852(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68828_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68853();
function switchText_68853() {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = obj68828_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	}
}






};
obj68828_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68828 
move_68854();
function move_68854() {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = obj68828_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj68828");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 414;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	});
}



















};
obj68828_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68855();
function runjs_68855() {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = obj68828_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69010").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68856();
function runjs_68856() {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = obj68828_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj69010").css("border-color", "#000000"); $("#obj69010").css("border-width", "1px"); $("#obj69010").css("border-style", "solid"); $("#obj69010").css("border-radius", "10px"); $("#obj69010").css("-webkit-border-radius", "10px"); $("#obj69010").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69008
(function(){
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = obj68828_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj69008";
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
					window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup8();
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
				window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68828_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68858();
function playAudio_68858() {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = obj68828_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj68828_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68859();
function switchText_68859() {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = obj68828_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68828_droppedInsideTargetActions_3_runningActionsCount = window.obj68828_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_3_actionGroup10();
}
		}, 1);
	}
}






};
obj68828_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	





















};
obj68828_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68839();
function runjs_68839() {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = obj68828_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_68840();
function runjs_68840() {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = obj68828_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("border-color", "#C00000"); $("#obj69027").css("border-width", "2px"); $("#obj69027").css("border-style", "solid"); $("#obj69027").css("border-radius", "10px"); $("#obj69027").css("-webkit-border-radius", "10px"); $("#obj69027").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj69025 
hide_68841();
function hide_68841() {
	var selector = "#obj69025";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = obj68828_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68841(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68828_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_68842();
function switchText_68842() {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = obj68828_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	}
}






};
obj68828_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj68828 
move_68843();
function move_68843() {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = obj68828_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj68828");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 414;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	});
}



















};
obj68828_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_68844();
function runjs_68844() {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = obj68828_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_68845();
function runjs_68845() {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = obj68828_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj69027").css("border-color", "#000000"); $("#obj69027").css("border-width", "1px"); $("#obj69027").css("border-style", "solid"); $("#obj69027").css("border-radius", "10px"); $("#obj69027").css("-webkit-border-radius", "10px"); $("#obj69027").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj69025
(function(){
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = obj68828_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj69025";
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
					window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup8();
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
				window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68828_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj69020 
playAudio_68847();
function playAudio_68847() {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = obj68828_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj69020")[0];
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
		    window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj68828_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Switch Text
switchText_68848();
function switchText_68848() {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = obj68828_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup10();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68828_droppedInsideTargetActions_2_runningActionsCount = window.obj68828_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_2_actionGroup10();
}
		}, 1);
	}
}






};
obj68828_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	





















};
obj68828_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_68833();
function runjs_68833() {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = obj68828_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69002").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_runningActionsCount = window.obj68828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_68836();
function switchText_68836() {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = obj68828_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68828_droppedInsideTargetActions_runningActionsCount = window.obj68828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68828_droppedInsideTargetActions_runningActionsCount = window.obj68828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj68828_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_68834();
function runjs_68834() {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = obj68828_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj69002").css("border-color", "#058E3F"); $("#obj69002").css("border-width", "2px"); $("#obj69002").css("border-style", "solid"); $("#obj69002").css("border-radius", "10px"); $("#obj69002").css("-webkit-border-radius", "10px"); $("#obj69002").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj68828_droppedInsideTargetActions_runningActionsCount = window.obj68828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj68828_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj69000 
hide_68835();
function hide_68835() {
	var selector = "#obj69000";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68828_droppedInsideTargetActions_runningActionsCount = obj68828_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68828_droppedInsideTargetActions_runningActionsCount = window.obj68828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68835(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68828_droppedInsideTargetActions_runningActionsCount = window.obj68828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj68828_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj69018 
playAudio_68837();
function playAudio_68837() {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = obj68828_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj69018")[0];
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
		    window.obj68828_droppedInsideTargetActions_runningActionsCount = window.obj68828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj68828_droppedInsideTargetActions_runningActionsCount = window.obj68828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj68828_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90136();
function switchText_90136() {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = obj68828_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj69021_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj69021_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj69021").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj69021_content");
			setTimeout(function () {
				window.obj68828_droppedInsideTargetActions_runningActionsCount = window.obj68828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj69021 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj68828_droppedInsideTargetActions_runningActionsCount = window.obj68828_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj68828_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj68828_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj68828_droppedInsideTargetActions_runningActionsCount == 0) {
	obj68828_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj68828_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj68828").trigger("obj68828_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68828) {
				console.warn("de-queueing event obj68828." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68828").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68828_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68810_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68810_onTap_activeActionGroupIndex = -1;
		$("#obj68810").trigger("obj68810_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68810) {
				console.warn("de-queueing event obj68810." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68810").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68810_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68810 
hide_68813();
function hide_68813() {
	var selector = "#obj68810";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68810_onTap_runningActionsCount = obj68810_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68810_onTap_runningActionsCount = window.obj68810_onTap_runningActionsCount - 1;
if (window.obj68810_onTap_runningActionsCount < 0) {
	window.obj68810_onTap_runningActionsCount = 0;
} else if (window.obj68810_onTap_runningActionsCount == 0) {
	obj68810_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68813(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68810_onTap_runningActionsCount = window.obj68810_onTap_runningActionsCount - 1;
if (window.obj68810_onTap_runningActionsCount < 0) {
	window.obj68810_onTap_runningActionsCount = 0;
} else if (window.obj68810_onTap_runningActionsCount == 0) {
	obj68810_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68800 
stopMovie_68812();
function stopMovie_68812() {
	window.obj68810_onTap_runningActionsCount = obj68810_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68800")[0];
	myVideo.pause();
	window.obj68810_onTap_runningActionsCount = window.obj68810_onTap_runningActionsCount - 1;
if (window.obj68810_onTap_runningActionsCount < 0) {
	window.obj68810_onTap_runningActionsCount = 0;
} else if (window.obj68810_onTap_runningActionsCount == 0) {
	obj68810_onTap_actionGroup1();
}
}
















};
obj68810_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68810_onTap_activeActionGroupIndex = -1;
		$("#obj68810").trigger("obj68810_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68810) {
				console.warn("de-queueing event obj68810." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68810").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68810_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68802
(function(){
	window.obj68810_onTap_runningActionsCount = obj68810_onTap_runningActionsCount + 1;

	var selector = "#obj68802";
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
					window.obj68810_onTap_runningActionsCount = window.obj68810_onTap_runningActionsCount - 1;
if (window.obj68810_onTap_runningActionsCount < 0) {
	window.obj68810_onTap_runningActionsCount = 0;
} else if (window.obj68810_onTap_runningActionsCount == 0) {
	obj68810_onTap_actionGroup2();
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
				window.obj68810_onTap_runningActionsCount = window.obj68810_onTap_runningActionsCount - 1;
if (window.obj68810_onTap_runningActionsCount < 0) {
	window.obj68810_onTap_runningActionsCount = 0;
} else if (window.obj68810_onTap_runningActionsCount == 0) {
	obj68810_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68810_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68810_onTap_activeActionGroupIndex = -1;
		$("#obj68810").trigger("obj68810_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68810) {
				console.warn("de-queueing event obj68810." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68810").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68810_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68800 
move_68815();
function move_68815() {
	window.obj68810_onTap_runningActionsCount = obj68810_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68800");
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
			window.obj68810_onTap_runningActionsCount = window.obj68810_onTap_runningActionsCount - 1;
if (window.obj68810_onTap_runningActionsCount < 0) {
	window.obj68810_onTap_runningActionsCount = 0;
} else if (window.obj68810_onTap_runningActionsCount == 0) {
	obj68810_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68810_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68810_onTap_activeActionGroupIndex = -1;
		$("#obj68810").trigger("obj68810_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68810) {
				console.warn("de-queueing event obj68810." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68810").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68810_onTap_activeActionGroupIndex = 3;
	





















};
obj68802_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68802_onTap_activeActionGroupIndex = -1;
		$("#obj68802").trigger("obj68802_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68802) {
				console.warn("de-queueing event obj68802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68802_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68802 
hide_68805();
function hide_68805() {
	var selector = "#obj68802";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68802_onTap_runningActionsCount = obj68802_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68802_onTap_runningActionsCount = window.obj68802_onTap_runningActionsCount - 1;
if (window.obj68802_onTap_runningActionsCount < 0) {
	window.obj68802_onTap_runningActionsCount = 0;
} else if (window.obj68802_onTap_runningActionsCount == 0) {
	obj68802_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68805(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68802_onTap_runningActionsCount = window.obj68802_onTap_runningActionsCount - 1;
if (window.obj68802_onTap_runningActionsCount < 0) {
	window.obj68802_onTap_runningActionsCount = 0;
} else if (window.obj68802_onTap_runningActionsCount == 0) {
	obj68802_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68800 
playPauseMovie_68804();
function playPauseMovie_68804() {
	window.obj68802_onTap_runningActionsCount = obj68802_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68800")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68802_onTap_runningActionsCount = window.obj68802_onTap_runningActionsCount - 1;
if (window.obj68802_onTap_runningActionsCount < 0) {
	window.obj68802_onTap_runningActionsCount = 0;
} else if (window.obj68802_onTap_runningActionsCount == 0) {
	obj68802_onTap_actionGroup1();
}
}

















};
obj68802_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68802_onTap_activeActionGroupIndex = -1;
		$("#obj68802").trigger("obj68802_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68802) {
				console.warn("de-queueing event obj68802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68802_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68810
(function(){
	window.obj68802_onTap_runningActionsCount = obj68802_onTap_runningActionsCount + 1;

	var selector = "#obj68810";
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
					window.obj68802_onTap_runningActionsCount = window.obj68802_onTap_runningActionsCount - 1;
if (window.obj68802_onTap_runningActionsCount < 0) {
	window.obj68802_onTap_runningActionsCount = 0;
} else if (window.obj68802_onTap_runningActionsCount == 0) {
	obj68802_onTap_actionGroup2();
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
				window.obj68802_onTap_runningActionsCount = window.obj68802_onTap_runningActionsCount - 1;
if (window.obj68802_onTap_runningActionsCount < 0) {
	window.obj68802_onTap_runningActionsCount = 0;
} else if (window.obj68802_onTap_runningActionsCount == 0) {
	obj68802_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68802_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68802_onTap_activeActionGroupIndex = -1;
		$("#obj68802").trigger("obj68802_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68802) {
				console.warn("de-queueing event obj68802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68802_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68800 
move_68807();
function move_68807() {
	window.obj68802_onTap_runningActionsCount = obj68802_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68800");
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
			window.obj68802_onTap_runningActionsCount = window.obj68802_onTap_runningActionsCount - 1;
if (window.obj68802_onTap_runningActionsCount < 0) {
	window.obj68802_onTap_runningActionsCount = 0;
} else if (window.obj68802_onTap_runningActionsCount == 0) {
	obj68802_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68802_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68802_onTap_activeActionGroupIndex = -1;
		$("#obj68802").trigger("obj68802_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68802) {
				console.warn("de-queueing event obj68802." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68802").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68802_onTap_activeActionGroupIndex = 3;
	





















};
obj87162_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87162_onTap_activeActionGroupIndex = -1;
		$("#obj87162").trigger("obj87162_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87162) {
				console.warn("de-queueing event obj87162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87162_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87167 
stopAudio_87164();
function stopAudio_87164() {
	window.obj87162_onTap_runningActionsCount = obj87162_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87167")[0];
	myAudio.pause();
	window.obj87162_onTap_runningActionsCount = window.obj87162_onTap_runningActionsCount - 1;
if (window.obj87162_onTap_runningActionsCount < 0) {
	window.obj87162_onTap_runningActionsCount = 0;
} else if (window.obj87162_onTap_runningActionsCount == 0) {
	obj87162_onTap_actionGroup1();
}
}








};
obj87162_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87162_onTap_activeActionGroupIndex = -1;
		$("#obj87162").trigger("obj87162_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87162) {
				console.warn("de-queueing event obj87162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87162_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87162 
hide_87165();
function hide_87165() {
	var selector = "#obj87162";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87162_onTap_runningActionsCount = obj87162_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87162_onTap_runningActionsCount = window.obj87162_onTap_runningActionsCount - 1;
if (window.obj87162_onTap_runningActionsCount < 0) {
	window.obj87162_onTap_runningActionsCount = 0;
} else if (window.obj87162_onTap_runningActionsCount == 0) {
	obj87162_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87165(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87162_onTap_runningActionsCount = window.obj87162_onTap_runningActionsCount - 1;
if (window.obj87162_onTap_runningActionsCount < 0) {
	window.obj87162_onTap_runningActionsCount = 0;
} else if (window.obj87162_onTap_runningActionsCount == 0) {
	obj87162_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87162_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87162_onTap_activeActionGroupIndex = -1;
		$("#obj87162").trigger("obj87162_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87162) {
				console.warn("de-queueing event obj87162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87162_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87157
(function(){
	window.obj87162_onTap_runningActionsCount = obj87162_onTap_runningActionsCount + 1;

	var selector = "#obj87157";
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
					window.obj87162_onTap_runningActionsCount = window.obj87162_onTap_runningActionsCount - 1;
if (window.obj87162_onTap_runningActionsCount < 0) {
	window.obj87162_onTap_runningActionsCount = 0;
} else if (window.obj87162_onTap_runningActionsCount == 0) {
	obj87162_onTap_actionGroup3();
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
				window.obj87162_onTap_runningActionsCount = window.obj87162_onTap_runningActionsCount - 1;
if (window.obj87162_onTap_runningActionsCount < 0) {
	window.obj87162_onTap_runningActionsCount = 0;
} else if (window.obj87162_onTap_runningActionsCount == 0) {
	obj87162_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87162_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87162_onTap_activeActionGroupIndex = -1;
		$("#obj87162").trigger("obj87162_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87162) {
				console.warn("de-queueing event obj87162." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87162").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87162_onTap_activeActionGroupIndex = 3;
	





















};
obj87157_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87157_onTap_activeActionGroupIndex = -1;
		$("#obj87157").trigger("obj87157_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87157) {
				console.warn("de-queueing event obj87157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87157_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87157 
hide_87159();
function hide_87159() {
	var selector = "#obj87157";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87157_onTap_runningActionsCount = obj87157_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87157_onTap_runningActionsCount = window.obj87157_onTap_runningActionsCount - 1;
if (window.obj87157_onTap_runningActionsCount < 0) {
	window.obj87157_onTap_runningActionsCount = 0;
} else if (window.obj87157_onTap_runningActionsCount == 0) {
	obj87157_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87159(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87157_onTap_runningActionsCount = window.obj87157_onTap_runningActionsCount - 1;
if (window.obj87157_onTap_runningActionsCount < 0) {
	window.obj87157_onTap_runningActionsCount = 0;
} else if (window.obj87157_onTap_runningActionsCount == 0) {
	obj87157_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87157_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87157_onTap_activeActionGroupIndex = -1;
		$("#obj87157").trigger("obj87157_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87157) {
				console.warn("de-queueing event obj87157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87157_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87162
(function(){
	window.obj87157_onTap_runningActionsCount = obj87157_onTap_runningActionsCount + 1;

	var selector = "#obj87162";
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
					window.obj87157_onTap_runningActionsCount = window.obj87157_onTap_runningActionsCount - 1;
if (window.obj87157_onTap_runningActionsCount < 0) {
	window.obj87157_onTap_runningActionsCount = 0;
} else if (window.obj87157_onTap_runningActionsCount == 0) {
	obj87157_onTap_actionGroup2();
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
				window.obj87157_onTap_runningActionsCount = window.obj87157_onTap_runningActionsCount - 1;
if (window.obj87157_onTap_runningActionsCount < 0) {
	window.obj87157_onTap_runningActionsCount = 0;
} else if (window.obj87157_onTap_runningActionsCount == 0) {
	obj87157_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87157_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87157_onTap_activeActionGroupIndex = -1;
		$("#obj87157").trigger("obj87157_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87157) {
				console.warn("de-queueing event obj87157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87157_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87167 
playAudio_87161();
function playAudio_87161() {
	window.obj87157_onTap_runningActionsCount = obj87157_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87167")[0];
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
		    window.obj87157_onTap_runningActionsCount = window.obj87157_onTap_runningActionsCount - 1;
if (window.obj87157_onTap_runningActionsCount < 0) {
	window.obj87157_onTap_runningActionsCount = 0;
} else if (window.obj87157_onTap_runningActionsCount == 0) {
	obj87157_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87157_onTap_runningActionsCount = window.obj87157_onTap_runningActionsCount - 1;
if (window.obj87157_onTap_runningActionsCount < 0) {
	window.obj87157_onTap_runningActionsCount = 0;
} else if (window.obj87157_onTap_runningActionsCount == 0) {
	obj87157_onTap_actionGroup3();
}
	}
}









};
obj87157_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87157_onTap_activeActionGroupIndex = -1;
		$("#obj87157").trigger("obj87157_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87157) {
				console.warn("de-queueing event obj87157." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87157").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87157_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj69052: Event Touch Down
 *
 */
$("#obj69052").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69052_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69052_onTap is still running");
	return;
}
var obj69052_onTap_runningActionsCount = 0;
var obj69052_onTap_loopCount = 0;
obj69052_onTap_actionGroup0();
});










/*
 *
 *   obj69049: Event Touch Down
 *
 */
$("#obj69049").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69049_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69049_onTap is still running");
	return;
}
var obj69049_onTap_runningActionsCount = 0;
var obj69049_onTap_loopCount = 0;
obj69049_onTap_actionGroup0();
});










/*
 *
 *   obj69045: Event Touch Down
 *
 */
$("#obj69045").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj69045_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj69045_onTap is still running");
	return;
}
var obj69045_onTap_runningActionsCount = 0;
var obj69045_onTap_loopCount = 0;
obj69045_onTap_actionGroup0();
});

















































































































































































































































/*
 *
 *   obj68957: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj68957");
	var winTarget = document.getElementById("obj68957");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj68957").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj68957_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj68957_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj68957_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68957_onTouchDown is still running");
	return;
}
var obj68957_onTouchDown_runningActionsCount = 0;
var obj68957_onTouchDown_loopCount = 0;
obj68957_onTouchDown_actionGroup0();
});



/*
 *
 *   obj68957: Event SCActionDragDrop68960_droppedOutsideTargetActions
 *
 */
$("#obj68957").bind("SCActionDragDrop68960_droppedOutsideTargetActions", function(event) {
	if (window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68957_SCActionDragDrop68960_droppedOutsideTargetActions is still running");
	return;
}
var obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_loopCount = 0;
obj68957_SCActionDragDrop68960_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj68957: Event droppedInsideTargetActions_4
 *
 */
$("#obj68957").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj68957_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68957_droppedInsideTargetActions_4 is still running");
	return;
}
var obj68957_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj68957_droppedInsideTargetActions_4_loopCount = 0;
obj68957_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj68957: Event droppedInsideTargetActions_3
 *
 */
$("#obj68957").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj68957_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68957_droppedInsideTargetActions_3 is still running");
	return;
}
var obj68957_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68957_droppedInsideTargetActions_3_loopCount = 0;
obj68957_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj68957: Event droppedInsideTargetActions_2
 *
 */
$("#obj68957").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj68957_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68957_droppedInsideTargetActions_2 is still running");
	return;
}
var obj68957_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68957_droppedInsideTargetActions_2_loopCount = 0;
obj68957_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj68957: Event droppedInsideTargetActions
 *
 */
$("#obj68957").bind("droppedInsideTargetActions", function(event) {
	if (window.obj68957_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68957_droppedInsideTargetActions is still running");
	return;
}
var obj68957_droppedInsideTargetActions_runningActionsCount = 0;
var obj68957_droppedInsideTargetActions_loopCount = 0;
obj68957_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj68914: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj68914");
	var winTarget = document.getElementById("obj68914");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj68914").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj68914_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj68914_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj68914_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68914_onTouchDown is still running");
	return;
}
var obj68914_onTouchDown_runningActionsCount = 0;
var obj68914_onTouchDown_loopCount = 0;
obj68914_onTouchDown_actionGroup0();
});



/*
 *
 *   obj68914: Event SCActionDragDrop68917_droppedOutsideTargetActions
 *
 */
$("#obj68914").bind("SCActionDragDrop68917_droppedOutsideTargetActions", function(event) {
	if (window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68914_SCActionDragDrop68917_droppedOutsideTargetActions is still running");
	return;
}
var obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_loopCount = 0;
obj68914_SCActionDragDrop68917_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj68914: Event droppedInsideTargetActions_4
 *
 */
$("#obj68914").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj68914_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68914_droppedInsideTargetActions_4 is still running");
	return;
}
var obj68914_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj68914_droppedInsideTargetActions_4_loopCount = 0;
obj68914_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj68914: Event droppedInsideTargetActions_3
 *
 */
$("#obj68914").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj68914_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68914_droppedInsideTargetActions_3 is still running");
	return;
}
var obj68914_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68914_droppedInsideTargetActions_3_loopCount = 0;
obj68914_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj68914: Event droppedInsideTargetActions_2
 *
 */
$("#obj68914").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj68914_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68914_droppedInsideTargetActions_2 is still running");
	return;
}
var obj68914_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68914_droppedInsideTargetActions_2_loopCount = 0;
obj68914_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj68914: Event droppedInsideTargetActions
 *
 */
$("#obj68914").bind("droppedInsideTargetActions", function(event) {
	if (window.obj68914_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68914_droppedInsideTargetActions is still running");
	return;
}
var obj68914_droppedInsideTargetActions_runningActionsCount = 0;
var obj68914_droppedInsideTargetActions_loopCount = 0;
obj68914_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj68871: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj68871");
	var winTarget = document.getElementById("obj68871");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj68871").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj68871_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj68871_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj68871_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68871_onTouchDown is still running");
	return;
}
var obj68871_onTouchDown_runningActionsCount = 0;
var obj68871_onTouchDown_loopCount = 0;
obj68871_onTouchDown_actionGroup0();
});



/*
 *
 *   obj68871: Event SCActionDragDrop68874_droppedOutsideTargetActions
 *
 */
$("#obj68871").bind("SCActionDragDrop68874_droppedOutsideTargetActions", function(event) {
	if (window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68871_SCActionDragDrop68874_droppedOutsideTargetActions is still running");
	return;
}
var obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_loopCount = 0;
obj68871_SCActionDragDrop68874_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj68871: Event droppedInsideTargetActions_4
 *
 */
$("#obj68871").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj68871_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68871_droppedInsideTargetActions_4 is still running");
	return;
}
var obj68871_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj68871_droppedInsideTargetActions_4_loopCount = 0;
obj68871_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj68871: Event droppedInsideTargetActions_3
 *
 */
$("#obj68871").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj68871_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68871_droppedInsideTargetActions_3 is still running");
	return;
}
var obj68871_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68871_droppedInsideTargetActions_3_loopCount = 0;
obj68871_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj68871: Event droppedInsideTargetActions_2
 *
 */
$("#obj68871").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj68871_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68871_droppedInsideTargetActions_2 is still running");
	return;
}
var obj68871_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68871_droppedInsideTargetActions_2_loopCount = 0;
obj68871_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj68871: Event droppedInsideTargetActions
 *
 */
$("#obj68871").bind("droppedInsideTargetActions", function(event) {
	if (window.obj68871_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68871_droppedInsideTargetActions is still running");
	return;
}
var obj68871_droppedInsideTargetActions_runningActionsCount = 0;
var obj68871_droppedInsideTargetActions_loopCount = 0;
obj68871_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj68828: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj68828");
	var winTarget = document.getElementById("obj68828");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj68828").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj68828_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj68828_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj68828_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68828_onTouchDown is still running");
	return;
}
var obj68828_onTouchDown_runningActionsCount = 0;
var obj68828_onTouchDown_loopCount = 0;
obj68828_onTouchDown_actionGroup0();
});



/*
 *
 *   obj68828: Event SCActionDragDrop68831_droppedOutsideTargetActions
 *
 */
$("#obj68828").bind("SCActionDragDrop68831_droppedOutsideTargetActions", function(event) {
	if (window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68828_SCActionDragDrop68831_droppedOutsideTargetActions is still running");
	return;
}
var obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_runningActionsCount = 0;
var obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_loopCount = 0;
obj68828_SCActionDragDrop68831_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj68828: Event droppedInsideTargetActions_4
 *
 */
$("#obj68828").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj68828_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68828_droppedInsideTargetActions_4 is still running");
	return;
}
var obj68828_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj68828_droppedInsideTargetActions_4_loopCount = 0;
obj68828_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj68828: Event droppedInsideTargetActions_3
 *
 */
$("#obj68828").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj68828_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68828_droppedInsideTargetActions_3 is still running");
	return;
}
var obj68828_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj68828_droppedInsideTargetActions_3_loopCount = 0;
obj68828_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj68828: Event droppedInsideTargetActions_2
 *
 */
$("#obj68828").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj68828_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68828_droppedInsideTargetActions_2 is still running");
	return;
}
var obj68828_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj68828_droppedInsideTargetActions_2_loopCount = 0;
obj68828_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj68828: Event droppedInsideTargetActions
 *
 */
$("#obj68828").bind("droppedInsideTargetActions", function(event) {
	if (window.obj68828_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68828_droppedInsideTargetActions is still running");
	return;
}
var obj68828_droppedInsideTargetActions_runningActionsCount = 0;
var obj68828_droppedInsideTargetActions_loopCount = 0;
obj68828_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68810: Event Touch Down
 *
 */
$("#obj68810").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68810_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68810_onTap is still running");
	return;
}
var obj68810_onTap_runningActionsCount = 0;
var obj68810_onTap_loopCount = 0;
obj68810_onTap_actionGroup0();
});










/*
 *
 *   obj68802: Event Touch Down
 *
 */
$("#obj68802").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68802_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68802_onTap is still running");
	return;
}
var obj68802_onTap_runningActionsCount = 0;
var obj68802_onTap_loopCount = 0;
obj68802_onTap_actionGroup0();
});










/*
 *
 *   obj87162: Event Touch Down
 *
 */
$("#obj87162").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87162_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87162_onTap is still running");
	return;
}
var obj87162_onTap_runningActionsCount = 0;
var obj87162_onTap_loopCount = 0;
obj87162_onTap_actionGroup0();
});










/*
 *
 *   obj87157: Event Touch Down
 *
 */
$("#obj87157").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87157_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87157_onTap is still running");
	return;
}
var obj87157_onTap_runningActionsCount = 0;
var obj87157_onTap_loopCount = 0;
obj87157_onTap_actionGroup0();
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
	
$("#obj69055").trigger('SCEventShow');
$("#obj69052").trigger('SCEventShow');
$("#obj69049").trigger('SCEventShow');
$("#obj69045").trigger('SCEventShow');
$("#obj69043").trigger('SCEventShow');
$("#obj69041").trigger('SCEventShow');
$("#obj69039").trigger('SCEventShow');
$("#obj69037").trigger('SCEventShow');
$("#obj69035").trigger('SCEventShow');
$("#obj69033").trigger('SCEventShow');
$("#obj69031").trigger('SCEventShow');
$("#obj69029").trigger('SCEventShow');
$("#obj69027").trigger('SCEventShow');
$("#obj69025").trigger('SCEventShow');
$("#obj69023").trigger('SCEventShow');
$("#obj69021").trigger('SCEventShow');
$("#obj69020").trigger('SCEventShow');
$("#obj69018").trigger('SCEventShow');
$("#obj69016").trigger('SCEventShow');
$("#obj69014").trigger('SCEventShow');
$("#obj69012").trigger('SCEventShow');
$("#obj69010").trigger('SCEventShow');
$("#obj69008").trigger('SCEventShow');
$("#obj69006").trigger('SCEventShow');
$("#obj69004").trigger('SCEventShow');
$("#obj69002").trigger('SCEventShow');
$("#obj69000").trigger('SCEventShow');
$("#obj68957").trigger('SCEventShow');
$("#obj68914").trigger('SCEventShow');
$("#obj68871").trigger('SCEventShow');
$("#obj68828").trigger('SCEventShow');
$("#obj68810").trigger('SCEventShow');
$("#obj68802").trigger('SCEventShow');
$("#obj87162").trigger('SCEventShow');
$("#obj87157").trigger('SCEventShow');
$("#obj87167").trigger('SCEventShow');
$("#obj94701").trigger('SCEventShow');
$("#obj68800").trigger('SCEventShow');
	
});