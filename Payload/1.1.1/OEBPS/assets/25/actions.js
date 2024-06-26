pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 4158;
pubcoder.page.title = pubcoder.page.title || "25";
pubcoder.page.number = pubcoder.page.number || 25;
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
var obj4164_onTap_activeActionGroupIndex = -1;
var obj4164_onTap_runningActionsCount = 0;
var obj4164_onTap_loopCount = 0;
var obj4161_onTap_activeActionGroupIndex = -1;
var obj4161_onTap_runningActionsCount = 0;
var obj4161_onTap_loopCount = 0;
var obj4167_onTap_activeActionGroupIndex = -1;
var obj4167_onTap_runningActionsCount = 0;
var obj4167_onTap_loopCount = 0;
var obj4345_onDrag_activeActionGroupIndex = -1;
var obj4345_onDrag_runningActionsCount = 0;
var obj4345_onDrag_loopCount = 0;
var obj4345_onTouchDown_activeActionGroupIndex = -1;
var obj4345_onTouchDown_runningActionsCount = 0;
var obj4345_onTouchDown_loopCount = 0;
var obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_loopCount = 0;
var obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj4345_droppedInsideTargetActions_4_loopCount = 0;
var obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4345_droppedInsideTargetActions_3_loopCount = 0;
var obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4345_droppedInsideTargetActions_2_loopCount = 0;
var obj4345_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj4345_droppedInsideTargetActions_runningActionsCount = 0;
var obj4345_droppedInsideTargetActions_loopCount = 0;
var obj4292_onDrag_activeActionGroupIndex = -1;
var obj4292_onDrag_runningActionsCount = 0;
var obj4292_onDrag_loopCount = 0;
var obj4292_onTouchDown_activeActionGroupIndex = -1;
var obj4292_onTouchDown_runningActionsCount = 0;
var obj4292_onTouchDown_loopCount = 0;
var obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_loopCount = 0;
var obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj4292_droppedInsideTargetActions_4_loopCount = 0;
var obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4292_droppedInsideTargetActions_3_loopCount = 0;
var obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4292_droppedInsideTargetActions_2_loopCount = 0;
var obj4292_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj4292_droppedInsideTargetActions_runningActionsCount = 0;
var obj4292_droppedInsideTargetActions_loopCount = 0;
var obj4239_onDrag_activeActionGroupIndex = -1;
var obj4239_onDrag_runningActionsCount = 0;
var obj4239_onDrag_loopCount = 0;
var obj4239_onTouchDown_activeActionGroupIndex = -1;
var obj4239_onTouchDown_runningActionsCount = 0;
var obj4239_onTouchDown_loopCount = 0;
var obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_loopCount = 0;
var obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj4239_droppedInsideTargetActions_4_loopCount = 0;
var obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4239_droppedInsideTargetActions_3_loopCount = 0;
var obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4239_droppedInsideTargetActions_2_loopCount = 0;
var obj4239_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj4239_droppedInsideTargetActions_runningActionsCount = 0;
var obj4239_droppedInsideTargetActions_loopCount = 0;
var obj4186_onDrag_activeActionGroupIndex = -1;
var obj4186_onDrag_runningActionsCount = 0;
var obj4186_onDrag_loopCount = 0;
var obj4186_onTouchDown_activeActionGroupIndex = -1;
var obj4186_onTouchDown_runningActionsCount = 0;
var obj4186_onTouchDown_loopCount = 0;
var obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_loopCount = 0;
var obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj4186_droppedInsideTargetActions_4_loopCount = 0;
var obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4186_droppedInsideTargetActions_3_loopCount = 0;
var obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4186_droppedInsideTargetActions_2_loopCount = 0;
var obj4186_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj4186_droppedInsideTargetActions_runningActionsCount = 0;
var obj4186_droppedInsideTargetActions_loopCount = 0;
var obj65358_onTap_activeActionGroupIndex = -1;
var obj65358_onTap_runningActionsCount = 0;
var obj65358_onTap_loopCount = 0;
var obj65350_onTap_activeActionGroupIndex = -1;
var obj65350_onTap_runningActionsCount = 0;
var obj65350_onTap_loopCount = 0;
var obj89812_onTap_activeActionGroupIndex = -1;
var obj89812_onTap_runningActionsCount = 0;
var obj89812_onTap_loopCount = 0;
var obj89807_onTap_activeActionGroupIndex = -1;
var obj89807_onTap_runningActionsCount = 0;
var obj89807_onTap_loopCount = 0;
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
		
