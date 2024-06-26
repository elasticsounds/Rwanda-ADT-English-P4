pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 47282;
pubcoder.page.title = pubcoder.page.title || "168";
pubcoder.page.number = pubcoder.page.number || 168;
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
var obj47527_onTap_activeActionGroupIndex = -1;
var obj47527_onTap_runningActionsCount = 0;
var obj47527_onTap_loopCount = 0;
var obj47524_onTap_activeActionGroupIndex = -1;
var obj47524_onTap_runningActionsCount = 0;
var obj47524_onTap_loopCount = 0;
var obj47520_onTap_activeActionGroupIndex = -1;
var obj47520_onTap_runningActionsCount = 0;
var obj47520_onTap_loopCount = 0;
var obj47417_onDrag_activeActionGroupIndex = -1;
var obj47417_onDrag_runningActionsCount = 0;
var obj47417_onDrag_loopCount = 0;
var obj47417_onTouchDown_activeActionGroupIndex = -1;
var obj47417_onTouchDown_runningActionsCount = 0;
var obj47417_onTouchDown_loopCount = 0;
var obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_loopCount = 0;
var obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47417_droppedInsideTargetActions_3_loopCount = 0;
var obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47417_droppedInsideTargetActions_2_loopCount = 0;
var obj47417_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj47417_droppedInsideTargetActions_runningActionsCount = 0;
var obj47417_droppedInsideTargetActions_loopCount = 0;
var obj47350_onDrag_activeActionGroupIndex = -1;
var obj47350_onDrag_runningActionsCount = 0;
var obj47350_onDrag_loopCount = 0;
var obj47350_onTouchDown_activeActionGroupIndex = -1;
var obj47350_onTouchDown_runningActionsCount = 0;
var obj47350_onTouchDown_loopCount = 0;
var obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_loopCount = 0;
var obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47350_droppedInsideTargetActions_3_loopCount = 0;
var obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47350_droppedInsideTargetActions_2_loopCount = 0;
var obj47350_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj47350_droppedInsideTargetActions_runningActionsCount = 0;
var obj47350_droppedInsideTargetActions_loopCount = 0;
var obj47283_onDrag_activeActionGroupIndex = -1;
var obj47283_onDrag_runningActionsCount = 0;
var obj47283_onDrag_loopCount = 0;
var obj47283_onTouchDown_activeActionGroupIndex = -1;
var obj47283_onTouchDown_runningActionsCount = 0;
var obj47283_onTouchDown_loopCount = 0;
var obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_loopCount = 0;
var obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47283_droppedInsideTargetActions_3_loopCount = 0;
var obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47283_droppedInsideTargetActions_2_loopCount = 0;
var obj47283_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj47283_droppedInsideTargetActions_runningActionsCount = 0;
var obj47283_droppedInsideTargetActions_loopCount = 0;
var obj67694_onTap_activeActionGroupIndex = -1;
var obj67694_onTap_runningActionsCount = 0;
var obj67694_onTap_loopCount = 0;
var obj67686_onTap_activeActionGroupIndex = -1;
var obj67686_onTap_runningActionsCount = 0;
var obj67686_onTap_loopCount = 0;
var obj88897_onTap_activeActionGroupIndex = -1;
var obj88897_onTap_runningActionsCount = 0;
var obj88897_onTap_loopCount = 0;
var obj88892_onTap_activeActionGroupIndex = -1;
var obj88892_onTap_runningActionsCount = 0;
var obj88892_onTap_loopCount = 0;
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
		
obj47527_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47527_onTap_activeActionGroupIndex = -1;
		$("#obj47527").trigger("obj47527_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47527) {
				console.warn("de-queueing event obj47527." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47527").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47527_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47529();
function goToPage_47529() {
	window.obj47527_onTap_runningActionsCount = obj47527_onTap_runningActionsCount + 1;
	$("#anchor985")[0].click();
	window.obj47527_onTap_runningActionsCount = window.obj47527_onTap_runningActionsCount - 1;
if (window.obj47527_onTap_runningActionsCount < 0) {
	window.obj47527_onTap_runningActionsCount = 0;
} else if (window.obj47527_onTap_runningActionsCount == 0) {
	obj47527_onTap_actionGroup1();
}
}





















};
obj47527_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47527_onTap_activeActionGroupIndex = -1;
		$("#obj47527").trigger("obj47527_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47527) {
				console.warn("de-queueing event obj47527." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47527").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47527_onTap_activeActionGroupIndex = 1;
	





















};
obj47524_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47524_onTap_activeActionGroupIndex = -1;
		$("#obj47524").trigger("obj47524_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47524) {
				console.warn("de-queueing event obj47524." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47524").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47524_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47526();
function goToPage_47526() {
	window.obj47524_onTap_runningActionsCount = obj47524_onTap_runningActionsCount + 1;
	$("#anchor986")[0].click();
	window.obj47524_onTap_runningActionsCount = window.obj47524_onTap_runningActionsCount - 1;
if (window.obj47524_onTap_runningActionsCount < 0) {
	window.obj47524_onTap_runningActionsCount = 0;
} else if (window.obj47524_onTap_runningActionsCount == 0) {
	obj47524_onTap_actionGroup1();
}
}





















};
obj47524_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47524_onTap_activeActionGroupIndex = -1;
		$("#obj47524").trigger("obj47524_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47524) {
				console.warn("de-queueing event obj47524." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47524").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47524_onTap_activeActionGroupIndex = 1;
	





















};
obj47520_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47520_onTap_activeActionGroupIndex = -1;
		$("#obj47520").trigger("obj47520_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47520) {
				console.warn("de-queueing event obj47520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47520_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47522();
function goToPage_47522() {
	window.obj47520_onTap_runningActionsCount = obj47520_onTap_runningActionsCount + 1;
	$("#anchor987")[0].click();
	window.obj47520_onTap_runningActionsCount = window.obj47520_onTap_runningActionsCount - 1;
if (window.obj47520_onTap_runningActionsCount < 0) {
	window.obj47520_onTap_runningActionsCount = 0;
} else if (window.obj47520_onTap_runningActionsCount == 0) {
	obj47520_onTap_actionGroup1();
}
}





















};
obj47520_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47520_onTap_activeActionGroupIndex = -1;
		$("#obj47520").trigger("obj47520_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47520) {
				console.warn("de-queueing event obj47520." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47520").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47520_onTap_activeActionGroupIndex = 1;
	





















};
obj47417_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj47417");
//	action: dragDrop
//	target: obj47417 
dragDrop_47420();
function dragDrop_47420() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj47417_onTouchDown_runningActionsCount = obj47417_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj47417');
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
	  	containerNode = $('#obj47510');
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
    	window.obj47417_onTouchDown_runningActionsCount = window.obj47417_onTouchDown_runningActionsCount - 1;
if (window.obj47417_onTouchDown_runningActionsCount < 0) {
	window.obj47417_onTouchDown_runningActionsCount = 0;
} else if (window.obj47417_onTouchDown_runningActionsCount == 0) {
	obj47417_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj47506","#obj47504","#obj47502");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_47420 = false;
    	var dropped_id_47420;
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
					dropped_47420 = true;
					dropped_id_47420 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_47420) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj47417").trigger('SCActionDragDrop47420_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj47417_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47417_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj47417 
move_92719();
function move_92719() {
	window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_runningActionsCount = obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj47417");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 228;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_runningActionsCount = window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj47417_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47443();
function runjs_47443() {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47502").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47444();
function runjs_47444() {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47502").css("border-color", "#C00000"); $("#obj47502").css("border-width", "2px"); $("#obj47502").css("border-style", "solid"); $("#obj47502").css("border-radius", "10px"); $("#obj47502").css("-webkit-border-radius", "10px"); $("#obj47502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47496 
hide_47445();
function hide_47445() {
	var selector = "#obj47496";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47445(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47417_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47446();
function runjs_47446() {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47417").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_47447();
function switchText_47447() {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj47417_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj47417 
move_47448();
function move_47448() {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj47417");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 228;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj47417_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47449();
function runjs_47449() {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47502").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_47450();
function runjs_47450() {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47502").css("border-color", "#000000"); $("#obj47502").css("border-width", "1px"); $("#obj47502").css("border-style", "solid"); $("#obj47502").css("border-radius", "10px"); $("#obj47502").css("-webkit-border-radius", "10px"); $("#obj47502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj47496
(function(){
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj47496";
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
					window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47417_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_47452();
function runjs_47452() {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47417").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_47453();
function runjs_47453() {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47417").css("border-color", "rgba(0,0,0,0)"); $("#obj47417").css("border-width", "0px"); $("#obj47417").css("border-style", "solid"); $("#obj47417").css("border-radius", "10px"); $("#obj47417").css("-webkit-border-radius", "10px"); $("#obj47417").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj47488 
playAudio_47454();
function playAudio_47454() {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj47488")[0];
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
		    window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj47417_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_47455();
function switchText_47455() {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = obj47417_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47417_droppedInsideTargetActions_3_runningActionsCount = window.obj47417_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj47417_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj47417_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47429();
function runjs_47429() {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47504").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47430();
function runjs_47430() {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47504").css("border-color", "#C00000"); $("#obj47504").css("border-width", "2px"); $("#obj47504").css("border-style", "solid"); $("#obj47504").css("border-radius", "10px"); $("#obj47504").css("-webkit-border-radius", "10px"); $("#obj47504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47498 
hide_47431();
function hide_47431() {
	var selector = "#obj47498";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47431(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47417_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47432();
function runjs_47432() {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47417").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_47433();
function switchText_47433() {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj47417_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj47417 
move_47434();
function move_47434() {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj47417");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 228;
	var moveY = 591;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj47417_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47435();
function runjs_47435() {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47504").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_47436();
function runjs_47436() {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47504").css("border-color", "#000000"); $("#obj47504").css("border-width", "1px"); $("#obj47504").css("border-style", "solid"); $("#obj47504").css("border-radius", "10px"); $("#obj47504").css("-webkit-border-radius", "10px"); $("#obj47504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj47498
(function(){
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj47498";
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
					window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47417_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_47438();
function runjs_47438() {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47417").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_47439();
function runjs_47439() {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47417").css("border-color", "rgba(0,0,0,0)"); $("#obj47417").css("border-width", "0px"); $("#obj47417").css("border-style", "solid"); $("#obj47417").css("border-radius", "10px"); $("#obj47417").css("-webkit-border-radius", "10px"); $("#obj47417").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj47488 
playAudio_47440();
function playAudio_47440() {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj47488")[0];
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
		    window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj47417_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_47441();
function switchText_47441() {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = obj47417_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47417_droppedInsideTargetActions_2_runningActionsCount = window.obj47417_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj47417_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj47417_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47422();
function runjs_47422() {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = obj47417_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47506").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_runningActionsCount = window.obj47417_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47423();
function runjs_47423() {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = obj47417_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47506").css("border-color", "#058E3F"); $("#obj47506").css("border-width", "2px"); $("#obj47506").css("border-style", "solid"); $("#obj47506").css("border-radius", "10px"); $("#obj47506").css("-webkit-border-radius", "10px"); $("#obj47506").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_runningActionsCount = window.obj47417_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47500 
hide_47424();
function hide_47424() {
	var selector = "#obj47500";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47417_droppedInsideTargetActions_runningActionsCount = obj47417_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47417_droppedInsideTargetActions_runningActionsCount = window.obj47417_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47424(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47417_droppedInsideTargetActions_runningActionsCount = window.obj47417_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47417_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47425();
function runjs_47425() {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = obj47417_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47417").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47417_droppedInsideTargetActions_runningActionsCount = window.obj47417_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj47417_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_47426();
function switchText_47426() {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = obj47417_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47417_droppedInsideTargetActions_runningActionsCount = window.obj47417_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47417_droppedInsideTargetActions_runningActionsCount = window.obj47417_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj47417_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj47492 
playAudio_47427();
function playAudio_47427() {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = obj47417_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj47492")[0];
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
		    window.obj47417_droppedInsideTargetActions_runningActionsCount = window.obj47417_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47417_droppedInsideTargetActions_runningActionsCount = window.obj47417_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47417_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47417_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47417_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47417_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj47417_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47417").trigger("obj47417_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47417) {
				console.warn("de-queueing event obj47417." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47417").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47417_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj47350_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj47350");
//	action: dragDrop
//	target: obj47350 
dragDrop_47353();
function dragDrop_47353() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj47350_onTouchDown_runningActionsCount = obj47350_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj47350');
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
	  	containerNode = $('#obj47510');
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
    	window.obj47350_onTouchDown_runningActionsCount = window.obj47350_onTouchDown_runningActionsCount - 1;
if (window.obj47350_onTouchDown_runningActionsCount < 0) {
	window.obj47350_onTouchDown_runningActionsCount = 0;
} else if (window.obj47350_onTouchDown_runningActionsCount == 0) {
	obj47350_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj47504","#obj47506","#obj47502");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_47353 = false;
    	var dropped_id_47353;
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
					dropped_47353 = true;
					dropped_id_47353 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_47353) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj47350").trigger('SCActionDragDrop47353_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj47350_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47350_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj47350 
move_92721();
function move_92721() {
	window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_runningActionsCount = obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj47350");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 409;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_runningActionsCount = window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj47350_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47376();
function runjs_47376() {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47502").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47377();
function runjs_47377() {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47502").css("border-color", "#C00000"); $("#obj47502").css("border-width", "2px"); $("#obj47502").css("border-style", "solid"); $("#obj47502").css("border-radius", "10px"); $("#obj47502").css("-webkit-border-radius", "10px"); $("#obj47502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47496 
hide_47378();
function hide_47378() {
	var selector = "#obj47496";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47378(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47350_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47379();
function runjs_47379() {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47350").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_47380();
function switchText_47380() {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj47350_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj47350 
move_47381();
function move_47381() {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj47350");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 409;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj47350_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47382();
function runjs_47382() {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47502").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_47383();
function runjs_47383() {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47502").css("border-color", "#000000"); $("#obj47502").css("border-width", "1px"); $("#obj47502").css("border-style", "solid"); $("#obj47502").css("border-radius", "10px"); $("#obj47502").css("-webkit-border-radius", "10px"); $("#obj47502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj47496
(function(){
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj47496";
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
					window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47350_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_47385();
function runjs_47385() {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47350").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_47386();
function runjs_47386() {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47350").css("border-color", "rgba(0,0,0,0)"); $("#obj47350").css("border-width", "0px"); $("#obj47350").css("border-style", "solid"); $("#obj47350").css("border-radius", "10px"); $("#obj47350").css("-webkit-border-radius", "10px"); $("#obj47350").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj47488 
playAudio_47387();
function playAudio_47387() {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj47488")[0];
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
		    window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj47350_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_47388();
function switchText_47388() {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = obj47350_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47350_droppedInsideTargetActions_3_runningActionsCount = window.obj47350_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj47350_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj47350_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47362();
function runjs_47362() {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47506").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47363();
function runjs_47363() {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47506").css("border-color", "#C00000"); $("#obj47506").css("border-width", "2px"); $("#obj47506").css("border-style", "solid"); $("#obj47506").css("border-radius", "10px"); $("#obj47506").css("-webkit-border-radius", "10px"); $("#obj47506").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47500 
hide_47364();
function hide_47364() {
	var selector = "#obj47500";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47364(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47350_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47365();
function runjs_47365() {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47350").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_47366();
function switchText_47366() {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj47350_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj47350 
move_47367();
function move_47367() {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj47350");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 409;
	var moveY = 596;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj47350_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47368();
function runjs_47368() {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47506").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_47369();
function runjs_47369() {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47506").css("border-color", "#000000"); $("#obj47506").css("border-width", "1px"); $("#obj47506").css("border-style", "solid"); $("#obj47506").css("border-radius", "10px"); $("#obj47506").css("-webkit-border-radius", "10px"); $("#obj47506").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj47500
(function(){
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj47500";
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
					window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47350_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_47371();
function runjs_47371() {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47350").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_47372();
function runjs_47372() {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47350").css("border-color", "rgba(0,0,0,0)"); $("#obj47350").css("border-width", "0px"); $("#obj47350").css("border-style", "solid"); $("#obj47350").css("border-radius", "10px"); $("#obj47350").css("-webkit-border-radius", "10px"); $("#obj47350").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj47488 
playAudio_47373();
function playAudio_47373() {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj47488")[0];
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
		    window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj47350_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_47374();
function switchText_47374() {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = obj47350_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47350_droppedInsideTargetActions_2_runningActionsCount = window.obj47350_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj47350_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj47350_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47355();
function runjs_47355() {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = obj47350_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47504").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_runningActionsCount = window.obj47350_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47356();
function runjs_47356() {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = obj47350_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47504").css("border-color", "#058E3F"); $("#obj47504").css("border-width", "2px"); $("#obj47504").css("border-style", "solid"); $("#obj47504").css("border-radius", "10px"); $("#obj47504").css("-webkit-border-radius", "10px"); $("#obj47504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_runningActionsCount = window.obj47350_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47498 
hide_47357();
function hide_47357() {
	var selector = "#obj47498";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47350_droppedInsideTargetActions_runningActionsCount = obj47350_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47350_droppedInsideTargetActions_runningActionsCount = window.obj47350_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47357(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47350_droppedInsideTargetActions_runningActionsCount = window.obj47350_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47350_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47358();
function runjs_47358() {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = obj47350_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47350").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47350_droppedInsideTargetActions_runningActionsCount = window.obj47350_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj47350_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_47359();
function switchText_47359() {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = obj47350_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47350_droppedInsideTargetActions_runningActionsCount = window.obj47350_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47350_droppedInsideTargetActions_runningActionsCount = window.obj47350_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj47350_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj47492 
playAudio_47360();
function playAudio_47360() {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = obj47350_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj47492")[0];
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
		    window.obj47350_droppedInsideTargetActions_runningActionsCount = window.obj47350_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47350_droppedInsideTargetActions_runningActionsCount = window.obj47350_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47350_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47350_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47350_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47350_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj47350_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47350").trigger("obj47350_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47350) {
				console.warn("de-queueing event obj47350." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47350").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47350_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj47283_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj47283");
//	action: dragDrop
//	target: obj47283 
dragDrop_47286();
function dragDrop_47286() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj47283_onTouchDown_runningActionsCount = obj47283_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj47283');
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
	  	containerNode = $('#obj47510');
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
    	window.obj47283_onTouchDown_runningActionsCount = window.obj47283_onTouchDown_runningActionsCount - 1;
if (window.obj47283_onTouchDown_runningActionsCount < 0) {
	window.obj47283_onTouchDown_runningActionsCount = 0;
} else if (window.obj47283_onTouchDown_runningActionsCount == 0) {
	obj47283_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj47502","#obj47506","#obj47504");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_47286 = false;
    	var dropped_id_47286;
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
					dropped_47286 = true;
					dropped_id_47286 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_47286) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj47283").trigger('SCActionDragDrop47286_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj47283_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47283_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj47283 
move_92717();
function move_92717() {
	window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_runningActionsCount = obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj47283");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 45;
	var moveY = 598;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_runningActionsCount = window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj47283_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47309();
function runjs_47309() {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47504").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47310();
function runjs_47310() {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47504").css("border-color", "#C00000"); $("#obj47504").css("border-width", "2px"); $("#obj47504").css("border-style", "solid"); $("#obj47504").css("border-radius", "10px"); $("#obj47504").css("-webkit-border-radius", "10px"); $("#obj47504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47498 
hide_47311();
function hide_47311() {
	var selector = "#obj47498";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47311(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47283_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47312();
function runjs_47312() {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47283").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_47313();
function switchText_47313() {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj47283_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj47283 
move_47314();
function move_47314() {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj47283");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 45;
	var moveY = 598;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj47283_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47315();
function runjs_47315() {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47504").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_47316();
function runjs_47316() {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47504").css("border-color", "#000000"); $("#obj47504").css("border-width", "1px"); $("#obj47504").css("border-style", "solid"); $("#obj47504").css("border-radius", "10px"); $("#obj47504").css("-webkit-border-radius", "10px"); $("#obj47504").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj47498
(function(){
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj47498";
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
					window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47283_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_47318();
function runjs_47318() {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47283").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_47319();
function runjs_47319() {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47283").css("border-color", "rgba(0,0,0,0)"); $("#obj47283").css("border-width", "0px"); $("#obj47283").css("border-style", "solid"); $("#obj47283").css("border-radius", "10px"); $("#obj47283").css("-webkit-border-radius", "10px"); $("#obj47283").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj47488 
playAudio_47320();
function playAudio_47320() {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj47488")[0];
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
		    window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj47283_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_47321();
function switchText_47321() {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = obj47283_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47283_droppedInsideTargetActions_3_runningActionsCount = window.obj47283_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj47283_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj47283_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47295();
function runjs_47295() {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47506").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47296();
function runjs_47296() {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47506").css("border-color", "#C00000"); $("#obj47506").css("border-width", "2px"); $("#obj47506").css("border-style", "solid"); $("#obj47506").css("border-radius", "10px"); $("#obj47506").css("-webkit-border-radius", "10px"); $("#obj47506").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47500 
hide_47297();
function hide_47297() {
	var selector = "#obj47500";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47297(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47283_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47298();
function runjs_47298() {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47283").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_47299();
function switchText_47299() {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj47283_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj47283 
move_47300();
function move_47300() {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj47283");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 45;
	var moveY = 598;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj47283_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47301();
function runjs_47301() {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47506").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_47302();
function runjs_47302() {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47506").css("border-color", "#000000"); $("#obj47506").css("border-width", "1px"); $("#obj47506").css("border-style", "solid"); $("#obj47506").css("border-radius", "10px"); $("#obj47506").css("-webkit-border-radius", "10px"); $("#obj47506").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj47500
(function(){
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj47500";
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
					window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj47283_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_47304();
function runjs_47304() {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47283").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_47305();
function runjs_47305() {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47283").css("border-color", "rgba(0,0,0,0)"); $("#obj47283").css("border-width", "0px"); $("#obj47283").css("border-style", "solid"); $("#obj47283").css("border-radius", "10px"); $("#obj47283").css("-webkit-border-radius", "10px"); $("#obj47283").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj47488 
playAudio_47306();
function playAudio_47306() {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj47488")[0];
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
		    window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj47283_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_47307();
function switchText_47307() {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = obj47283_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47283_droppedInsideTargetActions_2_runningActionsCount = window.obj47283_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj47283_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj47283_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47288();
function runjs_47288() {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = obj47283_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47502").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_runningActionsCount = window.obj47283_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47289();
function runjs_47289() {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = obj47283_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47502").css("border-color", "#058E3F"); $("#obj47502").css("border-width", "2px"); $("#obj47502").css("border-style", "solid"); $("#obj47502").css("border-radius", "10px"); $("#obj47502").css("-webkit-border-radius", "10px"); $("#obj47502").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_runningActionsCount = window.obj47283_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47496 
hide_47290();
function hide_47290() {
	var selector = "#obj47496";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47283_droppedInsideTargetActions_runningActionsCount = obj47283_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47283_droppedInsideTargetActions_runningActionsCount = window.obj47283_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47290(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47283_droppedInsideTargetActions_runningActionsCount = window.obj47283_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47283_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_47291();
function runjs_47291() {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = obj47283_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47283").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47283_droppedInsideTargetActions_runningActionsCount = window.obj47283_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj47283_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_47292();
function switchText_47292() {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = obj47283_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47490_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47490_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47490").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47490_content");
			setTimeout(function () {
				window.obj47283_droppedInsideTargetActions_runningActionsCount = window.obj47283_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj47490 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47283_droppedInsideTargetActions_runningActionsCount = window.obj47283_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj47283_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj47492 
playAudio_47293();
function playAudio_47293() {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = obj47283_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj47492")[0];
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
		    window.obj47283_droppedInsideTargetActions_runningActionsCount = window.obj47283_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47283_droppedInsideTargetActions_runningActionsCount = window.obj47283_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47283_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47283_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47283_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47283_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj47283_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47283").trigger("obj47283_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47283) {
				console.warn("de-queueing event obj47283." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47283").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47283_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj67694_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67694_onTap_activeActionGroupIndex = -1;
		$("#obj67694").trigger("obj67694_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67694) {
				console.warn("de-queueing event obj67694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67694_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67694 
hide_67697();
function hide_67697() {
	var selector = "#obj67694";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67694_onTap_runningActionsCount = obj67694_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67694_onTap_runningActionsCount = window.obj67694_onTap_runningActionsCount - 1;
if (window.obj67694_onTap_runningActionsCount < 0) {
	window.obj67694_onTap_runningActionsCount = 0;
} else if (window.obj67694_onTap_runningActionsCount == 0) {
	obj67694_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67697(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67694_onTap_runningActionsCount = window.obj67694_onTap_runningActionsCount - 1;
if (window.obj67694_onTap_runningActionsCount < 0) {
	window.obj67694_onTap_runningActionsCount = 0;
} else if (window.obj67694_onTap_runningActionsCount == 0) {
	obj67694_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67700 
stopMovie_67696();
function stopMovie_67696() {
	window.obj67694_onTap_runningActionsCount = obj67694_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67700")[0];
	myVideo.pause();
	window.obj67694_onTap_runningActionsCount = window.obj67694_onTap_runningActionsCount - 1;
if (window.obj67694_onTap_runningActionsCount < 0) {
	window.obj67694_onTap_runningActionsCount = 0;
} else if (window.obj67694_onTap_runningActionsCount == 0) {
	obj67694_onTap_actionGroup1();
}
}
















};
obj67694_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67694_onTap_activeActionGroupIndex = -1;
		$("#obj67694").trigger("obj67694_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67694) {
				console.warn("de-queueing event obj67694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67694_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67686
(function(){
	window.obj67694_onTap_runningActionsCount = obj67694_onTap_runningActionsCount + 1;

	var selector = "#obj67686";
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
					window.obj67694_onTap_runningActionsCount = window.obj67694_onTap_runningActionsCount - 1;
if (window.obj67694_onTap_runningActionsCount < 0) {
	window.obj67694_onTap_runningActionsCount = 0;
} else if (window.obj67694_onTap_runningActionsCount == 0) {
	obj67694_onTap_actionGroup2();
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
				window.obj67694_onTap_runningActionsCount = window.obj67694_onTap_runningActionsCount - 1;
if (window.obj67694_onTap_runningActionsCount < 0) {
	window.obj67694_onTap_runningActionsCount = 0;
} else if (window.obj67694_onTap_runningActionsCount == 0) {
	obj67694_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67694_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67694_onTap_activeActionGroupIndex = -1;
		$("#obj67694").trigger("obj67694_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67694) {
				console.warn("de-queueing event obj67694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67694_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67700 
move_67699();
function move_67699() {
	window.obj67694_onTap_runningActionsCount = obj67694_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67700");
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
			window.obj67694_onTap_runningActionsCount = window.obj67694_onTap_runningActionsCount - 1;
if (window.obj67694_onTap_runningActionsCount < 0) {
	window.obj67694_onTap_runningActionsCount = 0;
} else if (window.obj67694_onTap_runningActionsCount == 0) {
	obj67694_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67694_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67694_onTap_activeActionGroupIndex = -1;
		$("#obj67694").trigger("obj67694_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67694) {
				console.warn("de-queueing event obj67694." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67694").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67694_onTap_activeActionGroupIndex = 3;
	





















};
obj67686_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67686_onTap_activeActionGroupIndex = -1;
		$("#obj67686").trigger("obj67686_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67686) {
				console.warn("de-queueing event obj67686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67686_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67686 
hide_67689();
function hide_67689() {
	var selector = "#obj67686";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67686_onTap_runningActionsCount = obj67686_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67686_onTap_runningActionsCount = window.obj67686_onTap_runningActionsCount - 1;
if (window.obj67686_onTap_runningActionsCount < 0) {
	window.obj67686_onTap_runningActionsCount = 0;
} else if (window.obj67686_onTap_runningActionsCount == 0) {
	obj67686_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67689(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67686_onTap_runningActionsCount = window.obj67686_onTap_runningActionsCount - 1;
if (window.obj67686_onTap_runningActionsCount < 0) {
	window.obj67686_onTap_runningActionsCount = 0;
} else if (window.obj67686_onTap_runningActionsCount == 0) {
	obj67686_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67700 
playPauseMovie_67688();
function playPauseMovie_67688() {
	window.obj67686_onTap_runningActionsCount = obj67686_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67700")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67686_onTap_runningActionsCount = window.obj67686_onTap_runningActionsCount - 1;
if (window.obj67686_onTap_runningActionsCount < 0) {
	window.obj67686_onTap_runningActionsCount = 0;
} else if (window.obj67686_onTap_runningActionsCount == 0) {
	obj67686_onTap_actionGroup1();
}
}

















};
obj67686_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67686_onTap_activeActionGroupIndex = -1;
		$("#obj67686").trigger("obj67686_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67686) {
				console.warn("de-queueing event obj67686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67686_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67694
(function(){
	window.obj67686_onTap_runningActionsCount = obj67686_onTap_runningActionsCount + 1;

	var selector = "#obj67694";
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
					window.obj67686_onTap_runningActionsCount = window.obj67686_onTap_runningActionsCount - 1;
if (window.obj67686_onTap_runningActionsCount < 0) {
	window.obj67686_onTap_runningActionsCount = 0;
} else if (window.obj67686_onTap_runningActionsCount == 0) {
	obj67686_onTap_actionGroup2();
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
				window.obj67686_onTap_runningActionsCount = window.obj67686_onTap_runningActionsCount - 1;
if (window.obj67686_onTap_runningActionsCount < 0) {
	window.obj67686_onTap_runningActionsCount = 0;
} else if (window.obj67686_onTap_runningActionsCount == 0) {
	obj67686_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67686_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67686_onTap_activeActionGroupIndex = -1;
		$("#obj67686").trigger("obj67686_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67686) {
				console.warn("de-queueing event obj67686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67686_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67700 
move_67691();
function move_67691() {
	window.obj67686_onTap_runningActionsCount = obj67686_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67700");
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
			window.obj67686_onTap_runningActionsCount = window.obj67686_onTap_runningActionsCount - 1;
if (window.obj67686_onTap_runningActionsCount < 0) {
	window.obj67686_onTap_runningActionsCount = 0;
} else if (window.obj67686_onTap_runningActionsCount == 0) {
	obj67686_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67686_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67686_onTap_activeActionGroupIndex = -1;
		$("#obj67686").trigger("obj67686_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67686) {
				console.warn("de-queueing event obj67686." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67686").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67686_onTap_activeActionGroupIndex = 3;
	





















};
obj88897_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88897_onTap_activeActionGroupIndex = -1;
		$("#obj88897").trigger("obj88897_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88897) {
				console.warn("de-queueing event obj88897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88897_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88902 
stopAudio_88899();
function stopAudio_88899() {
	window.obj88897_onTap_runningActionsCount = obj88897_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88902")[0];
	myAudio.pause();
	window.obj88897_onTap_runningActionsCount = window.obj88897_onTap_runningActionsCount - 1;
if (window.obj88897_onTap_runningActionsCount < 0) {
	window.obj88897_onTap_runningActionsCount = 0;
} else if (window.obj88897_onTap_runningActionsCount == 0) {
	obj88897_onTap_actionGroup1();
}
}








};
obj88897_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88897_onTap_activeActionGroupIndex = -1;
		$("#obj88897").trigger("obj88897_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88897) {
				console.warn("de-queueing event obj88897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88897_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88897 
hide_88900();
function hide_88900() {
	var selector = "#obj88897";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88897_onTap_runningActionsCount = obj88897_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88897_onTap_runningActionsCount = window.obj88897_onTap_runningActionsCount - 1;
if (window.obj88897_onTap_runningActionsCount < 0) {
	window.obj88897_onTap_runningActionsCount = 0;
} else if (window.obj88897_onTap_runningActionsCount == 0) {
	obj88897_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88900(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88897_onTap_runningActionsCount = window.obj88897_onTap_runningActionsCount - 1;
if (window.obj88897_onTap_runningActionsCount < 0) {
	window.obj88897_onTap_runningActionsCount = 0;
} else if (window.obj88897_onTap_runningActionsCount == 0) {
	obj88897_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88897_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88897_onTap_activeActionGroupIndex = -1;
		$("#obj88897").trigger("obj88897_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88897) {
				console.warn("de-queueing event obj88897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88897_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88892
(function(){
	window.obj88897_onTap_runningActionsCount = obj88897_onTap_runningActionsCount + 1;

	var selector = "#obj88892";
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
					window.obj88897_onTap_runningActionsCount = window.obj88897_onTap_runningActionsCount - 1;
if (window.obj88897_onTap_runningActionsCount < 0) {
	window.obj88897_onTap_runningActionsCount = 0;
} else if (window.obj88897_onTap_runningActionsCount == 0) {
	obj88897_onTap_actionGroup3();
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
				window.obj88897_onTap_runningActionsCount = window.obj88897_onTap_runningActionsCount - 1;
if (window.obj88897_onTap_runningActionsCount < 0) {
	window.obj88897_onTap_runningActionsCount = 0;
} else if (window.obj88897_onTap_runningActionsCount == 0) {
	obj88897_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88897_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88897_onTap_activeActionGroupIndex = -1;
		$("#obj88897").trigger("obj88897_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88897) {
				console.warn("de-queueing event obj88897." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88897").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88897_onTap_activeActionGroupIndex = 3;
	





















};
obj88892_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88892_onTap_activeActionGroupIndex = -1;
		$("#obj88892").trigger("obj88892_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88892) {
				console.warn("de-queueing event obj88892." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88892").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88892_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88892 
hide_88894();
function hide_88894() {
	var selector = "#obj88892";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88892_onTap_runningActionsCount = obj88892_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88892_onTap_runningActionsCount = window.obj88892_onTap_runningActionsCount - 1;
if (window.obj88892_onTap_runningActionsCount < 0) {
	window.obj88892_onTap_runningActionsCount = 0;
} else if (window.obj88892_onTap_runningActionsCount == 0) {
	obj88892_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88894(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88892_onTap_runningActionsCount = window.obj88892_onTap_runningActionsCount - 1;
if (window.obj88892_onTap_runningActionsCount < 0) {
	window.obj88892_onTap_runningActionsCount = 0;
} else if (window.obj88892_onTap_runningActionsCount == 0) {
	obj88892_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88892_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88892_onTap_activeActionGroupIndex = -1;
		$("#obj88892").trigger("obj88892_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88892) {
				console.warn("de-queueing event obj88892." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88892").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88892_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88897
(function(){
	window.obj88892_onTap_runningActionsCount = obj88892_onTap_runningActionsCount + 1;

	var selector = "#obj88897";
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
					window.obj88892_onTap_runningActionsCount = window.obj88892_onTap_runningActionsCount - 1;
if (window.obj88892_onTap_runningActionsCount < 0) {
	window.obj88892_onTap_runningActionsCount = 0;
} else if (window.obj88892_onTap_runningActionsCount == 0) {
	obj88892_onTap_actionGroup2();
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
				window.obj88892_onTap_runningActionsCount = window.obj88892_onTap_runningActionsCount - 1;
if (window.obj88892_onTap_runningActionsCount < 0) {
	window.obj88892_onTap_runningActionsCount = 0;
} else if (window.obj88892_onTap_runningActionsCount == 0) {
	obj88892_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88892_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88892_onTap_activeActionGroupIndex = -1;
		$("#obj88892").trigger("obj88892_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88892) {
				console.warn("de-queueing event obj88892." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88892").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88892_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88902 
playAudio_88896();
function playAudio_88896() {
	window.obj88892_onTap_runningActionsCount = obj88892_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88902")[0];
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
		    window.obj88892_onTap_runningActionsCount = window.obj88892_onTap_runningActionsCount - 1;
if (window.obj88892_onTap_runningActionsCount < 0) {
	window.obj88892_onTap_runningActionsCount = 0;
} else if (window.obj88892_onTap_runningActionsCount == 0) {
	obj88892_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88892_onTap_runningActionsCount = window.obj88892_onTap_runningActionsCount - 1;
if (window.obj88892_onTap_runningActionsCount < 0) {
	window.obj88892_onTap_runningActionsCount = 0;
} else if (window.obj88892_onTap_runningActionsCount == 0) {
	obj88892_onTap_actionGroup3();
}
	}
}









};
obj88892_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88892_onTap_activeActionGroupIndex = -1;
		$("#obj88892").trigger("obj88892_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88892) {
				console.warn("de-queueing event obj88892." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88892").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88892_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj47527: Event Touch Down
 *
 */
$("#obj47527").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47527_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47527_onTap is still running");
	return;
}
var obj47527_onTap_runningActionsCount = 0;
var obj47527_onTap_loopCount = 0;
obj47527_onTap_actionGroup0();
});










/*
 *
 *   obj47524: Event Touch Down
 *
 */
$("#obj47524").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47524_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47524_onTap is still running");
	return;
}
var obj47524_onTap_runningActionsCount = 0;
var obj47524_onTap_loopCount = 0;
obj47524_onTap_actionGroup0();
});










/*
 *
 *   obj47520: Event Touch Down
 *
 */
$("#obj47520").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47520_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47520_onTap is still running");
	return;
}
var obj47520_onTap_runningActionsCount = 0;
var obj47520_onTap_loopCount = 0;
obj47520_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj47417: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj47417");
	var winTarget = document.getElementById("obj47417");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj47417").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj47417_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj47417_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj47417_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47417_onTouchDown is still running");
	return;
}
var obj47417_onTouchDown_runningActionsCount = 0;
var obj47417_onTouchDown_loopCount = 0;
obj47417_onTouchDown_actionGroup0();
});



/*
 *
 *   obj47417: Event SCActionDragDrop47420_droppedOutsideTargetActions
 *
 */
$("#obj47417").bind("SCActionDragDrop47420_droppedOutsideTargetActions", function(event) {
	if (window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47417_SCActionDragDrop47420_droppedOutsideTargetActions is still running");
	return;
}
var obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_loopCount = 0;
obj47417_SCActionDragDrop47420_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj47417: Event droppedInsideTargetActions_3
 *
 */
$("#obj47417").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj47417_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47417_droppedInsideTargetActions_3 is still running");
	return;
}
var obj47417_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47417_droppedInsideTargetActions_3_loopCount = 0;
obj47417_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj47417: Event droppedInsideTargetActions_2
 *
 */
$("#obj47417").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj47417_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47417_droppedInsideTargetActions_2 is still running");
	return;
}
var obj47417_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47417_droppedInsideTargetActions_2_loopCount = 0;
obj47417_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj47417: Event droppedInsideTargetActions
 *
 */
$("#obj47417").bind("droppedInsideTargetActions", function(event) {
	if (window.obj47417_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47417_droppedInsideTargetActions is still running");
	return;
}
var obj47417_droppedInsideTargetActions_runningActionsCount = 0;
var obj47417_droppedInsideTargetActions_loopCount = 0;
obj47417_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj47350: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj47350");
	var winTarget = document.getElementById("obj47350");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj47350").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj47350_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj47350_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj47350_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47350_onTouchDown is still running");
	return;
}
var obj47350_onTouchDown_runningActionsCount = 0;
var obj47350_onTouchDown_loopCount = 0;
obj47350_onTouchDown_actionGroup0();
});



/*
 *
 *   obj47350: Event SCActionDragDrop47353_droppedOutsideTargetActions
 *
 */
$("#obj47350").bind("SCActionDragDrop47353_droppedOutsideTargetActions", function(event) {
	if (window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47350_SCActionDragDrop47353_droppedOutsideTargetActions is still running");
	return;
}
var obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_loopCount = 0;
obj47350_SCActionDragDrop47353_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj47350: Event droppedInsideTargetActions_3
 *
 */
$("#obj47350").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj47350_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47350_droppedInsideTargetActions_3 is still running");
	return;
}
var obj47350_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47350_droppedInsideTargetActions_3_loopCount = 0;
obj47350_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj47350: Event droppedInsideTargetActions_2
 *
 */
$("#obj47350").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj47350_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47350_droppedInsideTargetActions_2 is still running");
	return;
}
var obj47350_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47350_droppedInsideTargetActions_2_loopCount = 0;
obj47350_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj47350: Event droppedInsideTargetActions
 *
 */
$("#obj47350").bind("droppedInsideTargetActions", function(event) {
	if (window.obj47350_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47350_droppedInsideTargetActions is still running");
	return;
}
var obj47350_droppedInsideTargetActions_runningActionsCount = 0;
var obj47350_droppedInsideTargetActions_loopCount = 0;
obj47350_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj47283: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj47283");
	var winTarget = document.getElementById("obj47283");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj47283").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj47283_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj47283_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj47283_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47283_onTouchDown is still running");
	return;
}
var obj47283_onTouchDown_runningActionsCount = 0;
var obj47283_onTouchDown_loopCount = 0;
obj47283_onTouchDown_actionGroup0();
});



/*
 *
 *   obj47283: Event SCActionDragDrop47286_droppedOutsideTargetActions
 *
 */
$("#obj47283").bind("SCActionDragDrop47286_droppedOutsideTargetActions", function(event) {
	if (window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47283_SCActionDragDrop47286_droppedOutsideTargetActions is still running");
	return;
}
var obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_loopCount = 0;
obj47283_SCActionDragDrop47286_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj47283: Event droppedInsideTargetActions_3
 *
 */
$("#obj47283").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj47283_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47283_droppedInsideTargetActions_3 is still running");
	return;
}
var obj47283_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47283_droppedInsideTargetActions_3_loopCount = 0;
obj47283_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj47283: Event droppedInsideTargetActions_2
 *
 */
$("#obj47283").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj47283_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47283_droppedInsideTargetActions_2 is still running");
	return;
}
var obj47283_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47283_droppedInsideTargetActions_2_loopCount = 0;
obj47283_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj47283: Event droppedInsideTargetActions
 *
 */
$("#obj47283").bind("droppedInsideTargetActions", function(event) {
	if (window.obj47283_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47283_droppedInsideTargetActions is still running");
	return;
}
var obj47283_droppedInsideTargetActions_runningActionsCount = 0;
var obj47283_droppedInsideTargetActions_loopCount = 0;
obj47283_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67694: Event Touch Down
 *
 */
$("#obj67694").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67694_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67694_onTap is still running");
	return;
}
var obj67694_onTap_runningActionsCount = 0;
var obj67694_onTap_loopCount = 0;
obj67694_onTap_actionGroup0();
});










/*
 *
 *   obj67686: Event Touch Down
 *
 */
$("#obj67686").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67686_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67686_onTap is still running");
	return;
}
var obj67686_onTap_runningActionsCount = 0;
var obj67686_onTap_loopCount = 0;
obj67686_onTap_actionGroup0();
});










/*
 *
 *   obj88897: Event Touch Down
 *
 */
$("#obj88897").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88897_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88897_onTap is still running");
	return;
}
var obj88897_onTap_runningActionsCount = 0;
var obj88897_onTap_loopCount = 0;
obj88897_onTap_actionGroup0();
});










/*
 *
 *   obj88892: Event Touch Down
 *
 */
$("#obj88892").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88892_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88892_onTap is still running");
	return;
}
var obj88892_onTap_runningActionsCount = 0;
var obj88892_onTap_loopCount = 0;
obj88892_onTap_actionGroup0();
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
	
$("#obj47543").trigger('SCEventShow');
$("#obj47527").trigger('SCEventShow');
$("#obj47524").trigger('SCEventShow');
$("#obj47520").trigger('SCEventShow');
$("#obj47518").trigger('SCEventShow');
$("#obj47516").trigger('SCEventShow');
$("#obj47514").trigger('SCEventShow');
$("#obj47512").trigger('SCEventShow');
$("#obj47510").trigger('SCEventShow');
$("#obj47508").trigger('SCEventShow');
$("#obj47506").trigger('SCEventShow');
$("#obj47504").trigger('SCEventShow');
$("#obj47502").trigger('SCEventShow');
$("#obj47500").trigger('SCEventShow');
$("#obj47498").trigger('SCEventShow');
$("#obj47496").trigger('SCEventShow');
$("#obj47494").trigger('SCEventShow');
$("#obj47492").trigger('SCEventShow');
$("#obj47490").trigger('SCEventShow');
$("#obj47488").trigger('SCEventShow');
$("#obj47486").trigger('SCEventShow');
$("#obj47484").trigger('SCEventShow');
$("#obj47417").trigger('SCEventShow');
$("#obj47350").trigger('SCEventShow');
$("#obj47283").trigger('SCEventShow');
$("#obj67694").trigger('SCEventShow');
$("#obj67686").trigger('SCEventShow');
$("#obj88897").trigger('SCEventShow');
$("#obj88892").trigger('SCEventShow');
$("#obj88902").trigger('SCEventShow');
$("#obj94965").trigger('SCEventShow');
$("#obj67700").trigger('SCEventShow');
	
});