obj4164_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4164_onTap_activeActionGroupIndex = -1;
		$("#obj4164").trigger("obj4164_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4164) {
				console.warn("de-queueing event obj4164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4164_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4166();
function goToPage_4166() {
	window.obj4164_onTap_runningActionsCount = obj4164_onTap_runningActionsCount + 1;
	$("#anchor150")[0].click();
	window.obj4164_onTap_runningActionsCount = window.obj4164_onTap_runningActionsCount - 1;
if (window.obj4164_onTap_runningActionsCount < 0) {
	window.obj4164_onTap_runningActionsCount = 0;
} else if (window.obj4164_onTap_runningActionsCount == 0) {
	obj4164_onTap_actionGroup1();
}
}





















};
obj4164_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4164_onTap_activeActionGroupIndex = -1;
		$("#obj4164").trigger("obj4164_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4164) {
				console.warn("de-queueing event obj4164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4164_onTap_activeActionGroupIndex = 1;
	





















};
obj4161_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4161_onTap_activeActionGroupIndex = -1;
		$("#obj4161").trigger("obj4161_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4161) {
				console.warn("de-queueing event obj4161." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4161").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4161_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4163();
function goToPage_4163() {
	window.obj4161_onTap_runningActionsCount = obj4161_onTap_runningActionsCount + 1;
	$("#anchor151")[0].click();
	window.obj4161_onTap_runningActionsCount = window.obj4161_onTap_runningActionsCount - 1;
if (window.obj4161_onTap_runningActionsCount < 0) {
	window.obj4161_onTap_runningActionsCount = 0;
} else if (window.obj4161_onTap_runningActionsCount == 0) {
	obj4161_onTap_actionGroup1();
}
}





















};
obj4161_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4161_onTap_activeActionGroupIndex = -1;
		$("#obj4161").trigger("obj4161_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4161) {
				console.warn("de-queueing event obj4161." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4161").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4161_onTap_activeActionGroupIndex = 1;
	





















};
obj4167_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4167_onTap_activeActionGroupIndex = -1;
		$("#obj4167").trigger("obj4167_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4167) {
				console.warn("de-queueing event obj4167." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4167").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4167_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_4169();
function goToPage_4169() {
	window.obj4167_onTap_runningActionsCount = obj4167_onTap_runningActionsCount + 1;
	$("#anchor152")[0].click();
	window.obj4167_onTap_runningActionsCount = window.obj4167_onTap_runningActionsCount - 1;
if (window.obj4167_onTap_runningActionsCount < 0) {
	window.obj4167_onTap_runningActionsCount = 0;
} else if (window.obj4167_onTap_runningActionsCount == 0) {
	obj4167_onTap_actionGroup1();
}
}





















};
obj4167_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4167_onTap_activeActionGroupIndex = -1;
		$("#obj4167").trigger("obj4167_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4167) {
				console.warn("de-queueing event obj4167." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4167").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4167_onTap_activeActionGroupIndex = 1;
	





















};
obj4345_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj4345");
//	action: dragDrop
//	target: obj4345 
dragDrop_4348();
function dragDrop_4348() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj4345_onTouchDown_runningActionsCount = obj4345_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj4345');
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
	  	containerNode = $('#obj4184');
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
    	window.obj4345_onTouchDown_runningActionsCount = window.obj4345_onTouchDown_runningActionsCount - 1;
if (window.obj4345_onTouchDown_runningActionsCount < 0) {
	window.obj4345_onTouchDown_runningActionsCount = 0;
} else if (window.obj4345_onTouchDown_runningActionsCount == 0) {
	obj4345_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj4404","#obj4406","#obj4402","#obj4400");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4348 = false;
    	var dropped_id_4348;
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
					dropped_4348 = true;
					dropped_id_4348 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4348) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj4345").trigger('SCActionDragDrop4348_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj4345_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4345_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj4345 
move_92156();
function move_92156() {
	window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_runningActionsCount = obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj4345");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 82;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_runningActionsCount = window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj4345_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4494();
function runjs_4494() {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4495();
function runjs_4495() {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("border-color", "#C00000"); $("#obj4400").css("border-width", "2px"); $("#obj4400").css("border-style", "solid"); $("#obj4400").css("border-radius", "10px"); $("#obj4400").css("-webkit-border-radius", "10px"); $("#obj4400").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4416 
hide_4496();
function hide_4496() {
	var selector = "#obj4416";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4496(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4345_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4497();
function runjs_4497() {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4345").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4498();
function switchText_4498() {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj4345_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4345 
move_4499();
function move_4499() {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj4345");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 82;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj4345_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4500();
function runjs_4500() {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4501();
function runjs_4501() {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("border-color", "#000000"); $("#obj4400").css("border-width", "1px"); $("#obj4400").css("border-style", "solid"); $("#obj4400").css("border-radius", "10px"); $("#obj4400").css("-webkit-border-radius", "10px"); $("#obj4400").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4416
(function(){
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj4416";
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
					window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4345_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4503();
function runjs_4503() {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4345").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4504();
function runjs_4504() {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4345").css("border-color", "rgba(0,0,0,0)"); $("#obj4345").css("border-width", "0px"); $("#obj4345").css("border-style", "solid"); $("#obj4345").css("border-radius", "10px"); $("#obj4345").css("-webkit-border-radius", "10px"); $("#obj4345").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4505();
function playAudio_4505() {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj4345_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4506();
function switchText_4506() {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = obj4345_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4345_droppedInsideTargetActions_4_runningActionsCount = window.obj4345_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj4345_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj4345_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4480();
function runjs_4480() {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4402").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4481();
function runjs_4481() {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4402").css("border-color", "#C00000"); $("#obj4402").css("border-width", "2px"); $("#obj4402").css("border-style", "solid"); $("#obj4402").css("border-radius", "10px"); $("#obj4402").css("-webkit-border-radius", "10px"); $("#obj4402").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4418 
hide_4482();
function hide_4482() {
	var selector = "#obj4418";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4482(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4345_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4483();
function runjs_4483() {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4345").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4484();
function switchText_4484() {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj4345_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4345 
move_4485();
function move_4485() {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj4345");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 82;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj4345_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4486();
function runjs_4486() {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4402").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4487();
function runjs_4487() {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4402").css("border-color", "#000000"); $("#obj4402").css("border-width", "1px"); $("#obj4402").css("border-style", "solid"); $("#obj4402").css("border-radius", "10px"); $("#obj4402").css("-webkit-border-radius", "10px"); $("#obj4402").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4418
(function(){
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj4418";
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
					window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4345_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4489();
function runjs_4489() {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4345").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4490();
function runjs_4490() {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4345").css("border-color", "rgba(0,0,0,0)"); $("#obj4345").css("border-width", "0px"); $("#obj4345").css("border-style", "solid"); $("#obj4345").css("border-radius", "10px"); $("#obj4345").css("-webkit-border-radius", "10px"); $("#obj4345").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4491();
function playAudio_4491() {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj4345_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4492();
function switchText_4492() {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = obj4345_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4345_droppedInsideTargetActions_3_runningActionsCount = window.obj4345_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj4345_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj4345_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4466();
function runjs_4466() {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4467();
function runjs_4467() {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("border-color", "#C00000"); $("#obj4406").css("border-width", "2px"); $("#obj4406").css("border-style", "solid"); $("#obj4406").css("border-radius", "10px"); $("#obj4406").css("-webkit-border-radius", "10px"); $("#obj4406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4422 
hide_4468();
function hide_4468() {
	var selector = "#obj4422";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4468(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4345_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4469();
function runjs_4469() {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4345").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4470();
function switchText_4470() {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj4345_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4345 
move_4471();
function move_4471() {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj4345");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 82;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj4345_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4472();
function runjs_4472() {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4473();
function runjs_4473() {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("border-color", "#000000"); $("#obj4406").css("border-width", "1px"); $("#obj4406").css("border-style", "solid"); $("#obj4406").css("border-radius", "10px"); $("#obj4406").css("-webkit-border-radius", "10px"); $("#obj4406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4422
(function(){
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj4422";
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
					window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4345_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4475();
function runjs_4475() {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4345").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4476();
function runjs_4476() {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4345").css("border-color", "rgba(0,0,0,0)"); $("#obj4345").css("border-width", "0px"); $("#obj4345").css("border-style", "solid"); $("#obj4345").css("border-radius", "10px"); $("#obj4345").css("-webkit-border-radius", "10px"); $("#obj4345").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4477();
function playAudio_4477() {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj4345_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4478();
function switchText_4478() {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = obj4345_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4345_droppedInsideTargetActions_2_runningActionsCount = window.obj4345_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj4345_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj4345_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4445();
function runjs_4445() {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = obj4345_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4404").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_runningActionsCount = window.obj4345_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_4449();
function switchText_4449() {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = obj4345_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4345_droppedInsideTargetActions_runningActionsCount = window.obj4345_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4345_droppedInsideTargetActions_runningActionsCount = window.obj4345_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj4345_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_4446();
function runjs_4446() {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = obj4345_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4404").css("border-color", "#058E3F"); $("#obj4404").css("border-width", "2px"); $("#obj4404").css("border-style", "solid"); $("#obj4404").css("border-radius", "10px"); $("#obj4404").css("-webkit-border-radius", "10px"); $("#obj4404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_runningActionsCount = window.obj4345_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj4420 
hide_4447();
function hide_4447() {
	var selector = "#obj4420";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4345_droppedInsideTargetActions_runningActionsCount = obj4345_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4345_droppedInsideTargetActions_runningActionsCount = window.obj4345_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4447(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4345_droppedInsideTargetActions_runningActionsCount = window.obj4345_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4345_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_4448();
function runjs_4448() {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = obj4345_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4345").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4345_droppedInsideTargetActions_runningActionsCount = window.obj4345_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj4345_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj4432 
playAudio_4450();
function playAudio_4450() {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = obj4345_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj4432")[0];
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
		    window.obj4345_droppedInsideTargetActions_runningActionsCount = window.obj4345_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4345_droppedInsideTargetActions_runningActionsCount = window.obj4345_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj4345_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90107();
function switchText_90107() {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = obj4345_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4345_droppedInsideTargetActions_runningActionsCount = window.obj4345_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4345_droppedInsideTargetActions_runningActionsCount = window.obj4345_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4345_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4345_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4345_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4345_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj4345_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4345").trigger("obj4345_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4345) {
				console.warn("de-queueing event obj4345." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4345").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4345_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj4292_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj4292");
//	action: dragDrop
//	target: obj4292 
dragDrop_4295();
function dragDrop_4295() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj4292_onTouchDown_runningActionsCount = obj4292_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj4292');
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
	  	containerNode = $('#obj4184');
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
    	window.obj4292_onTouchDown_runningActionsCount = window.obj4292_onTouchDown_runningActionsCount - 1;
if (window.obj4292_onTouchDown_runningActionsCount < 0) {
	window.obj4292_onTouchDown_runningActionsCount = 0;
} else if (window.obj4292_onTouchDown_runningActionsCount == 0) {
	obj4292_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj4406","#obj4404","#obj4402","#obj4400");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4295 = false;
    	var dropped_id_4295;
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
					dropped_4295 = true;
					dropped_id_4295 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4295) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj4292").trigger('SCActionDragDrop4295_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj4292_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4292_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj4292 
move_92158();
function move_92158() {
	window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_runningActionsCount = obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj4292");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_runningActionsCount = window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj4292_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4536();
function runjs_4536() {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4537();
function runjs_4537() {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("border-color", "#C00000"); $("#obj4400").css("border-width", "2px"); $("#obj4400").css("border-style", "solid"); $("#obj4400").css("border-radius", "10px"); $("#obj4400").css("-webkit-border-radius", "10px"); $("#obj4400").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4416 
hide_4538();
function hide_4538() {
	var selector = "#obj4416";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4538(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4292_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4539();
function runjs_4539() {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4292").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4540();
function switchText_4540() {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj4292_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4292 
move_4541();
function move_4541() {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj4292");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj4292_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4542();
function runjs_4542() {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4543();
function runjs_4543() {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("border-color", "#000000"); $("#obj4400").css("border-width", "1px"); $("#obj4400").css("border-style", "solid"); $("#obj4400").css("border-radius", "10px"); $("#obj4400").css("-webkit-border-radius", "10px"); $("#obj4400").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4416
(function(){
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj4416";
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
					window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4292_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4545();
function runjs_4545() {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4292").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4546();
function runjs_4546() {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4292").css("border-color", "rgba(0,0,0,0)"); $("#obj4292").css("border-width", "0px"); $("#obj4292").css("border-style", "solid"); $("#obj4292").css("border-radius", "10px"); $("#obj4292").css("-webkit-border-radius", "10px"); $("#obj4292").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4547();
function playAudio_4547() {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj4292_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4548();
function switchText_4548() {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = obj4292_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4292_droppedInsideTargetActions_4_runningActionsCount = window.obj4292_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj4292_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj4292_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4522();
function runjs_4522() {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4402").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4523();
function runjs_4523() {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4402").css("border-color", "#C00000"); $("#obj4402").css("border-width", "2px"); $("#obj4402").css("border-style", "solid"); $("#obj4402").css("border-radius", "10px"); $("#obj4402").css("-webkit-border-radius", "10px"); $("#obj4402").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4418 
hide_4524();
function hide_4524() {
	var selector = "#obj4418";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4524(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4292_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4525();
function runjs_4525() {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4292").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4526();
function switchText_4526() {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj4292_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4292 
move_4527();
function move_4527() {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj4292");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj4292_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4528();
function runjs_4528() {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4402").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4529();
function runjs_4529() {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4402").css("border-color", "#000000"); $("#obj4402").css("border-width", "1px"); $("#obj4402").css("border-style", "solid"); $("#obj4402").css("border-radius", "10px"); $("#obj4402").css("-webkit-border-radius", "10px"); $("#obj4402").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4418
(function(){
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj4418";
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
					window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4292_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4531();
function runjs_4531() {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4292").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4532();
function runjs_4532() {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4292").css("border-color", "rgba(0,0,0,0)"); $("#obj4292").css("border-width", "0px"); $("#obj4292").css("border-style", "solid"); $("#obj4292").css("border-radius", "10px"); $("#obj4292").css("-webkit-border-radius", "10px"); $("#obj4292").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4533();
function playAudio_4533() {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj4292_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4534();
function switchText_4534() {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = obj4292_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4292_droppedInsideTargetActions_3_runningActionsCount = window.obj4292_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj4292_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj4292_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4508();
function runjs_4508() {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4404").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4509();
function runjs_4509() {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4404").css("border-color", "#C00000"); $("#obj4404").css("border-width", "2px"); $("#obj4404").css("border-style", "solid"); $("#obj4404").css("border-radius", "10px"); $("#obj4404").css("-webkit-border-radius", "10px"); $("#obj4404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4420 
hide_4510();
function hide_4510() {
	var selector = "#obj4420";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4510(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4292_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4511();
function runjs_4511() {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4292").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4512();
function switchText_4512() {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj4292_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4292 
move_4513();
function move_4513() {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj4292");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 197;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj4292_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4514();
function runjs_4514() {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4404").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4515();
function runjs_4515() {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4404").css("border-color", "#000000"); $("#obj4404").css("border-width", "1px"); $("#obj4404").css("border-style", "solid"); $("#obj4404").css("border-radius", "10px"); $("#obj4404").css("-webkit-border-radius", "10px"); $("#obj4404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4420
(function(){
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj4420";
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
					window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4292_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4517();
function runjs_4517() {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4292").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4518();
function runjs_4518() {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4292").css("border-color", "rgba(0,0,0,0)"); $("#obj4292").css("border-width", "0px"); $("#obj4292").css("border-style", "solid"); $("#obj4292").css("border-radius", "10px"); $("#obj4292").css("-webkit-border-radius", "10px"); $("#obj4292").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4519();
function playAudio_4519() {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj4292_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4520();
function switchText_4520() {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = obj4292_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4292_droppedInsideTargetActions_2_runningActionsCount = window.obj4292_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj4292_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj4292_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4436();
function runjs_4436() {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = obj4292_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4406").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_runningActionsCount = window.obj4292_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_4440();
function switchText_4440() {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = obj4292_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4292_droppedInsideTargetActions_runningActionsCount = window.obj4292_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4292_droppedInsideTargetActions_runningActionsCount = window.obj4292_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj4292_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_4437();
function runjs_4437() {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = obj4292_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4406").css("border-color", "#058E3F"); $("#obj4406").css("border-width", "2px"); $("#obj4406").css("border-style", "solid"); $("#obj4406").css("border-radius", "10px"); $("#obj4406").css("-webkit-border-radius", "10px"); $("#obj4406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_runningActionsCount = window.obj4292_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj4422 
hide_4438();
function hide_4438() {
	var selector = "#obj4422";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4292_droppedInsideTargetActions_runningActionsCount = obj4292_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4292_droppedInsideTargetActions_runningActionsCount = window.obj4292_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4438(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4292_droppedInsideTargetActions_runningActionsCount = window.obj4292_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4292_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_4439();
function runjs_4439() {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = obj4292_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4292").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4292_droppedInsideTargetActions_runningActionsCount = window.obj4292_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj4292_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj4432 
playAudio_4441();
function playAudio_4441() {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = obj4292_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj4432")[0];
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
		    window.obj4292_droppedInsideTargetActions_runningActionsCount = window.obj4292_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4292_droppedInsideTargetActions_runningActionsCount = window.obj4292_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj4292_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90108();
function switchText_90108() {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = obj4292_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4292_droppedInsideTargetActions_runningActionsCount = window.obj4292_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4292_droppedInsideTargetActions_runningActionsCount = window.obj4292_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4292_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4292_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4292_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4292_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj4292_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4292").trigger("obj4292_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4292) {
				console.warn("de-queueing event obj4292." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4292").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4292_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj4239_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj4239");
//	action: dragDrop
//	target: obj4239 
dragDrop_4242();
function dragDrop_4242() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj4239_onTouchDown_runningActionsCount = obj4239_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj4239');
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
	  	containerNode = $('#obj4184');
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
    	window.obj4239_onTouchDown_runningActionsCount = window.obj4239_onTouchDown_runningActionsCount - 1;
if (window.obj4239_onTouchDown_runningActionsCount < 0) {
	window.obj4239_onTouchDown_runningActionsCount = 0;
} else if (window.obj4239_onTouchDown_runningActionsCount == 0) {
	obj4239_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj4402","#obj4406","#obj4404","#obj4400");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4242 = false;
    	var dropped_id_4242;
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
					dropped_4242 = true;
					dropped_id_4242 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4242) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj4239").trigger('SCActionDragDrop4242_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj4239_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4239_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj4239 
move_92160();
function move_92160() {
	window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_runningActionsCount = obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj4239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 311;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_runningActionsCount = window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj4239_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4578();
function runjs_4578() {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4579();
function runjs_4579() {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("border-color", "#C00000"); $("#obj4400").css("border-width", "2px"); $("#obj4400").css("border-style", "solid"); $("#obj4400").css("border-radius", "10px"); $("#obj4400").css("-webkit-border-radius", "10px"); $("#obj4400").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4416 
hide_4580();
function hide_4580() {
	var selector = "#obj4416";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4580(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4239_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4581();
function runjs_4581() {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4239").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4582();
function switchText_4582() {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj4239_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4239 
move_4583();
function move_4583() {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj4239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 311;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj4239_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4584();
function runjs_4584() {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4585();
function runjs_4585() {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4400").css("border-color", "#000000"); $("#obj4400").css("border-width", "1px"); $("#obj4400").css("border-style", "solid"); $("#obj4400").css("border-radius", "10px"); $("#obj4400").css("-webkit-border-radius", "10px"); $("#obj4400").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4416
(function(){
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj4416";
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
					window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4239_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4587();
function runjs_4587() {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4239").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4588();
function runjs_4588() {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4239").css("border-color", "rgba(0,0,0,0)"); $("#obj4239").css("border-width", "0px"); $("#obj4239").css("border-style", "solid"); $("#obj4239").css("border-radius", "10px"); $("#obj4239").css("-webkit-border-radius", "10px"); $("#obj4239").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4589();
function playAudio_4589() {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj4239_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4590();
function switchText_4590() {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = obj4239_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4239_droppedInsideTargetActions_4_runningActionsCount = window.obj4239_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj4239_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj4239_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4564();
function runjs_4564() {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4404").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4565();
function runjs_4565() {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4404").css("border-color", "#C00000"); $("#obj4404").css("border-width", "2px"); $("#obj4404").css("border-style", "solid"); $("#obj4404").css("border-radius", "10px"); $("#obj4404").css("-webkit-border-radius", "10px"); $("#obj4404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4420 
hide_4566();
function hide_4566() {
	var selector = "#obj4420";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4566(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4239_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4567();
function runjs_4567() {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4239").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4568();
function switchText_4568() {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj4239_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4239 
move_4569();
function move_4569() {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj4239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 311;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj4239_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4570();
function runjs_4570() {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4404").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4571();
function runjs_4571() {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4404").css("border-color", "#000000"); $("#obj4404").css("border-width", "1px"); $("#obj4404").css("border-style", "solid"); $("#obj4404").css("border-radius", "10px"); $("#obj4404").css("-webkit-border-radius", "10px"); $("#obj4404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4420
(function(){
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj4420";
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
					window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4239_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4573();
function runjs_4573() {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4239").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4574();
function runjs_4574() {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4239").css("border-color", "rgba(0,0,0,0)"); $("#obj4239").css("border-width", "0px"); $("#obj4239").css("border-style", "solid"); $("#obj4239").css("border-radius", "10px"); $("#obj4239").css("-webkit-border-radius", "10px"); $("#obj4239").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4575();
function playAudio_4575() {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj4239_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4576();
function switchText_4576() {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = obj4239_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4239_droppedInsideTargetActions_3_runningActionsCount = window.obj4239_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj4239_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj4239_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4550();
function runjs_4550() {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4551();
function runjs_4551() {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("border-color", "#C00000"); $("#obj4406").css("border-width", "2px"); $("#obj4406").css("border-style", "solid"); $("#obj4406").css("border-radius", "10px"); $("#obj4406").css("-webkit-border-radius", "10px"); $("#obj4406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4422 
hide_4552();
function hide_4552() {
	var selector = "#obj4422";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4552(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4239_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4553();
function runjs_4553() {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4239").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4554();
function switchText_4554() {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj4239_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4239 
move_4555();
function move_4555() {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj4239");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 311;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj4239_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4556();
function runjs_4556() {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4557();
function runjs_4557() {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("border-color", "#000000"); $("#obj4406").css("border-width", "1px"); $("#obj4406").css("border-style", "solid"); $("#obj4406").css("border-radius", "10px"); $("#obj4406").css("-webkit-border-radius", "10px"); $("#obj4406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4422
(function(){
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj4422";
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
					window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4239_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4559();
function runjs_4559() {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4239").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4560();
function runjs_4560() {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4239").css("border-color", "rgba(0,0,0,0)"); $("#obj4239").css("border-width", "0px"); $("#obj4239").css("border-style", "solid"); $("#obj4239").css("border-radius", "10px"); $("#obj4239").css("-webkit-border-radius", "10px"); $("#obj4239").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4561();
function playAudio_4561() {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj4239_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4562();
function switchText_4562() {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = obj4239_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4239_droppedInsideTargetActions_2_runningActionsCount = window.obj4239_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj4239_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj4239_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4452();
function runjs_4452() {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = obj4239_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4402").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_runningActionsCount = window.obj4239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_4456();
function switchText_4456() {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = obj4239_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4239_droppedInsideTargetActions_runningActionsCount = window.obj4239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4239_droppedInsideTargetActions_runningActionsCount = window.obj4239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj4239_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_4453();
function runjs_4453() {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = obj4239_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4402").css("border-color", "#058E3F"); $("#obj4402").css("border-width", "2px"); $("#obj4402").css("border-style", "solid"); $("#obj4402").css("border-radius", "10px"); $("#obj4402").css("-webkit-border-radius", "10px"); $("#obj4402").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_runningActionsCount = window.obj4239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj4418 
hide_4454();
function hide_4454() {
	var selector = "#obj4418";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4239_droppedInsideTargetActions_runningActionsCount = obj4239_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4239_droppedInsideTargetActions_runningActionsCount = window.obj4239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4454(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4239_droppedInsideTargetActions_runningActionsCount = window.obj4239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4239_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_4455();
function runjs_4455() {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = obj4239_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4239").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4239_droppedInsideTargetActions_runningActionsCount = window.obj4239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj4239_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj4432 
playAudio_4457();
function playAudio_4457() {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = obj4239_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj4432")[0];
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
		    window.obj4239_droppedInsideTargetActions_runningActionsCount = window.obj4239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4239_droppedInsideTargetActions_runningActionsCount = window.obj4239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj4239_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90109();
function switchText_90109() {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = obj4239_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4239_droppedInsideTargetActions_runningActionsCount = window.obj4239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4239_droppedInsideTargetActions_runningActionsCount = window.obj4239_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4239_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4239_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4239_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4239_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj4239_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4239").trigger("obj4239_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4239) {
				console.warn("de-queueing event obj4239." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4239").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4239_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj4186_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj4186");
//	action: dragDrop
//	target: obj4186 
dragDrop_4189();
function dragDrop_4189() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj4186_onTouchDown_runningActionsCount = obj4186_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj4186');
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
	  	containerNode = $('#obj4184');
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
    	window.obj4186_onTouchDown_runningActionsCount = window.obj4186_onTouchDown_runningActionsCount - 1;
if (window.obj4186_onTouchDown_runningActionsCount < 0) {
	window.obj4186_onTouchDown_runningActionsCount = 0;
} else if (window.obj4186_onTouchDown_runningActionsCount == 0) {
	obj4186_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj4400","#obj4406","#obj4404","#obj4402");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_4189 = false;
    	var dropped_id_4189;
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
					dropped_4189 = true;
					dropped_id_4189 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_4189) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj4186").trigger('SCActionDragDrop4189_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj4186_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4186_onTouchDown_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj4186 
move_92162();
function move_92162() {
	window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_runningActionsCount = obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj4186");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 425;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_runningActionsCount = window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj4186_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4620();
function runjs_4620() {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4402").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4621();
function runjs_4621() {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4402").css("border-color", "#C00000"); $("#obj4402").css("border-width", "2px"); $("#obj4402").css("border-style", "solid"); $("#obj4402").css("border-radius", "10px"); $("#obj4402").css("-webkit-border-radius", "10px"); $("#obj4402").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4418 
hide_4622();
function hide_4622() {
	var selector = "#obj4418";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4622(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4186_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4623();
function runjs_4623() {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4186").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4624();
function switchText_4624() {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj4186_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4186 
move_4625();
function move_4625() {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj4186");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 425;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj4186_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4626();
function runjs_4626() {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4402").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4627();
function runjs_4627() {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4402").css("border-color", "#000000"); $("#obj4402").css("border-width", "1px"); $("#obj4402").css("border-style", "solid"); $("#obj4402").css("border-radius", "10px"); $("#obj4402").css("-webkit-border-radius", "10px"); $("#obj4402").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4418
(function(){
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj4418";
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
					window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4186_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4629();
function runjs_4629() {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4186").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4630();
function runjs_4630() {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj4186").css("border-color", "rgba(0,0,0,0)"); $("#obj4186").css("border-width", "0px"); $("#obj4186").css("border-style", "solid"); $("#obj4186").css("border-radius", "10px"); $("#obj4186").css("-webkit-border-radius", "10px"); $("#obj4186").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4631();
function playAudio_4631() {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj4186_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4632();
function switchText_4632() {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = obj4186_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4186_droppedInsideTargetActions_4_runningActionsCount = window.obj4186_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj4186_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj4186_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4606();
function runjs_4606() {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4404").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4607();
function runjs_4607() {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4404").css("border-color", "#C00000"); $("#obj4404").css("border-width", "2px"); $("#obj4404").css("border-style", "solid"); $("#obj4404").css("border-radius", "10px"); $("#obj4404").css("-webkit-border-radius", "10px"); $("#obj4404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4420 
hide_4608();
function hide_4608() {
	var selector = "#obj4420";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4608(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4186_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4609();
function runjs_4609() {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4186").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4610();
function switchText_4610() {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj4186_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4186 
move_4611();
function move_4611() {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj4186");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 425;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj4186_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4612();
function runjs_4612() {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4404").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4613();
function runjs_4613() {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4404").css("border-color", "#000000"); $("#obj4404").css("border-width", "1px"); $("#obj4404").css("border-style", "solid"); $("#obj4404").css("border-radius", "10px"); $("#obj4404").css("-webkit-border-radius", "10px"); $("#obj4404").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4420
(function(){
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj4420";
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
					window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4186_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4615();
function runjs_4615() {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4186").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4616();
function runjs_4616() {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj4186").css("border-color", "rgba(0,0,0,0)"); $("#obj4186").css("border-width", "0px"); $("#obj4186").css("border-style", "solid"); $("#obj4186").css("border-radius", "10px"); $("#obj4186").css("-webkit-border-radius", "10px"); $("#obj4186").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4617();
function playAudio_4617() {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj4186_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4618();
function switchText_4618() {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = obj4186_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4186_droppedInsideTargetActions_3_runningActionsCount = window.obj4186_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj4186_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj4186_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4592();
function runjs_4592() {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_4593();
function runjs_4593() {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("border-color", "#C00000"); $("#obj4406").css("border-width", "2px"); $("#obj4406").css("border-style", "solid"); $("#obj4406").css("border-radius", "10px"); $("#obj4406").css("-webkit-border-radius", "10px"); $("#obj4406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj4422 
hide_4594();
function hide_4594() {
	var selector = "#obj4422";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4594(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4186_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_4595();
function runjs_4595() {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4186").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_4596();
function switchText_4596() {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj4186_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj4186 
move_4597();
function move_4597() {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj4186");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 425;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj4186_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_4598();
function runjs_4598() {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_4599();
function runjs_4599() {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4406").css("border-color", "#000000"); $("#obj4406").css("border-width", "1px"); $("#obj4406").css("border-style", "solid"); $("#obj4406").css("border-radius", "10px"); $("#obj4406").css("-webkit-border-radius", "10px"); $("#obj4406").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj4422
(function(){
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj4422";
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
					window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj4186_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_4601();
function runjs_4601() {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4186").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_4602();
function runjs_4602() {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj4186").css("border-color", "rgba(0,0,0,0)"); $("#obj4186").css("border-width", "0px"); $("#obj4186").css("border-style", "solid"); $("#obj4186").css("border-radius", "10px"); $("#obj4186").css("-webkit-border-radius", "10px"); $("#obj4186").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj4442 
playAudio_4603();
function playAudio_4603() {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj4442")[0];
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
		    window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj4186_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_4604();
function switchText_4604() {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = obj4186_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4186_droppedInsideTargetActions_2_runningActionsCount = window.obj4186_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj4186_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj4186_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_4459();
function runjs_4459() {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = obj4186_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4400").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_runningActionsCount = window.obj4186_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_4463();
function switchText_4463() {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = obj4186_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4186_droppedInsideTargetActions_runningActionsCount = window.obj4186_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4186_droppedInsideTargetActions_runningActionsCount = window.obj4186_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj4186_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_4460();
function runjs_4460() {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = obj4186_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4400").css("border-color", "#058E3F"); $("#obj4400").css("border-width", "2px"); $("#obj4400").css("border-style", "solid"); $("#obj4400").css("border-radius", "10px"); $("#obj4400").css("-webkit-border-radius", "10px"); $("#obj4400").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_runningActionsCount = window.obj4186_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj4416 
hide_4461();
function hide_4461() {
	var selector = "#obj4416";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj4186_droppedInsideTargetActions_runningActionsCount = obj4186_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj4186_droppedInsideTargetActions_runningActionsCount = window.obj4186_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_4461(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj4186_droppedInsideTargetActions_runningActionsCount = window.obj4186_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj4186_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_4462();
function runjs_4462() {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = obj4186_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj4186").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj4186_droppedInsideTargetActions_runningActionsCount = window.obj4186_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj4186_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj4432 
playAudio_4464();
function playAudio_4464() {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = obj4186_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj4432")[0];
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
		    window.obj4186_droppedInsideTargetActions_runningActionsCount = window.obj4186_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj4186_droppedInsideTargetActions_runningActionsCount = window.obj4186_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj4186_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90110();
function switchText_90110() {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = obj4186_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj4433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj4433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj4433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj4433_content");
			setTimeout(function () {
				window.obj4186_droppedInsideTargetActions_runningActionsCount = window.obj4186_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj4433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj4186_droppedInsideTargetActions_runningActionsCount = window.obj4186_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj4186_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj4186_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj4186_droppedInsideTargetActions_runningActionsCount == 0) {
	obj4186_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj4186_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj4186").trigger("obj4186_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 4186) {
				console.warn("de-queueing event obj4186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj4186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj4186_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj65358_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65358_onTap_activeActionGroupIndex = -1;
		$("#obj65358").trigger("obj65358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65358) {
				console.warn("de-queueing event obj65358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65358_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65358 
hide_65361();
function hide_65361() {
	var selector = "#obj65358";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65358_onTap_runningActionsCount = obj65358_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65358_onTap_runningActionsCount = window.obj65358_onTap_runningActionsCount - 1;
if (window.obj65358_onTap_runningActionsCount < 0) {
	window.obj65358_onTap_runningActionsCount = 0;
} else if (window.obj65358_onTap_runningActionsCount == 0) {
	obj65358_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65361(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65358_onTap_runningActionsCount = window.obj65358_onTap_runningActionsCount - 1;
if (window.obj65358_onTap_runningActionsCount < 0) {
	window.obj65358_onTap_runningActionsCount = 0;
} else if (window.obj65358_onTap_runningActionsCount == 0) {
	obj65358_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65364 
stopMovie_65360();
function stopMovie_65360() {
	window.obj65358_onTap_runningActionsCount = obj65358_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65364")[0];
	myVideo.pause();
	window.obj65358_onTap_runningActionsCount = window.obj65358_onTap_runningActionsCount - 1;
if (window.obj65358_onTap_runningActionsCount < 0) {
	window.obj65358_onTap_runningActionsCount = 0;
} else if (window.obj65358_onTap_runningActionsCount == 0) {
	obj65358_onTap_actionGroup1();
}
}
















};
obj65358_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65358_onTap_activeActionGroupIndex = -1;
		$("#obj65358").trigger("obj65358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65358) {
				console.warn("de-queueing event obj65358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65358_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65350
(function(){
	window.obj65358_onTap_runningActionsCount = obj65358_onTap_runningActionsCount + 1;

	var selector = "#obj65350";
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
					window.obj65358_onTap_runningActionsCount = window.obj65358_onTap_runningActionsCount - 1;
if (window.obj65358_onTap_runningActionsCount < 0) {
	window.obj65358_onTap_runningActionsCount = 0;
} else if (window.obj65358_onTap_runningActionsCount == 0) {
	obj65358_onTap_actionGroup2();
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
				window.obj65358_onTap_runningActionsCount = window.obj65358_onTap_runningActionsCount - 1;
if (window.obj65358_onTap_runningActionsCount < 0) {
	window.obj65358_onTap_runningActionsCount = 0;
} else if (window.obj65358_onTap_runningActionsCount == 0) {
	obj65358_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65358_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65358_onTap_activeActionGroupIndex = -1;
		$("#obj65358").trigger("obj65358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65358) {
				console.warn("de-queueing event obj65358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65358_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65364 
move_65363();
function move_65363() {
	window.obj65358_onTap_runningActionsCount = obj65358_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65364");
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
			window.obj65358_onTap_runningActionsCount = window.obj65358_onTap_runningActionsCount - 1;
if (window.obj65358_onTap_runningActionsCount < 0) {
	window.obj65358_onTap_runningActionsCount = 0;
} else if (window.obj65358_onTap_runningActionsCount == 0) {
	obj65358_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65358_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65358_onTap_activeActionGroupIndex = -1;
		$("#obj65358").trigger("obj65358_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65358) {
				console.warn("de-queueing event obj65358." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65358").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65358_onTap_activeActionGroupIndex = 3;
	





















};
obj65350_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65350_onTap_activeActionGroupIndex = -1;
		$("#obj65350").trigger("obj65350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65350) {
				console.warn("de-queueing event obj65350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65350_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65350 
hide_65353();
function hide_65353() {
	var selector = "#obj65350";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65350_onTap_runningActionsCount = obj65350_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65350_onTap_runningActionsCount = window.obj65350_onTap_runningActionsCount - 1;
if (window.obj65350_onTap_runningActionsCount < 0) {
	window.obj65350_onTap_runningActionsCount = 0;
} else if (window.obj65350_onTap_runningActionsCount == 0) {
	obj65350_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65353(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65350_onTap_runningActionsCount = window.obj65350_onTap_runningActionsCount - 1;
if (window.obj65350_onTap_runningActionsCount < 0) {
	window.obj65350_onTap_runningActionsCount = 0;
} else if (window.obj65350_onTap_runningActionsCount == 0) {
	obj65350_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65364 
playPauseMovie_65352();
function playPauseMovie_65352() {
	window.obj65350_onTap_runningActionsCount = obj65350_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65364")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65350_onTap_runningActionsCount = window.obj65350_onTap_runningActionsCount - 1;
if (window.obj65350_onTap_runningActionsCount < 0) {
	window.obj65350_onTap_runningActionsCount = 0;
} else if (window.obj65350_onTap_runningActionsCount == 0) {
	obj65350_onTap_actionGroup1();
}
}

















};
obj65350_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65350_onTap_activeActionGroupIndex = -1;
		$("#obj65350").trigger("obj65350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65350) {
				console.warn("de-queueing event obj65350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65350_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65358
(function(){
	window.obj65350_onTap_runningActionsCount = obj65350_onTap_runningActionsCount + 1;

	var selector = "#obj65358";
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
					window.obj65350_onTap_runningActionsCount = window.obj65350_onTap_runningActionsCount - 1;
if (window.obj65350_onTap_runningActionsCount < 0) {
	window.obj65350_onTap_runningActionsCount = 0;
} else if (window.obj65350_onTap_runningActionsCount == 0) {
	obj65350_onTap_actionGroup2();
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
				window.obj65350_onTap_runningActionsCount = window.obj65350_onTap_runningActionsCount - 1;
if (window.obj65350_onTap_runningActionsCount < 0) {
	window.obj65350_onTap_runningActionsCount = 0;
} else if (window.obj65350_onTap_runningActionsCount == 0) {
	obj65350_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65350_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65350_onTap_activeActionGroupIndex = -1;
		$("#obj65350").trigger("obj65350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65350) {
				console.warn("de-queueing event obj65350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65350_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65364 
move_65355();
function move_65355() {
	window.obj65350_onTap_runningActionsCount = obj65350_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65364");
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
			window.obj65350_onTap_runningActionsCount = window.obj65350_onTap_runningActionsCount - 1;
if (window.obj65350_onTap_runningActionsCount < 0) {
	window.obj65350_onTap_runningActionsCount = 0;
} else if (window.obj65350_onTap_runningActionsCount == 0) {
	obj65350_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65350_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65350_onTap_activeActionGroupIndex = -1;
		$("#obj65350").trigger("obj65350_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65350) {
				console.warn("de-queueing event obj65350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65350_onTap_activeActionGroupIndex = 3;
	





















};
obj89812_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89812_onTap_activeActionGroupIndex = -1;
		$("#obj89812").trigger("obj89812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89812) {
				console.warn("de-queueing event obj89812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89812_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89817 
stopAudio_89814();
function stopAudio_89814() {
	window.obj89812_onTap_runningActionsCount = obj89812_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89817")[0];
	myAudio.pause();
	window.obj89812_onTap_runningActionsCount = window.obj89812_onTap_runningActionsCount - 1;
if (window.obj89812_onTap_runningActionsCount < 0) {
	window.obj89812_onTap_runningActionsCount = 0;
} else if (window.obj89812_onTap_runningActionsCount == 0) {
	obj89812_onTap_actionGroup1();
}
}








};
obj89812_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89812_onTap_activeActionGroupIndex = -1;
		$("#obj89812").trigger("obj89812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89812) {
				console.warn("de-queueing event obj89812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89812_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89812 
hide_89815();
function hide_89815() {
	var selector = "#obj89812";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89812_onTap_runningActionsCount = obj89812_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89812_onTap_runningActionsCount = window.obj89812_onTap_runningActionsCount - 1;
if (window.obj89812_onTap_runningActionsCount < 0) {
	window.obj89812_onTap_runningActionsCount = 0;
} else if (window.obj89812_onTap_runningActionsCount == 0) {
	obj89812_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89815(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89812_onTap_runningActionsCount = window.obj89812_onTap_runningActionsCount - 1;
if (window.obj89812_onTap_runningActionsCount < 0) {
	window.obj89812_onTap_runningActionsCount = 0;
} else if (window.obj89812_onTap_runningActionsCount == 0) {
	obj89812_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89812_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89812_onTap_activeActionGroupIndex = -1;
		$("#obj89812").trigger("obj89812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89812) {
				console.warn("de-queueing event obj89812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89812_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89807
(function(){
	window.obj89812_onTap_runningActionsCount = obj89812_onTap_runningActionsCount + 1;

	var selector = "#obj89807";
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
					window.obj89812_onTap_runningActionsCount = window.obj89812_onTap_runningActionsCount - 1;
if (window.obj89812_onTap_runningActionsCount < 0) {
	window.obj89812_onTap_runningActionsCount = 0;
} else if (window.obj89812_onTap_runningActionsCount == 0) {
	obj89812_onTap_actionGroup3();
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
				window.obj89812_onTap_runningActionsCount = window.obj89812_onTap_runningActionsCount - 1;
if (window.obj89812_onTap_runningActionsCount < 0) {
	window.obj89812_onTap_runningActionsCount = 0;
} else if (window.obj89812_onTap_runningActionsCount == 0) {
	obj89812_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89812_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89812_onTap_activeActionGroupIndex = -1;
		$("#obj89812").trigger("obj89812_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89812) {
				console.warn("de-queueing event obj89812." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89812").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89812_onTap_activeActionGroupIndex = 3;
	





















};
obj89807_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89807_onTap_activeActionGroupIndex = -1;
		$("#obj89807").trigger("obj89807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89807) {
				console.warn("de-queueing event obj89807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89807_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89807 
hide_89809();
function hide_89809() {
	var selector = "#obj89807";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89807_onTap_runningActionsCount = obj89807_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89807_onTap_runningActionsCount = window.obj89807_onTap_runningActionsCount - 1;
if (window.obj89807_onTap_runningActionsCount < 0) {
	window.obj89807_onTap_runningActionsCount = 0;
} else if (window.obj89807_onTap_runningActionsCount == 0) {
	obj89807_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89809(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89807_onTap_runningActionsCount = window.obj89807_onTap_runningActionsCount - 1;
if (window.obj89807_onTap_runningActionsCount < 0) {
	window.obj89807_onTap_runningActionsCount = 0;
} else if (window.obj89807_onTap_runningActionsCount == 0) {
	obj89807_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89807_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89807_onTap_activeActionGroupIndex = -1;
		$("#obj89807").trigger("obj89807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89807) {
				console.warn("de-queueing event obj89807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89807_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89812
(function(){
	window.obj89807_onTap_runningActionsCount = obj89807_onTap_runningActionsCount + 1;

	var selector = "#obj89812";
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
					window.obj89807_onTap_runningActionsCount = window.obj89807_onTap_runningActionsCount - 1;
if (window.obj89807_onTap_runningActionsCount < 0) {
	window.obj89807_onTap_runningActionsCount = 0;
} else if (window.obj89807_onTap_runningActionsCount == 0) {
	obj89807_onTap_actionGroup2();
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
				window.obj89807_onTap_runningActionsCount = window.obj89807_onTap_runningActionsCount - 1;
if (window.obj89807_onTap_runningActionsCount < 0) {
	window.obj89807_onTap_runningActionsCount = 0;
} else if (window.obj89807_onTap_runningActionsCount == 0) {
	obj89807_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89807_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89807_onTap_activeActionGroupIndex = -1;
		$("#obj89807").trigger("obj89807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89807) {
				console.warn("de-queueing event obj89807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89807_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89817 
playAudio_89811();
function playAudio_89811() {
	window.obj89807_onTap_runningActionsCount = obj89807_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89817")[0];
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
		    window.obj89807_onTap_runningActionsCount = window.obj89807_onTap_runningActionsCount - 1;
if (window.obj89807_onTap_runningActionsCount < 0) {
	window.obj89807_onTap_runningActionsCount = 0;
} else if (window.obj89807_onTap_runningActionsCount == 0) {
	obj89807_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89807_onTap_runningActionsCount = window.obj89807_onTap_runningActionsCount - 1;
if (window.obj89807_onTap_runningActionsCount < 0) {
	window.obj89807_onTap_runningActionsCount = 0;
} else if (window.obj89807_onTap_runningActionsCount == 0) {
	obj89807_onTap_actionGroup3();
}
	}
}









};
obj89807_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89807_onTap_activeActionGroupIndex = -1;
		$("#obj89807").trigger("obj89807_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89807) {
				console.warn("de-queueing event obj89807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89807_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj4164: Event Touch Down
 *
 */
$("#obj4164").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4164_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4164_onTap is still running");
	return;
}
var obj4164_onTap_runningActionsCount = 0;
var obj4164_onTap_loopCount = 0;
obj4164_onTap_actionGroup0();
});










/*
 *
 *   obj4161: Event Touch Down
 *
 */
$("#obj4161").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4161_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4161_onTap is still running");
	return;
}
var obj4161_onTap_runningActionsCount = 0;
var obj4161_onTap_loopCount = 0;
obj4161_onTap_actionGroup0();
});










/*
 *
 *   obj4167: Event Touch Down
 *
 */
$("#obj4167").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj4167_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4167_onTap is still running");
	return;
}
var obj4167_onTap_runningActionsCount = 0;
var obj4167_onTap_loopCount = 0;
obj4167_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj4345: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj4345");
	var winTarget = document.getElementById("obj4345");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj4345").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj4345_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj4345_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj4345_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4345_onTouchDown is still running");
	return;
}
var obj4345_onTouchDown_runningActionsCount = 0;
var obj4345_onTouchDown_loopCount = 0;
obj4345_onTouchDown_actionGroup0();
});



/*
 *
 *   obj4345: Event SCActionDragDrop4348_droppedOutsideTargetActions
 *
 */
$("#obj4345").bind("SCActionDragDrop4348_droppedOutsideTargetActions", function(event) {
	if (window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4345_SCActionDragDrop4348_droppedOutsideTargetActions is still running");
	return;
}
var obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_loopCount = 0;
obj4345_SCActionDragDrop4348_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj4345: Event droppedInsideTargetActions_4
 *
 */
$("#obj4345").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj4345_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4345_droppedInsideTargetActions_4 is still running");
	return;
}
var obj4345_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj4345_droppedInsideTargetActions_4_loopCount = 0;
obj4345_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj4345: Event droppedInsideTargetActions_3
 *
 */
$("#obj4345").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj4345_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4345_droppedInsideTargetActions_3 is still running");
	return;
}
var obj4345_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4345_droppedInsideTargetActions_3_loopCount = 0;
obj4345_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj4345: Event droppedInsideTargetActions_2
 *
 */
$("#obj4345").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj4345_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4345_droppedInsideTargetActions_2 is still running");
	return;
}
var obj4345_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4345_droppedInsideTargetActions_2_loopCount = 0;
obj4345_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj4345: Event droppedInsideTargetActions
 *
 */
$("#obj4345").bind("droppedInsideTargetActions", function(event) {
	if (window.obj4345_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4345_droppedInsideTargetActions is still running");
	return;
}
var obj4345_droppedInsideTargetActions_runningActionsCount = 0;
var obj4345_droppedInsideTargetActions_loopCount = 0;
obj4345_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj4292: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj4292");
	var winTarget = document.getElementById("obj4292");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj4292").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj4292_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj4292_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj4292_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4292_onTouchDown is still running");
	return;
}
var obj4292_onTouchDown_runningActionsCount = 0;
var obj4292_onTouchDown_loopCount = 0;
obj4292_onTouchDown_actionGroup0();
});



/*
 *
 *   obj4292: Event SCActionDragDrop4295_droppedOutsideTargetActions
 *
 */
$("#obj4292").bind("SCActionDragDrop4295_droppedOutsideTargetActions", function(event) {
	if (window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4292_SCActionDragDrop4295_droppedOutsideTargetActions is still running");
	return;
}
var obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_loopCount = 0;
obj4292_SCActionDragDrop4295_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj4292: Event droppedInsideTargetActions_4
 *
 */
$("#obj4292").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj4292_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4292_droppedInsideTargetActions_4 is still running");
	return;
}
var obj4292_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj4292_droppedInsideTargetActions_4_loopCount = 0;
obj4292_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj4292: Event droppedInsideTargetActions_3
 *
 */
$("#obj4292").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj4292_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4292_droppedInsideTargetActions_3 is still running");
	return;
}
var obj4292_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4292_droppedInsideTargetActions_3_loopCount = 0;
obj4292_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj4292: Event droppedInsideTargetActions_2
 *
 */
$("#obj4292").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj4292_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4292_droppedInsideTargetActions_2 is still running");
	return;
}
var obj4292_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4292_droppedInsideTargetActions_2_loopCount = 0;
obj4292_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj4292: Event droppedInsideTargetActions
 *
 */
$("#obj4292").bind("droppedInsideTargetActions", function(event) {
	if (window.obj4292_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4292_droppedInsideTargetActions is still running");
	return;
}
var obj4292_droppedInsideTargetActions_runningActionsCount = 0;
var obj4292_droppedInsideTargetActions_loopCount = 0;
obj4292_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj4239: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj4239");
	var winTarget = document.getElementById("obj4239");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj4239").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj4239_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj4239_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj4239_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4239_onTouchDown is still running");
	return;
}
var obj4239_onTouchDown_runningActionsCount = 0;
var obj4239_onTouchDown_loopCount = 0;
obj4239_onTouchDown_actionGroup0();
});



/*
 *
 *   obj4239: Event SCActionDragDrop4242_droppedOutsideTargetActions
 *
 */
$("#obj4239").bind("SCActionDragDrop4242_droppedOutsideTargetActions", function(event) {
	if (window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4239_SCActionDragDrop4242_droppedOutsideTargetActions is still running");
	return;
}
var obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_loopCount = 0;
obj4239_SCActionDragDrop4242_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj4239: Event droppedInsideTargetActions_4
 *
 */
$("#obj4239").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj4239_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4239_droppedInsideTargetActions_4 is still running");
	return;
}
var obj4239_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj4239_droppedInsideTargetActions_4_loopCount = 0;
obj4239_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj4239: Event droppedInsideTargetActions_3
 *
 */
$("#obj4239").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj4239_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4239_droppedInsideTargetActions_3 is still running");
	return;
}
var obj4239_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4239_droppedInsideTargetActions_3_loopCount = 0;
obj4239_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj4239: Event droppedInsideTargetActions_2
 *
 */
$("#obj4239").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj4239_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4239_droppedInsideTargetActions_2 is still running");
	return;
}
var obj4239_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4239_droppedInsideTargetActions_2_loopCount = 0;
obj4239_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj4239: Event droppedInsideTargetActions
 *
 */
$("#obj4239").bind("droppedInsideTargetActions", function(event) {
	if (window.obj4239_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4239_droppedInsideTargetActions is still running");
	return;
}
var obj4239_droppedInsideTargetActions_runningActionsCount = 0;
var obj4239_droppedInsideTargetActions_loopCount = 0;
obj4239_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj4186: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj4186");
	var winTarget = document.getElementById("obj4186");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj4186").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj4186_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj4186_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj4186_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4186_onTouchDown is still running");
	return;
}
var obj4186_onTouchDown_runningActionsCount = 0;
var obj4186_onTouchDown_loopCount = 0;
obj4186_onTouchDown_actionGroup0();
});



/*
 *
 *   obj4186: Event SCActionDragDrop4189_droppedOutsideTargetActions
 *
 */
$("#obj4186").bind("SCActionDragDrop4189_droppedOutsideTargetActions", function(event) {
	if (window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4186_SCActionDragDrop4189_droppedOutsideTargetActions is still running");
	return;
}
var obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_runningActionsCount = 0;
var obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_loopCount = 0;
obj4186_SCActionDragDrop4189_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj4186: Event droppedInsideTargetActions_4
 *
 */
$("#obj4186").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj4186_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4186_droppedInsideTargetActions_4 is still running");
	return;
}
var obj4186_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj4186_droppedInsideTargetActions_4_loopCount = 0;
obj4186_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj4186: Event droppedInsideTargetActions_3
 *
 */
$("#obj4186").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj4186_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4186_droppedInsideTargetActions_3 is still running");
	return;
}
var obj4186_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj4186_droppedInsideTargetActions_3_loopCount = 0;
obj4186_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj4186: Event droppedInsideTargetActions_2
 *
 */
$("#obj4186").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj4186_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4186_droppedInsideTargetActions_2 is still running");
	return;
}
var obj4186_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj4186_droppedInsideTargetActions_2_loopCount = 0;
obj4186_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj4186: Event droppedInsideTargetActions
 *
 */
$("#obj4186").bind("droppedInsideTargetActions", function(event) {
	if (window.obj4186_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj4186_droppedInsideTargetActions is still running");
	return;
}
var obj4186_droppedInsideTargetActions_runningActionsCount = 0;
var obj4186_droppedInsideTargetActions_loopCount = 0;
obj4186_droppedInsideTargetActions_actionGroup0();
});



































/*
 *
 *   obj65358: Event Touch Down
 *
 */
$("#obj65358").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65358_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65358_onTap is still running");
	return;
}
var obj65358_onTap_runningActionsCount = 0;
var obj65358_onTap_loopCount = 0;
obj65358_onTap_actionGroup0();
});










/*
 *
 *   obj65350: Event Touch Down
 *
 */
$("#obj65350").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65350_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65350_onTap is still running");
	return;
}
var obj65350_onTap_runningActionsCount = 0;
var obj65350_onTap_loopCount = 0;
obj65350_onTap_actionGroup0();
});










/*
 *
 *   obj89812: Event Touch Down
 *
 */
$("#obj89812").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89812_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89812_onTap is still running");
	return;
}
var obj89812_onTap_runningActionsCount = 0;
var obj89812_onTap_loopCount = 0;
obj89812_onTap_actionGroup0();
});










/*
 *
 *   obj89807: Event Touch Down
 *
 */
$("#obj89807").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89807_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89807_onTap is still running");
	return;
}
var obj89807_onTap_runningActionsCount = 0;
var obj89807_onTap_loopCount = 0;
obj89807_onTap_actionGroup0();
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
	
$("#obj4159").trigger('SCEventShow');
$("#obj4164").trigger('SCEventShow');
$("#obj4161").trigger('SCEventShow');
$("#obj4167").trigger('SCEventShow');
$("#obj4430").trigger('SCEventShow');
$("#obj4424").trigger('SCEventShow');
$("#obj4428").trigger('SCEventShow');
$("#obj4426").trigger('SCEventShow');
$("#obj4184").trigger('SCEventShow');
$("#obj4408").trigger('SCEventShow');
$("#obj4410").trigger('SCEventShow');
$("#obj4412").trigger('SCEventShow');
$("#obj4414").trigger('SCEventShow');
$("#obj4406").trigger('SCEventShow');
$("#obj4404").trigger('SCEventShow');
$("#obj4402").trigger('SCEventShow');
$("#obj4400").trigger('SCEventShow');
$("#obj4422").trigger('SCEventShow');
$("#obj4420").trigger('SCEventShow');
$("#obj4418").trigger('SCEventShow');
$("#obj4416").trigger('SCEventShow');
$("#obj4398").trigger('SCEventShow');
$("#obj4345").trigger('SCEventShow');
$("#obj4292").trigger('SCEventShow');
$("#obj4239").trigger('SCEventShow');
$("#obj4186").trigger('SCEventShow');
$("#obj4432").trigger('SCEventShow');
$("#obj4433").trigger('SCEventShow');
$("#obj4442").trigger('SCEventShow');
$("#obj65358").trigger('SCEventShow');
$("#obj65350").trigger('SCEventShow');
$("#obj89812").trigger('SCEventShow');
$("#obj89807").trigger('SCEventShow');
$("#obj89817").trigger('SCEventShow');
$("#obj94679").trigger('SCEventShow');
$("#obj65364").trigger('SCEventShow');
	
});